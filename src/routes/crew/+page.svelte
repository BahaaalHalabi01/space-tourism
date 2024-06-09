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
			imgWidth: 456,
			imgHeight: 572,
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
			imgWidth: 369,
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
			imgWidth: 433,
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
			imgWidth: 540,
			props: {
				description:
					'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
				name: 'Anousheh Ansari',
				role: 'flight engineer'
			}
		}
	];
</script>

<div class="fixed inset-0 -z-10 w-full bg-crew-mobile md:bg-crew-tablet lg:bg-crew"></div>
<main class="container min-h-full px-6 pt-6 flex flex-col grow">
	<div
		class=" mx-auto flex max-w-fit gap-x-4 font-sans-condensed uppercase tracking-wide md:mx-0 md:text-xl"
	>
		<span class="font-bold opacity-25">0{ctx.index}</span><span>meet your Crew</span>
	</div>
	<div class="grid h-full grid-cols-1 place-items-center justify-items-center grow">
		<div class="w-full overflow-hidden md:order-last pt-8">
			<img
				src={items.at(crew.current)?.img}
				class="mx-auto h-auto w-auto max-h-[570px] "
        width={items.at(crew.current)?.imgWidth}
				alt="doughlas"
			/>
			<hr class="w-full border-t-2 !border-border md:hidden" />
		</div>
		<div class="grid grid-cols-1 place-items-center">
			<Slider {items} setter={crew.setCurrent} getter={getCrew} />
		</div>
	</div>
</main>

<style>
</style>
