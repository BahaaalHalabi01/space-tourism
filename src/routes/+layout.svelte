<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<header>
	<nav class="flex justify-between p-4">
		<a href="/">
			<!-- <img src="/home/hello.png" alt="logo" /> -->
		</a>
		<button>toggle</button>
	</nav>
</header>
{@render children()}
