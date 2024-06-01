<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fly } from 'svelte/transition';
	import { onNavigate } from '$app/navigation';

	let { children }: { children: Snippet } = $props();

	let open = $state(false);
	function handleToggle() {
		open = !open;
	}

	onNavigate(() => {
		open = false;
	});
</script>

<button
	aria-label="open navbar"
	title="open navbar"
	onclick={handleToggle}
	class:hidden={open}
	class="md:hidden mt-6 mr-6"
>
	<img src="/icon-hamburger.svg" alt="open" />
</button>

<div class="fixed h-full w-full inset-0 z-20" aria-label="overlay" class:hidden={!open}>
	{#if open}
		<div
			class="w-64 h-full flex flex-col ml-auto pt-6 items-end backdrop-blur-4xl"
			transition:fly={{ duration: 300, x: '100vw' }}
		>
			<div class="flex items-center px-6 justify-center h-10 w-fit">
				<button title="close navbar" onclick={handleToggle} class="">
					<img src="/icon-close.svg" alt="close" />
				</button>
			</div>

			<div class="pl-7 pr-2 w-full h-full flex pt-10">
				{@render children()}
			</div>
		</div>
	{/if}
</div>

<style>
</style>
