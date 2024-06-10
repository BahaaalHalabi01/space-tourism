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

<div class="fixed inset-0 -z-10 w-full bg-technology-mobile md:bg-technology"></div>
<main class="pt-6">
	<div
		class=" mx-auto flex max-w-fit gap-x-4 font-sans-condensed uppercase tracking-wide md:mx-0 md:px-10 md:text-xl"
	>
		<span class="font-bold opacity-25">0{ctx.index}</span><span>Space launch 101</span>
	</div>
	<div class="flex w-full flex-col items-center justify-center gap-y-8 pt-8">
		<img
			src={items.at(tech.current)?.img}
			class="mx-auto -ml-6 -mr-6 max-h-[310px] w-full md:max-h-80"
			alt="doughlas"
		/>
		<div class="flex flex-col items-center px-6">
			<Slider {items} setter={tech.setCurrent} getter={getTechnology} showNumber={true}  className='md:order-first'/>
		</div>
	</div>
</main>
