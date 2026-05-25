import { useState } from "react";
import styled from "styled-components";
import type { FrameSamplingMode } from "../lib/types";
import {
  SpinnerIcon,
  SparklePlaceholder,
  ExpandIcon,
} from "./icons";
import { useClickOutside } from "./useClickOutside";
import {
  type IVTabData,
  FRAME_MODE_COPY,
  IMAGE_ACCEPT,
  VIDEO_ACCEPT,
  ALLOWED_IMAGE_TYPES,
  ALLOWED_VIDEO_TYPES,
} from "./types";

const UploadFormCard = styled.section`
  background: var(--glass-bg);
  -webkit-backdrop-filter: var(--glass-blur);
  backdrop-filter: var(--glass-blur);
  border-radius: var(--radius-xl);
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px dashed rgba(0, 0, 0, 0.2);
  box-shadow: var(--glass-shadow), var(--glass-inner-shadow), inset 0 2px 12px rgba(0, 0, 0, 0.03);
  overflow: visible;
  position: relative;
  transition: all var(--duration-normal) var(--ease-out);
  min-height: 260px;
  max-height: 320px;

  &.is-drag-over {
    border-color: var(--glass-border-hover);
    border-style: solid;
    box-shadow: var(--glass-shadow-hover), var(--glass-inner-shadow), inset 0 2px 16px rgba(0, 0, 0, 0.06);
    transform: scale(1.005);
  }

  .upload-label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: var(--space-5) var(--space-6);
    box-sizing: border-box;
    flex: 1;
    min-height: 0;
  }

  .upload-design {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    width: 100%;
  }

  .upload-design svg {
    margin-bottom: var(--space-2);
    flex-shrink: 0;
  }

  .upload-title {
    font-size: var(--text-base);
    font-weight: var(--font-medium);
    color: var(--text-primary);
    margin: 0;
  }

  .upload-or {
    font-size: var(--text-xs);
    color: var(--text-tertiary);
    margin: var(--space-1) 0;
  }

  .upload-hint {
    font-size: var(--text-xxs);
    color: var(--text-tertiary);
    margin: var(--space-3) 0 0;
  }

  .upload-error {
    color: var(--danger);
    font-size: var(--text-xs);
    margin: var(--space-2) 0 0;
    text-align: center;
  }

  .upload-preview {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-xl) var(--radius-xl) 0 0;
    overflow: hidden;
    padding: var(--space-3);
    box-sizing: border-box;
    min-height: 0;

    img, video {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      display: block;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &.is-expanded {
    max-height: 120px;
    min-height: 80px;

    .upload-preview {
      padding: var(--space-1);
      img, video {
        max-height: 60px;
        min-height: 60px;
        max-width: 80px;
      }
    }

    .upload-actions {
      padding: var(--space-1) var(--space-3);
      gap: var(--space-2);

      .btn-primary, .btn-secondary {
        font-size: var(--text-xs);
        padding: 4px 10px;
        height: auto;
      }
    }
  }

  .upload-actions {
    display: flex;
    gap: var(--space-3);
    padding: var(--space-3) var(--space-5);
    width: 100%;
    box-sizing: border-box;
    justify-content: center;
    flex-shrink: 0;
  }

  .upload-hint-warn {
    font-size: var(--text-xs);
    color: var(--danger);
    text-align: center;
    padding: 0 var(--space-5) var(--space-4);
    margin: 0;
  }
`;

