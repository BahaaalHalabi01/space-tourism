<script lang="ts">
	import { type Snippet } from 'svelte';

	let {
		children,
		getter,
		index
	}: { children: Snippet; getter: () => { current: number }; index: number } = $props();

	const current = getter();
</script>

<div class={current.current !== index ? 'hidden' : ''}>
	{@render children()}
</div>
