import { replicate } from '@trestleinc/replicate/server';
import { query } from './_generated/server';
import { components } from './_generated/api';
import { v } from 'convex/values';
import type { Issue } from '../src/types/issue';

const r = replicate(components.replicate);

export const { stream, material, insert, update, remove, recovery } = r<Issue>({
  collection: 'issues',
});

// Get a single issue by ID
export const get = query({
  args: { id: v.string() },
  handler: async (ctx, { id }) => {
    return await ctx.db
      .query('issues')
      .withIndex('by_doc_id', (q) => q.eq('id', id))
      .first();
  },
});

// List all issues ordered by last updated
export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('issues').withIndex('by_updated').order('desc').collect();
  },
});

// List issues by status
export const listByStatus = query({
  args: { status: v.string() },
  handler: async (ctx, { status }) => {
    return await ctx.db
      .query('issues')
      .withIndex('by_status', (q) => q.eq('status', status))
      .collect();
  },
});
