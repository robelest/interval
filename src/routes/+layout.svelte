<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
	import { setConvexClientContext } from 'convex-svelte';
	import { getConvexClient } from '$lib/convex';
	import PersistenceGate from '$lib/components/PersistenceGate.svelte';

	let { children } = $props();

	onMount(() => {
		// Set Convex context only on client after mount
		setConvexClientContext(getConvexClient());

		// Register service worker (production only)
		if (!dev && 'serviceWorker' in navigator) {
			navigator.serviceWorker.register('/service-worker.js');
		}
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<PersistenceGate>
	{@render children()}
</PersistenceGate>
