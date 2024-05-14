<script lang="ts">
	import { getDestination } from '$src/common/current-destination.svelte';
	import { type Snippet } from 'svelte';

	let { children, index }: { children: Snippet; index: number; label: string } =
		$props();

	let current = getDestination();
</script>

<div class={`${index !== current.current && 'hidden'}`}>
	{@render children()}
</div>
