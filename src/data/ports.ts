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
      "The home planet. Drop the theme file into Ghostty's themes directory and point your config at it.",
    category: "Terminal",
    url: "https://github.com/darkmattertheme/ghostty",
    sigil: "gt",
    install: "theme = darkmatter",
  },
  {
    name: "WezTerm",
    slug: "wezterm",
    description:
      "A Darkmatter color scheme for WezTerm, as a colors TOML file or a Lua table.",
    category: "Terminal",
    url: "https://github.com/darkmattertheme/wezterm",
    sigil: "wz",
    install: "config.color_scheme = 'Darkmatter'",
  },
  {
    name: "Alacritty",
    slug: "alacritty",
    description:
      "Primary, normal, and bright color blocks in TOML for Alacritty 0.13 and up.",
    category: "Terminal",
    url: "https://github.com/darkmattertheme/alacritty",
    sigil: "al",
  },
  {
    name: "st",
    slug: "st",
    description:
      "A colorname block for the suckless simple terminal. Paste it into config.h and rebuild.",
    category: "Terminal",
    url: "https://github.com/darkmattertheme/st",
    sigil: "st",
  },
  {
    name: "Neovim",
    slug: "neovim",
    description:
      "A full colorscheme with treesitter, LSP, and plugin highlights. Lazy loadable.",
    category: "Editor",
    url: "https://github.com/darkmattertheme/nvim",
    sigil: "nv",
    install: '{ "darkmattertheme/nvim" }',
  },
  {
    name: "Zed",
    slug: "zed",
    description:
      "Darkmatter as a Zed theme extension, covering the editor, terminal, and UI chrome.",
    category: "Editor",
    url: "https://github.com/darkmattertheme/zed",
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
    name: "Yazi",
    slug: "yazi",
    description:
      "A Yazi flavor with Darkmatter file colors, icons, and code previews.",
    category: "Tools",
    url: "https://github.com/darkmattertheme/yazi",
    sigil: "yz",
    install: "git clone https://github.com/darkmattertheme/yazi ~/.config/yazi/flavors/darkmatter.yazi",
  },
  {
    name: "OpenCode",
    slug: "opencode",
    description: "Theme JSON for the OpenCode terminal agent.",
    category: "Tools",
    url: "https://github.com/darkmattertheme/opencode",
    sigil: "oc",
  },
  {
    name: "Amfora",
    slug: "amfora",
    description:
      "Page, link, and modal colors for the Amfora Gemini browser.",
    category: "Tools",
    url: "https://github.com/darkmattertheme/amfora",
    sigil: "am",
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
    name: "GTK",
    slug: "gtk",
    description:
      "GTK 3 and 4 and xfwm4 window decorations, with wallpapers. A whole desktop in the dark.",
    category: "Desktop",
    url: "https://github.com/darkmattertheme/gtk3",
    sigil: "gtk",
  },
  {
    name: "Rofi",
    slug: "rofi",
    description: "A rasi theme for the Rofi launcher.",
    category: "Desktop",
    url: "https://github.com/darkmattertheme/rofi",
    sigil: "rf",
  },
  {
    name: "Dunst",
    slug: "dunst",
    description:
      "Notification colors for Dunst, with frames and progress bars keyed to urgency.",
    category: "Desktop",
    url: "https://github.com/darkmattertheme/dunst",
    sigil: "dn",
  },
  {
    name: "Polybar",
    slug: "polybar",
    description:
      "The Darkmatter palette as a Polybar colors.ini, ready to include in your bar.",
    category: "Desktop",
    url: "https://github.com/stevedylandev/polybar",
    sigil: "pb",
  },
  {
    name: "Darkmatter",
    slug: "darkmatter",
    description:
      "The core palette in CSS, Sass, Less, Stylus, JSON, Xresources, base16, and GIMP swatches.",
    category: "Foundation",
    url: "https://github.com/darkmattertheme/darkmatter",
    sigil: "dm",
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
