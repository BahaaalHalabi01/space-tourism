<script lang="ts">
	import { getTechnology } from '$src/common/technology/current-technology.svelte';
	import Technology from '$src/common/technology/technology.svelte';
	import type { TechnologyProps } from '$src/common/technology/technology';
	import type { SliderProps } from '$src/components/slider/slider';
	import { getContext } from 'svelte';
	import Slider from '$src/components/slider/slider.svelte';

	const ctx: { index: number } = getContext('page-index');
	const tech = getTechnology();

	let items: SliderProps<TechnologyProps>['items'] = [
		{
			img: `/technology/image-launch-vehicle-landscape.jpg`,
			component: Technology,
			props: {
				description:
					'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Technology Dragon Demo-2.',
				name: 'Douglas Hurley'
			}
		},
		{
			img: `/technology/image-launch-vehicle-landscape.jpg`,
			component: Technology,
			props: {
				description:
					'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Technology Dragon Demo-2.',
				name: 'Douglas Hurley'
			}
		},
		{
			img: `/technology/image-launch-vehicle-landscape.jpg`,
			component: Technology,
			props: {
				description:
					'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Technology Dragon Demo-2.',
				name: 'Douglas Hurley'
			}
		}
	];
</script>

<div class="bg-technology-mobile md:bg-technology fixed w-full inset-0 -z-10"></div>
<main class=" pt-6">
	<div class=" max-w-fit mx-auto flex gap-x-4 uppercase tracking-wide font-sans-condensed px-6">
		<span class="opacity-25 font-bold">0{ctx.index}</span><span>Space launch 101</span>
	</div>
	<div class="flex items-center justify-center flex-col pt-8 gap-y-8">
		<img src={items.at(tech.current)?.img} class="mx-auto max-h-56 -ml-6 -mr-6" alt="doughlas" />
		<div class="flex items-center flex-col px-6">
			<Slider {items} setter={tech.setCurrent} getter={getTechnology} showNumber={true} />
		</div>
	</div>
</main>
