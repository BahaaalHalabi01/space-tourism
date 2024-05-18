<script lang="ts">
	import type { EventHandler } from 'svelte/elements';
	import type { SliderProps } from './slider';
	import SliderElement from './slider-element.svelte';

	let {
		items = [],
		showNumber = false,
		getter,
		setter
	}: SliderProps<Record<string, any>> = $props();

	const current = getter();

	const handleClick: EventHandler<MouseEvent, HTMLButtonElement> = function (event) {
		setter(Number(event.currentTarget.value));
	};
</script>

<div role="tab" class="flex gap-x-4 pb-2">
	{#each items as item, index}
		<button
			class:active={index === current.current}
			class:showNumber
			class:base={!showNumber}
			class="rounded-full aspect-square text-center"
			onclick={handleClick}
			value={index}
		>
			{showNumber ? index : null}
		</button>
	{/each}
</div>
{#each items as item, i}
	<SliderElement {getter} index={i}>
		<svelte:component this={item.component as any} {...item.props} />
	</SliderElement>
{/each}

<!-- add CVA to avoid the important tags -->
<style>
	.active {
		@apply !opacity-100 !bg-white;

		&.showNumber {
			@apply !bg-white !text-blueish-black;
		}
	}

	.base {
		@apply h-2.5 bg-border-light opacity-[0.18];
	}

	.showNumber {
		@apply h-10 opacity-100 bg-transparent border-white/25 border w-10;
	}
</style>
