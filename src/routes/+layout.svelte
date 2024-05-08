<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<nav class="flex justify-between p-4"><img src="hello" alt="logo" /><button>toggle</button></nav>
<main>
	{@render children()}
</main>
