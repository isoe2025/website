# Copilot Instructions for symposium-connect-hub

## Project Overview
This is a Vite + React + TypeScript web application using Tailwind CSS and shadcn-ui for UI components. The project is structured for modularity and rapid development, with a focus on clean separation of UI, hooks, and utility logic.

## Key Architecture & Patterns
- **Entry Point:** `src/main.tsx` bootstraps the React app, rendering `App.tsx`.
- **Page Routing:** All main pages are in `src/pages/` (e.g., `Index.tsx`, `NotFound.tsx`).
- **UI Components:** Shared and feature components are in `src/components/`, with reusable primitives in `src/components/ui/` (e.g., `button.tsx`, `dialog.tsx`).
- **Hooks:** Custom React hooks are in `src/hooks/` (e.g., `use-mobile.tsx`, `use-toast.ts`).
- **Utilities:** General-purpose helpers are in `src/lib/utils.ts`.
- **Assets:** Static assets are in `src/assets/` and public files in `public/`.

## Developer Workflows
- **Install dependencies:** `npm install`
- **Start dev server:** `npm run dev` (auto-reloads on changes)
- **Build for production:** `npm run build`
- **Preview production build:** `npm run preview`
- **Linting:** If configured, run `npm run lint` (see `eslint.config.js`).

## Project-Specific Conventions
- **Component Structure:** Prefer functional components. Co-locate styles (Tailwind classes) within component files.
- **UI Primitives:** Use shadcn-ui primitives from `src/components/ui/` for consistency.
- **TypeScript:** Use explicit types for props and state. Avoid `any`.
- **No explicit routing:** If adding routing, follow the pattern in `src/pages/` and update the entry point accordingly.
- **Toast/Notifications:** Use the `use-toast` hook and related UI in `src/components/ui/`.

## Integration & External Services
- **Lovable Platform:** Project can be edited and deployed via [Lovable](https://lovable.dev/). See README for details.
- **No backend:** This repo is frontend-only. For API integration, add service logic in `src/lib/` and document endpoints.

## Examples
- To add a new section to the homepage, create a component in `src/components/`, import and use it in `src/pages/Index.tsx`.
- To add a new UI primitive, follow the structure in `src/components/ui/` and document usage in a comment.

## References
- See `README.md` for setup, editing, and deployment instructions.
- For UI patterns, review existing components in `src/components/` and `src/components/ui/`.

---
For questions about project-specific patterns, check this file and the README before introducing new dependencies or architectural changes.
