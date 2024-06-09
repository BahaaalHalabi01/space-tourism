<script lang="ts">
	import type { CrewProps } from './crew';

	let { role, name, description }: CrewProps = $props();
</script>

<section class="flex flex-col items-center text-center md:max-w-[458px] md:gap-y-2">
	<h3 class="pt-4 font-serif uppercase leading-none text-white/50 md:text-2xl">{role}</h3>
	<h1 class="pb-3 pt-3 font-serif text-2xl uppercase leading-none md:text-[40px]">{name}</h1>
	<h2 class="tracking-none min-h-24 px-2 text-center text-[15px] leading-6 text-text-light md:text-base">
		{description}
	</h2>
</section>
