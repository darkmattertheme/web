export type Category =
  | "Terminal"
  | "Editor"
  | "Shell"
  | "Desktop"
  | "Tools"
  | "Foundation";

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
  /** Two to four characters shown in the card sigil */
  sigil: string;
  /** Optional copyable install / usage snippet */
  install?: string;
  /** Marks a port as still in progress */
  wip?: boolean;
}

export const ports: Port[] = [
  {
    name: "Ghostty",
    slug: "ghostty",
    description:
      "The home planet. Full palette plus the window, padding, and font defaults DARKMATTER ships with.",
    category: "Terminal",
    url: "https://github.com/stevedylandev/darkmatter/blob/main/config",
    sigil: "gt",
    install: "curl -sSL https://darkmatter.build/install.sh | bash",
  },
  {
    name: "WezTerm",
    slug: "wezterm",
    description:
      "A Darkmatter color_scheme table you can drop straight into your wezterm.lua.",
    category: "Terminal",
    url: "https://github.com/stevedylandev/dotfiles/blob/main/wezterm/.wezterm.lua",
    sigil: "wz",
    install: "config.color_scheme = 'Darkmatter'",
  },
  {
    name: "Alacritty",
    slug: "alacritty",
    description:
      "Primary, normal, and bright color blocks in TOML for Alacritty 0.13 and up.",
    category: "Terminal",
    url: "https://github.com/stevedylandev/linux-dotfiles/blob/main/alacritty/alacritty.toml",
    sigil: "al",
  },
  {
    name: "Neovim",
    slug: "neovim",
    description:
      "A full colorscheme with treesitter, LSP, and plugin highlights. Lazy loadable.",
    category: "Editor",
    url: "https://github.com/stevedylandev/darkmatter-nvim",
    sigil: "nv",
    install: '{ "stevedylandev/darkmatter-nvim" }',
  },
  {
    name: "Zed",
    slug: "zed",
    description:
      "Darkmatter as a Zed theme extension, covering the editor, terminal, and UI chrome.",
    category: "Editor",
    url: "https://github.com/stevedylandev/darkmatter-theme-zed",
    sigil: "zd",
  },
  {
    name: "Vim",
    slug: "vim",
    description:
      "A lightline colorscheme that keeps the statusline in orbit with the rest of the theme.",
    category: "Editor",
    url: "https://github.com/stevedylandev/dotfiles/blob/main/vim/dot-vim/autoload/lightline/colorscheme/darkmatter.vim",
    sigil: "vi",
  },
  {
    name: "TextMate",
    slug: "textmate",
    description:
      "A .tmTheme for anything that speaks TextMate grammars, including bat and Sublime Text.",
    category: "Editor",
    url: "https://github.com/stevedylandev/darkmatter/blob/main/dark.tmTheme",
    sigil: "tm",
  },
  {
    name: "OpenCode",
    slug: "opencode",
    description: "Theme JSON for the OpenCode terminal agent.",
    category: "Tools",
    url: "https://github.com/stevedylandev/dotfiles/blob/main/opencode/themes/darkmatter.json",
    sigil: "oc",
  },
  {
    name: "Nushell",
    slug: "nushell",
    description:
      "Syntax and table colors for Nushell, matching the terminal palette exactly.",
    category: "Shell",
    url: "https://github.com/stevedylandev/dotfiles/blob/main/nushell/darkmatter.nu",
    sigil: "nu",
  },
  {
    name: "Linux Desktop",
    slug: "linux",
    description:
      "GTK 3 and 4, xfwm4, and dunst, with wallpapers. A whole desktop in the dark.",
    category: "Desktop",
    url: "https://github.com/stevedylandev/darkmatter-linux",
    sigil: "lx",
  },
  {
    name: "Rofi",
    slug: "rofi",
    description: "A rasi theme for the Rofi launcher.",
    category: "Desktop",
    url: "https://github.com/stevedylandev/linux-dotfiles/blob/main/rofi/darkmatter.rasi",
    sigil: "rf",
  },
  {
    name: "base16",
    slug: "base16",
    description:
      "The scheme Darkmatter orbits: Black Metal Bathory, in base16 form. Build your own port from it.",
    category: "Foundation",
    url: "https://github.com/stevedylandev/base16-black-metal-scheme",
    sigil: "b16",
  },
];

export const categories: Category[] = [
  "Terminal",
  "Editor",
  "Shell",
  "Desktop",
  "Tools",
  "Foundation",
];
