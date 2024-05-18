<script lang="ts">
	import {type SvelteComponent } from 'svelte';
	import type { EventHandler } from 'svelte/elements';
	import type { SliderProps } from './slider';
	import SliderElement from './slider-element.svelte';

	let {
		items = [],
		showNumber = false,
		getter,
		setter
	}: SliderProps<SvelteComponent<any>> = $props();

	const crew = getter();

	const handleClick: EventHandler<MouseEvent, HTMLButtonElement> = function (event) {
		setter(Number(event.currentTarget.value));
	};
</script>

<div role="tab" class="flex gap-x-4 pb-2">
	{#each items as item, index}
		<button
			class:active={index === crew.current}
			class={'h-2.5 aspect-square uppercase bg-border-light opacity-[0.18] rounded-full'}
			onclick={handleClick}
			value={index}
		>
			{showNumber ? index : null}
		</button>
	{/each}
</div>
{#each items as item, i}
	<SliderElement active={crew.current === i}>
		<svelte:component this={item.component as any} {...item.props} />
	</SliderElement>
{/each}

<style>
	.active {
		@apply opacity-100 bg-white;
	}
</style>
