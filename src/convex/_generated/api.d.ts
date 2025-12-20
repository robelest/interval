/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as comments from "../comments.js";
import type * as intervals from "../intervals.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  comments: typeof comments;
  intervals: typeof intervals;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {
  replicate: {
    public: {
      deleteDocument: FunctionReference<
        "mutation",
        "internal",
        {
          collection: string;
          crdtBytes: ArrayBuffer;
          documentId: string;
          threshold?: number;
          version: number;
        },
        { compacted?: boolean; success: boolean }
      >;
      getInitialState: FunctionReference<
        "query",
        "internal",
        { collection: string },
        { checkpoint: { lastModified: number }; crdtBytes: ArrayBuffer } | null
      >;
      insertDocument: FunctionReference<
        "mutation",
        "internal",
        {
          collection: string;
          crdtBytes: ArrayBuffer;
          documentId: string;
          threshold?: number;
          version: number;
        },
        { compacted?: boolean; success: boolean }
      >;
      recovery: FunctionReference<
        "query",
        "internal",
        { clientStateVector: ArrayBuffer; collection: string },
        { diff?: ArrayBuffer; serverStateVector: ArrayBuffer }
      >;
      stream: FunctionReference<
        "query",
        "internal",
        {
          checkpoint: { lastModified: number };
          collection: string;
          limit?: number;
          vector?: ArrayBuffer;
        },
        {
          changes: Array<{
            crdtBytes: ArrayBuffer;
            documentId?: string;
            operationType: string;
            timestamp: number;
            version: number;
          }>;
          checkpoint: { lastModified: number };
          hasMore: boolean;
        }
      >;
      updateDocument: FunctionReference<
        "mutation",
        "internal",
        {
          collection: string;
          crdtBytes: ArrayBuffer;
          documentId: string;
          threshold?: number;
          version: number;
        },
        { compacted?: boolean; success: boolean }
      >;
    };
  };
};
