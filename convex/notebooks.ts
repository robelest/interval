import { defineReplicate } from '@trestleinc/replicate/server';
import { query } from './_generated/server';
import { components } from './_generated/api';
import { v } from 'convex/values';
import type { Notebook } from '../src/types/notebook';

export const { stream, material, insert, update, remove, protocol, compact, prune } =
  defineReplicate<Notebook>({
    component: components.replicate,
    collection: 'notebooks',
    compaction: { retention: 90 },
    pruning: { retention: 180 },
  });

// Get a single notebook by ID
export const get = query({
  args: { id: v.string() },
  handler: async (ctx, { id }) => {
    return await ctx.db
      .query('notebooks')
      .withIndex('by_notebook_id', (q) => q.eq('id', id))
      .first();
  },
});

// List all notebooks ordered by last updated
export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query('notebooks')
      .withIndex('by_updated')
      .order('desc')
      .collect();
  },
});

// Search notebooks by content
export const search = query({
  args: { query: v.string() },
  handler: async (ctx, { query: searchQuery }) => {
    if (!searchQuery.trim()) {
      return [];
    }
    return await ctx.db
      .query('notebooks')
      .withSearchIndex('search_content', (q) => q.search('plainText', searchQuery))
      .take(20);
  },
});
