<script lang="ts">
	import TabElement from './tab-element.svelte';
	import type { TabsProps } from '$src/components/tab/tabs';
	import { type SvelteComponent } from 'svelte';
	import type { EventHandler } from 'svelte/elements';
	import { getDestination} from '$src/common/current.svelte';

	let { items }: TabsProps<SvelteComponent<any>> = $props();

	let current = getDestination();

	const handleClick: EventHandler<MouseEvent, HTMLButtonElement> = function (event) {
		current.setCurrent(Number(event.currentTarget.value));
	};
</script>

<div role="tab" class="flex gap-x-6">
	{#each items as item, index}
		<button
			class:active={index === current.current}
			class={'pb-3 px-0.5 hover:border-b-[3px] hover:border-border h-9 uppercase'}
			onclick={handleClick}
			value={index}
		>
			{item.label}
		</button>
	{/each}
</div>
{#each items as item, i}
	<TabElement index={i} label={item.label}>
		<svelte:component this={item.component as any} {...item.props} />
	</TabElement>
{/each}

<style>
	.active {
		@apply border-b-[3px] border-white;
	}
</style>
