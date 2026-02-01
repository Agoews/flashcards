# Chem Flashcards

Chem Flashcards is a minimalist study tool for the s- and p-block (groups 1A–8A). Every element is baked into the repo (no backend), and your study state (group filter, shuffle, and last card) persists in `localStorage`. The UI runs on Next.js App Router with TypeScript, Tailwind CSS, and DaisyUI.

## Features
- Flip animation with tap/click plus a dedicated Flip button for accessibility
- Group filters (1A–8A), shuffle toggle, and “names first” reverse mode
- Large left/right navigation overlays on the card itself for mobile-friendly taps
- Progress badge (`current / total`) and “Start Over” reset button
- Local persistence of filter/shuffle/reverse settings and last viewed index
- Entire dataset (atomic number, symbol, mass, English & Chinese names, group) stored locally in `src/data/elements.ts`

## Run It
```bash
npm install
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000).

## Structure
- `app/page.tsx` – layout + state (filters, shuffle, reverse mode, navigation)
- `src/components/Flashcard.tsx` – flip card UI & navigation overlays
- `src/components/StudyControls.tsx` – filter & settings panel
- `src/hooks/useLocalStorageState.ts` – tiny hook for persisted state
- `tailwind.config.ts` – Tailwind + DaisyUI theme setup
- `postcss.config.mjs`, `app/globals.css` – styling pipeline and globals

Build from here: extend the dataset, add spaced repetition, or plug in new study modes whenever you’re ready.*** End Patch
