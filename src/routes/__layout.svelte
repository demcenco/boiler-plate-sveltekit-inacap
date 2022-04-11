<script>
	import Navbar from './../lib/components/Navbar.svelte';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="h-screen flex flex-col overflow-x-hidden">
	<div class="h-12">
		<Navbar />
	</div>
	<div class="p-4">
		<div>
			<slot />
		</div>
	</div>
	<footer class="mt-auto bg-gray-600">
		<Footer />
	</footer>
</div>
