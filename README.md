# start2invest

Static site built with [Astro](https://astro.build). Content is managed as Markdown files in `src/content/pages/`.

## Running locally

```sh
pnpm install
pnpm dev      # dev server at localhost:4321
pnpm build    # build to dist/
pnpm preview  # preview the build
```

## Adding content

Drop a `.md` file in `src/content/pages/` with a `title` frontmatter field:

```md
---
title: Page title
---

Content here...
```

It will be available at `/<filename>`. The file named `index.md` maps to `/`.

## Deploying to GitHub Pages

1. Update `site` in `astro.config.mjs` to your GitHub Pages URL:
   - Site: `https://luctielen.github.io/koerswijziging` with `base: '/koerswijziging'`
2. In your GitHub repo: **Settings → Pages → Source → GitHub Actions**
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically.
