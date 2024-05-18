<script lang="ts">
	import type { TechnologyProps } from './technology';

	let { name, description }: TechnologyProps = $props();
</script>

<section class="items-center flex flex-col text-center pt-4">
	<h3 class="uppercase text-text-light tracking-wide font-sans-condensed text-sm">
		The Terminology...
	</h3>
	<h1 class="uppercase text-2xl font-serif pt-3 leading-none pb-3">{name}</h1>
	<h2 class="text-text-light text-[15px] leading-6 tracking-none min-h-24">
		{description}
	</h2>
</section>
