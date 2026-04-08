# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
pnpm dev             # Start dev server
pnpm build           # Production build
pnpm start           # Start production server

# Code quality
pnpm lint            # Run ESLint
pnpm lint:fix        # Run ESLint with auto-fix
pnpm check-types     # TypeScript type check (no emit)
```

Pre-commit hooks run `eslint --fix` and `tsc --noEmit` via lint-staged. Requires Node 22+.

## Architecture

**Next.js 16 App Router** with React 19. All routes live under `src/app/[locale]/` due to built-in i18n via `next-intl`.

### Internationalization

Every page/layout is wrapped in the `[locale]` dynamic segment. Supported locales: `en`, `ja` (defined in `src/i18n/i18nNavigation.ts`). Translation messages live in `messages/{locale}.json`.

- Use the re-exported navigation primitives from `src/i18n/i18nNavigation.ts` (`Link`, `redirect`, `useRouter`, `usePathname`) instead of Next.js defaults — they are locale-aware.
- `src/proxy.ts` handles locale detection and redirects for all non-asset routes (Next.js 16 renamed `middleware.ts` → `proxy.ts`).

### Environment Variables

Declare all env vars in `src/lib/env.mjs` using `@t3-oss/env-nextjs` with Zod schemas. Server vars go in the `server` object, client vars (must be prefixed `NEXT_PUBLIC_`) go in `client`. Accessing undeclared vars will throw at build time.

### Styling

Tailwind CSS v4 — no `tailwind.config.js`. Configuration is done via CSS in `src/styles/globals.css`. Use `cn()` from `src/lib/utils.ts` (combines `clsx` + `tailwind-merge`) for conditional/merged class names. Use `cva` from `class-variance-authority` for component variant definitions.

### ESLint

Uses `@antfu/eslint-config` v8. Key enforced rules:
- `type` over `interface`
- `1tbs` brace style
- Top-level `await` allowed
- Import order enforced by `perfectionist/sort-imports`

`@eslint-react/eslint-plugin` is pinned to `3.0.0` via pnpm override (required by `@antfu/eslint-config 8.x`). The `minimatch>brace-expansion` override is also required for ESLint 10 + pnpm compatibility.

### Component Conventions

Components in `src/components/` use a directory-per-component pattern (e.g., `Spinner/Spinner.tsx`).

### TypeScript

`@total-typescript/ts-reset` is included globally — it improves default TS lib typings (e.g., `JSON.parse` returns `unknown`). Path alias `@/*` maps to `src/*`. TypeScript 6 — `baseUrl` removed (deprecated in TS6; `paths` works without it).

## Always update this file and README.md when making tooling or architectural changes.
