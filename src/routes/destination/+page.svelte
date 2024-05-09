<script lang="ts">
	import Tabs from '$src/components/tab/tabs.svelte';
	import Destination from '$src/common/destination.svelte';
	import { setContext } from 'svelte';
	import type { TabsProps } from '$src/components/tab/tabs';

	let current = $state(0);

	setContext('home', {
		get current() {
			return current;
		},
		setCurrent(value: number) {
			current = value;
		}
	});

	let items: TabsProps<Destination>['items'] = [
		{
			label: 'moon',
			img: '/home/moon.jpg',
			component: Destination as any,
			props: {
				name: 'moon',
				avgDistance: '123',
				description: ` See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain 
	 perspective and come back refreshed. While you’re there, take in some history by visiting the -
	 Luna 2 and Apollo 11 landing sites. `,
				estTravelTime: '123'
			}
		},
		{
			label: 'mars',
			img: '/home/mars.jpg',
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
			img: '/home/europa.jpg',
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
			img: '/home/titan.jpg',
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

<main class="px-6 container">
	<div class=" max-w-fit mx-auto flex gap-x-4 uppercase">
		<span>0{current + 1}</span><span>Pick your destination</span>
	</div>
	<div class="flex items-center justify-center flex-col">
		<!-- <img src={items[current].img} alt="moon" /> -->
		<Tabs {items} ctxKey="home" />
	</div>
</main>
