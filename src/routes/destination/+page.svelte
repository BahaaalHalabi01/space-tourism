<script lang="ts">
	import Tabs from '$src/components/tab/tabs.svelte';
	import { getContext } from 'svelte';
	import type { TabsProps } from '$src/components/tab/tabs';
	import Destination from '$src/common/destination/destination.svelte';
	import { getDestination } from '$src/common/destination/current-destination.svelte';

	let current = getDestination();

	const ctx: { index: number } = getContext('page-index');

	let items: TabsProps<Destination>['items'] = [
		{
			label: 'moon',
			img: '/destination/moon.webp',
			component: Destination as any,
			props: {
				name: 'moon',
				avgDistance: '384,400 KM',
				description: ` See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain 
	 perspective and come back refreshed. While you’re there, take in some history by visiting the
	 Luna 2 and Apollo 11 landing sites. `,
				estTravelTime: '3 Days'
			}
		},
		{
			label: 'mars',
			img: '/destination/mars.webp',
			component: Destination as any,
			props: {
				description:
					'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
				avgDistance: '225 MIL. KM',
				estTravelTime: '9 MONTHS',
				name: 'mars'
			}
		},
		{
			label: 'europa',
			img: '/destination/europa.webp',
			component: Destination as any,
			props: {
				description:
					'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
				name: 'europa',
				avgDistance: '628 MIL. KM',
				estTravelTime: '3 YEARS'
			}
		},
		{
			label: 'titan',
			img: '/destination/titan.webp',
			component: Destination as any,
			props: {
				description:
					'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
				name: 'titan',
				avgDistance: '1.6 BIL. KM',
				estTravelTime: '7 years'
			}
		}
	];
</script>

<div 
	class="fixed inset-0 -z-10 min-h-full w-full bg-destination-mobile md:bg-destination-tablet lg:bg-destination"
></div>
<main class="container relative px-6 md:px-10 pt-6">
	<div
		class=" mx-auto flex max-w-fit gap-x-4 font-sans-condensed uppercase tracking-wide md:mx-0 md:text-xl"
	>
		<span class="font-bold opacity-25">0{ctx.index}</span><span>Pick your destination</span>
	</div>
	<div class="flex flex-col items-center justify-center pb-6 md:pt-8">
		<img
			src={items[current.current].img}
			alt={items[current.current].label}
			class="my-8 aspect-square w-[170px] md:mb-10 md:w-[300px]"
		/>
		<Tabs {items} />
	</div>
</main>

<style>
</style>
