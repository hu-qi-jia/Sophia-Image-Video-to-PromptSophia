// src/lib/types.ts
var TARGET_MODELS = [
  { id: "seedance-2.0", label: "Seedance 2.0" },
  { id: "generic-ai-video", label: "\u5176\u4ED6" }
];
var DEFAULT_TARGET_MODEL = "seedance-2.0";
var DEFAULT_FRAME_SAMPLING_MODE = "standard";
var DEFAULT_PROMPT_FORMAT = "json";

// src/lib/prompts/image.ts
function targetModelLabel(targetModel) {
  return TARGET_MODELS.find((model) => model.id === targetModel)?.label ?? targetModel;
}
function buildGeminiImageInstruction(targetModel, imageInfo) {
  const modelLabel = targetModelLabel(targetModel);
  return `You are a professional visual reverse-engineering system. Analyze the image and output structured JSON for accurate image recreation.

## Core Rules
- Detect the IMAGE DOMAIN first: photo, CGI render, illustration, UI, poster, product shot, meme, scan, screenshot, concept art, etc.
- Focus only on visually dominant elements (max 3-6 subjects)
- Use observable physical descriptions only \u2014 avoid emotion, symbolism, storytelling, quality judgments
- Describe geometry, materials, surfaces, lighting behavior, spatial hierarchy, and camera properties
- Prioritize reconstruction fidelity over interpretation
- Ignore insignificant background clutter unless compositionally important
- Record visible defects, compression, motion blur, chromatic aberration, noise, or distortion if present

## Modules

### image_archetype
{ image_domain, visual_medium, style_category, scene_context }

### subjects (3-6 max)
Each:
{ name, category, physical_attributes, material, surface_texture, primary_colors, position, scale, orientation, interaction }

### composition
{ aspect_ratio, framing, camera_angle, focal_behavior, perspective_depth, layer_structure, negative_space, visual_focus }

### lighting_and_color
{ light_sources, light_quality, contrast_level, color_temperature, dominant_palette[], accent_palette[], reflections, shadow_behavior }

### imperfections
{ grain_or_noise, blur, compression_artifacts, distortions }

## Prompt Generation
- shortPrompt: one-line visual summary
- detailedPrompt:
  image domain \u2192 primary subjects \u2192 composition \u2192 spatial structure \u2192 materials/surfaces \u2192 lighting \u2192 color system \u2192 optical qualities \u2192 imperfections
- Use dense visual language optimized for image generation
- No markdown, explanations, opinions, or model parameters
- negativePrompt: visual traits, styles, objects, lighting, rendering artifacts, or compositions inconsistent with the image identity

## Output
Return valid JSON only.

{
  "image_archetype": {
    "image_domain": "...",
    "visual_medium": "...",
    "style_category": "...",
    "scene_context": "..."
  },
  "subjects": [
    {
      "name": "...",
      "category": "...",
      "physical_attributes": "...",
      "material": "...",
      "surface_texture": "...",
      "primary_colors": "...",
      "position": "...",
      "scale": "...",
      "orientation": "...",
      "interaction": "..."
    }
  ],
  "composition": {
    "aspect_ratio": "...",
    "framing": "...",
    "camera_angle": "...",
    "focal_behavior": "...",
    "perspective_depth": "...",
    "layer_structure": "...",
    "negative_space": "...",
    "visual_focus": "..."
  },
  "lighting_and_color": {
    "light_sources": "...",
    "light_quality": "...",
    "contrast_level": "...",
    "color_temperature": "...",
    "dominant_palette": ["..."],
    "accent_palette": ["..."],
    "reflections": "...",
    "shadow_behavior": "..."
  },
  "imperfections": {
    "grain_or_noise": "...",
    "blur": "...",
    "compression_artifacts": "...",
    "distortions": "..."
  },
  "shortPrompt": "...",
  "detailedPrompt": "...",
  "negativePrompt": "..."
}`;
}

