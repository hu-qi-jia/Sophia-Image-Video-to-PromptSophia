import { parseGeminiJson } from "./jsonRepair";
import type {
  StructuredImagePromptResponse,
  GeminiImagePromptResponse,
} from "../types";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function safeTrim(value: unknown): string {
  return String(value ?? "").trim();
}

function stripPromptLabel(value: string): string {
  return value
    .replace(
      /^(?:image\s+prompt|final\s+prompt|prompt|detailed\s+prompt|short\s+prompt)\s*:\s*/i,
      ""
    )
    .trim();
}

function normalizeStructuredImageResponse(
  response: StructuredImagePromptResponse
): StructuredImagePromptResponse {
  const stringModules = [
    "image_archetype",
    "composition",
    "imperfections",
  ] as const;
  for (const key of stringModules) {
    const source = response[key] as Record<string, unknown> | undefined;
    const target: Record<string, string> = {};
    if (source && typeof source === "object" && !Array.isArray(source)) {
      for (const [k, v] of Object.entries(source)) {
        target[k] = safeTrim(v);
      }
    }
    (response as Record<string, unknown>)[key] = target;
  }

  if (
    response.lighting_and_color &&
    typeof response.lighting_and_color === "object" &&
    !Array.isArray(response.lighting_and_color)
  ) {
    const lc: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(response.lighting_and_color)) {
      lc[k] = Array.isArray(v)
        ? v.map((item: unknown) => safeTrim(item))
        : safeTrim(v);
    }
    response.lighting_and_color =
      lc as StructuredImagePromptResponse["lighting_and_color"];
  }

  response.subjects = Array.isArray(response.subjects)
    ? response.subjects
    : [];

  response.shortPrompt = safeTrim(response.shortPrompt);
  response.detailedPrompt = safeTrim(response.detailedPrompt);
  response.negativePrompt = safeTrim(response.negativePrompt);

  if (
    !isNonEmptyString(response.shortPrompt) &&
    !isNonEmptyString(response.detailedPrompt)
  ) {
    throw new Error("模型返回了无效的响应格式，请重试。(E3)");
  }

  return response;
}

function normalizeLegacyImageResponse(
  response: GeminiImagePromptResponse
): GeminiImagePromptResponse {
  const keywords = Array.isArray(response.analysis?.keywords)
    ? response.analysis.keywords
        .filter(isNonEmptyString)
        .map((k) => k.trim())
        .filter(Boolean)
    : [];

  const normalized: GeminiImagePromptResponse = {
    analysis: {
      subject: response.analysis?.subject?.trim?.() ?? "",
      scene: response.analysis?.scene?.trim?.() ?? "",
      composition: response.analysis?.composition?.trim?.() ?? "",
      style: response.analysis?.style?.trim?.() ?? "",
      lighting: response.analysis?.lighting?.trim?.() ?? "",
      colorPalette: response.analysis?.colorPalette?.trim?.() ?? "",
      mood: response.analysis?.mood?.trim?.() ?? "",
      details: response.analysis?.details?.trim?.() ?? "",
      medium: response.analysis?.medium?.trim?.() ?? "",
      keywords,
    },
    shortPrompt: response.shortPrompt?.trim?.() ?? "",
    detailedPrompt: response.detailedPrompt?.trim?.() ?? "",
    imagePrompt: response.imagePrompt?.trim?.() ?? "",
  };

  const a = normalized.analysis;
  if (
    !isNonEmptyString(a.subject) ||
    !isNonEmptyString(a.scene) ||
    !isNonEmptyString(normalized.imagePrompt)
  ) {
    throw new Error("模型返回了无效的响应格式，请重试。(E4)");
  }

  return normalized;
}

