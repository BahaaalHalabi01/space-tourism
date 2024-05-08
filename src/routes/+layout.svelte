<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="bg-home-mobile min-h-full bg-cover bg-bottom">
<nav class="flex justify-between p-4 bg-transparent"><img src="hello" alt="logo" /><button>toggle</button></nav>
<main>
	{@render children()}
</main>
</div>
