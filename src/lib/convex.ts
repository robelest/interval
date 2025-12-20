import { browser } from '$app/environment';
import { PUBLIC_CONVEX_URL } from '$env/static/public';
import { ConvexClient } from 'convex/browser';

// Lazy-initialized client - only created in browser
let convexClient: ConvexClient | null = null;

/**
 * Get the ConvexClient singleton.
 * Only call this in browser context (onMount, event handlers, etc.)
 */
export function getConvexClient(): ConvexClient {
  if (!browser) {
    throw new Error('ConvexClient can only be used in browser');
  }
  if (!convexClient) {
    convexClient = new ConvexClient(PUBLIC_CONVEX_URL);
  }
  return convexClient;
}
