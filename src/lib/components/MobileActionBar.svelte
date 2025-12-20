<script lang="ts">
	import { goto } from '$app/navigation';
	import { Search, Plus, ArrowLeft, SlidersHorizontal } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import { useIntervals } from '$collections/useIntervals';

	type Props = {
		onsearchopen: () => void;
		onfilteropen: () => void;
		hasActiveFilters?: boolean;
	};

	const { onsearchopen, onfilteropen, hasActiveFilters = false }: Props = $props();

	const collection = useIntervals();

	function createInterval() {
		const id = crypto.randomUUID();
		const now = Date.now();
		collection.insert({
			id,
			title: 'New Interval',
			description: { type: 'doc', content: [] },
			status: 'backlog',
			priority: 'none',
			createdAt: now,
			updatedAt: now
		});
		goto(`/intervals/${id}`);
	}
</script>

<div
	class="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden pb-[env(safe-area-inset-bottom)]"
>
	<div class="flex items-center gap-1 bg-card border border-border shadow-lg p-1">
		<Button
			variant="ghost"
			size="icon"
			onclick={() => goto('/intervals')}
			aria-label="Back to intervals"
			class="h-10 w-10"
		>
			<ArrowLeft class="w-5 h-5" />
		</Button>
		<div class="w-px h-6 bg-border"></div>
		<Button
			variant="ghost"
			size="icon"
			onclick={onsearchopen}
			aria-label="Search intervals"
			class="h-10 w-10"
		>
			<Search class="w-5 h-5" />
		</Button>
		<div class="w-px h-6 bg-border"></div>
		<Button
			variant="ghost"
			size="icon"
			onclick={onfilteropen}
			aria-label="Filter intervals"
			class={cn('h-10 w-10', hasActiveFilters && 'text-primary')}
		>
			<SlidersHorizontal class="w-5 h-5" />
		</Button>
		<div class="w-px h-6 bg-border"></div>
		<Button
			variant="ghost"
			size="icon"
			onclick={createInterval}
			aria-label="New interval"
			class="h-10 w-10"
		>
			<Plus class="w-5 h-5" />
		</Button>
	</div>
</div>
