<script lang="ts">
	import type { CrewProps } from './crew';

	let { role, name, description }: CrewProps = $props();
</script>

<section class="items-center flex flex-col text-center">
	<h3 class="uppercase font-serif pt-4 leading-none text-white/50">{role}</h3>
	<h1 class="uppercase text-2xl font-serif pt-3 leading-none pb-3">{name}</h1>
	<h2 class="text-text-light px-3 text-center text-[15px] leading-6 tracking-tight min-h-24">
		{description}
	</h2>
</section>
