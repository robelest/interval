<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { browser } from '$app/environment';
	import { initIntervalsPersistence } from '$collections/useIntervals';

	let { children }: { children: Snippet } = $props();
	let ready = $state(false);
	let error = $state<string | null>(null);

	onMount(async () => {
		// Only initialize on client
		if (!browser) return;

		try {
			console.log('[PersistenceGate] Initializing...');
			await initIntervalsPersistence();
			console.log('[PersistenceGate] Ready!');
			ready = true;
		} catch (err) {
			console.error('[PersistenceGate] Failed:', err);
			error = err instanceof Error ? err.message : 'Unknown error';
		}
	});
</script>

{#if ready}
	{@render children()}
{:else if error}
	<div class="flex items-center justify-center h-screen">
		<div class="text-center">
			<p class="text-destructive mb-2">Failed to initialize: {error}</p>
			<button class="text-sm underline" onclick={() => location.reload()}>Retry</button>
		</div>
	</div>
{:else}
	<div class="flex items-center justify-center h-screen">
		<p class="text-muted-foreground">Loading...</p>
	</div>
{/if}
