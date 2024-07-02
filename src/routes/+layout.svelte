<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '$lib/app.css';
</script>

<Header></Header>
<slot></slot>
<Footer></Footer>
