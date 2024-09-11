<script lang="ts">
	import Footer from '../lib/Footer.svelte';
	import Header from '../lib/Header.svelte';
	import '$lib/app.css';
</script>

<!-- para tener headers distintos por ruta se borra acá y se agrega un header distinto en cada ruta -->
<!-- No se puede salir del layout base -->
<!-- https://learn.svelte.dev/tutorial/breaking-out-of-layouts -->
<!-- <Header></Header> -->
<slot></slot>
<Footer></Footer>
