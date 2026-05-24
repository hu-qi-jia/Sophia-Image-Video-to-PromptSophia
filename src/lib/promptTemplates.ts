import {
  GEMINI_IMAGE_RESPONSE_SCHEMA,
  buildGeminiImageInstruction
} from "./prompts/image";
import {
  GEMINI_VIDEO_RESPONSE_SCHEMA,
  buildGeminiVideoInstruction,
  getTargetModelLabel
} from "./prompts/video";
import type {
  StructuredImagePromptResponse,
  GeminiImagePromptResponse,
  GeminiPromptResponse,
  GeminiVideoPromptResponse
} from "./types";

export {
  GEMINI_IMAGE_RESPONSE_SCHEMA,
  GEMINI_VIDEO_RESPONSE_SCHEMA,
  buildGeminiImageInstruction,
  buildGeminiVideoInstruction,
  getTargetModelLabel
};

function extractJsonSubstring(rawText: string): string | null {
  const start = rawText.indexOf("{");
  if (start === -1) return null;

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = start; index < rawText.length; index += 1) {
    const char = rawText[index];

    if (inString) {
      if (escaped) { escaped = false; } else if (char === "\\") { escaped = true; } else if (char === "\"") { inString = false; }
      continue;
    }

    if (char === "\"") { inString = true; continue; }

    if (char === "{") { depth += 1; } else if (char === "}") {
      depth -= 1;
      if (depth === 0) return rawText.slice(start, index + 1);
    }
  }

  return null;
}

function repairTruncatedJson(text: string): string | null {
  const start = text.indexOf("{");
  if (start === -1) return null;

  const stack: string[] = [];
  let inString = false;
  let escaped = false;
  let lastStringStart = -1;

  for (let i = start; i < text.length; i++) {
    const ch = text[i];

    if (inString) {
      if (escaped) { escaped = false; } else if (ch === "\\") { escaped = true; } else if (ch === '"') { inString = false; }
      continue;
    }

    if (ch === '"') { inString = true; lastStringStart = i; continue; }

    if (ch === "{" || ch === "[") {
      stack.push(ch === "{" ? "}" : "]");
    } else if (ch === "}" || ch === "]") {
      if (stack.length > 0 && stack[stack.length - 1] === ch) {
        stack.pop();
      }
    }
  }

  let repaired = text;

  if (inString) {
    repaired += '"';
  }

  while (stack.length > 0) {
    repaired += stack.pop();
  }

  try {
    const extracted = extractJsonSubstring(repaired);
    if (extracted) {
      JSON.parse(extracted);
      return extracted;
    }
  } catch {
    // repair failed
  }

  return null;
}