// src/lib/promptTemplates.ts
function extractJsonSubstring(rawText) {
  const start = rawText.indexOf("{");
  if (start === -1) return null;
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let index = start; index < rawText.length; index += 1) {
    const char = rawText[index];
    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }
      continue;
    }
    if (char === '"') {
      inString = true;
      continue;
    }
    if (char === "{") {
      depth += 1;
    } else if (char === "}") {
      depth -= 1;
      if (depth === 0) return rawText.slice(start, index + 1);
    }
  }
  return null;
}
function repairTruncatedJson(text) {
  const start = text.indexOf("{");
  if (start === -1) return null;
  const stack = [];
  let inString = false;
  let escaped = false;
  let lastStringStart = -1;
  for (let i = start; i < text.length; i++) {
    const ch = text[i];
    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (ch === "\\") {
        escaped = true;
      } else if (ch === '"') {
        inString = false;
      }
      continue;
    }
    if (ch === '"') {
      inString = true;
      lastStringStart = i;
      continue;
    }
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
  }
  return null;
}
function parseGeminiJson(rawText) {
  const trimmed = rawText.trim();
  try {
    return JSON.parse(trimmed);
  } catch {
    const jsonSubstring = extractJsonSubstring(trimmed);
    if (!jsonSubstring) {
      const repaired = repairTruncatedJson(trimmed);
      if (repaired) {
        try {
          return JSON.parse(repaired);
        } catch {
        }
      }
      const preview = rawText.slice(0, 300);
      const tail = rawText.slice(-200);
      console.error("[parseGeminiJson] No valid JSON found. Length:", rawText.length, "Head:", preview, "Tail:", tail);
      throw new Error(`\u6A21\u578B\u8FD4\u56DEJSON\u88AB\u622A\u65AD\u6216\u4E0D\u5B8C\u6574\u3002(E1) \u957F\u5EA6:${rawText.length} \u5F00\u5934:${preview}... \u7ED3\u5C3E:...${tail}`);
    }
    try {
      return JSON.parse(jsonSubstring);
    } catch {
      console.error("[parseGeminiJson] Invalid JSON substring:", jsonSubstring.slice(0, 500));
      throw new Error(`\u6A21\u578B\u8FD4\u56DE\u4E86\u65E0\u6548JSON\u3002(E2) \u622A\u53D6\u5185\u5BB9: ${jsonSubstring.slice(0, 200)}`);
    }
  }
}
function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}
function safeTrim(value) {
  return String(value ?? "").trim();
}
function normalizeStructuredImageResponse(response) {
  const stringModules = ["image_archetype", "composition", "imperfections"];
  for (const key of stringModules) {
    const source = response[key];
    const target = {};
    if (source && typeof source === "object" && !Array.isArray(source)) {
      for (const [k, v] of Object.entries(source)) {
        target[k] = safeTrim(v);
      }
    }
    response[key] = target;
  }
  if (response.lighting_and_color && typeof response.lighting_and_color === "object" && !Array.isArray(response.lighting_and_color)) {
    const lc = {};
    for (const [k, v] of Object.entries(response.lighting_and_color)) {
      lc[k] = Array.isArray(v) ? v.map((item) => safeTrim(item)) : safeTrim(v);
    }
    response.lighting_and_color = lc;
  }
  response.subjects = Array.isArray(response.subjects) ? response.subjects : [];
  response.shortPrompt = safeTrim(response.shortPrompt);
  response.detailedPrompt = safeTrim(response.detailedPrompt);
  response.negativePrompt = safeTrim(response.negativePrompt);
  if (!isNonEmptyString(response.shortPrompt) && !isNonEmptyString(response.detailedPrompt)) {
    console.error("[normalizeStructured] Both prompts empty. shortPrompt type:", typeof response.shortPrompt, "detailedPrompt type:", typeof response.detailedPrompt);
    throw new Error("\u6A21\u578B\u8FD4\u56DE\u4E86\u65E0\u6548\u7684\u54CD\u5E94\u683C\u5F0F\uFF0C\u8BF7\u91CD\u8BD5\u3002(E3)");
  }
  return response;
}
function normalizeLegacyImageResponse(response) {
  const keywords = Array.isArray(response.analysis?.keywords) ? response.analysis.keywords.filter(isNonEmptyString).map((k) => k.trim()).filter(Boolean) : [];
  const normalized = {
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
    throw new Error("\u6A21\u578B\u8FD4\u56DE\u4E86\u65E0\u6548\u7684\u54CD\u5E94\u683C\u5F0F\uFF0C\u8BF7\u91CD\u8BD5\u3002(E4)");
  }
  return normalized;
}
function formatLegacyImageAnalysis(promptResult) {
  return JSON.stringify(promptResult, null, 2);
}
function formatImageAnalysis(promptResult) {
  return JSON.stringify(promptResult, null, 2);
}
function parseGeminiImageResponse(rawText) {
  let parsed = parseGeminiJson(rawText);
  console.log("[parseGeminiImage] Parsed top-level keys:", Object.keys(parsed));
  console.log("[parseGeminiImage] Has image_archetype:", "image_archetype" in parsed);
  console.log("[parseGeminiImage] Has global_overview:", "global_overview" in parsed);
  console.log("[parseGeminiImage] Has negativePrompt:", "negativePrompt" in parsed);
  if (parsed && typeof parsed === "object" && !("image_archetype" in parsed) && !("global_overview" in parsed) && "analysis" in parsed) {
    const inner = parsed.analysis;
    if (inner && typeof inner === "object" && !Array.isArray(inner) && ("image_archetype" in inner || "global_overview" in inner)) {
      console.log("[parseGeminiImage] \u2192 unwrapping nested analysis");
      parsed = {
        ...inner,
        shortPrompt: parsed.shortPrompt ?? inner.shortPrompt,
        detailedPrompt: parsed.detailedPrompt ?? inner.detailedPrompt,
        negativePrompt: parsed.negativePrompt ?? inner.negativePrompt
      };
    }
  }
  if (parsed && typeof parsed === "object" && "image_archetype" in parsed) {
    console.log("[parseGeminiImage] \u2192 new structured path");
    const promptResult2 = normalizeStructuredImageResponse(parsed);
    return {
      imageSummary: promptResult2.shortPrompt,
      generatedPrompt: formatImageAnalysis(promptResult2),
      rawResult: JSON.stringify(promptResult2, null, 2),
      promptResult: promptResult2
    };
  }
  if (parsed && typeof parsed === "object" && "global_overview" in parsed) {
    console.log("[parseGeminiImage] \u2192 old structured path");
    const old = parsed;
    const promptResult2 = normalizeStructuredImageResponse({
      image_archetype: old.global_overview ?? {},
      subjects: Array.isArray(old.all_subjects_and_objects) ? old.all_subjects_and_objects : [],
      composition: old.composition_and_camera ?? {},
      lighting_and_color: old.light_and_color ?? {},
      imperfections: old.details_and_imperfections ?? {},
      shortPrompt: String(old.shortPrompt ?? ""),
      detailedPrompt: String(old.detailedPrompt ?? ""),
      negativePrompt: String(old.negativePrompt ?? "")
    });
    return {
      imageSummary: promptResult2.shortPrompt,
      generatedPrompt: formatImageAnalysis(promptResult2),
      rawResult: JSON.stringify(promptResult2, null, 2),
      promptResult: promptResult2
    };
  }
  if (parsed && typeof parsed === "object" && "negativePrompt" in parsed) {
    console.log("[parseGeminiImage] \u2192 legacy skill path");
    const legacy = parsed;
    const promptResult2 = normalizeStructuredImageResponse({
      image_archetype: legacy.analysis ?? {},
      subjects: [],
      composition: {},
      lighting_and_color: {},
      imperfections: {},
      shortPrompt: String(legacy.shortPrompt ?? ""),
      detailedPrompt: String(legacy.detailedPrompt ?? ""),
      negativePrompt: String(legacy.negativePrompt ?? "")
    });
    return {
      imageSummary: promptResult2.shortPrompt,
      generatedPrompt: formatImageAnalysis(promptResult2),
      rawResult: JSON.stringify(promptResult2, null, 2),
      promptResult: promptResult2
    };
  }
  console.log("[parseGeminiImage] \u2192 legacy fallback path");
  const promptResult = normalizeLegacyImageResponse(parsed);
  return {
    imageSummary: promptResult.shortPrompt,
    generatedPrompt: formatLegacyImageAnalysis(promptResult),
    rawResult: JSON.stringify(promptResult, null, 2),
    promptResult
  };
}

