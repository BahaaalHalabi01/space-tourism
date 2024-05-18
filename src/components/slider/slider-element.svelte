<script lang="ts">
	import { getCrew } from '$src/common/crew/current-crew.svelte';
	import { type Snippet } from 'svelte';

	let { children, index }: { children: Snippet; index: number } = $props();

	let current = getCrew();
</script>

<div class={`${index !== current.current && 'hidden'}`}>
	{@render children()}
</div>
