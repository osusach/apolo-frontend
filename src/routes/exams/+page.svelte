<script lang="ts">
    import { onMount } from "svelte";
    let folders: any[] = [];
    import { faFolder, faPlus } from "@fortawesome/free-solid-svg-icons";
    import Icon from '@fortawesome/free-solid-svg-icons/faFolder';

    let currentFolder: any  = null; // Cambiar a null
    let newFolderName = "";
    let newTestName = "";
    let showPopup = false;


    async function fetchFolders() {
        //const response = await fetch("http://localhost:3000/folders");
        //folders = await response.json();
        folders = folders;
    }

    $: folders.length && console.log(folders);

    function addFolder(){
        if (newFolderName.trim() === "") return;

        let folder = {
            id: folders.length + 1,
            name: newFolderName,
            tests: []
        };

        folders.push(folder);
        newFolderName = "";
        showPopup = false;
    }

    function openPopup() {
        showPopup = true;
    }

    function closePopup() {
        showPopup = false;
    }

    function selectFolder(folder: any) {
        currentFolder = folder;
    }


</script>

<div class="flex flex-col p-20">
    <div class="flex flex-wrap">
        {#each folders as folder}
            <button class="m-2 p-2 bg-green-600 text-white" on:click={() => selectFolder(folder)}>
                <Icon icon={faFolder} />
                {folder.name}
            </button>
        {/each}
        <button class="m-2 p-2 bg-blue-600 text-white" on:click={openPopup}>
            <Icon icon={faPlus} /> Add Folder
        </button>
    </div>
    {#if showPopup}
        <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div class="bg-white p-5">
                <input type="text" placeholder="Nombre de la carpeta" bind:value={newFolderName} class="p-2" />
                <button class="p-2 bg-blue-500 text-white" on:click={addFolder}>Crear Carpeta</button>
                <button class="p-2 bg-red-500 text-white" on:click={closePopup}>Cancelar</button>
            </div>
        </div>
    {/if}
</div>