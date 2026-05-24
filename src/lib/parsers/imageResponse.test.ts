import { describe, it, expect } from "vitest";
import {
  parseGeminiImageResponse,
  formatImagePrompt,
  formatImageAnalysis,
  formatLegacyImagePrompt,
  formatLegacyImageAnalysis,
} from "./imageResponse";
import type {
  StructuredImagePromptResponse,
  GeminiImagePromptResponse,
} from "../types";

function makeStructuredResponse(
  overrides?: Partial<StructuredImagePromptResponse>
): StructuredImagePromptResponse {
  return {
    image_archetype: { primary_type: "photograph", visual_medium: "digital" },
    subjects: [{ name: "cat", category: "animal" }],
    composition: { shot_type: "close-up" },
    lighting_and_color: { light_direction: "top", dominant_colors: ["blue"] },
    imperfections: { noise_or_grain: "low" },
    shortPrompt: "A cat photo",
    detailedPrompt: "A detailed cat photo description",
    negativePrompt: "blurry",
    ...overrides,
  };
}

function makeLegacyResponse(
  overrides?: Partial<GeminiImagePromptResponse>
): GeminiImagePromptResponse {
  return {
    analysis: {
      subject: "cat",
      scene: "indoor",
      composition: "centered",
      style: "realistic",
      lighting: "natural",
      colorPalette: "warm",
      mood: "calm",
      details: "soft fur",
      medium: "photograph",
      keywords: ["cat", "indoor"],
    },
    shortPrompt: "A cat",
    detailedPrompt: "A detailed cat",
    imagePrompt: "image prompt: A cat in a room",
    ...overrides,
  };
}

describe("parseGeminiImageResponse - structured format (image_archetype)", () => {
  it("解析包含 image_archetype 的结构化响应", () => {
    const rawText = JSON.stringify(makeStructuredResponse());
    const result = parseGeminiImageResponse(rawText);
    expect(result.imageSummary).toBe("A cat photo");
    expect(result.promptResult).toBeDefined();
    expect("image_archetype" in result.promptResult).toBe(true);
  });

  it("修剪 shortPrompt 和 detailedPrompt 的空白", () => {
    const response = makeStructuredResponse({
      shortPrompt: "  padded  ",
      detailedPrompt: "  detailed  ",
    });
    const rawText = JSON.stringify(response);
    const result = parseGeminiImageResponse(rawText);
    expect(result.imageSummary).toBe("padded");
  });

  it("shortPrompt 和 detailedPrompt 都为空时抛出 E3 错误", () => {
    const response = makeStructuredResponse({
      shortPrompt: "",
      detailedPrompt: "",
    });
    const rawText = JSON.stringify(response);
    expect(() => parseGeminiImageResponse(rawText)).toThrow(/E3/);
  });
});

describe("parseGeminiImageResponse - global_overview format", () => {
  it("解析包含 global_overview 的旧版结构化响应", () => {
    const response = {
      global_overview: { primary_type: "photograph" },
      all_subjects_and_objects: [{ name: "dog" }],
      composition_and_camera: { shot_type: "wide" },
      light_and_color: { light_direction: "side" },
      details_and_imperfections: { noise_or_grain: "medium" },
      shortPrompt: "A dog photo",
      detailedPrompt: "A detailed dog",
      negativePrompt: "ugly",
    };
    const rawText = JSON.stringify(response);
    const result = parseGeminiImageResponse(rawText);
    expect(result.imageSummary).toBe("A dog photo");
    expect("image_archetype" in result.promptResult).toBe(true);
  });
});

