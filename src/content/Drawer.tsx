import { useState, useEffect, useCallback } from "react";
import { StyleSheetManager } from "styled-components";
import { App } from "../sidepanel/App";
import type { PanelMode, RuntimeMessage } from "../lib/types";

interface DrawerProps {
  shadowRoot: ShadowRoot;
}

export function Drawer({ shadowRoot }: DrawerProps) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<PanelMode>("global");

  // ── Initialize state from background ────────────────────────────

  useEffect(() => {
    // Ask background for initial drawer state
    chrome.runtime.sendMessage(
      { type: "VIDEO2PROMPT_GET_DRAWER_STATE" } satisfies RuntimeMessage,
      (response) => {
        if (response) {
          setMode(response.mode ?? "global");
          setOpen(response.drawerOpen ?? false);
        }
      }
    );

    // ── Listen for messages from service worker ──────────────────

    const handleMessage = (message: RuntimeMessage) => {
      if (message.type === "VIDEO2PROMPT_TOGGLE_DRAWER") {
        setOpen((prev) => !prev);
      }
      if (message.type === "VIDEO2PROMPT_SET_GLOBAL_DRAWER") {
        setOpen(message.open);
      }
    };

    chrome.runtime.onMessage.addListener(handleMessage);

    // ── Listen for storage changes (global mode sync) ────────────

    const handleStorageChanged = (
      changes: Record<string, chrome.storage.StorageChange>,
      areaName: string
    ) => {
      if (areaName !== "local") return;

      if (changes["video2prompt:globalDrawerOpen"]) {
        const newVal = changes["video2prompt:globalDrawerOpen"].newValue;
        if (mode === "global") {
          setOpen(!!newVal);
        }
      }

      if (changes["video2prompt:panelMode"]) {
        const newMode = (changes["video2prompt:panelMode"].newValue as PanelMode) ?? "global";
        setMode(newMode);
      }

      if (changes["video2prompt:manualDrawerTabs"]) {
        // In manual mode, check if this tab should be open
        if (mode === "manual") {
          chrome.runtime.sendMessage(
            { type: "VIDEO2PROMPT_GET_DRAWER_STATE" } satisfies RuntimeMessage,
            (response) => {
              if (response) setOpen(response.drawerOpen ?? false);
            }
          );
        }
      }
    };

    chrome.storage.onChanged.addListener(handleStorageChanged);

    return () => {
      chrome.runtime.onMessage.removeListener(handleMessage);
      chrome.storage.onChanged.removeListener(handleStorageChanged);
    };
  }, [mode]);

  // ── Event handlers ──────────────────────────────────────────────

  const handleClose = useCallback(() => {
    setOpen(false);
    chrome.runtime.sendMessage({
      type: "VIDEO2PROMPT_SET_GLOBAL_DRAWER",
      open: false,
    } satisfies RuntimeMessage);
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
    chrome.runtime.sendMessage({
      type: "VIDEO2PROMPT_SET_GLOBAL_DRAWER",
      open: true,
    } satisfies RuntimeMessage);
  }, []);

  // ── Collapsed state: show a small handle on the right edge ─────

  if (!open) {
    return (
      <div className="sophia-drawer-handle" onClick={handleOpen} title="打开 Sophia">
        <img
          className="sophia-drawer-handle-icon"
          src={chrome.runtime.getURL("icons/icon48.png")}
          alt="Sophia"
          width={20}
          height={20}
        />
      </div>
    );
  }

  // ── Open state: show the full drawer ────────────────────────────

  return (
    <StyleSheetManager target={shadowRoot}>
      <div className="sophia-drawer">
        <button className="sophia-drawer-close" onClick={handleClose} title="关闭">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <App />
      </div>
    </StyleSheetManager>
  );
}
