<script lang="ts">
    export let label = ''; // El valor del label que se ingresará
    export let name = '';  // El nombre del grupo de radio buttons
    export let value = ''; // El valor del radio button
    export let group; // El valor seleccionado en el grupo de radio buttons
    export let onRemove; // Función para eliminar el radio button
  
    // Se dispara cuando el usuario cambia el valor del input del label
    const handleLabelChange = (e: any) => {
      label = e.target.value;
    };
</script>

<div class="flex flex-row gap-1 my-1 align-middle">
    <input
      type="radio"
      name={name}
      value={value}
      bind:group={group}
    />
    <input
      type="text"
      bind:value={label}
      on:input={handleLabelChange}
      placeholder="Escriba una respuesta" 
      class="px-2 py-1 rounded bg-slate-100"/>
    <button on:click={onRemove}>
      <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 256 256">
        <path fill="#ed333b" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 104H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16" />
      </svg>
    </button>
</div>
