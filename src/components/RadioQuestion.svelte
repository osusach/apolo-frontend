<script lang="ts">
    import RadioInput from "./RadioInput.svelte";

    type radio = {
        id: Number;
        label: string;
        value: string;
    };

    let title = '';
    let question = '';
    let radios: radio[] = []; // Lista de los radio buttons
    let selectedRadio = ''; // Almacena el radio seleccionado

    

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

<div>
    <h2>Opciones dinámicas con botones de radio</h2>
    <input
    type="text"
    bind:value={question}
    on:input={handleQuestionChange}
    placeholder="Escribe la pregunta" />
    
    <button on:click={addRadio}>Agregar opción</button>

    {#each radios as radio (radio.id)}
        <RadioInput
        name="group1"
        bind:label={radio.label}
        bind:value={radio.label}
        bind:group={selectedRadio}
        onRemove={() => removeRadio(radio.id)} />
    {/each}

    <p>Radio seleccionado: {selectedRadio}</p> <!-- Aquí se muestra el valor del radio seleccionado -->
</div>
