<script lang="ts">
	import '../app.css';
	let { children } = $props();

	let open = $state(false);

  function handleToggle(){
    open = !open
  }

</script>

<header class="bg-transparent -z-10">
	<nav class="flex justify-between pb-4 px-6 pt-6 bg-transparent">
		<a href="/">
			<img src="/logo.svg" alt="logo" class="size-10 aspect-square" />
		</a>
		{#if open}
			<button aria-label="close navbar" title="close navbar" onclick={handleToggle}
				><img src="/icon-close.svg" alt="close" /></button
			>
		{:else}
			<button aria-label="open navbar" title="open navbar" onclick={handleToggle}
				><img src="/icon-hamburger.svg" alt="open" /></button
			>
		{/if}
	</nav>
</header>
{@render children()}
