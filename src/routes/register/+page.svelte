<script lang="ts">
	let fullname: string = '';
	let username: string = '';
	let email: string = '';
	let password: string = '';
	let fullnameValid: boolean = true;
	let usernameValid: boolean = true;
	let emailValid: boolean = true;
	let passwordValid: boolean = true;
	let fullnameError = '';
	let usernameError = '';
	let emailError = '';
	let passwordError = '';

	// Reactividad para la validación del nombre completo
	$: {
		fullnameError =
			!isValidFullName(fullname) && fullname !== '' ? 'Debe contener al menos dos palabras' : '';
	}

	// Reactividad para la validación del email
	$: {
		emailError =
			!isValidEmail(email) && email !== ''
				? 'El correo electrónico debe ser de un dominio válido'
				: '';
	}

	// Reactividad para la validación de la contraseña
	$: {
		passwordError =
			!isValidPassword(password) && password !== ''
				? 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número'
				: '';
	}

	function isValidFullName(fullname: string) {
		return fullname.trim().split(' ').length >= 2;
	}

	function isValidEmail(email: string) {
		const validDomains: Array<string> = ['yahoo.com', 'gmail.com', 'hotmail.com', 'outlook.com'];
		const domain = email.split('@').pop();

		if (domain) {
			return validDomains.includes(domain);
		} else {
			return false;
		}
	}

	function isValidPassword(password: string) {
		return (
			/[A-Z]/.test(password) &&
			/[a-z]/.test(password) &&
			/[0-9]/.test(password) &&
			password.length >= 8
		);
	}

	function resetErrors() {
		fullnameError = '';
		usernameError = '';
		emailError = '';
		passwordError = '';
	}

	function handleRegister() {
		resetErrors();

		if (!isValidFullName(fullname)) {
			fullnameValid = false;
			fullnameError = 'El nombre y apellido deben tener al menos dos palabras';
		}

		if (!isValidEmail(email)) {
			emailValid = false;
			emailError = 'El correo electrónico debe ser de un dominio válido';
		}

		if (!isValidPassword(password)) {
			passwordValid = false;
			passwordError =
				'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número';
		}

		if (!fullnameValid || !emailValid || !passwordValid) {
			// Here goes the logic to handle the registration
			return;
		}
	}
</script>

<div class="gradiente flex h-screen items-center justify-center">
	<div
		class="mx-20 ml-40 flex w-1/4 flex-col gap-3 rounded-3xl bg-slate-50/35 px-10 py-10 shadow-md">
		<div class="pt-6 text-center text-5xl text-white">APOLO</div>
		<input
			class="mt-12 rounded-lg p-3 {fullnameError ? 'border-red-500' : ''}"
			bind:value={fullname}
			placeholder="Nombre y apellido"
			type="text" />
		{#if fullnameError}
			<p class="text-red-500">{fullnameError}</p>
		{/if}
		<input
			class="rounded-lg p-3 {usernameError ? 'border-red-500' : ''}"
			bind:value={username}
			placeholder="Usuario"
			type="text" />
		{#if usernameError}
			<p class="text-red-500">{usernameError}</p>
		{/if}
		<input
			class="rounded-lg p-3 {emailError ? 'border-red-500' : ''}"
			bind:value={email}
			placeholder="Correo electrónico"
			type="email" />
		{#if emailError}
			<p class="text-red-500">{emailError}</p>
		{/if}
		<input
			class="rounded-lg p-3 {passwordError ? 'border-red-500' : ''}"
			bind:value={password}
			placeholder="Contraseña"
			type="password" />
		{#if passwordError}
			<p class="text-red-500">{passwordError}</p>
		{/if}
		<button
			class="button rounded-lg p-3 text-lg font-semibold text-white transition-all hover:bg-violet-700"
			on:click={handleRegister}>Registrarse</button>
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