export function parseGeminiImageResponse(rawText: string): {
  imageSummary: string;
  generatedPrompt: string;
  rawResult: string;
  promptResult: StructuredImagePromptResponse | GeminiImagePromptResponse;
} {
  let parsed = parseGeminiJson<Record<string, unknown>>(rawText);

  if (
    parsed &&
    typeof parsed === "object" &&
    !("image_archetype" in parsed) &&
    !("global_overview" in parsed) &&
    "analysis" in parsed
  ) {
    const inner = (parsed as Record<string, unknown>).analysis;
    if (
      inner &&
      typeof inner === "object" &&
      !Array.isArray(inner) &&
      ("image_archetype" in inner || "global_overview" in inner)
    ) {
      parsed = {
        ...(inner as Record<string, unknown>),
        shortPrompt:
          (parsed as Record<string, unknown>).shortPrompt ??
          (inner as Record<string, unknown>).shortPrompt,
        detailedPrompt:
          (parsed as Record<string, unknown>).detailedPrompt ??
          (inner as Record<string, unknown>).detailedPrompt,
        negativePrompt:
          (parsed as Record<string, unknown>).negativePrompt ??
          (inner as Record<string, unknown>).negativePrompt,
      };
    }
  }

  if (parsed && typeof parsed === "object" && "image_archetype" in parsed) {
    const promptResult = normalizeStructuredImageResponse(
      parsed as unknown as StructuredImagePromptResponse
    );
    return {
      imageSummary: promptResult.shortPrompt,
      generatedPrompt: JSON.stringify(promptResult, null, 2),
      rawResult: JSON.stringify(promptResult, null, 2),
      promptResult,
    };
  }

  if (parsed && typeof parsed === "object" && "global_overview" in parsed) {
    const old = parsed as Record<string, unknown>;
    const promptResult = normalizeStructuredImageResponse({
      image_archetype:
        (old.global_overview as Record<string, string>) ?? {},
      subjects: Array.isArray(old.all_subjects_and_objects)
        ? old.all_subjects_and_objects
        : [],
      composition:
        (old.composition_and_camera as Record<string, string>) ?? {},
      lighting_and_color:
        (old.light_and_color as Record<string, unknown>) ?? {},
      imperfections:
        (old.details_and_imperfections as Record<string, string>) ?? {},
      shortPrompt: String(old.shortPrompt ?? ""),
      detailedPrompt: String(old.detailedPrompt ?? ""),
      negativePrompt: String(old.negativePrompt ?? ""),
    } as unknown as StructuredImagePromptResponse);
    return {
      imageSummary: promptResult.shortPrompt,
      generatedPrompt: JSON.stringify(promptResult, null, 2),
      rawResult: JSON.stringify(promptResult, null, 2),
      promptResult,
    };
  }

  if (parsed && typeof parsed === "object" && "negativePrompt" in parsed) {
    const legacy = parsed as Record<string, unknown>;
    const promptResult = normalizeStructuredImageResponse({
      image_archetype: (legacy.analysis as Record<string, string>) ?? {},
      subjects: [],
      composition: {},
      lighting_and_color: {},
      imperfections: {},
      shortPrompt: String(legacy.shortPrompt ?? ""),
      detailedPrompt: String(legacy.detailedPrompt ?? ""),
      negativePrompt: String(legacy.negativePrompt ?? ""),
    } as unknown as StructuredImagePromptResponse);
    return {
      imageSummary: promptResult.shortPrompt,
      generatedPrompt: JSON.stringify(promptResult, null, 2),
      rawResult: JSON.stringify(promptResult, null, 2),
      promptResult,
    };
  }

  const promptResult = normalizeLegacyImageResponse(
    parsed as unknown as GeminiImagePromptResponse
  );
  return {
    imageSummary: promptResult.shortPrompt,
    generatedPrompt: JSON.stringify(promptResult, null, 2),
    rawResult: JSON.stringify(promptResult, null, 2),
    promptResult,
  };
}

export function formatImagePrompt(
  promptResult: GeminiImagePromptResponse | StructuredImagePromptResponse
): string {
  if ("image_archetype" in promptResult) {
    return stripPromptLabel(promptResult.detailedPrompt);
  }
  return stripPromptLabel(promptResult.imagePrompt);
}

export function formatImageAnalysis(
  promptResult: GeminiImagePromptResponse | StructuredImagePromptResponse
): string {
  return JSON.stringify(promptResult, null, 2);
}

export function formatLegacyImagePrompt(
  promptResult: GeminiImagePromptResponse
): string {
  return stripPromptLabel(promptResult.imagePrompt);
}

export function formatLegacyImageAnalysis(
  promptResult: GeminiImagePromptResponse
): string {
  return JSON.stringify(promptResult, null, 2);
}