// src/lib/imageUtils.ts
function scaleDimensions(width, height, maxSide) {
  const longestEdge = Math.max(width, height);
  if (longestEdge <= maxSide) {
    return { width, height };
  }
  const ratio = maxSide / longestEdge;
  return {
    width: Math.max(1, Math.round(width * ratio)),
    height: Math.max(1, Math.round(height * ratio))
  };
}
async function createImageElement(sourceUrl) {
  const image = new Image();
  image.src = sourceUrl;
  await new Promise((resolve, reject) => {
    image.onload = () => resolve();
    image.onerror = () => reject(new Error("\u65E0\u6CD5\u52A0\u8F7D\u56FE\u7247\u3002"));
  });
  return image;
}
async function resizeImageDataUrl(dataUrl, maxSide = 1536, quality = 0.7) {
  const img = await createImageElement(dataUrl);
  const { width, height } = scaleDimensions(img.naturalWidth, img.naturalHeight, maxSide);
  if (width === img.naturalWidth && height === img.naturalHeight) {
    return dataUrl;
  }
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return dataUrl;
  }
  ctx.drawImage(img, 0, 0, width, height);
  return canvas.toDataURL("image/jpeg", quality);
}
function base64FromBytes(bytes) {
  const chunkSize = 32768;
  let binary = "";
  for (let index = 0; index < bytes.length; index += chunkSize) {
    const slice = bytes.subarray(index, index + chunkSize);
    binary += String.fromCharCode(...slice);
  }
  return btoa(binary);
}
async function fetchImageAsDataUrl(imageUrl) {
  const response = await fetch(imageUrl);
  if (!response.ok) {
    throw new Error("\u65E0\u6CD5\u52A0\u8F7D\u6B64\u56FE\u7247\u8FDB\u884C\u5206\u6790\u3002");
  }
  const blob = await response.blob();
  const mimeType = blob.type || "image/jpeg";
  const arrayBuffer = await blob.arrayBuffer();
  const base64 = base64FromBytes(new Uint8Array(arrayBuffer));
  return `data:${mimeType};base64,${base64}`;
}

