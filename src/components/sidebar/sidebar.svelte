<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	let open = $state(true);
	function handleToggle() {
		open = !open;
	}
</script>

<button aria-label="open navbar" title="open navbar" onclick={handleToggle} class:hidden={open}>
	<img src="/icon-hamburger.svg" alt="open" />
</button>

<div class="fixed h-full w-full inset-0 z-10" aria-label="overlay" class:hidden={!open}>
	<div class="w-64 h-full flex flex-col ml-auto pt-6 items-end bg-red-300">
		<div class="flex items-center px-6 justify-center h-10 w-fit">
			<button title="close navbar" onclick={handleToggle} class="">
				<img src="/icon-close.svg" alt="close" />
			</button>
		</div>

		<div class="pl-7 pr-2 w-full h-full flex pt-10">
			{@render children()}
		</div>
	</div>
</div>
