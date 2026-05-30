# CLAUDE.md

Guidance for Claude Code (and humans) working in this repository.

## What this is

A **"Wikipedia for peptides"**, an open, community-style reference wiki covering peptides
(structure, function, mechanisms, research status, dosing literature, references, etc.).

- The **wiki content is the product.** It lives in Docusaurus as MDX.
- A **Next.js landing page** fronts it (marketing/home + room for dynamic features later:
  search, accounts, interactive tools).
- Both share **one design language** via a framework-agnostic design-tokens package.

The wiki is the **MVP slice** of a larger vision, a *"trusted intelligence network for
peptide therapies"* (research DB + discovery engine + verified provider/vendor directory +
clinician community). MVP scope deliberately excludes prescriptions/sales/fulfillment. See
`project-docs/` for the strategy inputs (`BMC.pdf`, `torefine.md`) that drive the PRD.

Working codename: `julia`. Target hosting: **Vercel** (deferred, local dev first).

## Tech stack (pinned to latest, verified via npm registry on 2026-05-29)

| Concern            | Choice                          | Version   |
| ------------------ | ------------------------------- | --------- |
| Runtime / PM       | **Bun**                         | 1.3.x     |
| Monorepo orchestr. | **Turborepo**                   | latest    |
| Web app            | **Next.js** (App Router)        | 16.2.x    |
| UI library         | **React**                       | 19.2.x    |
| Components / theme  | **MUI** (`@mui/material`)       | 9.0.x     |
| Next.js + MUI glue | **`@mui/material-nextjs`**      | 9.0.x     |
| Docs / wiki        | **Docusaurus**                  | 3.10.x    |
| Testing            | **Vitest**                      | 4.1.x     |
| Linting            | **ESLint** (flat config)        | latest    |
| Formatting         | **Prettier**                    | latest    |
| Git hooks          | **Husky** + **lint-staged**     | latest    |
| Commit lint        | **commitlint** (conventional)   | latest    |
| Language           | **TypeScript**                  | latest    |

> When adding or upgrading any library, **verify the current version and API via the
> `context7` MCP** (and the **`mui-mcp`** for anything MUI). Do not rely on training data -
> these versions move fast. MUI v9 and Next 16 are both recent majors.

## Repository layout (Bun workspaces + Turborepo)

```
julia/
├── apps/
│   ├── web/            # Next.js 16 + MUI 9, landing page & dynamic features
│   └── docs/           # Docusaurus 3.10, the peptide wiki (MDX articles)
├── packages/
│   ├── tokens/         # design tokens → token.css (CSS custom properties) + TS exports
│   └── tsconfig/       # shared TS config (extended by apps/packages)
├── project-docs/       # internal planning (BMC, PRD, raw notes), NOT published
├── turbo.json
├── package.json        # root: workspaces + turbo scripts
├── bunfig.toml
└── CLAUDE.md
```

> `project-docs/` ≠ `apps/docs`. `project-docs/` is strategy/PRD that *feeds* development;
> `apps/docs` is the public Docusaurus wiki served at `/doc`.

(`packages/ui` for shared React components may be added later, only if real sharing emerges.)

## The key architectural decision: shared design tokens

Next.js/MUI and Docusaurus are **two separate React frameworks with separate build systems**.
You **cannot** share a MUI `ThemeProvider` into Docusaurus. The shared primitive that *does*
cross the boundary is **CSS custom properties**.

`packages/tokens` is the single source of truth:

- Emits **`token.css`**, CSS variables for color, spacing, typography, radius, etc.
- Also exports the same values as **typed TS objects**.

Consumers:

- **`apps/web` (MUI):** maps tokens into the MUI theme (`palette`, `typography`, …), and
  imports `token.css` so the same variables are available to non-MUI CSS.
- **`apps/docs` (Docusaurus):** imports `token.css` in `src/css/custom.css` and overrides
  Infima variables (`--ifm-color-primary`, etc.) with the token values.

Rule: **never hardcode a color/spacing value** in an app. Add it to `packages/tokens` and
reference the variable. This keeps the landing page and the wiki visually identical.

## Commands

> Filled in during environment setup. Intended shape (run from repo root):

```bash
bun install            # install all workspaces
bun run dev            # turbo: run web + docs dev servers
bun run build          # turbo: build all
bun run test           # turbo: vitest across workspaces
bun run lint           # turbo: lint all
```

Per-app: `bun run --filter web dev`, `bun run --filter docs dev`.

## Routing: two sites on two domains (subdomain architecture)

The landing page and the wiki are **separate origins**, in dev and in production.

| App         | Local dev        | Production              | Notes                         |
| ----------- | ---------------- | ---------------------- | ----------------------------- |
| `apps/web`  | `localhost:3000` | `www.knowpeptide.com`  | landing page                  |
| `apps/docs` | `localhost:3001` | `doc.knowpeptide.com`  | wiki at root (`baseUrl: '/'`) |

- There is **no proxy rewrite**. The landing page links to the wiki as an external URL
  via `DOCS_URL` (read server-side in `apps/web/app/page.tsx`). The wiki navbar "Home"
  links back to the landing via `WEB_URL`.