function parseGeminiJson<T>(rawText: string): T {
  const trimmed = rawText.trim();

  try { return JSON.parse(trimmed) as T; } catch {
    const jsonSubstring = extractJsonSubstring(trimmed);
    if (!jsonSubstring) {
      const repaired = repairTruncatedJson(trimmed);
      if (repaired) {
        try { return JSON.parse(repaired) as T; } catch {
          // fall through to error
        }
      }
      const preview = rawText.slice(0, 300);
      const tail = rawText.slice(-200);
      console.error("[parseGeminiJson] No valid JSON found. Length:", rawText.length, "Head:", preview, "Tail:", tail);
      throw new Error(`模型返回JSON被截断或不完整。(E1) 长度:${rawText.length} 开头:${preview}... 结尾:...${tail}`);
    }
    try { return JSON.parse(jsonSubstring) as T; } catch {
      console.error("[parseGeminiJson] Invalid JSON substring:", jsonSubstring.slice(0, 500));
      throw new Error(`模型返回了无效JSON。(E2) 截取内容: ${jsonSubstring.slice(0, 200)}`);
    }
  }
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function stripPromptLabel(value: string): string {
  return value.replace(/^(?:image\s+prompt|final\s+prompt|prompt|detailed\s+prompt|short\s+prompt)\s*:\s*/i, "").trim();
}

// ── Video response normalization ────────────────────────────────────

function normalizeVideoResponse(response: GeminiVideoPromptResponse): GeminiVideoPromptResponse {
  const timeline = response.generatedPrompt?.timeline;
  const normalizedTimeline = Array.isArray(timeline)
    ? timeline
        .filter((item): item is { time: string; subject: string; action: string; setting: string; camera: string; mood: string; sound: string } =>
          !!item && typeof item === "object" &&
          isNonEmptyString((item as { time?: unknown }).time) &&
          isNonEmptyString((item as { subject?: unknown }).subject) &&
          isNonEmptyString((item as { action?: unknown }).action) &&
          isNonEmptyString((item as { setting?: unknown }).setting) &&
          isNonEmptyString((item as { camera?: unknown }).camera) &&
          isNonEmptyString((item as { mood?: unknown }).mood) &&
          isNonEmptyString((item as { sound?: unknown }).sound)
        )
        .map((item) => ({
          time: item.time.trim(), subject: item.subject.trim(), action: item.action.trim(),
          setting: item.setting.trim(), camera: item.camera.trim(), mood: item.mood.trim(), sound: item.sound.trim()
        }))
    : [];

  const consistencyConstraints = Array.isArray(response.generatedPrompt?.consistencyConstraints)
    ? response.generatedPrompt.consistencyConstraints.filter(isNonEmptyString).map((item) => item.trim()).filter(Boolean)
    : [];

  const normalized: GeminiVideoPromptResponse = {
    videoSummary: response.videoSummary?.trim?.() ?? "",
    targetModel: response.targetModel?.trim?.() ?? "",
    generatedPrompt: {
      globalStyle: response.generatedPrompt?.globalStyle?.trim?.() ?? "",
      timeline: normalizedTimeline,
      consistencyConstraints
    }
  };

  if (!isNonEmptyString(normalized.videoSummary) || !isNonEmptyString(normalized.targetModel) ||
      !isNonEmptyString(normalized.generatedPrompt.globalStyle) || normalizedTimeline.length === 0 || consistencyConstraints.length === 0) {
    throw new Error("模型返回了无效的响应格式，请重试。");
  }

  return normalized;
}

function safeTrim(value: unknown): string {
  return String(value ?? "").trim();
}

// ── Structured image response normalization ────────────────────────

function normalizeStructuredImageResponse(response: StructuredImagePromptResponse): StructuredImagePromptResponse {
  // Normalize string-valued object modules
  const stringModules = ["image_archetype", "composition", "imperfections"] as const;
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

  // Normalize lighting_and_color (mixed string and array values)
  if (response.lighting_and_color && typeof response.lighting_and_color === "object" && !Array.isArray(response.lighting_and_color)) {
    const lc: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(response.lighting_and_color)) {
      lc[k] = Array.isArray(v) ? v.map((item: unknown) => safeTrim(item)) : safeTrim(v);
    }
    response.lighting_and_color = lc as StructuredImagePromptResponse["lighting_and_color"];
  }

  // Ensure subjects is an array
  response.subjects = Array.isArray(response.subjects) ? response.subjects : [];

  response.shortPrompt = safeTrim(response.shortPrompt);
  response.detailedPrompt = safeTrim(response.detailedPrompt);
  response.negativePrompt = safeTrim(response.negativePrompt);

  if (!isNonEmptyString(response.shortPrompt) && !isNonEmptyString(response.detailedPrompt)) {
    console.error("[normalizeStructured] Both prompts empty. shortPrompt type:", typeof response.shortPrompt, "detailedPrompt type:", typeof response.detailedPrompt);
    throw new Error("模型返回了无效的响应格式，请重试。(E3)");
  }

  return response;
}

// ── Legacy image response normalization (for old history items) ─────

