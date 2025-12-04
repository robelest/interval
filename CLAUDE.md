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

This is a TanStack Start + Convex application demonstrating real-time CRDT-based sync using `@trestleinc/replicate`.

### Stack

- **Framework**: TanStack Start (SSR with TanStack Router)
- **Backend**: Convex (real-time database with WebSocket sync)
- **Sync Layer**: `@trestleinc/replicate` for CRDT-based offline-first replication
- **State**: TanStack DB + React Query for client-side reactive data
- **Styling**: Tailwind CSS v4 with Rose Pine theme colors

### Key Patterns

**SSR with Progressive Enhancement**: Routes load initial data via `ConvexHttpClient` (HTTP), then hydrate with live `ConvexClient` (WebSocket) for real-time updates. See `src/routes/index.tsx` for the `StaticTasksView` → `LiveTasksView` pattern using `ClientOnly`.

**Replicate Collections**: Define synced collections in `convex/tasks.ts` using `defineReplicate()`, then consume them client-side via `useTasks()` hook which creates a singleton collection with `convexCollectionOptions()`.

**Schema Definition**: Use `replicatedTable()` wrapper in `convex/schema.ts` which auto-injects `version` and `timestamp` fields for CRDT operations.

### File Structure

- `src/routes/` - TanStack Router file-based routes
- `src/routeTree.gen.ts` - Auto-generated route tree (do not edit)
- `convex/` - Convex backend (schema, mutations, crons)
- `convex/_generated/` - Auto-generated Convex types (do not edit)

### Convex Crons

Background jobs for CRDT maintenance:
- Daily compaction at 3am UTC (90-day delta retention)
- Weekly snapshot pruning on Sundays (180-day snapshot retention)
