<script lang="ts">
	import Header from '$lib/Header.svelte';
	// Hacer morado el elegido con js
</script>

<Header wrapperStyle="pb-0">
	<svelte:fragment slot="under">
		<nav class="mx-auto my-2 flex justify-center gap-4">
			<button
				class="rounded-lg px-2 py-1 transition-colors hover:bg-purple-900/10 hover:text-purple-800"
				>Cabecera</button>
			<button
				class="rounded-lg px-2 py-1 transition-colors hover:bg-purple-900/10 hover:text-purple-800"
				>Preguntas</button>
			<button
				class="rounded-lg px-2 py-1 transition-colors hover:bg-purple-900/10 hover:text-purple-800"
				>Configuración</button>
		</nav>
	</svelte:fragment>
</Header>
<main class="" style="flex: 1;">
	<slot></slot>
</main>
