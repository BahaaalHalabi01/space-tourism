<script lang="ts">
	import type { EventHandler } from 'svelte/elements';
	import type { SliderProps } from './slider';
	import SliderElement from './slider-element.svelte';

	let {
		items = [],
		showNumber = false,
		getter,
		setter,
		className
	}: SliderProps<Record<string, any>> = $props();

	const current = getter();

	const handleClick: EventHandler<MouseEvent, HTMLButtonElement> = function (event) {
		setter(Number(event.currentTarget.value));
	};

	$inspect(current);
</script>

<div role="tab" class={`flex gap-x-4 pb-2 md:order-last md:pt-8 ${className}`}>
	{#each items as _, index}
		<button
			class:active={index === current.current}
			class:showNumber
			class:base={!showNumber}
			class="aspect-square rounded-full text-center"
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

<style>
	button.active {
		@apply bg-white opacity-100;

		&.showNumber {
			@apply !bg-white !text-blueish-black;
		}
	}

	.base {
		@apply h-2.5 bg-border-light opacity-[0.18];
	}

	.showNumber {
		@apply size-10 border border-white/25 bg-transparent opacity-100 md:size-[60px];
	}
</style>
