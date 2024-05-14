<script lang="ts">
	import { getCrew } from '$src/common/current-crew.svelte';
	import type { SliderProps } from '$src/components/slider/slider';
	import Crew from '$src/common/crew/crew.svelte';
	import Slider from '$src/components/slider/slider.svelte';
	import { getContext } from 'svelte';

	const ctx: { index: number } = getContext('page-index');
	const crew = getCrew();

	let items: SliderProps<Crew>['items'] = [
		{
			img: `/crew/image-douglas-hurley.webp`,
			component: Crew as any,
			props: {
				description:
					'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
				name: 'Douglas Hurley',
				role: 'commander'
			}
		}
	];
</script>

<div class="bg-crew-mobile md:bg-crew fixed w-full inset-0 -z-10"></div>
<main class="px-6 container pt-6">
	<div class=" max-w-fit mx-auto flex gap-x-4 uppercase tracking-wide font-sans-condensed">
		<span class="opacity-25 font-bold">0{ctx.index}</span><span>meet your Crew</span>
	</div>
	<div class="flex items-center justify-center flex-col pt-8">
		<div class="w-full max-h-56">
			<img src={'/crew/image-douglas-hurley.webp'} width="177" class="mx-auto" />
			<hr class="w-full !border-border border-t-2" />
		</div>
		<Slider {items} />
	</div>
</main>

<style>
</style>