function normalizeLegacyImageResponse(response: GeminiImagePromptResponse): GeminiImagePromptResponse {
  const keywords = Array.isArray(response.analysis?.keywords)
    ? response.analysis.keywords.filter(isNonEmptyString).map((k) => k.trim()).filter(Boolean)
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
      keywords
    },
    shortPrompt: response.shortPrompt?.trim?.() ?? "",
    detailedPrompt: response.detailedPrompt?.trim?.() ?? "",
    imagePrompt: response.imagePrompt?.trim?.() ?? ""
  };

  const a = normalized.analysis;
  if (!isNonEmptyString(a.subject) || !isNonEmptyString(a.scene) || !isNonEmptyString(normalized.imagePrompt)) {
    console.error("[normalizeLegacy] Missing required fields. Has subject:", isNonEmptyString(a.subject), "Has scene:", isNonEmptyString(a.scene), "Has imagePrompt:", isNonEmptyString(normalized.imagePrompt));
    throw new Error("模型返回了无效的响应格式，请重试。(E4)");
  }

  return normalized;
}

// ── Formatting ─────────────────────────────────────────────────────

export function formatVideoPrompt(promptResult: GeminiVideoPromptResponse): string {
  return JSON.stringify(promptResult, null, 2);
}

function formatStructuredAnalysis(response: StructuredImagePromptResponse): string {
  return JSON.stringify(response, null, 2);
}

export function formatLegacyImagePrompt(promptResult: GeminiImagePromptResponse): string {
  return stripPromptLabel(promptResult.imagePrompt);
}

export function formatLegacyImageAnalysis(promptResult: GeminiImagePromptResponse): string {
  return JSON.stringify(promptResult, null, 2);
}

export function formatImagePrompt(promptResult: GeminiImagePromptResponse | StructuredImagePromptResponse): string {
  if ("image_archetype" in promptResult) {
    return stripPromptLabel(promptResult.detailedPrompt);
  }
  return stripPromptLabel(promptResult.imagePrompt);
}

export function formatImageAnalysis(promptResult: GeminiImagePromptResponse | StructuredImagePromptResponse): string {
  return JSON.stringify(promptResult, null, 2);
}

// ── Response parsers (used by API client) ───────────────────────────

export function parseGeminiVideoResponse(rawText: string): {
  videoSummary: string;
  generatedPrompt: string;
  rawResult: string;
  promptResult: GeminiVideoPromptResponse;
} {
  const promptResult = normalizeVideoResponse(parseGeminiJson<GeminiVideoPromptResponse>(rawText));
  return {
    videoSummary: promptResult.videoSummary,
    generatedPrompt: formatVideoPrompt(promptResult),
    rawResult: JSON.stringify(promptResult, null, 2),
    promptResult
  };
}

