<script lang="ts">
	import RadioQuestion from "./RadioQuestion.svelte";

    let id;
    let instructions = '';
    let questions: RadioQuestion[] = [];
    export let onRemove;

    type radio = {
        id: Number;
        label: string;
        value: string;
    };

    type RadioQuestion = {
        id: Number;
        number: Number;
        question: string;
        radios: radio[];
        answer: string;
    };

    function addQuestion() {
        questions = [...questions, {
            id: Date.now(), 
            number: questions.length + 1, 
            question: '', 
            radios: [],
            answer: ''}]
    }

    function removeQuestion(id: any) {
        questions = questions.filter(question => question.id !== id);
    };

    function handleQuestionChange(e: any) {
      instructions = e.target.value;
    };
</script>

<div class="flex flex-col w-full my-5 px-5">
    <div class="flex flex-row justify-between">
        <p class=" text-2xl font-semibold">Sección de Selección Múltiple</p>
        <button 
        on:click={onRemove} 
        class="text-lg px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded">Eliminar Sección</button>
    </div>
    <input
    type="text"
    bind:value={instructions}
    on:input={handleQuestionChange}
    placeholder="Introduce instrucciones de la sección"
    class=" bg-slate-100 my-3 py-1 px-2"/>

    {#each questions as question (question.id)}
        <RadioQuestion 
        id = {question.id}
        number={question.number}
        bind:question = {question.question}
        bind:answer = {question.answer}
        onRemove={() => removeQuestion(question.id)}
        />
    {/each}
    <button 
    on:click={addQuestion} 
    class="w-full bg-emerald-400 hover:bg-emerald-500 p-1 rounded-lg">
    <p class="text-lg font-medium">+ Pregunta</p></button>
</div>