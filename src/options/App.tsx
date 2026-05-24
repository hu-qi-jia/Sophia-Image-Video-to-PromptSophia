import { type ChangeEvent, useEffect, useState } from "react";
import {
  FRAME_SAMPLING_MODES,
  type FrameSamplingMode,
  type StoredSettings
} from "../lib/types";
import {
  defaultSettings,
  saveApiKey,
  saveBaseUrl,
  saveModelName,
  saveFrameSamplingMode
} from "../lib/storage";

function maskApiKey(apiKey: string): string {
  if (apiKey.length <= 8) {
    return apiKey;
  }

  return `${apiKey.slice(0, 4)}...${apiKey.slice(-4)}`;
}

const FRAME_MODE_LABELS: Record<FrameSamplingMode, string> = {
  fast: "快速",
  standard: "标准",
  detailed: "详细"
};

export function App() {
  const [settings, setSettings] = useState<StoredSettings>(defaultSettings);
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [baseUrlInput, setBaseUrlInput] = useState("https://api.openai.com/v1");
  const [modelNameInput, setModelNameInput] = useState("");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    void (async () => {
      const stored = await chrome.storage.local.get("video2prompt:settings");
      const nextSettings = {
        ...defaultSettings,
        ...(stored["video2prompt:settings"] as Partial<StoredSettings> | undefined)
      };
      setSettings(nextSettings);
      setApiKeyInput(nextSettings.apiKey);
      setBaseUrlInput(nextSettings.baseUrl);
      setModelNameInput(nextSettings.modelName);
    })();
  }, []);

  async function handleSaveConfig() {
    let nextSettings = await saveApiKey(apiKeyInput);
    nextSettings = await saveBaseUrl(baseUrlInput);
    nextSettings = await saveModelName(modelNameInput);
    setSettings(nextSettings);
    setApiKeyInput(nextSettings.apiKey);
    setBaseUrlInput(nextSettings.baseUrl);
    setModelNameInput(nextSettings.modelName);
    setStatusMessage("模型配置已保存。");
    setTimeout(() => setStatusMessage(null), 1800);
  }

  async function handleClose() {
    try {
      const currentTab = await chrome.tabs.getCurrent();
      if (currentTab?.id) {
        await chrome.tabs.remove(currentTab.id);
        return;
      }
    } catch {
    }

    window.close();
  }

  async function handleFrameSamplingModeChange(
    event: ChangeEvent<HTMLSelectElement>
  ) {
    const mode = event.target.value as FrameSamplingMode;
    const nextSettings = await saveFrameSamplingMode(mode);
    setSettings(nextSettings);
    setStatusMessage("帧采样模式已保存。");
    setTimeout(() => setStatusMessage(null), 1800);
  }

  return (
    <main className="sophia-shell options-shell">
      <section className="sophia-card header-card options-header-card">
        <div className="header-top">
          <div className="brand-lockup options-header-copy">
            <img src="icons/logo_new1.png" alt="" className="brand-icon" />
            <img src="icons/logoword.png" alt="Sophia" className="brand-wordmark-img" />
            <p className="options-header-subtitle">模型设置</p>
          </div>
          <button className="settings-pill" onClick={handleClose}>
            关闭
          </button>
        </div>
        <p>管理 Sophia 用于分析图片和视频的模型配置。</p>
        <div className="settings-status-row">
          <span className={`settings-status-pill ${settings.apiKey ? "is-ready" : "is-required"}`}>
            {settings.apiKey ? "已配置" : "需要配置"}
          </span>
          <span className="settings-status-copy">
            配置用于图片和视频分析的 API 密钥、基础 URL 和模型名称。
          </span>
        </div>
        <span className="header-glow" aria-hidden="true" />
      </section>

      <section className="sophia-card settings-panel-card">
        <div className="settings-section-head">
          <div>
            <div className="card-title">模型配置</div>
            <p className="settings-copy">
              支持 OpenAI 兼容的 API 接口，可接入任意兼容模型。
            </p>
          </div>
          {settings.apiKey ? (
            <span className="settings-saved-chip">已保存：{maskApiKey(settings.apiKey)}</span>
          ) : null}
        </div>
        <label className="settings-field">
          <span>模型名称</span>
          <input
            type="text"
            value={modelNameInput}
            onChange={(event) => setModelNameInput(event.target.value)}
            placeholder="例如 gpt-4o、deepseek-chat"
            autoComplete="off"
          />
        </label>
        <label className="settings-field">
          <span>API 密钥</span>
          <input
            type="password"
            value={apiKeyInput}
            onChange={(event) => setApiKeyInput(event.target.value)}
            placeholder="输入 API 密钥"
            autoComplete="off"
          />
        </label>
        <label className="settings-field">
          <span>基础 URL</span>
          <input
            type="text"
            value={baseUrlInput}
            onChange={(event) => setBaseUrlInput(event.target.value)}
            placeholder="https://api.openai.com/v1"
            autoComplete="off"
          />
        </label>
        <div className="settings-actions">
          <button className="primary-button" onClick={handleSaveConfig}>
            {settings.apiKey ? "更新配置" : "保存配置"}
          </button>
        </div>
        <div className="settings-divider" />
        <label className="settings-field">
          <span>帧采样模式</span>
          <select
            value={settings.frameSamplingMode}
            onChange={handleFrameSamplingModeChange}
            className="settings-select"
            title="快速：更快更轻量。标准：推荐默认。详细：为复杂本地视频提取更多帧。"
          >
            {FRAME_SAMPLING_MODES.map((mode) => (
              <option key={mode} value={mode}>
                {FRAME_MODE_LABELS[mode]}
              </option>
            ))}
          </select>
        </label>
        <p className="settings-copy">
          快速模式更快捷，标准模式为推荐选项，详细模式为复杂本地视频提取更多帧。图片分析不使用帧采样。
        </p>
        <div className="settings-divider" />
        <div className="settings-mini-card">
          <div className="settings-mini-title">隐私</div>
          <p className="settings-copy">
            本地视频帧和所选图片将直接从您的浏览器发送至配置的 API 端点进行分析。
          </p>
          <p className="settings-copy">
            请仅分析您愿意发送至该服务的媒体内容。
          </p>
        </div>
      </section>

      {statusMessage ? <div className="toast-modern">{statusMessage}</div> : null}
    </main>
  );
}
