<script lang="ts">
	let {
		name,
		avgDistance,
		description,
		estTravelTime
	}: { name: string; description: string; avgDistance: string; estTravelTime: string } = $props();
</script>

<section class="flex flex-col items-center text-center">
	<h1 class="pb-2 pt-4 font-serif text-6xl uppercase leading-none md:pt-8 md:text-[80px]">
		{name}
	</h1>
	<h2 class="h-28 max-w-xl text-center text-[15px] leading-6 text-text-light md:text-base md:w-[573px]">
		{description}
	</h2>
	<hr class="my-8 w-full border-border" />
	<div class="flex flex-col items-center justify-center gap-y-8 md:w-full md:flex-row md:gap-x-12">
		<div class="flex flex-col gap-y-1.5 w-56">
			<span class="subheader">Avg. Distance</span>
			<span class="font-serif text-3xl">{avgDistance}</span>
		</div>
		<div class="flex flex-col gap-y-1.5 w-56">
			<span class="subheader">EST. Travel time</span>
			<span class="value">{estTravelTime}</span>
		</div>
	</div>
</section>

<style>
	.subheader {
		@apply text-sm uppercase tracking-wide text-text-light font-sans-condensed;
	}

	.value {
		@apply font-serif text-3xl uppercase;
	}
</style>