- `bun run dev` (Turbo) starts both. Dev mirrors prod: a cross-origin link, no `/doc` path.
- Env vars (see `.env.production` / `.env.example` per app):
  - **web**: `SITE_URL` (its own origin), `DOCS_URL` (the wiki).
  - **docs**: `SITE_URL` (its own origin), `WEB_URL` (the landing). Docusaurus does NOT
    auto-load `.env`, so set these in the Vercel docs-project dashboard.

## Code quality & git hooks (strict)

Quality gates are non-negotiable and enforced automatically:

- **ESLint** (flat config) + **Prettier** at the repo root, shared across workspaces.
  Prettier owns formatting; ESLint owns correctness (`eslint-config-prettier` disables
  conflicting style rules).
- **Husky** manages git hooks:
  - `pre-commit` → **lint-staged** runs ESLint `--fix` + Prettier on staged files only.
  - `pre-push` → `bun run test` + `bun run build` (or typecheck) must pass.
  - `commit-msg` → **commitlint** enforces Conventional Commits.
- CI should run the same `lint` / `test` / `build` so hooks and CI never diverge.

## Commit rules (HARD RULE)

- **NEVER add a `Co-Authored-By: Claude` (or any AI co-author) trailer to commits.**
  Commits are authored solely by the human committer. No exceptions.
- Use **Conventional Commits** (`feat:`, `fix:`, `chore:`, `docs:`, …), enforced by commitlint.
- Only commit/push when explicitly asked.

## Conventions

- **Package manager is Bun.** Use `bun add` / `bun install`, never `npm` or `yarn`.
  Lockfile is `bun.lock`.
- **TypeScript everywhere**, strict mode. Apps extend `packages/tsconfig`.
- **Tests with Vitest** (`*.test.ts(x)` colocated with source). Run via Turbo.
- **Lint/format before committing**, Husky + lint-staged enforce this automatically.
- **MUI usage:** consult `mui-mcp` for component APIs. Use the `@mui/material-nextjs` App
  Router integration for SSR/emotion cache (verify exact import path for v9/Next 16 at setup).
- **Wiki content:** peptide articles are MDX under `apps/docs/docs/`. Prefer structured,
  well-referenced articles; this is a reference work, cite sources.
- **No secrets in the repo.** Env vars via `.env.local` (gitignored).

## Content & compliance note

This is an informational reference about peptides and the research literature. Articles
should be **educational and cite sources**, and must **not** be framed as medical advice or
dosing instructions for human use. Keep a clear disclaimer pattern for any clinical content.

## Deploying to Vercel

Vercel does **not** auto-discover monorepo apps. Each deployable app is its own
**Vercel Project**, both importing the same Git repo, each with a different
**Root Directory**.

| Project (suggested) | Root Directory | Framework  | Domain                |
| ------------------- | -------------- | ---------- | --------------------- |
| `knowpeptide-web`   | `apps/web`     | Next.js    | `www.knowpeptide.com` |
| `knowpeptide-docs`  | `apps/docs`    | Docusaurus | `doc.knowpeptide.com` |

Setup per project (in the Vercel dashboard, once):

1. Import the repo, set **Root Directory** to the app folder (`apps/web` or `apps/docs`).
   Vercel only reads `vercel.json` from the Root Directory, so this is required (it cannot
   be set in `vercel.json` itself). If Root Directory is the repo root, Vercel finds no
   config, detects no framework, and fails with "No Output Directory named 'public'".
2. The committed `apps/*/vercel.json` pins framework, build command, output dir, and
   `turbo-ignore` (so each project only rebuilds when its files change). The build
   commands `cd ../..` to the repo root so Turbo builds `@julia/tokens` first and Bun
   resolves workspaces. **Root Directory must be the app folder** for these to work.
3. Assign domains: web to `www.knowpeptide.com`, docs to `doc.knowpeptide.com`.
4. Env vars (per project):
   - **web**: `SITE_URL=https://www.knowpeptide.com`, `DOCS_URL=https://doc.knowpeptide.com`.
   - **docs**: `SITE_URL=https://doc.knowpeptide.com`, `WEB_URL=https://www.knowpeptide.com`.

Routing: there is **no proxy**. Each domain serves its own app directly. The landing
links to the wiki via `DOCS_URL`; the wiki links home via `WEB_URL`. The wiki uses
`baseUrl: '/'`, so it lives at the root of `doc.knowpeptide.com`. Faster than a proxy
rewrite (no extra hop) and no trailing-slash loop to manage.

Gotcha: the "No Output Directory named 'public'" error means the **framework preset
reset to Other** (Root Directory not the app folder, or build command overridden). Fix:
set Root Directory to `apps/docs` and Framework Preset to `Docusaurus (v2)` (output
`build`); the committed `vercel.json` pins this once Root Directory is correct.

## Status / roadmap

1. ✅ Decide stack & architecture; write this CLAUDE.md.
2. ⏳ Scaffold the monorepo (Bun + Turborepo, `apps/web`, `apps/docs`, `packages/tokens`).
3. ⏳ Write the PRD (`docs/PRD.md` or similar), then continue from a fresh context.
4. ⏳ Build out tokens → wire MUI theme + Docusaurus theme.
5. ⏳ Vercel deployment wiring (deferred).
