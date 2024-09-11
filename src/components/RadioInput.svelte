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

<div>
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
      placeholder="Escriba una respuesta" />
    <button on:click={onRemove}>Eliminar</button>
</div>
