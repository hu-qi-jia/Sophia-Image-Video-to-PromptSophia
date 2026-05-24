export const TARGET_MODELS = [
  { id: "seedance-2.0", label: "Seedance 2.0" },
  { id: "generic-ai-video", label: "其他" }
] as const;

export type TargetModelId = (typeof TARGET_MODELS)[number]["id"];

export const DEFAULT_TARGET_MODEL: TargetModelId = "seedance-2.0";
export const GEMINI_ANALYSIS_MODEL = "gemini-2.5-flash";
export const FRAME_SAMPLING_MODES = ["fast", "standard", "detailed"] as const;
export const DEFAULT_FRAME_SAMPLING_MODE = "standard";

export type FrameSamplingMode = (typeof FRAME_SAMPLING_MODES)[number];
export type PromptFormat = "json";
export const DEFAULT_PROMPT_FORMAT: PromptFormat = "json";
export type PromptEnhancerMode = "video" | "image";
export type FrameExtractionOptions = {
  mode?: FrameSamplingMode;
};

export type AnalysisMediaType = "video" | "image";
export type AnalysisSourceType = "web" | "local" | "enhancer";

export type DetectedVideoInfo = {
  found: boolean;
  duration?: number;
  currentTime?: number;
  videoWidth?: number;
  videoHeight?: number;
  src?: string;
  pageTitle?: string;
  pageUrl?: string;
};

export type DetectedImageInfo = {
  found: boolean;
  imageWidth?: number;
  imageHeight?: number;
  src?: string;
  pageTitle?: string;
  pageUrl?: string;
  alt?: string;
};

export type ExtractedFrame = {
  timestamp: number;
  dataUrl: string;
};

export type AnalysisPhase =
  | "idle"
  | "ready"
  | "detecting"
  | "extracting"
  | "analyzing"
  | "generated"
  | "error";

export type AnalysisState = {
  tabId: number | null;
  phase: AnalysisPhase;
  statusText: string;
  errorMessage?: string;
  videoSummary?: string;
  imageSummary?: string;
  generatedPrompt?: string;
  rawResult?: string;
  promptResult?: GeminiPromptResponse;
  streamProgress?: string;
  mediaType?: AnalysisMediaType;
  sourceType?: AnalysisSourceType;
  videoInfo?: DetectedVideoInfo;
  imageInfo?: DetectedImageInfo;
  previewFrameUrl?: string;
  keyframeCount?: number;
  targetModel: TargetModelId;
  updatedAt: number;
};

export type StoredSettings = {
  apiKey: string;
  baseUrl: string;
  modelName: string;
  targetModel: TargetModelId;
  frameSamplingMode: FrameSamplingMode;
  promptFormat: PromptFormat;
};

export type PromptHistoryItem = {
  id: string;
  createdAt: number;
  sourceType: AnalysisSourceType;
  mediaType: AnalysisMediaType;
  sourceUrl?: string;
  pageTitle?: string;
  thumbnailDataUrl?: string;
  promptText: string;
  videoSummary?: string;
  promptResult?: GeminiPromptResponse;
};

export type GeneratedPromptTimelineItem = {
  time: string;
  subject: string;
  action: string;
  setting: string;
  camera: string;
  mood: string;
  sound: string;
};

export type GeneratedPromptBody = {
  globalStyle: string;
  timeline: GeneratedPromptTimelineItem[];
  consistencyConstraints: string[];
};

export type GeminiVideoPromptResponse = {
  videoSummary: string;
  targetModel: string;
  generatedPrompt: GeneratedPromptBody;
};

export type GeminiImageAnalysisBody = {
  subject: string;
  scene: string;
  composition: string;
  style: string;
  lighting: string;
  colorPalette: string;
  mood: string;
  details: string;
  medium: string;
  keywords: string[];
};

export type GeminiImagePromptResponse = {
  analysis: GeminiImageAnalysisBody;
  shortPrompt: string;
  detailedPrompt: string;
  imagePrompt: string;
};

// ── Structured image analysis types ─────────────────────────────────

export type ImageArchetype = {
  primary_type?: string;
  visual_medium?: string;
  style_genre?: string;
  atmosphere?: string;
  period_feel?: string;
  commercial_context?: string;
};

export type SubjectItem = {
  name?: string;
  category?: string;
  count?: number;
  shape_and_structure?: string;
  color?: string;
  material?: string;
  texture_and_surface?: string;
  condition?: string;
  position_in_frame?: string;
  spatial_relationships?: string;
  sub_parts?: string[];
};

export type ImageComposition = {
  aspect_ratio?: string;
  shot_type?: string;
  camera_angle?: string;
  camera_height?: string;
  perspective?: string;
  focal_impression?: string;
  subject_proportion?: string;
  visual_center?: string;
  reading_path?: string;
  negative_space?: string;
  depth_layers?: string;
  cropping?: string;
};

export type LightingAndColor = {
  light_direction?: string;
  light_quality?: string;
  intensity?: string;
  contrast?: string;
  color_temperature?: string;
  saturation?: string;
  dominant_colors?: string[];
  accent_colors?: string[];
  shadow_behavior?: string;
  highlight_behavior?: string;
  background_color?: string;
  gradient?: string;
};

export type ImageImperfections = {
  noise_or_grain?: string;
  blur_areas?: string;
  wear_or_aging?: string;
  artifacts?: string;
  edge_variation?: string;
  occluded_elements?: string;
};

export type StructuredImagePromptResponse = {
  image_archetype: ImageArchetype;
  subjects: SubjectItem[];
  composition: ImageComposition;
  lighting_and_color: LightingAndColor;
  imperfections: ImageImperfections;
  shortPrompt: string;
  detailedPrompt: string;
  negativePrompt: string;
};

export type GeminiPromptResponse = GeminiVideoPromptResponse | GeminiImagePromptResponse | StructuredImagePromptResponse;

export type RuntimeMessage =
  | {
      type: "VIDEO2PROMPT_START_ANALYSIS";
      tabId?: number;
      triggeredFrom: "contextMenu" | "sidePanel";
      imageUrl?: string;
    }
  | {
      type: "VIDEO2PROMPT_GET_PANEL_CONTEXT";
    }
  | {
      type: "VIDEO2PROMPT_ANALYSIS_STATE_UPDATED";
      state: AnalysisState;
    }
  | {
      type: "VIDEO2PROMPT_FOCUS_API_KEY";
    }
  | {
      type: "VIDEO2PROMPT_CLEAR_ACTIVE_ANALYSIS";
      tabId?: number;
    };
