<script lang="ts">
	import Header from '$lib/Header.svelte';
</script>

<Header>
	<div class="mx-auto flex max-w-7xl flex-col items-center justify-between px-4">
		<nav class="flex items-center space-x-4 w-full">
			<a href="/carpetas" class="text-purple-800 hover:text-purple-600">Carpetas</a>
			<a href="/preguntas" class="text-purple-800 hover:text-purple-600">Preguntas</a>
			<a href="/configuracion" class="text-purple-800 hover:text-purple-600">Configuración</a>
		</nav>
	</div>
</Header>
<div class="h-screen">
	<slot></slot>
</div>
