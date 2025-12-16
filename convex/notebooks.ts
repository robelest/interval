import { replicate } from '@trestleinc/replicate/server';
import { query } from './_generated/server';
import { components } from './_generated/api';
import { v } from 'convex/values';
import type { Notebook } from '../src/types/notebook';

const r = replicate(components.replicate);

export const { stream, material, insert, update, remove } = r<Notebook>({
  collection: 'notebooks',
});

// Get a single notebook by ID
export const get = query({
  args: { id: v.string() },
  handler: async (ctx, { id }) => {
    return await ctx.db
      .query('notebooks')
      .withIndex('by_doc_id', (q) => q.eq('id', id))
      .first();
  },
});

// List all notebooks ordered by last updated
export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('notebooks').withIndex('by_updated').order('desc').collect();
  },
});
