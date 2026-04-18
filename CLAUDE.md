# O projektu

Ovo je fajl o projektu gde ćemo kreirati sajt sa blogom

## Komande

- `npm run dev` — pokretanje razvojnog servera na http://localhost:3000
- `npm run build` — build za produkciju
- `npm start` — pokretanje produkcionog servera
- `npm run lint` — pokretanje ESLint-a

Nije konfigurisan nijedan test framework.

## Arhitektura

Next.js 16 sa **App Router-om** (sve rute se nalaze u `src/app/`). Uključen je TypeScript strict mode.

**Path alias:** `@/*` se razrešava na `./src/*` — koristiti za sve interne importove.

**Tailwind CSS v4** — koristi `@import "tailwindcss"` u CSS-u (ne stare `@tailwind` direktive). PostCSS plugin je `@tailwindcss/postcss`.

**Fontovi:** Geist (sans) i Geist_Mono učitani putem `next/font/google`, dostupni kao CSS promenljive `--font-sans` i `--font-mono` postavljene na `<html>`.

**Dark mode** je podržan putem `prefers-color-scheme` u CSS promenljivama u `globals.css` i Tailwind `dark:` utility klasama.

> **Napomena:** Next.js 16 ima breaking changes — konsultovati `node_modules/next/dist/docs/` pre korišćenja nepoznatih API-ja.
