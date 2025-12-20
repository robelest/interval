import { replicate } from '@trestleinc/replicate/server';
import { query } from './_generated/server';
import { components } from './_generated/api';
import { v } from 'convex/values';
import type { Comment } from '../lib/types';

const r = replicate(components.replicate);

export const { stream, material, insert, update, remove, recovery } = r<Comment>({
  collection: 'comments',
});

// Get a single comment by ID
export const get = query({
  args: { id: v.string() },
  handler: async (ctx, { id }) => {
    return await ctx.db
      .query('comments')
      .withIndex('by_doc_id', (q) => q.eq('id', id))
      .first();
  },
});

// List comments for an interval
export const listByInterval = query({
  args: { intervalId: v.string() },
  handler: async (ctx, { intervalId }) => {
    return await ctx.db
      .query('comments')
      .withIndex('by_interval', (q) => q.eq('intervalId', intervalId))
      .collect();
  },
});
