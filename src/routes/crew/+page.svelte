<script lang="ts">
	import { getCrew } from '$src/common/current-crew.svelte';
	import { getContext } from 'svelte';

	const ctx: { index: number } = getContext('page-index');
	const crew = getCrew();
</script>

<div class="bg-crew-mobile md:bg-crew fixed w-full inset-0 -z-10 bg-cover"></div>
<main class="px-6 container pt-4">
	<div class=" max-w-fit mx-auto flex gap-x-4 uppercase tracking-wide">
		<span class="opacity-25 font-bold">0{ctx.index}</span><span>Pick your destination</span>
	</div>
</main>

<style>
</style>
