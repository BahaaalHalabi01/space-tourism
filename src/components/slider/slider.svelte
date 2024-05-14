<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import type { EventHandler } from 'svelte/elements';
	import type { SliderProps } from './slider';
	import { getCrew } from '$src/common/current-crew.svelte';
	import SliderElement from './slider-element.svelte';

	let { items = [] }: SliderProps<SvelteComponent<any>> = $props();

	const crew = getCrew();

	const handleClick: EventHandler<MouseEvent, HTMLButtonElement> = function (event) {
		crew.setCurrent(Number(event.currentTarget.value));
	};
</script>

<div role="tab" class="flex gap-x-4">
	{#each items as item, index}
		<button
			class:active={index === crew.current}
			class={'pb-3 px-0.5 hover:border-b-[3px] hover:border-border h-9 uppercase'}
			onclick={handleClick}
			value={index}
		>
		</button>
	{/each}
</div>
{#each items as item, i}
	<SliderElement index={i} >
		<svelte:component this={item.component as any} {...item.props} />
	</SliderElement >
{/each}
