# Pedro & Júlia — Wedding Invitation

A wedding invitation site for Pedro & Júlia (May 9, 2026 · Finca Comassema, Mallorca),
converted from a single static HTML page into a **Next.js 15** App Router project with TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start the dev server (hot reload)        |
| `npm run build` | Production build                         |
| `npm run start` | Serve the production build               |
| `npm run lint`  | Run ESLint (`next/core-web-vitals`)      |

## Project structure

```
app/
  layout.tsx          # Root layout: Google Fonts (next/font), <html>/<body>, metadata
  page.tsx            # Assembles all sections in order
  globals.css         # All styles (ported from the original <style> block)
  components/
    Hero.tsx          # Hero header (server component)
    Countdown.tsx     # Live countdown to the wedding (client — useEffect timer)
    Venue.tsx         # Venue card + transport note (server)
    Program.tsx       # Day-program timeline (server)
    DressCode.tsx     # Dress code cards (server)
    Faq.tsx           # Collapsible FAQ accordion (client — useState)
    Gifts.tsx         # Gifts message (server)
    Rsvp.tsx          # RSVP form (client — useState)
    Footer.tsx        # Footer (server)
public/
  floral-background.jpg   # Hero background (was an external URL in the original)
legacy/
  pedro-julia-wedding.html  # The original single-file site, kept for reference
```

## Notes on the conversion

- The three inline `<script>` behaviors became React client components:
  - **Countdown** — `setInterval` ticking every second via `useEffect`. It renders
    `00`s on the server and updates after mount, so there is no hydration mismatch.
  - **FAQ** — each item toggles independently (matching the original) via a `Set` in state.
  - **RSVP form** — `onSubmit` is intercepted and shows an inline confirmation. It is a
    **demo form with no backend**; wire it to an API route (e.g. `app/api/rsvp/route.ts`)
    or a form service to actually store responses.
- Fonts (Great Vibes, Cormorant Garamond, Lora) are loaded with `next/font/google` and
  exposed as CSS variables (`--font-great-vibes`, `--font-cormorant`, `--font-lora`).
- The hero background image was downloaded locally into `public/` so the project is
  self-contained.

## Content accuracy

The original page has a couple of internal inconsistencies (e.g. the Venue lists the
ceremony at 16:00 while the Day Program lists it at 13:00). These were carried over
**verbatim** rather than "corrected" — adjust the copy in the relevant component if needed.