export function parseGeminiImageResponse(rawText: string): {
  imageSummary: string;
  generatedPrompt: string;
  rawResult: string;
  promptResult: StructuredImagePromptResponse | GeminiImagePromptResponse;
} {
  let parsed = parseGeminiJson<Record<string, unknown>>(rawText);

  console.log("[parseGeminiImage] Parsed top-level keys:", Object.keys(parsed as object));
  console.log("[parseGeminiImage] Has image_archetype:", "image_archetype" in (parsed as object));
  console.log("[parseGeminiImage] Has global_overview:", "global_overview" in (parsed as object));
  console.log("[parseGeminiImage] Has negativePrompt:", "negativePrompt" in (parsed as object));

  // If the LLM nested the modules inside an "analysis" wrapper, unwrap it
  if (parsed && typeof parsed === "object" && !("image_archetype" in parsed) && !("global_overview" in parsed) && "analysis" in parsed) {
    const inner = (parsed as Record<string, unknown>).analysis;
    if (inner && typeof inner === "object" && !Array.isArray(inner) && ("image_archetype" in inner || "global_overview" in inner)) {
      console.log("[parseGeminiImage] → unwrapping nested analysis");
      parsed = {
        ...(inner as Record<string, unknown>),
        shortPrompt: (parsed as Record<string, unknown>).shortPrompt ?? (inner as Record<string, unknown>).shortPrompt,
        detailedPrompt: (parsed as Record<string, unknown>).detailedPrompt ?? (inner as Record<string, unknown>).detailedPrompt,
        negativePrompt: (parsed as Record<string, unknown>).negativePrompt ?? (inner as Record<string, unknown>).negativePrompt
      };
    }
  }

  // Detect new structured format by presence of image_archetype (must check BEFORE negativePrompt)
  if (parsed && typeof parsed === "object" && "image_archetype" in parsed) {
    console.log("[parseGeminiImage] → new structured path");
    const promptResult = normalizeStructuredImageResponse(parsed as unknown as StructuredImagePromptResponse);
    return {
      imageSummary: promptResult.shortPrompt,
      generatedPrompt: formatImageAnalysis(promptResult),
      rawResult: JSON.stringify(promptResult, null, 2),
      promptResult
    };
  }

  // Detect old structured format by presence of global_overview (backward compat)
  if (parsed && typeof parsed === "object" && "global_overview" in parsed) {
    console.log("[parseGeminiImage] → old structured path");
    // Map old field names to new format
    const old = parsed as Record<string, unknown>;
    const promptResult = normalizeStructuredImageResponse({
      image_archetype: (old.global_overview as Record<string, string>) ?? {},
      subjects: Array.isArray(old.all_subjects_and_objects) ? old.all_subjects_and_objects : [],
      composition: (old.composition_and_camera as Record<string, string>) ?? {},
      lighting_and_color: (old.light_and_color as Record<string, unknown>) ?? {},
      imperfections: (old.details_and_imperfections as Record<string, string>) ?? {},
      shortPrompt: String(old.shortPrompt ?? ""),
      detailedPrompt: String(old.detailedPrompt ?? ""),
      negativePrompt: String(old.negativePrompt ?? "")
    } as unknown as StructuredImagePromptResponse);
    return {
      imageSummary: promptResult.shortPrompt,
      generatedPrompt: formatImageAnalysis(promptResult),
      rawResult: JSON.stringify(promptResult, null, 2),
      promptResult
    };
  }

  // Old skill format: negativePrompt at top level without image_archetype or global_overview
  if (parsed && typeof parsed === "object" && "negativePrompt" in parsed) {
    console.log("[parseGeminiImage] → legacy skill path");
    const legacy = parsed as Record<string, unknown>;
    const promptResult = normalizeStructuredImageResponse({
      image_archetype: (legacy.analysis as Record<string, string>) ?? {},
      subjects: [],
      composition: {},
      lighting_and_color: {},
      imperfections: {},
      shortPrompt: String(legacy.shortPrompt ?? ""),
      detailedPrompt: String(legacy.detailedPrompt ?? ""),
      negativePrompt: String(legacy.negativePrompt ?? "")
    } as unknown as StructuredImagePromptResponse);
    return {
      imageSummary: promptResult.shortPrompt,
      generatedPrompt: formatImageAnalysis(promptResult),
      rawResult: JSON.stringify(promptResult, null, 2),
      promptResult
    };
  }

  // Fall back to legacy format
  console.log("[parseGeminiImage] → legacy fallback path");
  const promptResult = normalizeLegacyImageResponse(parsed as unknown as GeminiImagePromptResponse);
  return {
    imageSummary: promptResult.shortPrompt,
    generatedPrompt: formatLegacyImageAnalysis(promptResult),
    rawResult: JSON.stringify(promptResult, null, 2),
    promptResult
  };
}

export function parseGeminiResponse(rawText: string): {
  videoSummary: string;
  generatedPrompt: string;
  rawResult: string;
  promptResult: GeminiPromptResponse;
} {
  const result = parseGeminiVideoResponse(rawText);
  return { ...result, promptResult: result.promptResult };
}
