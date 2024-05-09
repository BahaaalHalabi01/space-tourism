<script lang="ts">
	import TabElement from './tab-element.svelte';
	import type { TabsProps } from '$src/components/tab/tabs';
	import { type SvelteComponent, getContext, setContext } from 'svelte';
	import type { EventHandler } from 'svelte/elements';

	let { items, ctxKey }: TabsProps<SvelteComponent<any>> = $props();

	let ctx = getContext<{ current: number; setCurrent: (value: number) => void }>(ctxKey ?? 'tabs');

	const handleClick: EventHandler<MouseEvent, HTMLButtonElement> = function (event) {
		ctx.setCurrent(Number(event.currentTarget.value));
	};

	if (!ctxKey) {
		let current = $state(0);

		setContext(ctxKey, {
			get current() {
				return current;
			},
			setCurrent(value: number) {
				current = value;
			}
		});
	}
</script>

<div role="tab" class="flex gap-x-2">
	{#each items as item, index}
		<button
			class={`${index === ctx?.current && 'border-red-50 border'}`}
			onclick={handleClick}
			value={index}
		>
			{item.label}
		</button>
	{/each}
</div>
{#each items as item, i}
	<TabElement index={i} {ctxKey} label={item.label}>
		<svelte:component this={item.component as any} {...item.props} />
	</TabElement>
{/each}
