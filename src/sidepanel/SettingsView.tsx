import { KeyIcon, ShieldIcon, EyeIcon, TrashIcon, BackIcon } from "./icons";

interface SettingsViewProps {
  apiKeyInput: string;
  baseUrlInput: string;
  modelNameInput: string;
  showApiKey: boolean;
  hasApiKey: boolean;
  onBack: () => void;
  onApiKeyInputChange: (val: string) => void;
  onBaseUrlInputChange: (val: string) => void;
  onModelNameInputChange: (val: string) => void;
  onToggleShowApiKey: () => void;
  onSaveApiKey: () => void;
  onDeleteSavedApiKey: () => void;
}

export function SettingsView({
  apiKeyInput,
  baseUrlInput,
  modelNameInput,
  showApiKey,
  hasApiKey,
  onBack,
  onApiKeyInputChange,
  onBaseUrlInputChange,
  onModelNameInputChange,
  onToggleShowApiKey,
  onSaveApiKey,
  onDeleteSavedApiKey,
}: SettingsViewProps) {
  return (
    <section className="subview-screen">
      <div className="subview-topbar">
        <div className="subview-title-row">
          <button className="back-button back-button-box" onClick={onBack}>
            <BackIcon />
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
            <input type="text" value={modelNameInput} onChange={(e) => onModelNameInputChange(e.target.value)} placeholder="例如 gpt-4o、deepseek-chat" autoComplete="off" />
          </label>
          <label className="settings-field settings-field-large">
            <span>API 密钥</span>
            <div className="settings-input-wrap">
              <input type={showApiKey ? "text" : "password"} value={apiKeyInput} onChange={(e) => onApiKeyInputChange(e.target.value)} placeholder="输入你的 API 密钥" autoComplete="off" />
              <button type="button" className="input-icon-button" aria-label={showApiKey ? "隐藏" : "显示"} onClick={onToggleShowApiKey}>
                <EyeIcon />
              </button>
            </div>
          </label>
          <label className="settings-field settings-field-large">
            <span>接口地址</span>
            <input type="text" value={baseUrlInput} onChange={(e) => onBaseUrlInputChange(e.target.value)} placeholder="https://api.openai.com/v1" autoComplete="off" />
          </label>
          <div className="settings-actions-column settings-actions-column-large">
            <button className="settings-save-button" onClick={onSaveApiKey}>
              <ShieldIcon /><span>{hasApiKey ? "更新配置" : "保存配置"}</span>
            </button>
            {hasApiKey ? (
              <button className="settings-delete-button" onClick={onDeleteSavedApiKey}>
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
  );
}