// src/lib/openaiClient.ts
function dataUrlToBase64(dataUrl) {
  const match = dataUrl.match(/^data:(.+?);base64,(.+)$/);
  if (!match) {
    throw new Error("\u4E0D\u652F\u6301\u7684\u5E27\u683C\u5F0F\u3002");
  }
  return {
    mimeType: match[1],
    base64: match[2]
  };
}
function readOpenAIError(payload) {
  if (payload && typeof payload === "object") {
    const obj = payload;
    if (obj.error && typeof obj.error === "object") {
      const err = obj.error;
      if (typeof err.message === "string") return err.message;
    }
    if (typeof obj.message === "string") return obj.message;
  }
  return null;
}
async function analyzeImageStream({
  apiKey,
  baseUrl,
  modelName,
  targetModel,
  imageDataUrl,
  imageInfo,
  signal,
  onProgress
}) {
  const endpoint = `${baseUrl}/chat/completions`;
  const instruction = buildGeminiImageInstruction(targetModel, imageInfo);
  const compressedDataUrl = await resizeImageDataUrl(imageDataUrl);
  const { mimeType, base64 } = dataUrlToBase64(compressedDataUrl);
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: modelName,
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: instruction },
            {
              type: "image_url",
              image_url: {
                url: `data:${mimeType};base64,${base64}`
              }
            }
          ]
        }
      ],
      temperature: 0.4,
      top_p: 0.9,
      max_tokens: 32768,
      stream: true
    }),
    signal
  });
  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(`API \u8BF7\u6C42\u5931\u8D25 (${response.status}): ${errorText.slice(0, 300)}`);
  }
  const reader = response.body?.getReader();
  if (!reader) {
    throw new Error("\u5F53\u524D API \u7AEF\u70B9\u4E0D\u652F\u6301\u6D41\u5F0F\u54CD\u5E94\uFF0C\u8BF7\u5728\u8BBE\u7F6E\u4E2D\u68C0\u67E5\u63A5\u53E3\u5730\u5740\u3002");
  }
  const decoder = new TextDecoder();
  let fullContent = "";
  let buffer = "";
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (signal?.aborted) {
        reader.releaseLock();
        throw new DOMException("Aborted", "AbortError");
      }
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith("data: ")) continue;
        const data = trimmed.slice(6);
        if (data === "[DONE]") continue;
        try {
          const chunk = JSON.parse(data);
          const apiError = readOpenAIError(chunk);
          if (apiError) {
            throw new Error(apiError);
          }
          const delta = chunk?.choices?.[0]?.delta?.content;
          if (typeof delta === "string") {
            fullContent += delta;
            onProgress?.(fullContent);
          }
        } catch (e) {
          if (e instanceof SyntaxError) continue;
          throw e;
        }
      }
    }
  } finally {
    reader.releaseLock();
  }
  if (!fullContent.trim()) {
    throw new Error("\u6A21\u578B\u672A\u8FD4\u56DE\u6709\u6548\u7684\u63D0\u793A\u8BCD\uFF0C\u8BF7\u91CD\u8BD5\u3002");
  }
  return parseGeminiImageResponse(fullContent);
}

