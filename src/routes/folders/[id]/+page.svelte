<script lang="ts" context="module">
	import type { Folder } from '$lib/data';
	import { folders } from '$lib/data';
	import { writable } from 'svelte/store';
	import type { Writable } from 'svelte/store';
	import { goto } from '$app/navigation';

	interface LoadParams {
		params: {
			id: number;
		};
	}

	type Exam = {
		id: number;
		title: string;
		instructions: string;
		items: number;
		questions: string[];
	};

	let exams: Writable<Exam[]> = writable([]);

	let exams2: Exam[] = [
		{
			id: 0,
			title: 'Matemáticas - Geometría',
			instructions: 'Se debe hacer con lápiz pasta',
			items: 2,
			questions: ['hola', 'qué tal']
		}
	];

	exams.set(exams2);

	// Simula la carga de datos usando los datos constantes
	export function load({ params }: LoadParams) {
		const folder = folders.find((f) => f.id === params.id);
		if (folder) {
			return { props: { folder } };
		}
		return {
			status: 404,
			error: new Error('Folder not found')
		};
	}

	function navigateToExam(idF: number, idE: number) {
		goto(`/folders/${idF}/${idE}`);
	}
</script>

<script lang="ts">
	export let folder: Folder;
</script>

<div class="gradiente flex h-full w-full items-start justify-center">
	<div class="p-30 mt-40 h-3/5 w-4/5 max-w-4xl rounded-lg bg-white shadow-lg">
		<p class="mt-10 text-center text-2xl font-semibold">Pruebas</p>
		{#if $exams.length > 0}
			<div class="flex flex-row flex-wrap items-center justify-start">
				{#each $exams as exam}
					<button
						class="m-4 flex cursor-pointer flex-col items-center"
						on:click={() => navigateToExam(folder.id, exam.id)}>
						<svg
							class="mb-2 h-20 w-20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="black"
							stroke-width="1">
							<rect x="4" y="3" width="16" height="18" rx="2" ry="2" fill="white"></rect>
							<line x1="7" y1="7" x2="17" y2="7" stroke-linecap="round"></line>
							<line x1="7" y1="11" x2="17" y2="11" stroke-linecap="round"></line>
							<line x1="7" y1="15" x2="12" y2="15" stroke-linecap="round"></line>
						</svg>

						<div class="overflow-hidden text-ellipsis whitespace-nowrap text-center">
							{exam.title}
						</div>
					</button>
				{/each}
			</div>
		{:else}
			<div class="text-center text-lg font-medium text-slate-600">Debes crear una prueba.</div>
		{/if}
	</div>
</div>
