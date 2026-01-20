# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Ancyr Academy**, a French software engineering education platform built as a Turborepo monorepo. The site offers courses and workshops on Clean Architecture, TDD, CQRS, and DDD.

## Commands

```bash
# Install dependencies
pnpm install

# Development (runs all apps)
pnpm dev

# Build all apps
pnpm build

# Lint all apps
pnpm lint

# Format code
pnpm format

# Run commands for specific app
pnpm --filter @ancyracademy/web dev
pnpm --filter @ancyracademy/clean-architecture dev
```

## Architecture

### Monorepo Structure

- **apps/web** - Main marketing website (Next.js 15 with App Router)
- **apps/clean-architecture** - Standalone landing page for Clean Architecture course
- **packages/shared** - Shared React components, pages, content, and utilities
- **packages/tsconfig** - Shared TypeScript configurations

### Key Patterns

**Shared Package (`@ancyracademy/shared`)**: Contains all reusable business logic:
- `src/pages/` - Full page components (CleanArchitecturePage, TDDPage, CQRSPage, WorkshopDDDPage)
- `src/components/` - UI components (SalesPage, Course, Review, Header, Footer)
- `src/content/` - Course definitions, reviews, promotional content
- `src/lib/` - Utilities (teachable API, duration helpers)

**App Pages are Thin**: Apps import full page components from shared:
```tsx
import { CleanArchitecturePage } from "@ancyracademy/shared";
const Page = () => <CleanArchitecturePage />;
```

**Styling**: Uses styled-components with SCSS modules in shared package. Tailwind CSS available in web app.

**Blog System**: Markdown files in `apps/web/src/posts/` processed with remark/rehype.

## Tech Stack

- Next.js 15 with Turbopack
- React 19
- TypeScript (strict mode with `noUncheckedIndexedAccess`)
- pnpm 9.x workspaces
- styled-components + Tailwind CSS
