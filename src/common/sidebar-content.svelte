<script lang="ts">
	import { page } from '$app/stores';

	let { links }: { links: Array<{ href: string; label: string }> } = $props();
</script>

<div class="h-full uppercase flex flex-col gap-y-6 text-white z-10">
	{#each links as link, i}
		<div
			class="flex gap-x-2.5 tracking-wide pb-3 hover:border-b-[3px] hover:border-border h-10 w-fit"
			class:active={$page.url.pathname === link.href}
		>
			<span class="font-bold">0{i}</span>
			<a href={link.href} aria-label={link.label}>{link.label}</a>
		</div>
	{/each}
</div>

<style>
	.active {
		@apply border-b-[3px] border-white;
	}
</style>
