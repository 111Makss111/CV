import type { AccentTheme, TabId } from "../types";

export const tabs: Array<{ id: TabId; label: string }> = [
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
  { id: "blog", label: "Blog" },
];

export const accentThemes: Array<{ id: AccentTheme; label: string }> = [
  { id: "gold", label: "Gold" },
  { id: "sky", label: "Sky" },
  { id: "mint", label: "Mint" },
  { id: "coral", label: "Coral" },
  { id: "violet", label: "Violet" },
];
