import {
  analyzeImage as doAnalyzeImage,
  analyzeImageStream as doAnalyzeImageStream,
  analyzeVideoFrames as doAnalyzeVideoFrames,
  enhancePrompt as doEnhancePrompt
} from "./openaiClient";
import {
  type DetectedImageInfo,
  type DetectedVideoInfo,
  type ExtractedFrame,
  type PromptEnhancerMode,
  type TargetModelId
} from "../types";

export async function analyzeVideoFrames({
  apiKey,
  baseUrl,
  modelName,
  targetModel,
  frames,
  videoInfo,
  signal
}: {
  apiKey: string;
  baseUrl: string;
  modelName: string;
  targetModel: TargetModelId;
  frames: ExtractedFrame[];
  videoInfo?: DetectedVideoInfo;
  signal?: AbortSignal;
}): Promise<{ videoSummary: string; generatedPrompt: string; rawResult: string; promptResult: unknown }> {
  return doAnalyzeVideoFrames({
    apiKey,
    baseUrl,
    modelName,
    targetModel,
    frames,
    videoInfo,
    signal
  });
}

export async function analyzeImage({
  apiKey,
  baseUrl,
  modelName,
  targetModel,
  imageDataUrl,
  imageInfo,
  signal
}: {
  apiKey: string;
  baseUrl: string;
  modelName: string;
  targetModel: TargetModelId;
  imageDataUrl: string;
  imageInfo?: DetectedImageInfo;
  signal?: AbortSignal;
}): Promise<{ imageSummary: string; generatedPrompt: string; rawResult: string; promptResult: unknown }> {
  return doAnalyzeImage({
    apiKey,
    baseUrl,
    modelName,
    targetModel,
    imageDataUrl,
    imageInfo,
    signal
  });
}

export async function analyzeImageStream({
  apiKey,
  baseUrl,
  modelName,
  targetModel,
  imageDataUrl,
  imageInfo,
  signal,
  onProgress
}: {
  apiKey: string;
  baseUrl: string;
  modelName: string;
  targetModel: TargetModelId;
  imageDataUrl: string;
  imageInfo?: DetectedImageInfo;
  signal?: AbortSignal;
  onProgress?: (text: string) => void;
}): Promise<{ imageSummary: string; generatedPrompt: string; rawResult: string; promptResult: unknown }> {
  return doAnalyzeImageStream({
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

export async function enhancePrompt({
  apiKey,
  baseUrl,
  modelName,
  mode,
  idea,
  signal
}: {
  apiKey: string;
  baseUrl: string;
  modelName: string;
  mode: PromptEnhancerMode;
  idea: string;
  signal?: AbortSignal;
}): Promise<string> {
  return doEnhancePrompt({
    apiKey,
    baseUrl,
    modelName,
    mode,
    idea,
    signal
  });
}
