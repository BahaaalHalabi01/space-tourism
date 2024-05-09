<script lang="ts">
	import Tabs from '$src/components/tab/tabs.svelte';
	import Destination from '$src/common/destination.svelte';
	import { setContext, type ComponentProps } from 'svelte';
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

	let items: TabsProps<ComponentProps<Destination>>['items'] = [
		{
			label: 'moon',
			// img: '/home/moon.jpg',
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
			component: Destination
		},
		{
			label: 'europa',
			img: '/home/europa.jpg',
			component: Destination
		},
		{
			label: 'titan',
			img: '/home/titan.jpg',
			component: Destination
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
