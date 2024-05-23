<script lang="ts">
    import { goto } from '$app/navigation';
    import { folders } from '$lib/data';

    function navigateToFolder(id: number) {
        goto(`/folders/${id}`);
    }
</script>

<div>
    {#each folders as folder}
        <button on:click={() => navigateToFolder(folder.id)}>
            <h2>{folder.name}</h2>
            <p>{folder.color}</p>
        </button>
    {/each}
</div>
