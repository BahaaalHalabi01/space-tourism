<script lang="ts">
	import TabElement from './tab-element.svelte';
	import type { TabsProps } from '$src/components/tab/tabs';
	import { type SvelteComponent } from 'svelte';
	import type { EventHandler } from 'svelte/elements';
	import { getDestination } from '$src/common/destination/current-destination.svelte';

	let { items }: TabsProps<SvelteComponent<any>> = $props();

	let current = getDestination();

	const handleClick: EventHandler<MouseEvent, HTMLButtonElement> = function (event) {
		current.setCurrent(Number(event.currentTarget.value));
	};
</script>

<div role="tab" class="flex gap-x-6 md:gap-x-8">
	{#each items as item, index}
		<button
			class:active-link={index === current.current}
			class={'h-8 px-0.5 pb-3 font-sans-condensed text-sm uppercase text-text-light hover:border-b-[3px] hover:border-border md:h-9 md:text-base md:tracking-wide'}
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

