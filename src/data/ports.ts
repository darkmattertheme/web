import { readFile } from "node:fs/promises";

// The port list lives in darkmattertheme/darkmatter as ports.json, so ports are
// added there rather than here. It's read once at build time. Set
// DARKMATTER_PORTS to a local path or another URL to override it, e.g.
// DARKMATTER_PORTS=../darkmatter/ports.json bun dev
const source =
  process.env.DARKMATTER_PORTS ??
  "https://raw.githubusercontent.com/darkmattertheme/darkmatter/main/ports.json";

/** One of the categories listed in ports.json */
export type Category = string;

/** Icons that exist in src/icons and are wired up in PortCard */
export type PortIcon =
  | "ghostty"
  | "alacritty"
  | "neovim"
  | "yazi"
  | "opencode"
  | "zed"
  | "wezterm"
  | "nushell"
  | "gtk"
  | "darkmatter";

export interface Port {
  /** Display name of the app this port targets */
  name: string;
  /** Short kebab-case id, used for anchors */
  slug: string;
  /** One line on what the port covers */
  description: string;
  category: Category;
  /** Where the theme lives */
  url: string;
  /** Dashboard icon shown in the card sigil; falls back to a terminal glyph */
  icon?: PortIcon | (string & {});
  /** Optional copyable install / usage snippet */
  install?: string;
  /** Marks a port as still in progress */
  wip?: boolean;
}

async function load(): Promise<{ categories: Category[]; ports: Port[] }> {
  if (!/^https?:\/\//.test(source)) {
    return JSON.parse(await readFile(source, "utf8"));
  }
  const res = await fetch(source);
  if (!res.ok) {
    throw new Error(`Couldn't load ports from ${source}: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

const data = await load();
if (!Array.isArray(data.ports) || !Array.isArray(data.categories)) {
  throw new Error(`${source} doesn't look like ports.json: expected "categories" and "ports" arrays`);
}

export const ports: Port[] = data.ports;
export const categories: Category[] = data.categories;
