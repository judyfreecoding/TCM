# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VitePress documentation site about Traditional Chinese Medicine (中医/TCM), titled "into TCM — Traditional Chinese Medicine Principle 暨人体系统运维手册". Content is lecture notes by Judy based on teachings by 周嘉荣 (Zhou Jiarong). The site frames the human body as an operational system with five subsystems (肝/心/脾/肺/肾) that must maintain dynamic balance, analogous to a systems engineering approach.

## Commands

```bash
npm run docs:dev      # Start dev server with hot reload
npm run docs:build    # Build static site to docs/.vitepress/dist/
npm run docs:preview  # Preview the production build locally
```

## Architecture

- **VitePress 1.x** with Vue 3. No additional frameworks or plugins beyond the default VitePress setup.
- Source content lives in `docs/` as markdown files with `.md` extension.
- Site config: `docs/.vitepress/config.mts` — defines nav, sidebar structure, and search (local provider).
- Vue components: `docs/.vitepress/components/` — two custom SVG diagram components:
  - `TimeHealthDiagram.vue` — dual clock face showing meridian-organ time mapping (子午流注).
  - `BietongDiagram.vue` — diagram illustrating the 别通 (alternate communication) relationships.
- Static assets: `docs/public/` — images, diagrams, and reference files (PNG, JPEG, GIF, WebP, PSD, DOCX). Referenced in markdown as `/filename.png`.
- Build output: `docs/.vitepress/dist/` — the static site (served by any HTTP server).

## Content Organization

The sidebar (defined in `config.mts`) organizes content into sections:
- 系统使用规范 (System Usage) / 系统设计概要 (System Design)
- 中医原理 (TCM Principles): 阴阳, 气血, 寒热
- 按摩方法 (Massage Methods): 皮/肉/脉/根骶/筋/宗筋/其它
- 落藏理论 (Disease Location Theory): one page per organ pair
- 五行理论 (Five Elements Theory): 表里/相生/相克/别通/三角/四边/一统天下/运用/实例
- 治病总结 (Treatment Summary)
- 附录 (Appendix): acupoints, drugs, lecture notes
- 佛经 (Buddhist Sutras)

## Notes

- All content is written in Chinese. The project uses 中文 naming conventions for files.
- The `.gitignore` is unusually verbose (listing individual `node_modules/` files). Only `package.json` and `package-lock.json` should be committed from the root; `node_modules/` is already gitignored.
- The site uses VitePress local search (no Algolia API keys needed).
- When adding new pages, register them in `docs/.vitepress/config.mts` sidebar/nav for them to appear in navigation.
