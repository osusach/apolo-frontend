<script>
    let number = '';
    let question = '';
    let answer = '';
    let justification = '';
</script>

<div class="flex flex-row gap-2 bg-white">
    <select name="" id="" bind:value={answer}>
        <option value="" disabled selected>Seleccione una respuesta</option>
        <option value="Verdadero">Verdadero</option>
        <option value="Falso">Falso</option>
    </select>
    <input type="text" bind:value={question} placeholder="Escriba la pregunta">
</div>
    <input type="text" bind:value={justification} placeholder="Escriba la justificación">
