import { cronJobs } from 'convex/server';
import { internal } from './_generated/api';

/**
 * Cron Jobs for Notebooks Collection
 *
 * Schedules automatic compaction and pruning of CRDT storage.
 */

const crons = cronJobs();

// Daily compaction at 3am UTC
// Compacts CRDT deltas older than 90 days into efficient snapshots
crons.daily('compact notebooks', { hourUTC: 3, minuteUTC: 0 }, internal.notebooks.compact, {});

// Weekly snapshot cleanup on Sundays at 3am UTC
// Deletes snapshots older than 180 days (keeps 2 most recent)
crons.weekly(
  'prune notebooks snapshots',
  { dayOfWeek: 'sunday', hourUTC: 3, minuteUTC: 0 },
  internal.notebooks.prune,
  {}
);

export default crons;
