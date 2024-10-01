<script>

    export let id;
    export let number;
    export let question = '';
    export let answer = '';
    export let onRemove;
</script>

<div class="flex flex-row w-full gap-2 mb-8 bg-white">
    <div class="flex flex-col gap-2 w-full">
        <input class="bg-slate-100 p-1 rounded px-2" type="text" bind:value={question} placeholder="Escriba la pregunta">
        <input class="bg-slate-100 p-1 rounded px-2" type="text" bind:value={answer} placeholder="Escriba la respuesta">
    </div>
    <button 
    on:click={onRemove}
    class="">
    <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24">
        <path fill="black" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z" />
    </svg></button>
</div>