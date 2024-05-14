<script lang="ts">
	let {
		name,
		avgDistance,
		description,
		estTravelTime
	}: { name: string; description: string; avgDistance: string; estTravelTime: string } = $props();
</script>

<section class="items-center flex flex-col text-center">
	<h1 class="uppercase text-6xl font-serif pt-4 pb-2 leading-none">{name}</h1>
	<h2 class="text-text-light text-center text-[15px] leading-6 h-28">
		{description}
	</h2>
	<hr class="my-8 w-full !border-border" />
	<div class="flex flex-col gap-y-1.5">
		<span class="subheader">Avg. Distance</span>
		<span class="text-3xl font-serif">{avgDistance}</span>
	</div>
	<div class="flex flex-col pt-8 gap-y-1.5">
		<span class="subheader">EST. Travel time</span>
		<span class="value">{estTravelTime}</span>
	</div>
</section>

<style>
	.subheader {
		@apply uppercase text-text-light text-sm tracking-wide;
	}

	.value {
		@apply text-3xl font-serif uppercase;
	}
</style>
