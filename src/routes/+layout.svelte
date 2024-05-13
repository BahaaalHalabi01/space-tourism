<script lang="ts">
	import Sidebar from '$src/components/sidebar/sidebar.svelte';
	import SidebarContent from '$src/common/sidebar-content.svelte';
	import '../app.css';
	let { children } = $props();


</script>

<header class="bg-transparent">
	<nav class="flex justify-between pb-4 px-6 pt-6 bg-transparent items-center">
		<a href="/">
			<img src="/logo.svg" alt="logo" class="size-10 aspect-square" />
		</a>
		<Sidebar>
			<SidebarContent />
		</Sidebar>
	</nav>
</header>
{@render children()}
