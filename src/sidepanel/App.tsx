import { useState } from "react";
import styled from "styled-components";
import type { FrameSamplingMode } from "../lib/types";
import { useAppState } from "./useAppState";
import { HistoryView } from "./HistoryView";
import { SettingsView } from "./SettingsView";
import {
  SpinnerIcon,
  SparklePlaceholder,
  ExpandIcon,
  WandIcon,
  EnhancerVideoIcon,
  EnhancerImageIcon,
} from "./icons";
import {
  type TabId,
  IMAGE_ACCEPT,
  VIDEO_ACCEPT,
  FRAME_MODE_COPY,
} from "./types";

export function App() {
  const { state, refs, actions } = useAppState();

  return (
    <main className="sophia-shell">
      <input ref={refs.imageFileRef} className="hidden-file-input" type="file" accept={IMAGE_ACCEPT} onChange={(e) => void actions.handleLocalUpload(e, "image")} />
      <input ref={refs.videoFileRef} className="hidden-file-input" type="file" accept={VIDEO_ACCEPT} onChange={(e) => void actions.handleLocalUpload(e, "video")} />

      {state.subView === "main" ? (
        <>
          <StyledHeader>
            <div className="header-brand">
              <img src="icons/logo_new1.png" alt="Sophia" className="brand-icon" />
            </div>
            <div className="header-nav-wrap">
              <nav className="tab-nav" role="tablist">
                <button
                  role="tab"
                  aria-selected={state.activeTab === "image"}
                  className={`tab-nav-btn ${state.activeTab === "image" ? "tab-nav-btn--active" : ""}`}
                  onClick={() => actions.handleTabChange("image")}
                  title="图片视图"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="M21 15l-3.5-3.5a2 2 0 0 0-3 0L6 20" /></svg>
                  <span className="tab-tooltip">图片视图</span>
                </button>
                <button
                  role="tab"
                  aria-selected={state.activeTab === "video"}
                  className={`tab-nav-btn ${state.activeTab === "video" ? "tab-nav-btn--active" : ""}`}
                  onClick={() => actions.handleTabChange("video")}
                  title="视频视图"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="15" height="16" rx="2" /><path d="M17 8l4-2v12l-4-2" /></svg>
                  <span className="tab-tooltip">视频视图</span>
                </button>
                <button
                  role="tab"
                  aria-selected={state.activeTab === "enhancer"}
                  className={`tab-nav-btn ${state.activeTab === "enhancer" ? "tab-nav-btn--active" : ""}`}
                  onClick={() => actions.handleTabChange("enhancer")}
                  title="提示词增强"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="13" y2="17" /></svg>
                  <span className="tab-tooltip">提示词增强</span>
                </button>
              </nav>
            </div>
            <div className="header-actions">
              <button className="header-action-btn" aria-label="历史记录" onClick={() => actions.setSubView("history")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 3-6.7" />
                  <path d="M3 3v4h4" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </button>
              <button className="header-action-btn" aria-label="设置" onClick={() => actions.setSubView("settings")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 0 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 0 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3h.1a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5h.1a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 0 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z" />
                </svg>
              </button>
            </div>
          </StyledHeader>

          <div className="page-content">
            {state.activeTab === "image" ? (
              <ImageVideoPage
                mode="image"
                tabData={state.ivTabData.image}
                isAnalyzing={state.isAnalyzing}
                canAnalyze={state.canAnalyze}
                hasApiKey={state.hasApiKey}
                displayResultText={state.displayResultText}
                showCopy={state.showCopy}
                currentMediaPreview={state.currentMediaPreview}
                currentMediaAspectRatio={state.currentMediaAspectRatio}
                onUploadClick={actions.handleUploadClick}
                onAnalyze={actions.handleAnalyze}
                onClear={actions.handleClear}
                onAbort={actions.handleAbort}
                onCopy={actions.handleCopy}
                onEditResult={(val) => actions.updateIVTab("image", { editedResultText: val })}
                onFileDrop={(file) => actions.handleFileDrop(file, "image")}
              />
            ) : null}

            {state.activeTab === "video" ? (
              <ImageVideoPage
                mode="video"
                tabData={state.ivTabData.video}
                isAnalyzing={state.isAnalyzing}
                canAnalyze={state.canAnalyze}
                hasApiKey={state.hasApiKey}
                displayResultText={state.displayResultText}
                showCopy={state.showCopy}
                currentMediaPreview={state.currentMediaPreview}
                currentMediaAspectRatio={state.currentMediaAspectRatio}
                frameSamplingMode={state.settings.frameSamplingMode}
                onUploadClick={actions.handleUploadClick}
                onAnalyze={actions.handleAnalyze}
                onClear={actions.handleClear}
                onAbort={actions.handleAbort}
                onCopy={actions.handleCopy}
                onEditResult={(val) => actions.updateIVTab("video", { editedResultText: val })}
                onFrameSamplingModeChange={actions.handleFrameSamplingModeChange}
                onFileDrop={(file) => actions.handleFileDrop(file, "video")}
              />
            ) : null}

            {state.activeTab === "enhancer" ? (
              <EnhancerPage
                enhancerMode={state.enhancerMode}
                enhancerInput={state.enhancerInput}
                isEnhancingPrompt={state.isEnhancingPrompt}
                canEnhancePrompt={state.canEnhancePrompt}
                hasApiKey={state.hasApiKey}
                enhancerResultMode={state.enhancerResultMode}
                enhancerResultText={state.enhancerResultText}
                enhancerCopyLabel={state.enhancerCopyLabel}
                showEnhancerCopy={state.showEnhancerCopy}
                onSetEnhancerMode={(mode) => { actions.setEnhancerMode(mode); actions.resetEnhancerResult(); }}
                onSetEnhancerInput={actions.setEnhancerInput}
                onEnhance={actions.handleEnhancePrompt}
                onAbortEnhancer={actions.handleAbortEnhancer}
                onCopyEnhancer={() => void actions.handleCopyEnhancerResult()}
              />
            ) : null}
          </div>
        </>
      ) : null}

      {state.subView === "history" ? (
        <HistoryView
          historyItems={state.historyItems}
          copiedHistoryId={state.copiedHistoryId}
          editingCardId={state.editingCardId}
          editingText={state.editingText}
          onBack={() => actions.setSubView("main")}
          onCopyHistory={(item) => void actions.handleCopyHistory(item)}
          onDeleteHistory={(item) => void actions.handleDeleteHistory(item)}
          onEditStart={actions.handleEditStart}
          onEditClose={actions.handleEditClose}
          onEditCopy={() => void actions.handleEditCopy()}
          onEditingTextChange={actions.setEditingText}
          getHistoryTypeLabel={actions.getHistoryTypeLabel}
        />
      ) : null}

      {state.subView === "settings" ? (
        <SettingsView
          apiKeyInput={state.apiKeyInput}
          baseUrlInput={state.baseUrlInput}
          modelNameInput={state.modelNameInput}
          showApiKey={state.showApiKey}
          hasApiKey={state.hasApiKey}
          onBack={() => actions.setSubView("main")}
          onApiKeyInputChange={actions.setApiKeyInput}
          onBaseUrlInputChange={actions.setBaseUrlInput}
          onModelNameInputChange={actions.setModelNameInput}
          onToggleShowApiKey={() => actions.setShowApiKey((c) => !c)}
          onSaveApiKey={() => void actions.handleSaveApiKey()}
          onDeleteSavedApiKey={() => void actions.handleDeleteSavedApiKey()}
        />
      ) : null}

      {state.statusMessage ? <div className="toast-modern">{state.statusMessage}</div> : null}
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
  onFrameSamplingModeChange,
  onFileDrop,
}: {
  mode: "image" | "video";
  tabData: import("./types").IVTabData;
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
  onFileDrop?: (file: File) => void;
}) {
  const isImage = mode === "image";
  const mediaLabel = isImage ? "图片" : "视频";
  const acceptHint = isImage ? "JPG / PNG / WebP / GIF" : "MP4 / WebM / MOV";
  const [isExpanded, setIsExpanded] = useState(false);
  const [samplingDropdownOpen, setSamplingDropdownOpen] = useState(false);
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
    if (file && onFileDrop) {
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
              <span className="upload-browse-btn">选择文件</span>
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
                className={`upload-action-primary ${isAnalyzing ? "upload-action-primary--busy" : ""}`}
                onClick={onAnalyze}
                disabled={!canAnalyze}
              >
                {isAnalyzing ? <><SpinnerIcon />识别中</> : tabData.resultMode === "text" ? "重新生成" : "生成"}
              </button>
              <button className="upload-action-secondary" onClick={onClear} disabled={isAnalyzing}>清除</button>
              {isAnalyzing ? (
                <button className="upload-action-secondary" onClick={onAbort}>中止</button>
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
          <div className="frame-sampling-dropdown">
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
                <button className="result-copy-btn" onClick={onCopy}>
                  {tabData.copyLabel === "已复制" ? "已复制" : "复制"}
                </button>
              ) : null}
              <button className="result-expand-btn" onClick={() => setIsExpanded((v) => !v)} title={isExpanded ? "收起" : "展开"}>
                <ExpandIcon expanded={isExpanded} />
              </button>
            </div>
          ) : null}
        </div>
        <div className={`result-card-body result-body-${tabData.resultMode}`}>
          {tabData.resultMode === "loading" ? (
            <div className="result-loading">
              <SpinnerIcon />
              <strong>{tabData.streamText ? "实时生成中..." : "正在识别中..."}</strong>
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

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background-color: #ffffff;
  border-bottom: 1px solid var(--border-light);
  position: sticky;
  top: 0;
  z-index: 10;

  .header-brand {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .header-brand .brand-icon {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  .header-nav-wrap {
    flex: 1;
    min-width: 0;
    display: flex;
    justify-content: center;
  }

  .tab-nav {
    display: flex;
    gap: 6px;
    background-color: var(--bg-subtle);
    border-radius: var(--radius-pill);
    padding: 4px 6px;
  }

  .tab-nav-btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 36px;
    border: none;
    border-radius: var(--radius-pill);
    background: transparent;
    color: var(--text-tertiary);
    cursor: pointer;
    transition: all var(--duration-normal) ease;

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      color: var(--text-secondary);
    }
  }

  .tab-tooltip {
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) translateY(-6px);
    background: var(--bg-dark);
    color: var(--text-on-dark);
    font-size: 11px;
    font-weight: 500;
    padding: 5px 12px;
    border-radius: var(--radius-sm);
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .tab-tooltip::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-bottom-color: var(--bg-dark);
  }

  .tab-nav-btn:hover .tab-tooltip {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  .tab-nav-btn--active {
    color: var(--text-primary);
    background-color: var(--bg-card);
    box-shadow: var(--shadow-sm);
  }

  .tab-nav-btn--active:hover {
    color: var(--text-primary);
    background-color: var(--bg-card);
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 2px;
    flex-shrink: 0;
  }

  .header-action-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: var(--radius-md);
    border: none;
    background: transparent;
    cursor: pointer;
    color: var(--text-tertiary);
    transition: background-color var(--duration-fast) ease, color var(--duration-fast) ease;

    svg {
      width: 17px;
      height: 17px;
    }

    &:hover {
      background-color: var(--bg-hover);
      color: var(--text-primary);
    }
  }
`;

const UploadFormCard = styled.section`
  background-color: var(--bg-card);
  border-radius: var(--radius-xl);
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px dashed var(--border-medium);
  box-shadow: var(--shadow-card);
  overflow: visible;
  position: relative;
  transition: border-color var(--duration-normal) ease, box-shadow var(--duration-normal) ease, background-color var(--duration-normal) ease;
  min-height: 260px;
  max-height: 320px;

  &.is-drag-over {
    border-color: var(--accent);
    background-color: var(--bg-subtle);
    box-shadow: var(--shadow-elevated);
  }

  .upload-label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 28px var(--space-6) var(--space-5);
    box-sizing: border-box;
    flex: 1;
  }

  .upload-design {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
  }

  .upload-design svg {
    margin-bottom: var(--space-3);
  }

  .upload-title {
    font-size: var(--text-base);
    font-weight: 500;
    color: var(--text-primary);
    margin: 0;
  }

  .upload-or {
    font-size: var(--text-xs);
    color: var(--text-tertiary);
    margin: var(--space-1) 0;
  }

  .upload-browse-btn {
    background-color: var(--accent);
    padding: 7px 22px;
    border-radius: var(--radius-md);
    color: var(--text-on-dark);
    font-size: var(--text-sm);
    font-weight: 500;
    cursor: pointer;
    transition: background-color var(--duration-normal) ease;

    &:hover {
      background-color: var(--accent-hover);
    }
  }

  .upload-hint {
    font-size: 11px;
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

    img, video {
      max-width: 95%;
      max-height: 180px;
      object-fit: contain;
      display: block;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &.is-expanded .upload-preview {
    img, video {
      max-height: 60px;
      max-width: 70px;
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

  .upload-action-primary {
    background-color: var(--accent);
    color: var(--text-on-dark);
    border: none;
    border-radius: var(--radius-md);
    padding: 8px 32px;
    font-size: var(--text-sm);
    font-weight: 500;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    transition: background-color var(--duration-fast) ease;

    &:hover:not(:disabled) {
      background-color: var(--accent-hover);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    svg {
      width: 14px;
      height: 14px;
      animation: spin 1s linear infinite;
    }
  }

  .upload-action-primary--busy svg {
    animation: spin 1s linear infinite;
  }

  .upload-action-secondary {
    background-color: transparent;
    color: var(--text-primary);
    border: 1.5px solid var(--border-medium);
    border-radius: var(--radius-md);
    padding: 8px 28px;
    font-size: var(--text-sm);
    font-weight: 400;
    cursor: pointer;
    transition: all var(--duration-fast) ease;

    &:hover:not(:disabled) {
      border-color: var(--accent);
      color: var(--accent);
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  .upload-hint-warn {
    font-size: var(--text-xs);
    color: var(--danger);
    text-align: center;
    padding: 0 var(--space-5) var(--space-4);
    margin: 0;
  }
`;

const EnhancerFormCard = styled.section`
  background-color: var(--bg-card);
  border-radius: var(--radius-xl);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px dashed var(--border-medium);
  box-shadow: var(--shadow-card);
  gap: var(--space-3);

  .enhancer-mode-pills {
    display: flex;
    gap: 4px;
    background-color: var(--bg-subtle);
    border-radius: var(--radius-md);
    padding: 3px;
    width: 100%;
  }

  .enhancer-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-1);
    flex: 1;
    padding: 8px 0;
    border-radius: var(--radius-sm);
    border: none;
    background: transparent;
    color: var(--text-tertiary);
    font-size: var(--text-sm);
    font-weight: 400;
    cursor: pointer;
    transition: all var(--duration-fast) ease;

    svg {
      width: 14px;
      height: 14px;
    }

    &:hover {
      color: var(--text-primary);
    }
  }

  .enhancer-pill--active {
    background-color: var(--accent);
    color: var(--text-on-dark);

    &:hover {
      color: var(--text-on-dark);
    }
  }

  .enhancer-input-wrap {
    width: 100%;
  }

  .enhancer-textarea {
    width: 100%;
    border: 1.5px solid var(--border-light);
    border-radius: var(--radius-lg);
    padding: var(--space-4);
    font-size: var(--text-sm);
    line-height: 1.5;
    resize: vertical;
    min-height: 100px;
    box-sizing: border-box;
    font-family: inherit;
    color: var(--text-primary);
    background: var(--bg-input);
    transition: border-color var(--duration-fast) ease;

    &:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: 0 0 0 3px var(--accent-glow);
    }

    &::placeholder {
      color: var(--text-placeholder);
    }
  }

  .enhancer-action-row {
    display: flex;
    gap: var(--space-2);
    width: 100%;
    justify-content: center;
  }

  .upload-action-primary {
    width: 100%;
    background-color: var(--bg-card);
    color: var(--text-primary);
    border: 1.5px solid var(--accent);
    border-radius: var(--radius-lg);
    padding: 11px var(--space-5);
    font-size: var(--text-sm);
    font-weight: 500;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    transition: all var(--duration-fast) ease;

    &:hover:not(:disabled) {
      background-color: var(--bg-subtle);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    svg {
      width: 14px;
      height: 14px;
      animation: spin 1s linear infinite;
    }
  }

  .upload-hint-warn {
    font-size: var(--text-xs);
    color: var(--danger);
    text-align: center;
    margin: 0;
  }
`;

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
  onCopyEnhancer,
}: {
  enhancerMode: "video" | "image";
  enhancerInput: string;
  isEnhancingPrompt: boolean;
  canEnhancePrompt: boolean;
  hasApiKey: boolean;
  enhancerResultMode: "empty" | "loading" | "text" | "error";
  enhancerResultText: string;
  enhancerCopyLabel: string;
  showEnhancerCopy: boolean;
  onSetEnhancerMode: (mode: "video" | "image") => void;
  onSetEnhancerInput: (val: string) => void;
  onEnhance: () => void;
  onAbortEnhancer: () => void;
  onCopyEnhancer: () => void;
}) {
  return (
    <>
      <EnhancerFormCard>
        <div className="enhancer-mode-pills" role="tablist" aria-label="增强器模式">
          <button type="button" role="tab" aria-selected={enhancerMode === "video"}
            className={`enhancer-pill ${enhancerMode === "video" ? "enhancer-pill--active" : ""}`}
            onClick={() => onSetEnhancerMode("video")}>
            <EnhancerVideoIcon /><span>视频</span>
          </button>
          <button type="button" role="tab" aria-selected={enhancerMode === "image"}
            className={`enhancer-pill ${enhancerMode === "image" ? "enhancer-pill--active" : ""}`}
            onClick={() => onSetEnhancerMode("image")}>
            <EnhancerImageIcon /><span>图片</span>
          </button>
        </div>

        <div className="enhancer-input-wrap">
          <textarea
            value={enhancerInput}
            onChange={(e) => onSetEnhancerInput(e.target.value)}
            placeholder={enhancerMode === "video"
              ? "描述你的视频创意，例如：一个女孩在雨中漫步，慢镜头，电影质感"
              : "描述你的图片创意，例如：一只金毛幼犬在草地上奔跑，阳光明媚"}
            rows={5}
            className="enhancer-textarea"
          />
        </div>

        {isEnhancingPrompt ? (
          <div className="enhancer-action-row">
            <button className="upload-action-primary upload-action-primary--busy" disabled>
              <SpinnerIcon />增强中
            </button>
            <button className="upload-action-secondary" onClick={onAbortEnhancer}>中止</button>
          </div>
        ) : (
          <button
            className="upload-action-primary"
            onClick={() => void onEnhance()}
            disabled={!canEnhancePrompt}
          >
            <WandIcon /><span>增强</span>
          </button>
        )}

        {!hasApiKey ? (
          <p className="upload-hint-warn">请先在设置中配置模型信息</p>
        ) : null}
      </EnhancerFormCard>

      <section className="result-card">
        <div className="result-card-head">
          <span className="result-card-title">增强结果</span>
          {showEnhancerCopy ? (
            <button className="result-copy-btn" onClick={() => void onCopyEnhancer()}>
              {enhancerCopyLabel}
            </button>
          ) : null}
        </div>
        <div className={`result-card-body result-body-${enhancerResultMode}`}>
          {enhancerResultMode === "loading" ? (
            <div className="result-loading"><SpinnerIcon /><strong>正在增强中...</strong></div>
          ) : null}
          {enhancerResultMode === "empty" ? (
            <div className="result-empty"><SparklePlaceholder /><p>输入创意后点击增强，结果将在此呈现</p></div>
          ) : null}
          {enhancerResultMode === "error" ? <div className="result-error-state"><p>{enhancerResultText}</p></div> : null}
          {enhancerResultMode === "text" ? <div className="result-text-block">{enhancerResultText}</div> : null}
        </div>
      </section>
    </>
  );
}
