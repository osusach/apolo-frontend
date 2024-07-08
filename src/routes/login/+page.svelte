<script>
	let username = '';
	let password = '';

	function handleLogin() {
		// Aquí puedes añadir la lógica para manejar el inicio de sesión
		console.log('Intento de inicio de sesión', { username, password });
	}
</script>

<div class="gradiente flex h-screen items-center justify-center">
	<div
		class="mx-20 ml-40 flex w-1/4 flex-col gap-3 rounded-3xl bg-slate-50/35 px-10 py-10 shadow-md">
		<div class="pt-6 text-center text-5xl text-white">APOLO</div>
		<input class="mt-12 rounded-lg p-3" bind:value={username} placeholder="Usuario" type="text" />
		<input
			class="mb-12 rounded-lg p-3"
			bind:value={password}
			placeholder="Contraseña"
			type="password" />
		<button
			class="button rounded-lg p-3 text-lg font-semibold text-white transition-all hover:bg-violet-700"
			on:click={handleLogin}>Iniciar sesión</button>
	</div>
	<div class=" px-40 align-middle text-2xl font-light text-slate-800">
		APOLO es una herramienta creada por estudiantes para profesores con la finalidad de ayudarlos en
		su labor docente.
	</div>
</div>

<style>
	.gradiente {
		background: rgb(101, 57, 156);
		background: linear-gradient(90deg, rgba(101, 57, 156, 1) 0%, rgba(136, 255, 212, 1) 100%);
	}

	.button {
		background-color: #7f61be;
	}
</style>
