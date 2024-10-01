<script lang="ts">
    import RadioInput from "./RadioInput.svelte";

    type radio = {
        id: Number;
        label: string;
        value: string;
    };

    export let id;
    export let number;
    export let question = '';
    export let radios: radio[] = []; // Lista de los radio buttons
    export let answer = ''; // Almacena el radio seleccionado
    export let onRemove;

    

    // Agregar una nueva opción de radio
    function addRadio() {
        radios = [
        ...radios,
        { id: Date.now(), label: '', value: `${radios.length + 1}` } // Cada radio tiene un valor único
        ];
    };

    // Eliminar una opción de radio
    function removeRadio(id: any) {
        radios = radios.filter(radio => radio.id !== id);
    };

    function handleQuestionChange(e: any) {
      question = e.target.value;
    };
    
</script>

<div class="flex flex-col mb-8">
    <div class="flex flex-row gap-2 w-full mb-2">
        <input
        type="text"
        bind:value={question}
        on:input={handleQuestionChange}
        placeholder="Escribe la pregunta"
        class="w-full bg-slate-100 p-1 rounded px-2">
        
        <button on:click={addRadio}
        class="px-2 py-1 rounded w-full font-medium bg-emerald-300 hover:bg-emerald-400">+ Alternativa</button>
    
        <!-- <p>Radio seleccionado: {answer}</p>  Aquí se muestra el valor del radio seleccionado -->
        <button 
        on:click={onRemove}
        class="">
        <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24">
            <path fill="black" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z" />
        </svg></button>
    </div>
    <div class="flex flex-col">
        {#each radios as radio (radio.id)}
            <RadioInput
            name="group1"
            bind:label={radio.label}
            bind:value={radio.label}
            bind:group={answer}
            onRemove={() => removeRadio(radio.id)} />
        {/each}
    </div>
</div>

    
