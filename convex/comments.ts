import { replicate } from '@trestleinc/replicate/server';
import { query } from './_generated/server';
import { components } from './_generated/api';
import { v } from 'convex/values';
import type { Comment } from '../src/types/issue';

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

// List comments for an issue
export const listByIssue = query({
  args: { issueId: v.string() },
  handler: async (ctx, { issueId }) => {
    return await ctx.db
      .query('comments')
      .withIndex('by_issue', (q) => q.eq('issueId', issueId))
      .collect();
  },
});
