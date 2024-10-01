<script lang="ts">
	import TrueFalseQuestion from "./TrueFalseQuestion.svelte";

    let id;
    let instructions = '';
    export let onRemove;

    let questions: TrueFalseQuestion[] = [];

    type TrueFalseQuestion = {
        id: Number;
        number: Number;
        question: string;
        answer: string;
        justification: string;
    };

    function addQuestion() {
        questions = [...questions, {
            id: Date.now(), 
            number: questions.length + 1, 
            question: '', 
            answer: '',
            justification: ''}]
    }

    function removeQuestion(id: any) {
        questions = questions.filter(question => question.id !== id);
    };

    const handleInstructionsChange = (e: any) => {
      instructions = e.target.value;
    };
</script>

<div class="flex flex-col w-full my-5 px-5">
    <div class="flex flex-row justify-between">
        <p class=" text-2xl font-semibold">Sección de Verdadero y Falso</p>
        <button 
        on:click={onRemove} 
        class="text-lg px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded">Eliminar Sección</button>
    </div>
    <input
      type="text"
      bind:value={instructions}
      on:input={handleInstructionsChange}
      placeholder="Introduzca instrucciones de la sección"
      class=" bg-slate-100 my-3 py-1 px-2 rounded"/>
    
    {#each questions as question (question.id)}
        <TrueFalseQuestion 
        id = {question.id}
        number={question.number}
        bind:question = {question.question}
        bind:answer = {question.answer}
        onRemove={() => removeQuestion(question.id)}
        />
    {/each}
    <button 
    on:click={addQuestion} 
    class="w-full bg-emerald-400 hover:bg-emerald-500 transition-all p-1 rounded">
    <p class="text-lg font-medium">+ Pregunta</p></button>
</div>