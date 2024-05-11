<script lang="ts">
	let links: Array<{ href: string; label: string }> = [
		{ label: 'home', href: '/' },
		{ label: 'destination', href: '/destination' },
		{ label: 'crew', href: '/crew' },
		{ label: 'technology', href: '/technology' }
	];
</script>

<div class="h-full uppercase flex flex-col gap-y-8 text-white">
	{#each links as link, i}
		<div class="flex gap-x-2.5 tracking-wide">
			<span class="font-bold">0{i}</span>
			<a href={link.href} aria-label={link.label}>{link.label}</a>
		</div>
	{/each}
</div>
