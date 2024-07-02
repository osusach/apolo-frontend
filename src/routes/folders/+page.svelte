<script lang="ts">
    import {writable} from 'svelte/store';
    import type {Writable} from 'svelte/store';
    import {goto} from '$app/navigation';

    let showPopup: boolean = false;
    let newFolderName: string = '';
    let newFolderColor: string = '#F3B4F1';

    type Folder = {
        id: number;
        name: string;
        color: string;
    }

    let folders: Writable<Folder[]> = writable([]);
    let newFolders: Folder[] = [
        {id: 0, name:'IV° A', color: newFolderColor},
        {id: 1, name:'III° B', color: newFolderColor},
    ];

    folders.set(newFolders);

    function addFolder() {
        if (newFolderName.trim() === '') return;

        folders.update(currentFolders => {
            return [...currentFolders, {id: currentFolders.length + 1, name: newFolderName, color: newFolderColor}];
        });

        newFolderName = "";
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

    const rainbowPastelColors = ['#F3B4F1', '#B4E1F3', '#B4F1E1', '#E1F3B4', '#F3E1B4', '#F1B4F3', '#B4B4F3'];

    function navigateToFolder(id: number){
        goto(`/folders/${id}`);
    }

</script>
<div class="w-full h-full gradiente flex items-start justify-center">
    <div class="bg-white p-30 rounded-lg shadow-lg h-3/5 w-4/5 max-w-4xl mt-40">
        <p class="mt-10 text-center text-2xl font-semibold">Carpetas</p>
        {#if $folders.length > 0}
            <div class="flex flex-row flex-wrap items-center justify-start">
                {#each $folders as folder}
                    <button class="flex flex-col items-center m-4 cursor-pointer"
                    on:click={() => navigateToFolder(folder.id)}>
                        <svg class="w-20 h-20 mb-2" style="fill: {folder.color};" viewBox="0 0 24 24">
                            <path fill="{folder.color}" d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
                        </svg>
                        <div class="text-center whitespace-nowrap overflow-hidden text-ellipsis">{folder.name}</div>
                    </button>
                {/each}
            </div>
        {:else}
            <div class="text-center text-slate-600 text-lg font-medium">Debes agregar una carpeta para crear pruebas.</div>
        {/if}
        <button on:click={openPopup} class="absolute bottom-10 right-10 m-2 p-2 text-white bg-slate-400 rounded-full cursor-pointer">
            <svg viewBox="0 0 24 24" class="w-10 h-10 fill-current">
                <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
            </svg>
        </button>
    </div>
</div>

{#if showPopup}
    <div class="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center popup">
        <div class="bg-white rounded-md w-1/4 h-1/8">
            <div class="py-4 px-5">
                <p class="text-lg text-semibold mb-2 font-medium">Agregar una carpeta nueva</p>
                <input 
                type="text" 
                placeholder="Nombre de la carpeta" 
                bind:value={newFolderName} 
                class="p-2 w-full"
                autofocus
                on:keydown={e => e.key === 'Enter' && addFolder()}
                />
            </div>
            <div class="flex flex-wrap justify-center mt-2">
                {#each rainbowPastelColors as color}
                    <button class="w-8 h-8 rounded-full m-1 cursor-pointer"
                         style="background-color: {color}; border: {color === newFolderColor ? '2px solid black' : 'none'};"
                         on:click={() => selectColor(color)}
                         title={color}>
                    </button>
                {/each}
            </div>
            <div class="flex flex-row p-4 justify-between">
                <button class="bg-red-500 p-2 rounded-md" on:click={closePopup}>Cancelar</button>
                <button class="bg-green-500 p-2 rounded-md" on:click={addFolder}>Guardar</button>
            </div>
        </div>
    </div>
{/if}

<style>
    .popup {
        background-color: rgba(0, 0, 0, 0.5);
    }
    
    .gradiente {
        background: rgb(101,57,156);
        background: linear-gradient(90deg, rgba(101,57,156,1) 0%, rgba(136,255,212,1) 100%); 
    }

</style>