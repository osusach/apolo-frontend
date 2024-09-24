<script>
    export let id;
    export let number;
    export let question = '';
    export let answer = '';
</script>

<div class="flex flex-col gap-2 bg-white">
    <input type="text" bind:value={question} placeholder="Escriba la pregunta">
    <input type="text" bind:value={answer} placeholder="Escriba la respuesta">
</div>