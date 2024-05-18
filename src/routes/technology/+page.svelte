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
					"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
				name: 'launch vehicle'
			}
		},
		{
			img: `/technology/image-spaceport-landscape.jpg`,
			component: Technology,
			props: {
				description:
					'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
				name: 'space port'
			}
		},
		{
			img: `/technology/image-space-capsule-landscape.jpg`,
			component: Technology,
			props: {
				description:
					"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
				name: 'space capsule'
			}
		}
	];
</script>

<!-- @todo make the same image but with -margin and without changing the padding on main -->
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
