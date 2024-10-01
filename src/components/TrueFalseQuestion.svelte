<script>
    export let id;
    export let number;
    export let question = '';
    export let answer = '';
    export let justification = '';
    export let onRemove;
</script>

<div class="flex flex-row w-full gap-2 mb-8">
    <div class="flex flex-col w-full gap-2 bg-white">
        <input 
        type="text" 
        bind:value={question} 
        placeholder="Escriba la pregunta"
        class="bg-slate-100 py-1 rounded px-2">

        <div class="flex flex-row gap-2 w-full">
            <select name="" id="" bind:value={answer} class="rounded h-full px-2">
                <option value="" disabled selected>Seleccione una respuesta</option>
                <option value="Verdadero">Verdadero</option>
                <option value="Falso">Falso</option>
            </select>
            <input 
            type="text" 
            bind:value={justification} 
            placeholder="Escriba la justificación"
            class="bg-slate-100 py-1 rounded px-2 w-full">
        </div>
    </div>
    <button 
    on:click={onRemove}
    class="">
    <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24">
        <path fill="black" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z" />
    </svg></button>
</div>