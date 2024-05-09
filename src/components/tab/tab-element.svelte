<script lang="ts">
	import { getContext, type Snippet } from 'svelte';

	let { children, index }: { children: Snippet; index: number } = $props();

	let ctx = getContext<{ current: number; setCurrent: (value: number) => void }>('tab-index');

	function handleClick() {
		ctx.setCurrent(index);
	}

</script>

<button class={`${index === ctx?.current && 'border-red-50 border'}`} onclick={handleClick}>
	{@render children()}
</button>
