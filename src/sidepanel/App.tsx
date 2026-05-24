import { type ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { analyzeImageStream, analyzeVideoFrames, enhancePrompt } from "../lib/aiClient";
import { extractFrames } from "../lib/frameExtractor";
import { readFileAsDataUrl } from "../lib/imageUtils";
import {
  createAnalysisState,
  defaultSettings,
  deleteApiKey,
  deletePromptHistoryItem,
  getPromptHistory,
  getSettings,
  saveApiKey,
  saveBaseUrl,
  saveFrameSamplingMode,
  saveModelName,
  savePromptHistoryItem
} from "../lib/storage";
import {
  DEFAULT_TARGET_MODEL,
  type AnalysisState,
  type AnalysisMediaType,
  type AnalysisSourceType,
  type DetectedImageInfo,
  type DetectedVideoInfo,
  type FrameSamplingMode,
  type PromptEnhancerMode,
  type PromptFormat,
  type PromptHistoryItem,
  type GeminiPromptResponse,
  type RuntimeMessage,
  type StoredSettings,
  type TargetModelId
} from "../lib/types";

type PanelContextResponse = {
  activeTabId: number | null;
  state: AnalysisState | null;
};

type StartAnalysisResponse = {
  ok: boolean;
  state: AnalysisState;
};

type TabId = "image" | "video" | "enhancer";
type SubView = "main" | "history" | "settings";

type MediaSource =
  | { kind: "none" }
  | { kind: "web-image"; previewUrl?: string; imageInfo?: DetectedImageInfo }
  | { kind: "local-video"; objectUrl: string; fileName: string; videoInfo?: DetectedVideoInfo }
  | { kind: "local-image"; objectUrl: string; fileName: string; file: File; imageInfo?: DetectedImageInfo };

type IVTabData = {
  mediaSource: MediaSource;
  isAnalyzingLocal: boolean;
  resultMode: "empty" | "loading" | "text" | "error";
  resultText: string;
  streamText: string;
  rawResultText: string;
  promptResult: GeminiPromptResponse | null;
  resultMediaType: AnalysisMediaType;
  displayFormat: PromptFormat;
  copyLabel: string;
  uploadError: string | null;
  analysisState: AnalysisState;
  editedResultText: string | null;
};

function createInitialIVTabData(targetModel: TargetModelId = DEFAULT_TARGET_MODEL): IVTabData {
  return {
    mediaSource: { kind: "none" },
    isAnalyzingLocal: false,
    resultMode: "empty",
    resultText: "结果将在此呈现",
    streamText: "",
    rawResultText: "",
    promptResult: null,
    resultMediaType: "image",
    displayFormat: "json",
    copyLabel: "复制",
    uploadError: null,
    analysisState: createAnalysisState(null, "idle", "结果将在此呈现", targetModel),
    editedResultText: null,
  };
}

const FRAME_MODE_COPY: Record<
  FrameSamplingMode,
  { label: string; description: string }
> = {
  fast: {
    label: "快速",
    description: "更少帧数，速度更快，适合快速预览。"
  },
  standard: {
    label: "标准",
    description: "速度与质量均衡，适合大多数视频。"
  },
  detailed: {
    label: "详细",
    description: "更多帧数，适合复杂运动或深度分析。"
  }
};

const IMAGE_ACCEPT = "image/jpeg,image/png,image/webp,image/gif,image/bmp,image/svg+xml";
const VIDEO_ACCEPT = "video/mp4,video/webm,video/ogg,video/quicktime,video/x-msvideo";

const ALLOWED_IMAGE_TYPES = new Set(IMAGE_ACCEPT.split(","));
const ALLOWED_VIDEO_TYPES = new Set(VIDEO_ACCEPT.split(","));

function SpinnerIcon() {
  return <span className="mini-spinner" aria-hidden="true" />;
}

function ImageIcon() {
  return (
    <svg aria-hidden="true" className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="10.5" r="1.5" />
      <path d="M21 15l-5-5L5 19" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg aria-hidden="true" className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="15" height="16" rx="2" />
      <path d="M17 8l5-3v14l-5-3" />
    </svg>
  );
}

function WandIcon() {
  return (
    <svg aria-hidden="true" className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 4V2" />
      <path d="M15 16v-2" />
      <path d="M8 9h2" />
      <path d="M20 9h2" />
      <path d="M17.8 11.8L19 13" />
      <path d="M15 9h.01" />
      <path d="M17.8 6.2L19 5" />
      <path d="m3 21 9-9" />
      <path d="m12.2 6.2 1.4-1.4" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg aria-hidden="true" className="tiny-icon" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="5" r="1.8" />
      <circle cx="12" cy="12" r="1.8" />
      <circle cx="12" cy="19" r="1.8" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg aria-hidden="true" className="tiny-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function HistoryIcon() {
  return (
    <svg aria-hidden="true" className="tiny-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 3v4h4" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg aria-hidden="true" className="tiny-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 0 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 0 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3h.1a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5h.1a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 0 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg aria-hidden="true" className="tiny-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg aria-hidden="true" className="tiny-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="15" r="4" />
      <path d="M12 15h9" />
      <path d="M18 15v-3" />
      <path d="M21 15v-2" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg aria-hidden="true" className="tiny-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z" />
      <path d="M9.5 12.5l1.8 1.8l3.7-4" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg aria-hidden="true" className="tiny-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.5-6 10-6s10 6 10 6s-3.5 6-10 6S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg aria-hidden="true" className="tiny-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 10v6" />
      <path d="M12 7h.01" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" className="tiny-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function CloudUploadIcon() {
  return (
    <svg aria-hidden="true" className="tiny-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 15V9" />
      <path d="M9.5 11.5L12 9L14.5 11.5" />
      <path d="M20 16.8A4 4 0 0 0 17 10H15.7A6 6 0 1 0 4 12.5" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg aria-hidden="true" className="tiny-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg aria-hidden="true" className="upload-plus-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function HistoryThumbnail({ src }: { src: string }) {
  const [orientation, setOrientation] = useState<"landscape" | "portrait" | "square">("landscape");

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const ratio = img.naturalWidth / img.naturalHeight;
      if (ratio > 1.1) setOrientation("landscape");
      else if (ratio < 0.9) setOrientation("portrait");
      else setOrientation("square");
    };
    img.src = src;
  }, [src]);

  return (
    <div className={`history-thumbnail history-thumbnail--${orientation}`}>
      <img src={src} alt="" />
    </div>
  );
}

function ExpandIcon({ expanded }: { expanded: boolean }) {
  return expanded ? (
    <svg aria-hidden="true" className="tiny-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14h6v6" />
      <path d="M20 10h-6V4" />
      <path d="M14 10l7-7" />
      <path d="M3 21l7-7" />
    </svg>
  ) : (
    <svg aria-hidden="true" className="tiny-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6" />
      <path d="M9 21H3v-6" />
      <path d="M21 3l-7 7" />
      <path d="M3 21l7-7" />
    </svg>
  );
}

function EnhancerVideoIcon() {
  return (
    <svg aria-hidden="true" className="tiny-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="M16 10l5-3v10l-5-3" />
    </svg>
  );
}

function EnhancerImageIcon() {
  return (
    <svg aria-hidden="true" className="tiny-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="10" r="1.5" />
      <path d="M21 15l-4.2-4.2a1.4 1.4 0 0 0-2 0L9 16.5" />
    </svg>
  );
}

function buildLocalVideoInfo(video: HTMLVideoElement, fileName: string): DetectedVideoInfo {
  return {
    found: true,
    duration: Number.isFinite(video.duration) ? video.duration : undefined,
    currentTime: video.currentTime,
    videoWidth: video.videoWidth || undefined,
    videoHeight: video.videoHeight || undefined,
    src: fileName,
    pageTitle: "本地上传",
    pageUrl: "local://upload"
  };
}

function buildLocalImageInfo(image: HTMLImageElement, fileName: string): DetectedImageInfo {
  return {
    found: true,
    imageWidth: image.naturalWidth || undefined,
    imageHeight: image.naturalHeight || undefined,
    src: fileName,
    pageTitle: "本地上传",
    pageUrl: "local://upload"
  };
}

async function createVideoElement(sourceUrl: string): Promise<HTMLVideoElement> {
  const video = document.createElement("video");
  video.src = sourceUrl;
  video.preload = "auto";
  video.muted = true;
  video.playsInline = true;
  video.crossOrigin = "anonymous";
  await new Promise<void>((resolve, reject) => {
    const onLoaded = () => { cleanup(); resolve(); };
    const onError = () => { cleanup(); reject(new Error("无法加载所选视频文件。")); };
    const cleanup = () => {
      video.removeEventListener("loadeddata", onLoaded);
      video.removeEventListener("error", onError);
    };
    video.addEventListener("loadeddata", onLoaded, { once: true });
    video.addEventListener("error", onError, { once: true });
    video.load();
  });
  return video;
}

async function createImageElement(sourceUrl: string): Promise<HTMLImageElement> {
  const image = new Image();
  image.src = sourceUrl;
  await new Promise<void>((resolve, reject) => {
    image.onload = () => resolve();
    image.onerror = () => reject(new Error("无法加载所选图片文件。"));
  });
  return image;
}

async function compressThumbnailDataUrl(dataUrl?: string): Promise<string | undefined> {
  if (!dataUrl) return undefined;
  try {
    const image = new Image();
    image.src = dataUrl;
    await new Promise<void>((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new Error("无法加载缩略图。"));
    });
    const scale = Math.min(1, 320 / image.width);
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(image.width * scale));
    canvas.height = Math.max(1, Math.round(image.height * scale));
    const context = canvas.getContext("2d");
    if (!context) return dataUrl;
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", 0.68);
  } catch {
    return dataUrl;
  }
}

function createHistoryId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function formatHistoryTime(createdAt: number): string {
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(createdAt);
}

function getHistorySourceLabel(
  sourceType: AnalysisSourceType,
  mediaType: AnalysisMediaType
): string {
  if (sourceType === "local" && mediaType === "video") return "本地视频";
  if (sourceType === "local" && mediaType === "image") return "本地图片";
  if (sourceType === "enhancer" && mediaType === "video") return "视频提示词增强";
  if (sourceType === "enhancer" && mediaType === "image") return "图片提示词增强";
  return "网页图片";
}

function getMediaAspectRatio(mediaSource: MediaSource): string | undefined {
  if (mediaSource.kind === "local-video" && mediaSource.videoInfo?.videoWidth && mediaSource.videoInfo?.videoHeight) {
    return `${mediaSource.videoInfo.videoWidth} / ${mediaSource.videoInfo.videoHeight}`;
  }
  if (mediaSource.kind === "local-image" && mediaSource.imageInfo?.imageWidth && mediaSource.imageInfo?.imageHeight) {
    return `${mediaSource.imageInfo.imageWidth} / ${mediaSource.imageInfo.imageHeight}`;
  }
  if (mediaSource.kind === "web-image" && mediaSource.imageInfo?.imageWidth && mediaSource.imageInfo?.imageHeight) {
    return `${mediaSource.imageInfo.imageWidth} / ${mediaSource.imageInfo.imageHeight}`;
  }
  return undefined;
}

function SparklePlaceholder() {
  return (
    <svg aria-hidden="true" className="placeholder-sparkle" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z" fill="currentColor" />
      <path d="M18.4 3.8L19 5.4L20.6 6L19 6.6L18.4 8.2L17.8 6.6L16.2 6L17.8 5.4L18.4 3.8Z" fill="currentColor" />
    </svg>
  );
}

function isApiKeyRequiredState(state: AnalysisState): boolean {
  return (
    state.phase === "error" &&
    (state.errorMessage ?? state.statusText).toLowerCase().includes("api key required")
  );
}

export function App() {
  const [settings, setSettings] = useState<StoredSettings>(defaultSettings);
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [baseUrlInput, setBaseUrlInput] = useState("https://api.openai.com/v1");
  const [modelNameInput, setModelNameInput] = useState("");
  const [historyItems, setHistoryItems] = useState<PromptHistoryItem[]>([]);
  const [activeTabId, setActiveTabId] = useState<number | null>(null);
  const [ivTabData, setIvTabData] = useState<Record<"image" | "video", IVTabData>>({
    image: createInitialIVTabData(),
    video: createInitialIVTabData(),
  });
  const [activeTab, setActiveTab] = useState<TabId>("image");
  const [subView, setSubView] = useState<SubView>("main");
  const [menuOpen, setMenuOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [showApiKey, setShowApiKey] = useState(false);
  const [showSamplingInfo, setShowSamplingInfo] = useState(false);
  const [enhancerMode, setEnhancerMode] = useState<PromptEnhancerMode>("video");
  const [enhancerInput, setEnhancerInput] = useState("");
  const [enhancerResultMode, setEnhancerResultMode] = useState<"empty" | "loading" | "text" | "error">("empty");
  const [enhancerResultText, setEnhancerResultText] = useState("增强结果将在此呈现");
  const [enhancerCopyLabel, setEnhancerCopyLabel] = useState("复制");
  const [isEnhancingPrompt, setIsEnhancingPrompt] = useState(false);

  const imageFileRef = useRef<HTMLInputElement | null>(null);
  const videoFileRef = useRef<HTMLInputElement | null>(null);
  const localObjectUrlRefs = useRef<Record<"image" | "video", string | null>>({ image: null, video: null });
  const abortControllerRefs = useRef<Record<"image" | "video", AbortController | null>>({ image: null, video: null });
  const enhancerAbortRef = useRef<AbortController | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const lastSavedHistoryKeyRef = useRef<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  function updateIVTab(tab: "image" | "video", updates: Partial<IVTabData>) {
    setIvTabData(prev => ({ ...prev, [tab]: { ...prev[tab], ...updates } }));
  }

  const currentIVTab: "image" | "video" = activeTab === "video" ? "video" : "image";
  const currentData = ivTabData[currentIVTab];

  const hasApiKey = settings.apiKey.trim().length > 0
    && settings.baseUrl.trim().length > 0
    && settings.modelName.trim().length > 0;
  const hasMedia = currentData.mediaSource.kind !== "none";
  const isAnalyzing =
    currentData.isAnalyzingLocal ||
    currentData.analysisState.phase === "detecting" ||
    currentData.analysisState.phase === "extracting" ||
    currentData.analysisState.phase === "analyzing";
  const canAnalyze = hasMedia && !isAnalyzing;
  const showCopy = currentData.resultMode === "text" && currentData.resultText.trim().length > 0;
  const canEnhancePrompt = enhancerInput.trim().length > 0 && !isEnhancingPrompt;
  const showEnhancerCopy = enhancerResultMode === "text" && enhancerResultText.trim().length > 0;

  const displayResultText = useMemo(() => {
    if (currentData.resultMode !== "text" || !currentData.promptResult) return currentData.resultText;
    if (currentData.editedResultText !== null) return currentData.editedResultText;
    return currentData.rawResultText;
  }, [currentData.resultMode, currentData.promptResult, currentData.rawResultText, currentData.resultText, currentData.editedResultText]);

  useEffect(() => {
    void (async () => {
      const [nextSettings, nextHistory] = await Promise.all([getSettings(), getPromptHistory()]);
      setSettings(nextSettings);
      setApiKeyInput(nextSettings.apiKey);
      setBaseUrlInput(nextSettings.baseUrl);
      setModelNameInput(nextSettings.modelName);
      setHistoryItems(nextHistory);

      const context = (await chrome.runtime.sendMessage({
        type: "VIDEO2PROMPT_GET_PANEL_CONTEXT"
      } satisfies RuntimeMessage)) as PanelContextResponse;

      setActiveTabId(context.activeTabId);
      if (context.state) {
        syncFromBackgroundState(context.state);
      } else {
        resetIVTabResult("image");
        resetIVTabResult("video");
      }
    })();

    const handleMessage = (message: RuntimeMessage) => {
      if (message.type === "VIDEO2PROMPT_ANALYSIS_STATE_UPDATED") {
        syncFromBackgroundState(message.state);
        if (message.state.tabId) setActiveTabId(message.state.tabId);
        return;
      }
      if (message.type === "VIDEO2PROMPT_FOCUS_API_KEY") {
        setSubView("settings");
        setMenuOpen(false);
      }
    };

    const handleStorageChanged = (
      changes: Record<string, chrome.storage.StorageChange>,
      areaName: string
    ) => {
      if (areaName !== "local") return;
      if (changes["video2prompt:settings"]) {
        const next = changes["video2prompt:settings"].newValue as Partial<StoredSettings> | undefined;
        const merged = { ...defaultSettings, ...(next ?? {}) };
        setSettings(merged);
        setApiKeyInput(merged.apiKey);
        setBaseUrlInput(merged.baseUrl);
        setModelNameInput(merged.modelName);
      }
      if (changes["video2prompt:history"]) {
        setHistoryItems((changes["video2prompt:history"].newValue as PromptHistoryItem[] | undefined) ?? []);
      }
    };

    chrome.runtime.onMessage.addListener(handleMessage);
    chrome.storage.onChanged.addListener(handleStorageChanged);

    return () => {
      chrome.runtime.onMessage.removeListener(handleMessage);
      chrome.storage.onChanged.removeListener(handleStorageChanged);
      for (const tab of ["image", "video"] as const) {
        if (localObjectUrlRefs.current[tab]) {
          URL.revokeObjectURL(localObjectUrlRefs.current[tab]!);
          localObjectUrlRefs.current[tab] = null;
        }
      }
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (menuRef.current && target && !menuRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [menuOpen]);

  function showToast(message: string) {
    setStatusMessage(message);
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setStatusMessage(null), 1800);
  }

  async function persistHistoryRecord(options: {
    sourceType: AnalysisSourceType;
    mediaType: AnalysisMediaType;
    sourceUrl?: string;
    pageTitle?: string;
    thumbnailDataUrl?: string;
    promptText: string;
    videoSummary?: string;
    promptResult?: GeminiPromptResponse;
    dedupeKey: string;
  }) {
    if (!options.promptText.trim() || lastSavedHistoryKeyRef.current === options.dedupeKey) return;
    lastSavedHistoryKeyRef.current = options.dedupeKey;
    const nextHistory = await savePromptHistoryItem({
      id: createHistoryId(),
      createdAt: Date.now(),
      sourceType: options.sourceType,
      mediaType: options.mediaType,
      sourceUrl: options.sourceUrl,
      pageTitle: options.pageTitle,
      thumbnailDataUrl: await compressThumbnailDataUrl(options.thumbnailDataUrl),
      promptText: options.promptText,
      videoSummary: options.videoSummary,
      promptResult: options.promptResult
    });
    setHistoryItems(nextHistory);
  }

  function syncFromBackgroundState(state: AnalysisState) {
    const shouldFocusSettings = isApiKeyRequiredState(state);
    const tab: "image" | "video" = state.mediaType === "video" ? "video" : "image";
    updateIVTab(tab, { analysisState: state });
    setSubView(shouldFocusSettings ? "settings" : "main");

    if (state.mediaType === "image" && (state.previewFrameUrl || state.imageInfo)) {
      updateIVTab(tab, { mediaSource: { kind: "web-image", previewUrl: state.previewFrameUrl, imageInfo: state.imageInfo } });
      setActiveTab("image");
    }

    if (state.phase === "generated" && state.generatedPrompt) {
      updateIVTab(tab, {
        resultMode: "text",
        resultText: state.generatedPrompt,
        rawResultText: state.rawResult ?? "",
        promptResult: state.promptResult ?? null,
        resultMediaType: state.mediaType ?? "image",
        displayFormat: "json",
        copyLabel: "复制",
      });
      void persistHistoryRecord({
        sourceType: state.sourceType ?? "web",
        mediaType: state.mediaType ?? "image",
        sourceUrl: state.imageInfo?.pageUrl ?? state.imageInfo?.src,
        pageTitle: state.imageInfo?.pageTitle,
        thumbnailDataUrl: state.previewFrameUrl,
        promptText: state.generatedPrompt,
        videoSummary: state.mediaType === "video" ? state.videoSummary : state.imageSummary,
        promptResult: state.promptResult,
        dedupeKey: `${state.sourceType ?? "web"}:${state.mediaType ?? "image"}:${state.updatedAt}:${state.generatedPrompt}`
      });
      return;
    }

    if (state.phase === "error") {
      if (shouldFocusSettings) { resetIVTabResult(tab); return; }
      updateIVTab(tab, { resultMode: "error", resultText: state.errorMessage ?? state.statusText });
      return;
    }

    if (state.phase === "detecting" || state.phase === "extracting" || state.phase === "analyzing") {
      const streamText = state.streamProgress;
      updateIVTab(tab, {
        resultMode: "loading",
        resultText: streamText || "正在识别中...",
        streamText: streamText || ""
      });
      return;
    }

    if (state.phase === "ready" && !state.generatedPrompt) {
      resetIVTabResult(tab);
    }
  }

  function resetIVTabResult(tab: "image" | "video") {
    updateIVTab(tab, {
      resultMode: "empty",
      resultText: "结果将在此呈现",
      streamText: "",
      rawResultText: "",
      promptResult: null,
      copyLabel: "复制",
      editedResultText: null,
    });
  }

  async function handleAnalyze() {
    if (!hasApiKey) {
      setSubView("settings");
      setMenuOpen(false);
      return;
    }
    if (!hasMedia || isAnalyzing) return;

    const tab = currentIVTab;
    const mediaSrc = ivTabData[tab].mediaSource;

    resetIVTabResult(tab);
    updateIVTab(tab, { resultMode: "loading", resultText: "正在识别中..." });

    const controller = new AbortController();
    abortControllerRefs.current[tab] = controller;

    if (mediaSrc.kind === "web-image") {
      const response = (await chrome.runtime.sendMessage({
        type: "VIDEO2PROMPT_START_ANALYSIS",
        tabId: activeTabId ?? undefined,
        imageUrl: mediaSrc.imageInfo?.src,
        triggeredFrom: "sidePanel"
      } satisfies RuntimeMessage)) as StartAnalysisResponse;
      if (response?.state) syncFromBackgroundState(response.state);
      abortControllerRefs.current[tab] = null;
      return;
    }

    if (mediaSrc.kind === "local-video") {
      updateIVTab(tab, { isAnalyzingLocal: true });
      try {
        const video = await createVideoElement(mediaSrc.objectUrl);
        const videoInfo = buildLocalVideoInfo(video, mediaSrc.fileName);
        const frames = await extractFrames(video, { mode: settings.frameSamplingMode });
        const result = await analyzeVideoFrames({
          apiKey: settings.apiKey, baseUrl: settings.baseUrl, modelName: settings.modelName,
          targetModel: settings.targetModel, frames, videoInfo,
          signal: controller.signal
        });
        const generatedState = createAnalysisState(activeTabId, "generated", "识别完成", settings.targetModel, {
          mediaType: "video", sourceType: "local", videoInfo, previewFrameUrl: frames[0]?.dataUrl, keyframeCount: frames.length,
          ...result, promptResult: result.promptResult as GeminiPromptResponse | undefined
        });
        updateIVTab(tab, {
          mediaSource: { kind: "local-video", objectUrl: mediaSrc.objectUrl, fileName: mediaSrc.fileName, videoInfo },
          analysisState: generatedState,
          resultMode: "text",
          resultText: result.generatedPrompt,
          rawResultText: result.rawResult,
          promptResult: result.promptResult as GeminiPromptResponse,
          resultMediaType: "video",
          displayFormat: "json",
          isAnalyzingLocal: false,
        });
        await persistHistoryRecord({
          sourceType: "local", mediaType: "video", sourceUrl: videoInfo.src, pageTitle: videoInfo.pageTitle,
          thumbnailDataUrl: frames[0]?.dataUrl, promptText: result.generatedPrompt, videoSummary: result.videoSummary,
          promptResult: result.promptResult as GeminiPromptResponse, dedupeKey: `local:${generatedState.updatedAt}:${result.generatedPrompt}`
        });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          resetIVTabResult(tab);
          updateIVTab(tab, { isAnalyzingLocal: false });
          return;
        }
        const message = error instanceof Error ? error.message : "无法从该视频提取帧。";
        updateIVTab(tab, {
          analysisState: createAnalysisState(activeTabId, "error", message, settings.targetModel, { errorMessage: message }),
          resultMode: "error",
          resultText: message,
          isAnalyzingLocal: false,
        });
      } finally {
        abortControllerRefs.current[tab] = null;
      }
    }

    if (mediaSrc.kind === "local-image") {
      updateIVTab(tab, { isAnalyzingLocal: true, streamText: "" });
      try {
        const [image, imageDataUrl] = await Promise.all([
          createImageElement(mediaSrc.objectUrl),
          readFileAsDataUrl(mediaSrc.file)
        ]);
        const imageInfo = buildLocalImageInfo(image, mediaSrc.fileName);
        const result = await analyzeImageStream({
          apiKey: settings.apiKey, baseUrl: settings.baseUrl, modelName: settings.modelName,
          targetModel: settings.targetModel, imageDataUrl, imageInfo,
          signal: controller.signal,
          onProgress: (text: string) => {
            updateIVTab(tab, { streamText: text, resultText: text });
          }
        });
        const generatedState = createAnalysisState(activeTabId, "generated", "识别完成", settings.targetModel, {
          mediaType: "image", sourceType: "local", imageInfo, previewFrameUrl: imageDataUrl,
          ...result, promptResult: result.promptResult as GeminiPromptResponse | undefined
        });
        updateIVTab(tab, {
          mediaSource: { kind: "local-image", objectUrl: mediaSrc.objectUrl, fileName: mediaSrc.fileName, file: mediaSrc.file, imageInfo },
          analysisState: generatedState,
          resultMode: "text",
          resultText: result.generatedPrompt,
          rawResultText: result.rawResult,
          promptResult: result.promptResult as GeminiPromptResponse,
          resultMediaType: "image",
          displayFormat: "json",
          isAnalyzingLocal: false,
        });
        await persistHistoryRecord({
          sourceType: "local", mediaType: "image", sourceUrl: imageInfo.src, pageTitle: imageInfo.pageTitle,
          thumbnailDataUrl: imageDataUrl, promptText: result.generatedPrompt, videoSummary: result.imageSummary,
          promptResult: result.promptResult as GeminiPromptResponse, dedupeKey: `local:image:${generatedState.updatedAt}:${result.generatedPrompt}`
        });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          resetIVTabResult(tab);
          updateIVTab(tab, { isAnalyzingLocal: false });
          return;
        }
        const message = error instanceof Error ? error.message : "无法分析此图片，请尝试其他文件。";
        updateIVTab(tab, {
          analysisState: createAnalysisState(activeTabId, "error", message, settings.targetModel, {
            mediaType: "image", sourceType: "local", errorMessage: message
          }),
          resultMode: "error",
          resultText: message,
          isAnalyzingLocal: false,
        });
      } finally {
        abortControllerRefs.current[tab] = null;
      }
    }
  }

  async function handleClear() {
    if (isAnalyzing) return;
    const tab = currentIVTab;
    if (localObjectUrlRefs.current[tab]) {
      URL.revokeObjectURL(localObjectUrlRefs.current[tab]!);
      localObjectUrlRefs.current[tab] = null;
    }
    if (activeTabId) {
      await chrome.runtime.sendMessage({ type: "VIDEO2PROMPT_CLEAR_ACTIVE_ANALYSIS", tabId: activeTabId } satisfies RuntimeMessage);
    }
    updateIVTab(tab, {
      mediaSource: { kind: "none" },
      analysisState: createAnalysisState(activeTabId, "idle", "结果将在此呈现", settings.targetModel),
      uploadError: null,
    });
    resetIVTabResult(tab);
  }

  function handleAbort() {
    const tab = currentIVTab;
    if (abortControllerRefs.current[tab]) {
      abortControllerRefs.current[tab]!.abort();
      abortControllerRefs.current[tab] = null;
    }
  }

  function handleUploadClick() {
    updateIVTab(currentIVTab, { uploadError: null });
    if (activeTab === "image") {
      imageFileRef.current?.click();
    } else if (activeTab === "video") {
      videoFileRef.current?.click();
    }
  }

  async function handleLocalUpload(event: ChangeEvent<HTMLInputElement>, expectedType: "image" | "video") {
    const file = event.target.files?.[0];
    if (!file) return;

    const tab = expectedType;

    if (expectedType === "image" && !ALLOWED_IMAGE_TYPES.has(file.type)) {
      updateIVTab(tab, { uploadError: "请上传图片文件（JPG / PNG / WebP / GIF / BMP / SVG）" });
      event.target.value = "";
      return;
    }

    if (expectedType === "video" && !ALLOWED_VIDEO_TYPES.has(file.type)) {
      updateIVTab(tab, { uploadError: "请上传视频文件（MP4 / WebM / OGG / MOV / AVI）" });
      event.target.value = "";
      return;
    }

    updateIVTab(tab, { uploadError: null });

    if (localObjectUrlRefs.current[tab]) URL.revokeObjectURL(localObjectUrlRefs.current[tab]!);
    const objectUrl = URL.createObjectURL(file);
    localObjectUrlRefs.current[tab] = objectUrl;

    if (file.type.startsWith("image/")) {
      const image = await createImageElement(objectUrl);
      const imageInfo = buildLocalImageInfo(image, file.name);
      updateIVTab(tab, {
        mediaSource: { kind: "local-image", objectUrl, fileName: file.name, file, imageInfo },
        analysisState: createAnalysisState(activeTabId, "ready", "图片已就绪", settings.targetModel, {
          mediaType: "image", sourceType: "local", imageInfo, previewFrameUrl: objectUrl
        }),
      });
    } else {
      const video = await createVideoElement(objectUrl);
      const videoInfo = buildLocalVideoInfo(video, file.name);
      updateIVTab(tab, {
        mediaSource: { kind: "local-video", objectUrl, fileName: file.name, videoInfo },
        analysisState: createAnalysisState(activeTabId, "ready", "视频已就绪", settings.targetModel, {
          mediaType: "video", sourceType: "local", videoInfo
        }),
      });
    }

    resetIVTabResult(tab);
    event.target.value = "";
  }

  async function handleCopy() {
    if (!showCopy) return;
    const tab = currentIVTab;
    const data = ivTabData[tab];
    const textToCopy = data.editedResultText !== null ? data.editedResultText : displayResultText;
    try {
      await navigator.clipboard.writeText(textToCopy);
      updateIVTab(tab, { copyLabel: "已复制" });
      window.setTimeout(() => updateIVTab(tab, { copyLabel: "复制" }), 1600);
    } catch {
      updateIVTab(tab, { copyLabel: "复制" });
    }
  }

  function getHistoryCopyText(item: PromptHistoryItem): string {
    if (item.promptResult) {
      return JSON.stringify(item.promptResult, null, 2);
    }
    return item.promptText;
  }

  async function handleCopyHistory(item: PromptHistoryItem) {
    try {
      await navigator.clipboard.writeText(getHistoryCopyText(item));
      setCopiedHistoryId(item.id);
      window.setTimeout(() => {
        setCopiedHistoryId((current) => (current === item.id ? null : current));
      }, 1600);
    } catch {
      setCopiedHistoryId(null);
    }
  }

  function getHistoryTypeLabel(item: PromptHistoryItem): string {
    if (item.sourceType === "enhancer") return "提示词增强";
    if (item.mediaType === "video") return "视频识词";
    return "图片识词";
  }

  function getHistoryDisplayText(item: PromptHistoryItem): string {
    return getHistoryCopyText(item);
  }

  async function handleDeleteHistory(item: PromptHistoryItem) {
    const nextHistory = await deletePromptHistoryItem(item.id);
    setHistoryItems(nextHistory);
  }

  async function handleSaveApiKey() {
    let nextSettings = await saveApiKey(apiKeyInput);
    nextSettings = await saveBaseUrl(baseUrlInput);
    nextSettings = await saveModelName(modelNameInput);
    setSettings(nextSettings);
    setApiKeyInput(nextSettings.apiKey);
    setBaseUrlInput(nextSettings.baseUrl);
    setModelNameInput(nextSettings.modelName);
    showToast("配置已保存");
  }

  async function handleDeleteSavedApiKey() {
    const confirmed = window.confirm("确定删除已保存的模型配置吗？\n重新配置后才能继续使用。");
    if (!confirmed) return;
    const nextSettings = await deleteApiKey();
    setSettings(nextSettings);
    setApiKeyInput("");
    setBaseUrlInput(defaultSettings.baseUrl);
    setModelNameInput("");
    showToast("配置已删除");
  }

  async function handleFrameSamplingModeChange(mode: FrameSamplingMode) {
    if (settings.frameSamplingMode === mode) return;
    const nextSettings = await saveFrameSamplingMode(mode);
    setSettings(nextSettings);
    showToast("帧采样模式已保存");
  }

  function resetEnhancerResult() {
    setEnhancerResultMode("empty");
    setEnhancerResultText("增强结果将在此呈现");
    setEnhancerCopyLabel("复制");
  }

  async function handleEnhancePrompt() {
    if (!enhancerInput.trim() || isEnhancingPrompt) return;
    if (!hasApiKey) { setSubView("settings"); setMenuOpen(false); return; }

    setIsEnhancingPrompt(true);
    setEnhancerResultMode("loading");
    setEnhancerResultText("正在增强中...");
    setEnhancerCopyLabel("复制");

    const controller = new AbortController();
    enhancerAbortRef.current = controller;

    try {
      const result = await enhancePrompt({
        apiKey: settings.apiKey, baseUrl: settings.baseUrl, modelName: settings.modelName,
        mode: enhancerMode, idea: enhancerInput,
        signal: controller.signal
      });
      setEnhancerResultMode("text");
      setEnhancerResultText(result);
      await persistHistoryRecord({
        sourceType: "enhancer", mediaType: enhancerMode,
        sourceUrl: `prompt-enhancer://${enhancerMode}`,
        pageTitle: enhancerMode === "video" ? "视频提示词增强" : "图片提示词增强",
        promptText: result, videoSummary: enhancerInput.trim(),
        dedupeKey: `enhancer:${enhancerMode}:${result}`
      });
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        resetEnhancerResult();
        return;
      }
      const message = error instanceof Error ? error.message : "无法增强此提示词，请重试。";
      setEnhancerResultMode("error");
      setEnhancerResultText(message);
    } finally {
      setIsEnhancingPrompt(false);
      enhancerAbortRef.current = null;
    }
  }

  function handleAbortEnhancer() {
    if (enhancerAbortRef.current) {
      enhancerAbortRef.current.abort();
      enhancerAbortRef.current = null;
    }
  }

  async function handleCopyEnhancerResult() {
    if (!showEnhancerCopy) return;
    try {
      await navigator.clipboard.writeText(enhancerResultText);
      setEnhancerCopyLabel("已复制");
      window.setTimeout(() => setEnhancerCopyLabel("复制"), 1600);
    } catch {
      setEnhancerCopyLabel("复制");
    }
  }

  function handleTabChange(tab: TabId) {
    setActiveTab(tab);
    setSubView("main");
  }

  const [copiedHistoryId, setCopiedHistoryId] = useState<string | null>(null);

  const currentMediaPreview = useMemo(() => {
    const ms = currentData.mediaSource;
    if (ms.kind === "web-image" && ms.previewUrl) {
      return <img src={ms.previewUrl} alt="图片预览" className="video-preview-media" />;
    }
    if (ms.kind === "local-video") {
      return <video className="video-preview-media" src={ms.objectUrl} muted playsInline preload="metadata" />;
    }
    if (ms.kind === "local-image") {
      return <img src={ms.objectUrl} alt="图片预览" className="video-preview-media" />;
    }
    if (ms.kind === "web-image") {
      return <div className="video-preview-placeholder" />;
    }
    return null;
  }, [currentData.mediaSource]);

  const currentMediaAspectRatio = useMemo(() => getMediaAspectRatio(currentData.mediaSource), [currentData.mediaSource]);

  const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: "image", label: "图片识词", icon: <ImageIcon /> },
    { id: "video", label: "视频识词", icon: <VideoIcon /> },
    { id: "enhancer", label: "提示词增强", icon: <WandIcon /> }
  ];

  return (
    <main className="sophia-shell">
      <input ref={imageFileRef} className="hidden-file-input" type="file" accept={IMAGE_ACCEPT} onChange={(e) => void handleLocalUpload(e, "image")} />
      <input ref={videoFileRef} className="hidden-file-input" type="file" accept={VIDEO_ACCEPT} onChange={(e) => void handleLocalUpload(e, "video")} />

      {subView === "main" ? (
        <>
          <header className="app-header">
            <div className="header-top">
              <div className="brand-lockup">
                <img src="icons/logo_new1.png" alt="" className="brand-icon" />
                <img src="icons/logoword.png" alt="Sophia" className="brand-wordmark-img" />
              </div>
              <div className="header-menu-wrap" ref={menuRef}>
                <button className="menu-button" aria-label="更多操作" aria-expanded={menuOpen} onClick={() => setMenuOpen((c) => !c)}>
                  <MoreIcon />
                </button>
                {menuOpen ? (
                  <div className="header-dropdown-menu">
                    <button className="dropdown-item" onClick={() => { setSubView("history"); setMenuOpen(false); }}>
                      <HistoryIcon /><span>历史记录</span>
                    </button>
                    <button className="dropdown-item" onClick={() => { setSubView("settings"); setMenuOpen(false); }}>
                      <GearIcon /><span>设置</span>
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <nav className="tab-bar" role="tablist">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`tab-item ${activeTab === tab.id ? "is-active" : ""}`}
                  onClick={() => handleTabChange(tab.id)}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </header>

          <div className="page-content">
            {activeTab === "image" ? (
              <ImageVideoPage
                mode="image"
                tabData={ivTabData.image}
                isAnalyzing={isAnalyzing}
                canAnalyze={canAnalyze}
                hasApiKey={hasApiKey}
                displayResultText={displayResultText}
                showCopy={showCopy}
                currentMediaPreview={currentMediaPreview}
                currentMediaAspectRatio={currentMediaAspectRatio}
                onUploadClick={handleUploadClick}
                onAnalyze={handleAnalyze}
                onClear={handleClear}
                onAbort={handleAbort}
                onCopy={handleCopy}
                onEditResult={(val) => updateIVTab("image", { editedResultText: val })}
              />
            ) : null}

            {activeTab === "video" ? (
              <ImageVideoPage
                mode="video"
                tabData={ivTabData.video}
                isAnalyzing={isAnalyzing}
                canAnalyze={canAnalyze}
                hasApiKey={hasApiKey}
                displayResultText={displayResultText}
                showCopy={showCopy}
                currentMediaPreview={currentMediaPreview}
                currentMediaAspectRatio={currentMediaAspectRatio}
                frameSamplingMode={settings.frameSamplingMode}
                onUploadClick={handleUploadClick}
                onAnalyze={handleAnalyze}
                onClear={handleClear}
                onAbort={handleAbort}
                onCopy={handleCopy}
                onEditResult={(val) => updateIVTab("video", { editedResultText: val })}
                onFrameSamplingModeChange={handleFrameSamplingModeChange}
              />
            ) : null}

            {activeTab === "enhancer" ? (
              <EnhancerPage
                enhancerMode={enhancerMode}
                enhancerInput={enhancerInput}
                isEnhancingPrompt={isEnhancingPrompt}
                canEnhancePrompt={canEnhancePrompt}
                hasApiKey={hasApiKey}
                enhancerResultMode={enhancerResultMode}
                enhancerResultText={enhancerResultText}
                enhancerCopyLabel={enhancerCopyLabel}
                showEnhancerCopy={showEnhancerCopy}
                onSetEnhancerMode={(mode) => { setEnhancerMode(mode); resetEnhancerResult(); }}
                onSetEnhancerInput={setEnhancerInput}
                onEnhance={handleEnhancePrompt}
                onAbortEnhancer={handleAbortEnhancer}
                onCopyEnhancer={() => void handleCopyEnhancerResult()}
              />
            ) : null}
          </div>
        </>
      ) : null}

      {subView === "history" ? (
        <section className="subview-screen">
          <div className="subview-topbar">
            <div className="subview-title-row">
              <button className="back-button back-button-box" onClick={() => setSubView("main")}>
                <svg aria-hidden="true" className="tiny-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18L9 12L15 6" /></svg>
              </button>
              <div className="subview-title-group">
                <h2 className="subview-title">历史记录</h2>
                <p className="subview-subtitle">最近生成的记录</p>
              </div>
            </div>
          </div>
          <section className="history-panel">
            {historyItems.length === 0 ? (
              <div className="history-empty-state history-empty-state-large">
                <strong>暂无历史记录</strong>
                <p>生成结果后会自动保存到这里</p>
              </div>
            ) : (
              <div className="history-list history-list-large">
                {historyItems.map((item) => {
                  const displayText = getHistoryDisplayText(item);
                  const isCopied = copiedHistoryId === item.id;
                  const isEnhancer = item.sourceType === "enhancer";
                  const hasThumbnail = !isEnhancer && item.thumbnailDataUrl;

                  return (
                    <article className="history-item history-item-large" key={item.id}>
                      <div className="history-content">
                        <div className="history-meta history-meta-large">
                          <span className="history-time">
                            <ClockIcon /><span>{formatHistoryTime(item.createdAt)}</span>
                          </span>
                          <span className={`source-pill source-pill-type ${isEnhancer ? "source-pill-enhancer" : item.mediaType === "video" ? "source-pill-video" : "source-pill-image"}`}>
                            {isEnhancer ? <WandIcon /> : item.mediaType === "video" ? <VideoIcon /> : <ImageIcon />}
                            {getHistoryTypeLabel(item)}
                          </span>
                        </div>

                        <div className={`history-title-area ${hasThumbnail ? "history-title-area--with-thumb" : ""}`}>
                          {hasThumbnail ? (
                            <>
                              <HistoryThumbnail src={item.thumbnailDataUrl!} />
                              <p className="prompt-preview prompt-preview-large">{displayText}</p>
                            </>
                          ) : (
                            <p className="prompt-preview prompt-preview-large prompt-preview--full">{item.videoSummary || item.promptText}</p>
                          )}
                        </div>

                        <div className="history-item-divider" />
                        <div className="history-actions history-actions-wide">
                          <div className="history-actions-right">
                            <button className="history-action-button history-action-copy" onClick={() => void handleCopyHistory(item)}>
                              {isCopied ? <span>已复制</span> : <><CopyIcon /><span>复制</span></>}
                            </button>
                            <button className="history-action-button history-action-delete" onClick={() => void handleDeleteHistory(item)}>
                              <TrashIcon />
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        </section>
      ) : null}

      {subView === "settings" ? (
        <section className="subview-screen">
          <div className="subview-topbar">
            <div className="subview-title-row">
              <button className="back-button back-button-box" onClick={() => setSubView("main")}>
                <svg aria-hidden="true" className="tiny-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18L9 12L15 6" /></svg>
              </button>
              <h2 className="subview-title">设置</h2>
            </div>
          </div>
          <section className="settings-stack">
            <article className="sophia-card settings-hero-card">
              <div className="settings-hero-top">
                <div className="settings-icon-box"><KeyIcon /></div>
                <h3 className="settings-hero-title">模型配置</h3>
              </div>
              <div className="settings-hero-divider" />
              <label className="settings-field settings-field-large">
                <span>模型名称</span>
                <input type="text" value={modelNameInput} onChange={(e) => setModelNameInput(e.target.value)} placeholder="例如 gpt-4o、deepseek-chat" autoComplete="off" />
              </label>
              <label className="settings-field settings-field-large">
                <span>API 密钥</span>
                <div className="settings-input-wrap">
                  <input type={showApiKey ? "text" : "password"} value={apiKeyInput} onChange={(e) => setApiKeyInput(e.target.value)} placeholder="输入你的 API 密钥" autoComplete="off" />
                  <button type="button" className="input-icon-button" aria-label={showApiKey ? "隐藏" : "显示"} onClick={() => setShowApiKey((c) => !c)}>
                    <EyeIcon />
                  </button>
                </div>
              </label>
              <label className="settings-field settings-field-large">
                <span>接口地址</span>
                <input type="text" value={baseUrlInput} onChange={(e) => setBaseUrlInput(e.target.value)} placeholder="https://api.openai.com/v1" autoComplete="off" />
              </label>
              <div className="settings-actions-column settings-actions-column-large">
                <button className="primary-button full-width-button settings-primary-cta" onClick={() => void handleSaveApiKey()}>
                    <ShieldIcon /><span>{settings.apiKey ? "更新配置" : "保存配置"}</span>
                </button>
                {settings.apiKey ? (
                  <button className="settings-delete-button" onClick={() => void handleDeleteSavedApiKey()}>
                    <TrashIcon /><span>删除配置</span>
                  </button>
                ) : null}
              </div>
            </article>
            <article className="sophia-card settings-privacy-card">
              <div className="settings-privacy-row">
                <div className="settings-icon-box settings-icon-box-soft"><ShieldIcon /></div>
                <div className="settings-privacy-copy">
                  <h3 className="settings-privacy-title">隐私</h3>
                  <p>你的 API 密钥和配置仅存储在浏览器本地，不会上传至任何服务器</p>
                </div>
              </div>
            </article>
          </section>
        </section>
      ) : null}

      {statusMessage ? <div className="toast-modern">{statusMessage}</div> : null}
    </main>
  );
}

function ImageVideoPage({
  mode,
  tabData,
  isAnalyzing,
  canAnalyze,
  hasApiKey,
  displayResultText,
  showCopy,
  currentMediaPreview,
  currentMediaAspectRatio,
  frameSamplingMode,
  onUploadClick,
  onAnalyze,
  onClear,
  onAbort,
  onCopy,
  onEditResult,
  onFrameSamplingModeChange
}: {
  mode: "image" | "video";
  tabData: IVTabData;
  isAnalyzing: boolean;
  canAnalyze: boolean;
  hasApiKey: boolean;
  displayResultText: string;
  showCopy: boolean;
  currentMediaPreview: React.ReactNode;
  currentMediaAspectRatio: string | undefined;
  frameSamplingMode?: FrameSamplingMode;
  onUploadClick: () => void;
  onAnalyze: () => void;
  onClear: () => void;
  onAbort: () => void;
  onCopy: () => void;
  onEditResult: (val: string) => void;
  onFrameSamplingModeChange?: (mode: FrameSamplingMode) => void;
}) {
  const isImage = mode === "image";
  const mediaLabel = isImage ? "图片" : "视频";
  const acceptHint = isImage ? "JPG / PNG / WebP / GIF" : "MP4 / WebM / MOV";
  const [isExpanded, setIsExpanded] = useState(false);
  const [samplingDropdownOpen, setSamplingDropdownOpen] = useState(false);

  return (
    <>
      <section className={`sophia-card sophia-card--interactive media-section ${isExpanded ? "media-section--compact" : ""} ${samplingDropdownOpen ? "is-dropdown-open" : ""}`}>
        {tabData.mediaSource.kind === "none" ? (
          <div className="upload-state" onClick={onUploadClick} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onUploadClick(); }}>
            <PlusIcon />
            <strong>添加{mediaLabel}</strong>
            <p>支持 {acceptHint} 等格式，也可右键网页{mediaLabel}直接分析</p>
            {tabData.uploadError ? <p className="upload-error-text">{tabData.uploadError}</p> : null}
          </div>
        ) : (
          <div className={`video-preview-frame ${isExpanded ? "video-preview-frame--compact" : ""}`} style={currentMediaAspectRatio && !isExpanded ? { aspectRatio: currentMediaAspectRatio } : undefined}>
            {currentMediaPreview}
          </div>
        )}

        {!isImage && frameSamplingMode && onFrameSamplingModeChange ? (
          <div className="frame-sampling-section">
            <div className="frame-sampling-header">
              <div className="frame-sampling-title-row">
                <span className="frame-sampling-title">帧采样</span>
                <span className="frame-sampling-info-wrap" role="note">
                  <svg className="frame-sampling-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <span className="frame-sampling-tooltip">
                    <strong>本地视频帧数量：</strong>
                    <span><strong>快速：</strong>固定 5 帧</span>
                    <span><strong>标准：</strong>≤10s 6帧，10-30s 10帧，30-60s 14帧，&gt;60s 16帧</span>
                    <span><strong>详细：</strong>≤10s 10帧，10-30s 16帧，30-60s 24帧，&gt;60s 32帧</span>
                  </span>
                </span>
              </div>
              <p className="frame-sampling-hint">仅影响本地视频分析，图片分析不使用帧采样</p>
            </div>
            <div className="frame-sampling-dropdown">
              <button
                type="button"
                className={`frame-sampling-trigger ${samplingDropdownOpen ? "is-open" : ""}`}
                onClick={() => setSamplingDropdownOpen((c) => !c)}
              >
                <span className="frame-sampling-trigger-label">{FRAME_MODE_COPY[frameSamplingMode].label}</span>
                <span className="frame-sampling-trigger-desc">{FRAME_MODE_COPY[frameSamplingMode].description}</span>
                <svg className="frame-sampling-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {samplingDropdownOpen ? (
                <div className="frame-sampling-options">
                  {(Object.keys(FRAME_MODE_COPY) as FrameSamplingMode[]).map((m) => {
                    const isSelected = frameSamplingMode === m;
                    return (
                      <button
                        key={m}
                        type="button"
                        className={`frame-sampling-option ${isSelected ? "is-selected" : ""}`}
                        onClick={() => {
                          onFrameSamplingModeChange(m);
                          setSamplingDropdownOpen(false);
                        }}
                      >
                        <div className="frame-sampling-option-text">
                          <span className="frame-sampling-option-label">{FRAME_MODE_COPY[m].label}</span>
                          <span className="frame-sampling-option-desc">{FRAME_MODE_COPY[m].description}</span>
                        </div>
                        {isSelected ? (
                          <svg className="frame-sampling-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                          </svg>
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        {tabData.mediaSource.kind !== "none" ? (
          <div className="button-row">
            <button
              className={`primary-button ${isAnalyzing ? "primary-button-analyzing" : ""}`}
              onClick={onAnalyze}
              disabled={!canAnalyze}
            >
              {isAnalyzing ? <><SpinnerIcon />识别中</> : tabData.resultMode === "text" ? "重新生成" : "生成"}
            </button>
            <button className="secondary-button" onClick={onClear} disabled={isAnalyzing}>清除</button>
            {isAnalyzing ? (
              <button className="secondary-button abort-button" onClick={onAbort}>中止</button>
            ) : null}
          </div>
        ) : null}

        {!hasApiKey && tabData.mediaSource.kind !== "none" ? (
          <p className="hint-text">请先在设置中配置模型信息</p>
        ) : null}
      </section>

      <section className={`sophia-card result-section ${isExpanded ? "result-section--expanded" : ""}`}>
        <div className="result-header">
          <div className="card-title">识别结果</div>
          {tabData.resultMode === "text" ? (
            <div className="result-header-actions">
              <div className="result-header-right">
                {showCopy ? (
                  <button className="copy-button" onClick={onCopy}>
                    {tabData.copyLabel === "已复制" ? "已复制" : "复制"}
                  </button>
                ) : null}
                <button className="expand-toggle" onClick={() => setIsExpanded(v => !v)} title={isExpanded ? "收起" : "展开"}>
                  <ExpandIcon expanded={isExpanded} />
                </button>
              </div>
            </div>
          ) : null}
        </div>
        <div className={`result-box result-box-${tabData.resultMode}`}>
          {tabData.resultMode === "loading" ? (
            <div className="loading-state">
              <SpinnerIcon />
              <strong>{tabData.streamText ? "实时生成中..." : "正在识别中..."}</strong>
              {tabData.streamText ? (
                <pre className="stream-preview">{tabData.streamText}</pre>
              ) : null}
            </div>
          ) : null}
          {tabData.resultMode === "empty" ? (
            <div className="result-placeholder"><SparklePlaceholder /><p>上传{mediaLabel}后点击生成，结果将在此呈现</p></div>
          ) : null}
          {tabData.resultMode === "error" ? <div className="result-error"><p>{tabData.resultText}</p></div> : null}
          {tabData.resultMode === "text" ? (
            <textarea
              className="result-textarea"
              value={displayResultText}
              onChange={(e) => onEditResult(e.target.value)}
              spellCheck={false}
            />
          ) : null}
        </div>
      </section>
    </>
  );
}

function EnhancerPage({
  enhancerMode,
  enhancerInput,
  isEnhancingPrompt,
  canEnhancePrompt,
  hasApiKey,
  enhancerResultMode,
  enhancerResultText,
  enhancerCopyLabel,
  showEnhancerCopy,
  onSetEnhancerMode,
  onSetEnhancerInput,
  onEnhance,
  onAbortEnhancer,
  onCopyEnhancer
}: {
  enhancerMode: PromptEnhancerMode;
  enhancerInput: string;
  isEnhancingPrompt: boolean;
  canEnhancePrompt: boolean;
  hasApiKey: boolean;
  enhancerResultMode: "empty" | "loading" | "text" | "error";
  enhancerResultText: string;
  enhancerCopyLabel: string;
  showEnhancerCopy: boolean;
  onSetEnhancerMode: (mode: PromptEnhancerMode) => void;
  onSetEnhancerInput: (val: string) => void;
  onEnhance: () => void;
  onAbortEnhancer: () => void;
  onCopyEnhancer: () => void;
}) {
  return (
    <>
      <section className="sophia-card enhancer-card">
        <div className="enhancer-tabs" role="tablist" aria-label="增强器模式">
          <button type="button" role="tab" aria-selected={enhancerMode === "video"}
            className={`enhancer-tab ${enhancerMode === "video" ? "is-selected" : ""}`}
            onClick={() => onSetEnhancerMode("video")}>
            <EnhancerVideoIcon /><span>视频</span>
          </button>
          <button type="button" role="tab" aria-selected={enhancerMode === "image"}
            className={`enhancer-tab ${enhancerMode === "image" ? "is-selected" : ""}`}
            onClick={() => onSetEnhancerMode("image")}>
            <EnhancerImageIcon /><span>图片</span>
          </button>
        </div>

        <label className="enhancer-field">
          <textarea
            value={enhancerInput}
            onChange={(e) => onSetEnhancerInput(e.target.value)}
            placeholder={enhancerMode === "video"
              ? "描述你的视频创意，例如：一个女孩在雨中漫步，慢镜头，电影质感"
              : "描述你的图片创意，例如：一只金毛幼犬在草地上奔跑，阳光明媚"}
            rows={5}
          />
        </label>

        {isEnhancingPrompt ? (
          <div className="button-row">
            <button className="primary-button primary-button-analyzing" disabled>
              <SpinnerIcon />增强中
            </button>
            <button className="secondary-button abort-button" onClick={onAbortEnhancer}>中止</button>
          </div>
        ) : (
          <button
            className="primary-button full-width-button enhancer-submit-button"
            onClick={() => void onEnhance()}
            disabled={!canEnhancePrompt}
          >
            <WandIcon /><span>增强</span>
          </button>
        )}

        {!hasApiKey ? (
          <p className="hint-text">请先在设置中配置模型信息</p>
        ) : null}
      </section>

      <section className="sophia-card">
        <div className="result-header">
          <div className="card-title">增强结果</div>
          {showEnhancerCopy ? (
            <button className="copy-button" onClick={() => void onCopyEnhancer()}>
              {enhancerCopyLabel}
            </button>
          ) : null}
        </div>
        <div className={`result-box result-box-${enhancerResultMode}`}>
          {enhancerResultMode === "loading" ? (
            <div className="loading-state"><SpinnerIcon /><strong>正在增强中...</strong></div>
          ) : null}
          {enhancerResultMode === "empty" ? (
            <div className="result-placeholder"><SparklePlaceholder /><p>输入创意后点击增强，结果将在此呈现</p></div>
          ) : null}
          {enhancerResultMode === "error" ? <div className="result-error"><p>{enhancerResultText}</p></div> : null}
          {enhancerResultMode === "text" ? <div className="result-text-block">{enhancerResultText}</div> : null}
        </div>
      </section>
    </>
  );
}
