<script lang="ts">
	import Sidebar from '$src/components/sidebar/sidebar.svelte';
	import SidebarContent from '$src/common/sidebar-content.svelte';
	import { page } from '$app/stores';
	import '../app.css';
	import { setContext } from 'svelte';

	let links: Array<{ href: string; label: string }> = [
		{ label: 'home', href: '/' },
		{ label: 'destination', href: '/destination' },
		{ label: 'crew', href: '/crew' },
		{ label: 'technology', href: '/technology' }
	];

	let index = $derived(links.findIndex((link) => link.href === $page.url.pathname));

	setContext('page-index', {
		get index() {
			return index;
		}
	});

	let { children } = $props();
</script>

<header class="bg-transparent">
	<nav class="flex justify-between bg-transparent">
		<a href="/" class="ml-6 mt-6">
			<img src="/logo.svg" alt="logo" class="aspect-square size-10 md:size-12" />
		</a>
		<ul
			class="hidden h-24 items-center gap-x-10 bg-border-light/5 px-10 font-sans-condensed text-sm uppercase tracking-wide backdrop-blur-md md:flex"
		>
			{#each links as link}
				<li
					class:active-link={$page.url.pathname === link.href}
					class="flex h-full items-stretch border-white hover:border-b-[2px]"
				>
					<a class="flex h-full w-fit items-center" href={link.href} aria-label={link.label}>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
		<Sidebar>
			<SidebarContent {links} />
		</Sidebar>
	</nav>
</header>
{@render children()}
