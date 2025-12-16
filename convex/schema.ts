import { defineSchema, type TableDefinition } from 'convex/server';
import { v } from 'convex/values';
import { table, prose } from '@trestleinc/replicate/server';

export default defineSchema({
  notebooks: table(
    {
      id: v.string(),
      title: v.string(),
      // Content stored as Y.XmlFragment, materialized as ProseMirror/BlockNote JSON
      content: prose(),
      createdAt: v.number(),
      updatedAt: v.number(),
    },
    (t: TableDefinition) =>
      t
        .index('by_doc_id', ['id'])
        .index('by_timestamp', ['timestamp'])
        .index('by_updated', ['updatedAt'])
  ),
});
