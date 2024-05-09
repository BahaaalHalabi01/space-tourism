<script lang="ts">
	import { getContext, type Snippet } from 'svelte';

	let {
		children,
		index,
		ctxKey,
	}: { children: Snippet; index: number; ctxKey?: string; label: string } = $props();

	let ctx = getContext<{ current: number; setCurrent: (value: number) => void }>(ctxKey ?? 'tabs');

</script>

<div class={`${index !== ctx?.current && 'hidden'}`}>
	{@render children()}
</div>
