# Made by Multitudes

The site for Made by Multitudes — a studio and holding company.

Built with [Astro](https://astro.build).

## Design

The aesthetic is a blend: **Quiet Index** (homepage as a typed
list of ventures, no hero images, strict measure) with the voice
of an **Operating Studio** (writing is a first-class surface, not
a footer link).

- **Type:** Newsreader (variable serif, body & display) +
  JetBrains Mono (UI labels, metadata, navigation).
- **Palette:** warm paper (`#f4f0e8`), ink black (`#161513`),
  one restrained accent — deep ink blue (`#2a3f6e`).
- **Texture:** a faint SVG grain on the paper, never busy.
- **No homepage imagery.** The index is the design.

All design tokens live in `src/styles/global.css`.

## Develop

```bash
npm install
npm run dev
```

Then open the URL the dev server prints.

## Build

```bash
npm run build
npm run preview
```

The static build outputs to `dist/`.

## Structure

```
src/
├─ components/         (reserved — no shared components yet)
├─ content/
│  └─ blog/            Markdown posts. Add a new file here to publish.
├─ content.config.ts   Schema for the blog collection.
├─ layouts/
│  └─ Base.astro       Header, footer, fonts, meta.
├─ pages/
│  ├─ index.astro      Homepage — manifesto + ventures + recent writing.
│  ├─ about.astro      About — long-form, type-first.
│  └─ blog/
│     ├─ index.astro   Writing index, grouped by year.
│     └─ [...slug].astro   Individual post template.
└─ styles/
   └─ global.css       Tokens, typography, layout primitives.
```

## Adding a blog post

Drop a markdown file into `src/content/blog/`:

```markdown
---
title: "Your title"
description: "Optional one-liner that shows under the title in the index."
date: 2026-05-08
tags: ["optional", "tags"]
draft: false
---

Body in markdown.
```

The blog index regenerates automatically.

## Editing the ventures list

The homepage ventures list is currently inline at the top of
`src/pages/index.astro`. If the list grows, lift it into a
`ventures` content collection mirroring the blog setup.
