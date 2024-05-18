<script lang="ts">
	import { getCrew } from '$src/common/crew/current-crew.svelte';
	import type { SliderProps } from '$src/components/slider/slider';
	import Crew from '$src/common/crew/crew.svelte';
	import type { CrewProps } from '$src/common/crew/crew';
	import Slider from '$src/components/slider/slider.svelte';
	import { getContext } from 'svelte';

	const ctx: { index: number } = getContext('page-index');
	const crew = getCrew();

	let items: SliderProps<CrewProps>['items'] = [
		{
			img: `/crew/image-douglas-hurley.webp`,
			component: Crew,
			props: {
				description:
					'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
				name: 'Douglas Hurley',
				role: 'commander'
			}
		},
		{
			img: `/crew/image-mark-shuttleworth.webp`,
			component: Crew,
			props: {
				description:
					'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
				name: 'mark shuttleworth',
				role: 'mission specialist'
			}
		},
		{
			img: `/crew/image-victor-glover.webp`,
			component: Crew,
			props: {
				description:
					'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
				name: 'victor glover',
				role: 'pilot'
			}
		},
		{
			img: `/crew/image-anousheh-ansari.webp`,
			component: Crew,
			props: {
				description:
					'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
				name: 'Anousheh Ansari',
				role: 'flight engineer'
			}
		}
	];
</script>

<div class="bg-crew-mobile md:bg-crew fixed w-full inset-0 -z-10"></div>
<main class="px-6 container pt-6">
	<div class=" max-w-fit mx-auto flex gap-x-4 uppercase tracking-wide font-sans-condensed">
		<span class="opacity-25 font-bold">0{ctx.index}</span><span>meet your Crew</span>
	</div>
	<div class="flex items-center justify-center flex-col pt-8 gap-y-8">
		<div class="w-full">
			<img src={items.at(crew.current)?.img} class="mx-auto max-h-56" alt="doughlas" />
			<hr class="w-full !border-border border-t-2" />
		</div>
		<div class="flex items-center flex-col">
			<Slider {items} setter={crew.setCurrent} getter={getCrew} />
		</div>
	</div>
</main>

<style>
</style>
