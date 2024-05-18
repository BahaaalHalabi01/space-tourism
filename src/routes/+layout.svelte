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
	<nav class="flex justify-between px-6 pt-6 bg-transparent items-center">
		<a href="/">
			<img src="/logo.svg" alt="logo" class="size-10 aspect-square" />
		</a>
		<Sidebar>
			<SidebarContent {links} />
		</Sidebar>
	</nav>
</header>
{@render children()}
