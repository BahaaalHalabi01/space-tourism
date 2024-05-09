<script lang="ts">
	import type { SvelteNode } from 'svelte/compiler';
	import TabElement from './tab-element.svelte';
	import { setContext } from 'svelte';

	let { items }: { items: Array<{ label: string; id?: number; component?: SvelteNode }> } =
		$props();

	let current = $state(0);

	setContext('tab-index', {
		get current() {
			return current;
		},
		setCurrent(value: number) {
			current = value;
		}
	});
</script>

<div role="tab" class="flex gap-x-2">
	{#each items as item, i}
		<TabElement index={i}>
			{item.label}
		</TabElement>
	{/each}
</div>
>