export function ImageVideoPage({
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
  onToggleExpanded,
  onFrameSamplingModeChange,
  onFileDrop,
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
  onToggleExpanded: () => void;
  onFrameSamplingModeChange?: (mode: FrameSamplingMode) => void;
  onFileDrop?: (file: File) => void;
}) {
  const isImage = mode === "image";
  const mediaLabel = isImage ? "图片" : "视频";
  const acceptHint = isImage ? "JPG / PNG / WebP / GIF" : "MP4 / WebM / MOV";
  const allowedTypes = isImage ? ALLOWED_IMAGE_TYPES : ALLOWED_VIDEO_TYPES;
  const isExpanded = tabData.isExpanded;
  const [samplingDropdownOpen, setSamplingDropdownOpen] = useState(false);
  const samplingDropdownRef = useClickOutside(samplingDropdownOpen, () => setSamplingDropdownOpen(false));
  const [showSamplingInfo, setShowSamplingInfo] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    if (!allowedTypes.has(file.type)) {
      return;
    }
    if (onFileDrop) {
      onFileDrop(file);
    }
  };

  return (
    <>
      <UploadFormCard className={`${isDragOver ? "is-drag-over" : ""} ${isExpanded ? "is-expanded" : ""}`}>
        {tabData.mediaSource.kind === "none" ? (
          <label
            className="upload-label"
            onClick={onUploadClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onUploadClick(); }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="upload-design">
              <svg height="36" viewBox="0 0 640 512" fill="rgb(82, 82, 82)">
                <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
              </svg>
              <p className="upload-title">拖拽{mediaLabel}到此处</p>
              <p className="upload-or">或</p>
              <span className="btn-primary">选择文件</span>
              <p className="upload-hint">支持 {acceptHint} 等格式</p>
            </div>
            {tabData.uploadError ? <p className="upload-error">{tabData.uploadError}</p> : null}
          </label>
        ) : (
          <>
            <div className="upload-preview" style={currentMediaAspectRatio ? { aspectRatio: currentMediaAspectRatio } : undefined}>
              {currentMediaPreview}
            </div>
            <div className="upload-actions">
              <button
                className={`btn-primary ${isAnalyzing ? "btn-primary--busy" : ""}`}
                onClick={onAnalyze}
                disabled={!canAnalyze}
              >
                {isAnalyzing ? <><SpinnerIcon />识别中</> : tabData.resultMode === "text" ? "重新生成" : "生成"}
              </button>
              <button className="btn-secondary" onClick={onClear} disabled={isAnalyzing}>清除</button>
              {isAnalyzing ? (
                <button className="btn-secondary" onClick={onAbort}>中止</button>
              ) : null}
            </div>
            {!hasApiKey ? <p className="upload-hint-warn">请先在设置中配置模型信息</p> : null}
          </>
        )}
      </UploadFormCard>

      {!isImage && frameSamplingMode && onFrameSamplingModeChange ? (
        <div className="frame-sampling-row">
          <div className="frame-sampling-header">
            <span className="frame-sampling-title">帧采样</span>
            <button
              type="button"
              className="frame-sampling-info-btn"
              onMouseEnter={() => setShowSamplingInfo(true)}
              onMouseLeave={() => setShowSamplingInfo(false)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </button>
            {showSamplingInfo ? (
              <div className="frame-sampling-tooltip">
                选择帧采样方式，控制从视频中提取的帧数量和策略
              </div>
            ) : null}
          </div>
          <div className="frame-sampling-dropdown" ref={samplingDropdownRef}>
            <button
              type="button"
              className={`frame-sampling-trigger ${samplingDropdownOpen ? "is-open" : ""}`}
              onClick={() => setSamplingDropdownOpen((c) => !c)}
            >
              <span className="frame-sampling-label">{FRAME_MODE_COPY[frameSamplingMode].label}</span>
              <svg className="frame-sampling-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {samplingDropdownOpen ? (
              <div className="frame-sampling-menu">
                {(Object.keys(FRAME_MODE_COPY) as FrameSamplingMode[]).map((m) => (
                  <button
                    key={m}
                    type="button"
                    className={`frame-sampling-opt ${frameSamplingMode === m ? "is-selected" : ""}`}
                    onClick={() => { onFrameSamplingModeChange(m); setSamplingDropdownOpen(false); }}
                  >
                    <span className="frame-sampling-opt-label">{FRAME_MODE_COPY[m].label}</span>
                    <span className="frame-sampling-opt-desc">{FRAME_MODE_COPY[m].description}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      <section className={`result-card ${isExpanded ? "result-card--expanded" : ""}`}>
        <div className="result-card-head">
          <span className="result-card-title">识别结果</span>
          {tabData.resultMode === "text" ? (
            <div className="result-card-actions">
              {showCopy ? (
                <button className={`result-copy-icon-btn${tabData.copyLabel === "已复制" ? " is-copied" : ""}`} onClick={onCopy} title={tabData.copyLabel === "已复制" ? "已复制" : "复制"}>
                  {tabData.copyLabel === "已复制" ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  )}
                </button>
              ) : null}
              <button className="result-expand-btn" onClick={onToggleExpanded} title={isExpanded ? "收起" : "展开"}>
                <ExpandIcon expanded={isExpanded} />
              </button>
            </div>
          ) : null}
        </div>
        <div className={`result-card-body result-body-${tabData.resultMode}`}>
          {tabData.resultMode === "loading" ? (
            <div className="result-loading">
              <SpinnerIcon />
              {tabData.streamText ? (
                <pre className="result-stream-text">{tabData.streamText}</pre>
              ) : null}
            </div>
          ) : null}
          {tabData.resultMode === "empty" ? (
            <div className="result-empty"><SparklePlaceholder /><p>上传{mediaLabel}后点击生成，结果将在此呈现</p></div>
          ) : null}
          {tabData.resultMode === "error" ? <div className="result-error-state"><p>{tabData.resultText}</p></div> : null}
          {tabData.resultMode === "text" ? (
            <textarea
              className="result-edit-area"
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
