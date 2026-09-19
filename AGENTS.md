# AGENTS.md

## Purpose

This repository is the public XSTrade Project Center powered by VitePress.

It is a public-facing site. Keep all content suitable for public release and maintain the site as the source of truth for products that are explicitly published here.

## Core rules

1. **Only maintain products that are explicitly present in this repository or explicitly requested for publication.**
   - Do not discover or add products from other GitHub repositories automatically.
   - Do not use chat history, personal memory, private project information, or inferred future plans as publication sources.
   - A new product must be explicitly requested or have its public content added to this repository.

2. **Do not break existing public URLs without an intentional migration plan.**
   - Existing product pages currently live under `docs/plugins/`.
   - Keep these paths for compatibility even though the site is now presented as a project center.
   - Do not rename `/plugins/` routes only for terminology consistency.

3. **Prefer small, consistent updates over one-off page structures.**
   - Reuse the current homepage project-card pattern.
   - Reuse the existing project-detail page conventions.
   - Keep navigation scalable; do not add every product directly to the top navigation.

4. **Never invent release information.**
   - Versions, release dates, download links, supported browsers/platforms, features, and changelog entries must come from explicit project information.
   - If information is unavailable, omit it or mark it clearly instead of guessing.

## Repository structure

- `docs/index.md` — public homepage and featured/current project cards.
- `docs/plugins/index.md` — complete public project list.
- `docs/plugins/<project>.md` — individual project detail, download, usage, and changelog pages.
- `docs/.vitepress/config.ts` — site metadata, top navigation, sidebar, footer.
- `docs/.vitepress/theme/custom.css` — shared custom styles.
- `docs/.vitepress/theme/assets/` — product logos and other local public assets.
- `.github/workflows/deploy-pages.yml` — GitHub Pages build/deploy workflow.

## Adding a new product

When a new product is explicitly approved for publication, update the site in this order.

### 1. Create the product page

Create:

`docs/plugins/<stable-slug>.md`

Use a stable, lowercase, hyphen-separated slug. Avoid changing it after publication.

A product page should contain the relevant sections below when information is available:

- Product name
- Short description
- Current version / release status
- Release or update date
- Supported platforms
- Download / official installation links
- Main features
- Installation or quick-start instructions
- Important compatibility or migration notices
- Changelog

Do not copy unsupported claims from unrelated sources.

### 2. Add the product to the project list

Update `docs/plugins/index.md`.

Add one row containing:

- Product name
- Short purpose
- Current version/status
- Link to the product page

Keep descriptions short and factual.

### 3. Add or update the homepage card

Update `docs/index.md`.

Add a project card using the existing `.project-card` structure.

A card should normally include:

- Logo
- Product name
- Current public version/status
- One concise description
- Relevant platform tags
- Link to the project page

Do not add special homepage layouts for one product unless there is a strong site-wide reason.

### 4. Add public assets

If the product has a logo, place it under:

`docs/.vitepress/theme/assets/`

Add only assets that are safe to publish.

If a new CSS class is required, update `docs/.vitepress/theme/custom.css` and follow the current naming pattern.

### 5. Update navigation only when necessary

Do **not** add each product to the top navigation.

The top navigation should remain focused on site-level destinations such as:

- 首页
- 项目
- GitHub

The project sidebar in `docs/.vitepress/config.ts` should include the new product so readers can move between project pages.

## Updating an existing product version

For a normal version update, keep the update focused and synchronize every place where the version is shown.

### Required checks

1. Update the product detail page in `docs/plugins/<project>.md`.
   - Current/latest version
   - Update date, if maintained
   - Changelog entry
   - Download links, if they changed
   - Compatibility/support information, if it changed

2. Update `docs/plugins/index.md`.
   - Current version/status

3. Update `docs/index.md`.
   - Homepage version badge/status if that product is shown there

4. Review existing notices.
   - Remove obsolete migration warnings only when they are no longer relevant.
   - Preserve warnings that still protect users from data loss, incompatible upgrades, or confusing product identities.

### Changelog style

Add the newest release above older releases.

Recommended format:

```md
### vX.Y.Z — YYYY-MM-DD

#### 新增
- ...

#### 优化
- ...

#### 修复
- ...
```

Only include sections that contain actual changes.

## Updating download links

When a store URL, release package, or installation method changes:

1. Update the relevant product page.
2. Preserve other valid official installation options.
3. Prefer official browser stores or official project release locations.
4. Do not replace a working official link with an unverified mirror.
5. If different stores publish versions at different times, describe that clearly rather than assuming they are synchronized.

## Product identity and migration safety

Some products may have similar names but remain separate products.

Do not merge, rename, redirect, or present one product as the upgrade path for another unless that relationship is explicitly documented.

When an update can affect existing local data, browser extension IDs, storage formats, or migration behavior, keep a visible warning on the project page.

## Content style

Public-facing copy should be:

- Concise
- Factual
- Product-focused
- Understandable without internal company/project context
- Free of private notes, unpublished plans, personal information, or speculative claims

Avoid marketing superlatives unless they are objectively supported.

## Visual consistency

When changing the homepage or project cards:

- Reuse the existing grid/card system.
- Keep desktop and mobile behavior working.
- Support VitePress light and dark themes.
- Prefer CSS variables from VitePress over hard-coded theme-specific colors.
- Avoid adding large dependencies for simple presentation changes.

## Validation before merging

For content-only changes, review all affected links and displayed version numbers.

For structural, configuration, or style changes, run:

```bash
npm install
npm run docs:build
```

If needed, preview locally with:

```bash
npm run docs:preview
```

Before merging, verify:

- The VitePress build succeeds.
- Internal links work with the configured `base: '/plugin-center/'`.
- Existing public product URLs still work.
- Homepage and project list show consistent versions/statuses.
- Mobile layout remains usable.
- No private or inferred project information has been published.

## Deployment

The site is deployed through GitHub Actions after changes reach `main`.

Workflow:

`.github/workflows/deploy-pages.yml`

After merging a site change, confirm that the GitHub Pages workflow completes successfully.

## Maintenance principle

Treat these three locations as a synchronized public index:

1. `docs/index.md` — homepage presentation
2. `docs/plugins/index.md` — complete project directory
3. `docs/plugins/<project>.md` — authoritative product details

When adding a product or changing a public version/status, check all three so the site does not drift out of sync.
