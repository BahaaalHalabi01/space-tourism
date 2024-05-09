<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="bg-home-mobile min-h-full bg-cover bg-bottom">
	<nav class="flex justify-between p-4 bg-transparent">
		<a href="/">
			<img src="hello" alt="logo" />
		</a>
		<button>toggle</button>
	</nav>
		{@render children()}
</div>
