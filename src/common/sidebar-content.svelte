<script lang="ts">
	import { page } from '$app/stores';

	let { links }: { links: Array<{ href: string; label: string }> } = $props();
</script>

<div class="h-full uppercase flex flex-col gap-y-6 text-white z-10">
	{#each links as link, i}
		<a
			class="flex gap-x-2.5 tracking-wide pb-3 hover:border-b-[3px] hover:border-border h-10 w-full"
			class:active-link={$page.url.pathname === link.href}
			href={link.href}
			aria-label={link.label}
		>
			<span class="font-bold">0{i}</span>
			{link.label}
		</a>
	{/each}
</div>

