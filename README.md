# darkmatter-theme

The site for [DARKMATTER](https://github.com/darkmattertheme) — a dark
theme based on [Black Metal Bathory](https://github.com/metalelf0/base16-black-metal-scheme).

## Structure

```text
src/
├── components/     Starfield, Nav, Footer, PortCard, Palette, CodePreview
├── data/
│   ├── palette.ts  the 16 base16 slots + the ANSI mapping
│   └── ports.ts    every port, as an array of objects
├── layouts/        Layout.astro (meta, starfield, chrome)
├── pages/
│   ├── index.astro landing page
│   └── ports.astro all ports, filterable by category
└── styles/
    └── global.css  palette as CSS custom properties + primitives
```

## Adding a port

Append an object to `ports` in `src/data/ports.ts`. Both the landing page and
`/ports` map over that array, so nothing else needs to change.

```ts
{
  name: "Helix",
  slug: "helix",
  description: "A theme.toml for the Helix editor.",
  category: "Editor",
  url: "https://github.com/darkmattertheme/…",
  sigil: "hx",          // 2–3 chars for the card badge
  install: "theme = 'darkmatter'",  // optional, copyable
}
```

New categories go in the `Category` union and the `categories` array below it.

## Commands

| Command        | Action                                |
| :------------- | :------------------------------------ |
| `bun install`  | Install dependencies                  |
| `bun dev`      | Dev server at `localhost:4321`        |
| `bun build`    | Build to `./dist/`                    |
| `bun preview`  | Preview the build                     |
