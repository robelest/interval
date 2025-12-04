import type { ConvexCollection } from '@trestleinc/replicate/client';

/**
 * Minimal Yjs provider wrapper for BlockNote collaboration.
 *
 * The actual sync is handled by Replicate's collection - this provider
 * just satisfies BlockNote's interface requirement. Changes to the
 * Y.XmlFragment are automatically captured by transactWithDelta()
 * and synced to Convex.
 */
export class ReplicateProvider {
  // BlockNote expects an awareness property, but we don't need it for single-user
  awareness: null = null;

  constructor(
    private collection: ConvexCollection<unknown>,
    private documentId: string
  ) {
    // Replicate handles sync internally via WebSocket subscription
    // No additional setup needed
  }

  destroy() {
    // Cleanup if needed - Replicate handles this via collection lifecycle
  }
}
