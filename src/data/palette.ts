export interface Swatch {
  /** base16 key, e.g. "base0A" */
  key: string;
  /** Human readable name */
  name: string;
  hex: string;
  /** What this slot is typically used for */
  role: string;
}

export const palette: Swatch[] = [
  { key: "base00", name: "Void", hex: "#121113", role: "Background" },
  { key: "base01", name: "Umbra", hex: "#121212", role: "Lighter background" },
  { key: "base02", name: "Shadow", hex: "#222222", role: "Selection background" },
  { key: "base03", name: "Dust", hex: "#333333", role: "Comments, invisibles" },
  { key: "base04", name: "Ash", hex: "#999999", role: "Dark foreground" },
  { key: "base05", name: "Starlight", hex: "#c1c1c1", role: "Default foreground" },
  { key: "base06", name: "Vapor", hex: "#999999", role: "Light foreground" },
  { key: "base07", name: "Halo", hex: "#c1c1c1", role: "Light background" },
  { key: "base08", name: "Aurora", hex: "#5f8787", role: "Variables, tags" },
  { key: "base09", name: "Meteor", hex: "#aaaaaa", role: "Integers, constants" },
  { key: "base0A", name: "Ember", hex: "#e78a53", role: "Classes, search, accent" },
  { key: "base0B", name: "Solar", hex: "#fbcb97", role: "Strings, inserted" },
  { key: "base0C", name: "Corona", hex: "#aaaaaa", role: "Support, escapes" },
  { key: "base0D", name: "Nebula", hex: "#888888", role: "Functions, headings" },
  { key: "base0E", name: "Pulsar", hex: "#999999", role: "Keywords, storage" },
  { key: "base0F", name: "Eclipse", hex: "#444444", role: "Deprecated, embeds" },
];

/** The 16 ANSI colors as used by the terminal ports. */
export const ansi: string[] = [
  "#121113", "#5f8787", "#fbcb97", "#e78a53",
  "#888888", "#999999", "#aaaaaa", "#c1c1c1",
  "#333333", "#5f8787", "#fbcb97", "#e78a53",
  "#888888", "#999999", "#aaaaaa", "#c1c1c1",
];
