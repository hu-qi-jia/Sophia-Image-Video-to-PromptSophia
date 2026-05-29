/**
 * Sophia Content Script
 *
 * Injected into every web page via manifest.json content_scripts.
 * Creates a Shadow DOM container and mounts the React Drawer app.
 * The Shadow DOM provides complete CSS isolation from the host page.
 */

import React from "react";
import { createRoot } from "react-dom/client";
import { Drawer } from "./Drawer";

// Import CSS as raw strings for Shadow DOM injection
import sharedCss from "../styles/shared.css?inline";
import sidepanelCss from "../sidepanel/sidepanel.css?inline";
import drawerCss from "./drawer.css?inline";

const HOST_ID = "sophia-drawer-host";

function injectDrawer(): void {
  // ── Guard: skip invalid pages ──────────────────────────────────

  if (document.getElementById(HOST_ID)) return;
  if (!document.body) return;

  // Skip chrome://, chrome-extension://, and other restricted pages
  if (
    location.protocol === "chrome:" ||
    location.protocol === "chrome-extension:" ||
    location.protocol === "about:" ||
    location.protocol === "edge:" ||
    location.protocol === "brave:"
  ) {
    return;
  }

  // ── Create host element ─────────────────────────────────────────

  const host = document.createElement("div");
  host.id = HOST_ID;
  document.body.appendChild(host);

  // ── Create Shadow DOM ───────────────────────────────────────────

  const shadowRoot = host.attachShadow({ mode: "closed" });

  // ── Inject CSS ──────────────────────────────────────────────────

  const combinedCss = [sharedCss, sidepanelCss, drawerCss].join("\n");

  const styleEl = document.createElement("style");
  styleEl.textContent = combinedCss;
  shadowRoot.appendChild(styleEl);

  // ── Mount React ─────────────────────────────────────────────────

  const rootDiv = document.createElement("div");
  rootDiv.id = "sophia-root";
  shadowRoot.appendChild(rootDiv);

  const reactRoot = createRoot(rootDiv);
  reactRoot.render(React.createElement(Drawer, { shadowRoot }));
}

// ── Run injection ──────────────────────────────────────────────────

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", injectDrawer);
} else {
  injectDrawer();
}
