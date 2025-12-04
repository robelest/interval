import { defineSchema, type TableDefinition } from 'convex/server';
import { v } from 'convex/values';
import { replicatedTable } from '@trestleinc/replicate/server';

export default defineSchema({
  notebooks: replicatedTable(
    {
      id: v.string(),
      title: v.string(),
      // Content stored as Y.XmlFragment, materialized as ProseMirror/BlockNote JSON
      content: v.any(),
      createdAt: v.number(),
      updatedAt: v.number(),
      // Plain text extracted from content for search indexing
      plainText: v.optional(v.string()),
    },
    (table: TableDefinition) =>
      table
        .index('by_notebook_id', ['id'])
        .index('by_timestamp', ['timestamp'])
        .index('by_updated', ['updatedAt'])
        .searchIndex('search_content', {
          searchField: 'plainText',
          filterFields: ['id'],
        })
  ),
});
