import type { XmlFragmentJSON } from '@trestleinc/replicate';

export const Status = {
	BACKLOG: 'backlog',
	TODO: 'todo',
	IN_PROGRESS: 'in_progress',
	DONE: 'done',
	CANCELED: 'canceled'
} as const;

export type StatusValue = (typeof Status)[keyof typeof Status];

export const StatusLabels: Record<StatusValue, string> = {
	backlog: 'Backlog',
	todo: 'Todo',
	in_progress: 'In Progress',
	done: 'Done',
	canceled: 'Canceled'
};

export const Priority = {
	NONE: 'none',
	LOW: 'low',
	MEDIUM: 'medium',
	HIGH: 'high',
	URGENT: 'urgent'
} as const;

export type PriorityValue = (typeof Priority)[keyof typeof Priority];

export const PriorityLabels: Record<PriorityValue, string> = {
	none: 'No priority',
	low: 'Low',
	medium: 'Medium',
	high: 'High',
	urgent: 'Urgent'
};

export interface Interval {
	id: string;
	title: string;
	description: XmlFragmentJSON;
	status: StatusValue;
	priority: PriorityValue;
	createdAt: number;
	updatedAt: number;
}

export interface Comment {
	id: string;
	intervalId: string;
	body: XmlFragmentJSON;
	createdAt: number;
	updatedAt: number;
}
