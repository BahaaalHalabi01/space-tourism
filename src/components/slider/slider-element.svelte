<script lang="ts">
	import { type Snippet } from 'svelte';

	let { children, active }: { children: Snippet; active: boolean } = $props();
</script>

<div class={!active ? 'hidden' : ''}>
	{@render children()}
</div>
