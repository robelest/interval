/**
 * Shared persistence instance for all collections.
 *
 * IMPORTANT: All collections MUST use this shared instance.
 * Creating separate indexeddbPersistence() calls causes data corruption
 * because BrowserLevel doesn't handle concurrent database access well.
 *
 * Uses lazy initialization to avoid SSR issues - IndexedDB only exists
 * in the browser, so we can't create the persistence at module load time.
 *
 * Anti-pattern (causes revert bug):
 * ```typescript
 * // useIntervals.ts
 * persistence: indexeddbPersistence(),  // Creates new instance
 *
 * // useComments.ts
 * persistence: indexeddbPersistence(),  // Creates ANOTHER instance - BUG!
 * ```
 *
 * Correct pattern:
 * ```typescript
 * import { getSharedPersistence } from '@/lib/persistence';
 *
 * // useIntervals.ts
 * persistence: getSharedPersistence(),
 *
 * // useComments.ts
 * persistence: getSharedPersistence(),
 * ```
 */
import { indexeddbPersistence, type Persistence } from '@trestleinc/replicate/client';

let _sharedPersistence: Persistence | null = null;

/**
 * Get the shared persistence instance.
 * Uses lazy initialization to avoid SSR issues.
 */
export function getSharedPersistence(): Persistence {
  if (!_sharedPersistence) {
    _sharedPersistence = indexeddbPersistence();
  }
  return _sharedPersistence;
}