// src/lib/aiClient.ts
async function analyzeImageStream2({
  apiKey,
  baseUrl,
  modelName,
  targetModel,
  imageDataUrl,
  imageInfo,
  signal,
  onProgress
}) {
  return analyzeImageStream({
    apiKey,
    baseUrl,
    modelName,
    targetModel,
    imageDataUrl,
    imageInfo,
    signal,
    onProgress
  });
}

// src/lib/storage.ts
var SETTINGS_KEY = "video2prompt:settings";
var ANALYSIS_KEY_PREFIX = "video2prompt:analysis:";
var defaultSettings = {
  apiKey: "",
  baseUrl: "https://api.openai.com/v1",
  modelName: "",
  targetModel: DEFAULT_TARGET_MODEL,
  frameSamplingMode: DEFAULT_FRAME_SAMPLING_MODE,
  promptFormat: DEFAULT_PROMPT_FORMAT
};
function normalizeTargetModel(value) {
  if (TARGET_MODELS.some((model) => model.id === value)) {
    return value;
  }
  if (value === "happyhorse-1.0") {
    return "generic-ai-video";
  }
  return DEFAULT_TARGET_MODEL;
}
function normalizePromptFormat(value) {
  if (value === "json") {
    return value;
  }
  return DEFAULT_PROMPT_FORMAT;
}
function normalizeFrameSamplingMode(value) {
  if (value === "fast" || value === "standard" || value === "detailed") {
    return value;
  }
  return DEFAULT_FRAME_SAMPLING_MODE;
}
function createAnalysisState(tabId, phase, statusText, targetModel, extras = {}) {
  return {
    tabId,
    phase,
    statusText,
    targetModel,
    updatedAt: Date.now(),
    ...extras
  };
}
async function getSettings() {
  const stored = await chrome.storage.local.get(SETTINGS_KEY);
  const raw = stored[SETTINGS_KEY];
  if (!raw) {
    return { ...defaultSettings };
  }
  const legacyApiKey = raw.openaiApiKey || raw.geminiApiKey || "";
  const legacyBaseUrl = raw.openaiBaseUrl || defaultSettings.baseUrl;
  return {
    apiKey: raw.apiKey ?? legacyApiKey,
    baseUrl: raw.baseUrl ?? legacyBaseUrl,
    modelName: raw.modelName ?? defaultSettings.modelName,
    targetModel: normalizeTargetModel(raw.targetModel),
    frameSamplingMode: normalizeFrameSamplingMode(raw.frameSamplingMode),
    promptFormat: normalizePromptFormat(raw.promptFormat)
  };
}
function analysisStorageKey(tabId) {
  return `${ANALYSIS_KEY_PREFIX}${tabId}`;
}
async function getAnalysisState(tabId) {
  const key = analysisStorageKey(tabId);
  const stored = await chrome.storage.local.get(key);
  return stored[key] ?? null;
}
async function saveAnalysisState(state) {
  if (state.tabId == null) {
    return;
  }
  await chrome.storage.local.set({
    [analysisStorageKey(state.tabId)]: state
  });
}
async function clearAnalysisState(tabId) {
  await chrome.storage.local.remove(analysisStorageKey(tabId));
}