describe("parseGeminiImageResponse - legacy format (analysis)", () => {
  it("解析包含 analysis 的旧版响应", () => {
    const rawText = JSON.stringify(makeLegacyResponse());
    const result = parseGeminiImageResponse(rawText);
    expect(result.imageSummary).toBe("A cat");
    expect("analysis" in result.promptResult).toBe(true);
  });

  it("analysis.subject 为空时抛出 E4 错误", () => {
    const response = makeLegacyResponse({
      analysis: {
        ...makeLegacyResponse().analysis,
        subject: "",
      },
    });
    const rawText = JSON.stringify(response);
    expect(() => parseGeminiImageResponse(rawText)).toThrow(/E4/);
  });

  it("imagePrompt 为空时抛出 E4 错误", () => {
    const response = makeLegacyResponse({ imagePrompt: "" });
    const rawText = JSON.stringify(response);
    expect(() => parseGeminiImageResponse(rawText)).toThrow(/E4/);
  });

  it("过滤 analysis.keywords 中的空字符串", () => {
    const response = makeLegacyResponse({
      analysis: {
        ...makeLegacyResponse().analysis,
        keywords: ["cat", "", "  ", "indoor"],
      },
    });
    const rawText = JSON.stringify(response);
    const result = parseGeminiImageResponse(rawText);
    const legacy = result.promptResult as GeminiImagePromptResponse;
    expect(legacy.analysis.keywords).toEqual(["cat", "indoor"]);
  });
});

describe("parseGeminiImageResponse - negativePrompt fallback", () => {
  it("解析包含 negativePrompt 但无 image_archetype 的响应", () => {
    const response = {
      analysis: { primary_type: "photo", visual_medium: "digital" },
      shortPrompt: "A landscape",
      detailedPrompt: "A detailed landscape",
      negativePrompt: "blurry",
    };
    const rawText = JSON.stringify(response);
    const result = parseGeminiImageResponse(rawText);
    expect(result.imageSummary).toBe("A landscape");
  });
});

describe("parseGeminiImageResponse - nested analysis unwrapping", () => {
  it("解包嵌套的 analysis 对象（当 analysis 包含 image_archetype）", () => {
    const response = {
      analysis: {
        image_archetype: { primary_type: "illustration" },
        subjects: [],
        composition: {},
        lighting_and_color: {},
        imperfections: {},
        shortPrompt: "An illustration",
        detailedPrompt: "Detailed illustration",
        negativePrompt: "",
      },
      shortPrompt: "Outer short",
      detailedPrompt: "Outer detailed",
    };
    const rawText = JSON.stringify(response);
    const result = parseGeminiImageResponse(rawText);
    expect(result.imageSummary).toBe("Outer short");
  });
});

describe("formatImagePrompt", () => {
  it("格式化结构化响应的 detailedPrompt", () => {
    const promptResult = makeStructuredResponse();
    expect(formatImagePrompt(promptResult)).toBe(
      "A detailed cat photo description"
    );
  });

  it("去除 image prompt: 前缀", () => {
    const promptResult = makeStructuredResponse({
      detailedPrompt: "Image Prompt: a beautiful scene",
    });
    expect(formatImagePrompt(promptResult)).toBe("a beautiful scene");
  });

  it("格式化旧版响应的 imagePrompt", () => {
    const promptResult = makeLegacyResponse();
    expect(formatImagePrompt(promptResult)).toBe("A cat in a room");
  });
});

describe("formatImageAnalysis", () => {
  it("返回 JSON 字符串", () => {
    const promptResult = makeStructuredResponse();
    const result = formatImageAnalysis(promptResult);
    expect(() => JSON.parse(result)).not.toThrow();
  });
});

describe("formatLegacyImagePrompt", () => {
  it("去除 prompt 前缀", () => {
    const promptResult = makeLegacyResponse({
      imagePrompt: "Prompt: a scene",
    });
    expect(formatLegacyImagePrompt(promptResult)).toBe("a scene");
  });
});

describe("formatLegacyImageAnalysis", () => {
  it("返回 JSON 字符串", () => {
    const promptResult = makeLegacyResponse();
    const result = formatLegacyImageAnalysis(promptResult);
    expect(() => JSON.parse(result)).not.toThrow();
  });
});
