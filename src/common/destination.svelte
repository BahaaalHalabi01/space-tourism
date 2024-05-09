<script lang="ts">
	let {
		name,
		avgDistance,
		description,
		estTravelTime
	}: { name: string; description: string; avgDistance: string; estTravelTime: string } = $props();
</script>

<section class="items-center flex flex-col text-center gap-y-8">
	<h1 class="uppercase">{name}</h1>
	<h2>
		{description}
	</h2>
	<hr />
	<div class="flex flex-col">
		<span>Avg. Distance</span>
		<span>{avgDistance}</span>
	</div>
	<div class="flex flex-col">
		<span>EST. Travel time</span>
		<span>{estTravelTime}</span>
	</div>
</section>
