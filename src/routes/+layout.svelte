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
			<img src="/logo.svg" alt="logo" class="size-10 aspect-square" />
		</a>
		<ul
			class="md:flex gap-x-10 text-sm uppercase tracking-wide hidden items-center backdrop-blur-md px-10 font-sans-condensed h-24 bg-black/5"
		>
			{#each links as link}
				<li class:active={$page.url.pathname === link.href} class="flex items-stretch h-full">
					<a
						class="w-fit h-full flex items-center hover:border-b-[3px] border-white"
						href={link.href}
						aria-label={link.label}
					>
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
