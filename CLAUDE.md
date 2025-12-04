# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development (runs Vite dev server and Convex backend concurrently)
bun run dev

# Individual dev processes
bun run dev:app     # Vite dev server on port 3000
bun run dev:convex  # Convex backend watcher

# Build & serve
bun run build
bun run serve

# Testing
bun run test        # vitest run

# Linting & formatting (Biome)
bun run lint
bun run format
bun run check       # combined lint + format check
```

## Environment Setup

Copy `.env.example` to `.env` and set `VITE_CONVEX_URL` to your Convex deployment URL.

## Architecture

A Notion-style notebook app built with TanStack Start + Convex + BlockNote, using `@trestleinc/replicate` for CRDT-based real-time sync.

### Stack

- **Framework**: TanStack Start (SSR with TanStack Router)
- **Editor**: BlockNote (Notion-style block editor with native Yjs collaboration)
- **Backend**: Convex (real-time database with WebSocket sync)
- **Sync Layer**: `@trestleinc/replicate` fragments for CRDT-based offline-first rich text sync
- **State**: TanStack DB + React Query for client-side reactive data
- **Styling**: Tailwind CSS v4 with Rose Pine theme, Fraunces + Instrument Sans typography

### Key Patterns

**Replicate Fragments for Rich Text**: BlockNote content is stored as Y.XmlFragment via Replicate's `fragment()` helper. The editor binds directly to the live fragment:
```typescript
const fragment = collection.fragment(notebookId, 'content');
const editor = useCreateBlockNote({
  collaboration: { provider, fragment, user }
});
```

**SSR with Progressive Enhancement**: Routes load initial data via `ConvexHttpClient`, render static content with `StaticNotebookView`, then hydrate to `NotebookEditor` with BlockNote after `ClientOnly`.

**Collection Hook**: `useNotebooks()` creates a singleton collection with `convexCollectionOptions()` and handles reconnection.

### File Structure

- `src/routes/` - TanStack Router file-based routes
  - `notebooks/$notebookId.tsx` - Individual notebook editor
  - `notebooks/index.tsx` - Redirects to first notebook
- `src/components/` - React components
  - `Sidebar.tsx` - Navigation, create/rename/delete notebooks
  - `NotebookEditor.tsx` - BlockNote with Replicate fragment binding
  - `SearchPanel.tsx` - Cmd+K search across notebooks
- `src/collections/useNotebooks.ts` - Notebook collection hook
- `convex/notebooks.ts` - Replicate backend (stream, material, insert, update, remove)
- `convex/schema.ts` - Notebook schema with search index

### Keyboard Shortcuts

- `Cmd+K` / `Ctrl+K` - Open search panel

### Convex Crons

Background jobs for CRDT maintenance:
- Daily compaction at 3am UTC (90-day delta retention)
- Weekly snapshot pruning on Sundays (180-day snapshot retention)
