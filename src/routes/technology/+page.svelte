<script lang="ts">
	import { getTechnology } from '$src/common/technology/current-technology.svelte';
	import { getContext } from 'svelte';

	const ctx: { index: number } = getContext('page-index');
	const crew = getTechnology();
</script>

<div class="bg-technology-mobile md:bg-technology fixed w-full inset-0 -z-10"></div>
<main class="px-6 container pt-6">
	<div class=" max-w-fit mx-auto flex gap-x-4 uppercase tracking-wide font-sans-condensed">
		<span class="opacity-25 font-bold">0{ctx.index}</span><span>Space launch 101</span>
	</div>
</main>
