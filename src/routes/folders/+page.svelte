<script lang="ts">
	import { writable } from 'svelte/store';
	import type { Writable } from 'svelte/store';
	import { goto } from '$app/navigation';

	let showPopup: boolean = false;
	let newFolderName: string = '';
	let newFolderColor: string = '#F3B4F1';

	type Folder = {
		id: number;
		name: string;
		color: string;
	};

	let folders: Writable<Folder[]> = writable([]);
	let newFolders: Folder[] = [
		{ id: 0, name: 'IV° A', color: newFolderColor },
		{ id: 1, name: 'III° B', color: newFolderColor }
	];

	folders.set(newFolders);

	function addFolder() {
		if (newFolderName.trim() === '') return;

		folders.update((currentFolders) => {
			return [
				...currentFolders,
				{ id: currentFolders.length + 1, name: newFolderName, color: newFolderColor }
			];
		});

		newFolderName = '';
		newFolderColor = '#F3B4F1';
		showPopup = false;
	}

	function openPopup() {
		showPopup = true;
	}

	function closePopup() {
		showPopup = false;
		newFolderName = '';
	}

	function selectColor(color: string) {
		newFolderColor = color;
	}

	const rainbowPastelColors = [
		'#F3B4F1',
		'#B4E1F3',
		'#B4F1E1',
		'#E1F3B4',
		'#F3E1B4',
		'#F1B4F3',
		'#B4B4F3'
	];

	function navigateToFolder(id: number) {
		goto(`/folders/${id}`);
	}
</script>

<div class="gradiente flex h-full w-full items-start justify-center">
	<div class="p-30 mt-40 h-3/5 w-4/5 max-w-4xl rounded-lg bg-white shadow-lg">
		<p class="mt-10 text-center text-2xl font-semibold">Carpetas</p>
		{#if $folders.length > 0}
			<div class="flex flex-row flex-wrap items-center justify-start">
				{#each $folders as folder}
					<button
						class="m-4 flex cursor-pointer flex-col items-center"
						on:click={() => navigateToFolder(folder.id)}>
						<svg class="mb-2 h-20 w-20" style="fill: {folder.color};" viewBox="0 0 24 24">
							<path
								fill={folder.color}
								d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
						</svg>
						<div class="overflow-hidden text-ellipsis whitespace-nowrap text-center">
							{folder.name}
						</div>
					</button>
				{/each}
			</div>
		{:else}
			<div class="text-center text-lg font-medium text-slate-600">
				Debes agregar una carpeta para crear pruebas.
			</div>
		{/if}
		<button
			on:click={openPopup}
			class="absolute bottom-10 right-10 m-2 cursor-pointer rounded-full bg-slate-400 p-2 text-white">
			<svg viewBox="0 0 24 24" class="h-10 w-10 fill-current">
				<path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
			</svg>
		</button>
	</div>
</div>

{#if showPopup}
	<div class="popup fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center">
		<div class="h-1/8 w-1/4 rounded-md bg-white">
			<div class="px-5 py-4">
				<p class="text-semibold mb-2 text-lg font-medium">Agregar una carpeta nueva</p>
				<input
					type="text"
					placeholder="Nombre de la carpeta"
					bind:value={newFolderName}
					class="w-full p-2"
					on:keydown={(e) => e.key === 'Enter' && addFolder()} />
			</div>
			<div class="mt-2 flex flex-wrap justify-center">
				{#each rainbowPastelColors as color}
					<button
						class="m-1 h-8 w-8 cursor-pointer rounded-full"
						style="background-color: {color}; border: {color === newFolderColor
							? '2px solid black'
							: 'none'};"
						on:click={() => selectColor(color)}
						title={color}>
					</button>
				{/each}
			</div>
			<div class="flex flex-row justify-between p-4">
				<button class="rounded-md bg-red-500 p-2" on:click={closePopup}>Cancelar</button>
				<button class="rounded-md bg-green-500 p-2" on:click={addFolder}>Guardar</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.popup {
		background-color: rgba(0, 0, 0, 0.5);
	}

	.gradiente {
		background: rgb(101, 57, 156);
		background: linear-gradient(90deg, rgba(101, 57, 156, 1) 0%, rgba(136, 255, 212, 1) 100%);
	}
</style>