// src/background/background.ts
var CONTEXT_MENU_ID = "analyze-image-to-prompt";
async function configureSidePanelBehavior() {
  await chrome.sidePanel.setPanelBehavior({
    openPanelOnActionClick: true
  });
}
async function createContextMenu() {
  await chrome.contextMenus.removeAll();
  chrome.contextMenus.create({
    id: CONTEXT_MENU_ID,
    title: "\u5206\u6790\u56FE\u7247\u751F\u6210\u63D0\u793A\u8BCD",
    contexts: ["image"]
  });
}
function toSerializableState(state) {
  return {
    ...state,
    updatedAt: Date.now()
  };
}
async function publishState(state) {
  const serializableState = toSerializableState(state);
  await saveAnalysisState(serializableState);
  try {
    await chrome.runtime.sendMessage({
      type: "VIDEO2PROMPT_ANALYSIS_STATE_UPDATED",
      state: serializableState
    });
  } catch {
  }
}
async function setState(tabId, phase, statusText, targetModel, extras = {}) {
  const state = createAnalysisState(tabId, phase, statusText, targetModel, extras);
  await publishState(state);
  return state;
}
async function getActiveTab() {
  const tabs = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  return tabs[0] ?? null;
}
function openSidePanelForTab(tabId) {
  chrome.sidePanel.open({ tabId }).catch((error) => {
    console.error("PromptLab failed to open side panel.", error);
  });
}
function buildWebImageInfo(imageUrl, tab) {
  return {
    found: true,
    src: imageUrl,
    pageTitle: tab?.title,
    pageUrl: tab?.url
  };
}
async function startWebImageAnalysis({
  tabId,
  imageUrl
}) {
  const activeTab = tabId ? await chrome.tabs.get(tabId).catch(() => null) : await getActiveTab();
  const resolvedTabId = activeTab?.id ?? null;
  const settings = await getSettings();
  const targetModel = settings.targetModel ?? DEFAULT_TARGET_MODEL;
  if (!resolvedTabId) {
    const state = createAnalysisState(
      null,
      "error",
      "\u627E\u4E0D\u5230\u53EF\u5206\u6790\u7684\u6D3B\u52A8\u6807\u7B7E\u9875\u3002",
      targetModel,
      { errorMessage: "\u627E\u4E0D\u5230\u53EF\u5206\u6790\u7684\u6D3B\u52A8\u6807\u7B7E\u9875\u3002" }
    );
    await publishState(state);
    return { ok: false, state };
  }
  const hasConfig = settings.apiKey.trim().length > 0 && settings.baseUrl.trim().length > 0 && settings.modelName.trim().length > 0;
  if (!hasConfig) {
    const state = await setState(
      resolvedTabId,
      "error",
      "\u9700\u8981\u5B8C\u6210\u6A21\u578B\u914D\u7F6E\u3002\u8BF7\u5148\u5728\u8BBE\u7F6E\u4E2D\u586B\u5199 API \u5BC6\u94A5\u3001\u57FA\u7840 URL \u548C\u6A21\u578B\u540D\u79F0\u3002",
      targetModel,
      {
        errorMessage: "\u9700\u8981\u5B8C\u6210\u6A21\u578B\u914D\u7F6E\u3002\u8BF7\u5148\u5728\u8BBE\u7F6E\u4E2D\u586B\u5199 API \u5BC6\u94A5\u3001\u57FA\u7840 URL \u548C\u6A21\u578B\u540D\u79F0\u3002"
      }
    );
    try {
      await chrome.runtime.sendMessage({
        type: "VIDEO2PROMPT_FOCUS_API_KEY"
      });
    } catch {
    }
    return { ok: false, state };
  }
  if (!imageUrl) {
    const state = await setState(
      resolvedTabId,
      "error",
      "\u672A\u627E\u5230\u56FE\u7247\u3002\u8BF7\u76F4\u63A5\u53F3\u952E\u70B9\u51FB\u6807\u51C6\u7F51\u9875\u56FE\u7247\u540E\u91CD\u8BD5\u3002",
      targetModel,
      {
        errorMessage: "\u672A\u627E\u5230\u56FE\u7247\u3002\u8BF7\u76F4\u63A5\u53F3\u952E\u70B9\u51FB\u6807\u51C6\u7F51\u9875\u56FE\u7247\u540E\u91CD\u8BD5\u3002"
      }
    );
    return { ok: false, state };
  }
  const imageInfo = buildWebImageInfo(imageUrl, activeTab ?? void 0);
  await setState(resolvedTabId, "detecting", "\u6B63\u5728\u51C6\u5907\u56FE\u7247...", targetModel, {
    mediaType: "image",
    sourceType: "web",
    imageInfo,
    previewFrameUrl: imageUrl
  });
  try {
    const baseState = await setState(resolvedTabId, "analyzing", "\u6B63\u5728\u5206\u6790...", targetModel, {
      mediaType: "image",
      sourceType: "web",
      imageInfo,
      previewFrameUrl: imageUrl
    });
    const imageDataUrl = await fetchImageAsDataUrl(imageUrl);
    let lastProgressLen = 0;
    const result = await analyzeImageStream2({
      apiKey: settings.apiKey,
      baseUrl: settings.baseUrl,
      modelName: settings.modelName,
      targetModel,
      imageDataUrl,
      imageInfo,
      onProgress: (text) => {
        if (text.length - lastProgressLen < 20) return;
        lastProgressLen = text.length;
        void publishState({
          ...baseState,
          streamProgress: text.slice(-600),
          updatedAt: Date.now()
        });
      }
    });
    const state = await setState(
      resolvedTabId,
      "generated",
      "\u63D0\u793A\u8BCD\u5DF2\u751F\u6210\u3002",
      targetModel,
      {
        mediaType: "image",
        sourceType: "web",
        imageInfo,
        previewFrameUrl: imageUrl,
        imageSummary: result.imageSummary,
        generatedPrompt: result.generatedPrompt,
        rawResult: result.rawResult,
        promptResult: result.promptResult
      }
    );
    return { ok: true, state };
  } catch (error) {
    const message = error instanceof Error ? error.message : "\u65E0\u6CD5\u52A0\u8F7D\u6B64\u56FE\u7247\u8FDB\u884C\u5206\u6790\u3002";
    const state = await setState(resolvedTabId, "error", message, targetModel, {
      mediaType: "image",
      sourceType: "web",
      imageInfo,
      previewFrameUrl: imageUrl,
      errorMessage: message
    });
    return { ok: false, state };
  }
}
chrome.runtime.onInstalled.addListener(() => {
  void (async () => {
    await configureSidePanelBehavior();
    await chrome.sidePanel.setOptions({
      path: "sidepanel.html",
      enabled: true
    });
    await createContextMenu();
  })();
});
chrome.runtime.onStartup.addListener(() => {
  void (async () => {
    await configureSidePanelBehavior();
    await chrome.sidePanel.setOptions({
      path: "sidepanel.html",
      enabled: true
    });
  })();
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== CONTEXT_MENU_ID || !tab?.id) {
    return;
  }
  openSidePanelForTab(tab.id);
  void startWebImageAnalysis({
    tabId: tab.id,
    imageUrl: info.srcUrl
  });
});
chrome.action.onClicked.addListener((tab) => {
  if (!tab.id) {
    return;
  }
  openSidePanelForTab(tab.id);
});
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === "VIDEO2PROMPT_START_ANALYSIS") {
    void startWebImageAnalysis({
      tabId: message.tabId,
      imageUrl: message.imageUrl
    }).then(sendResponse);
    return true;
  }
  if (message.type === "VIDEO2PROMPT_GET_PANEL_CONTEXT") {
    void (async () => {
      const activeTab = await getActiveTab();
      const activeTabId = activeTab?.id ?? null;
      const state = activeTabId ? await getAnalysisState(activeTabId) : null;
      sendResponse({
        activeTabId,
        state
      });
    })();
    return true;
  }
  if (message.type === "VIDEO2PROMPT_CLEAR_ACTIVE_ANALYSIS") {
    void (async () => {
      const activeTab = await getActiveTab();
      const resolvedTabId = message.tabId ?? activeTab?.id ?? null;
      if (!resolvedTabId) {
        sendResponse({ ok: false });
        return;
      }
      await clearAnalysisState(resolvedTabId);
      sendResponse({ ok: true });
    })();
    return true;
  }
  return false;
});
