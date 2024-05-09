<script lang="ts">
	import Tabs from '$src/components/tab/tabs.svelte';
	import type { ComponentProps } from 'svelte';

	let current = $state(1);

	let items: ComponentProps<Tabs>['items'] = [
		{
			label: 'moon'
		},
		{
			label: 'mars'
		},
		{
			label: 'europa'
		},
		{
			label: 'titan'
		}
	];
</script>

<main class="px-6 container">
	<div class=" max-w-fit mx-auto flex gap-x-4 uppercase">
		<span>0{current}</span><span>Pick your destination</span>
	</div>
	<div class="flex items-center justify-center flex-col">
		<img src="/destination/moon" alt="moon" />
		<Tabs {items} />
	</div>
	<section class="items-center flex flex-col text-center gap-y-8">
		<h1 class="uppercase">moon</h1>
		<h2>
			See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain
			perspective and come back refreshed. While you’re there, take in some history by visiting the
			Luna 2 and Apollo 11 landing sites.
		</h2>
	</section>
</main>
