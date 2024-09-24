<script lang="ts">
	import LargeQuestion from "./LargeQuestion.svelte";

    let id;
    let instructions = '';

    let questions: question[] = [];

    type question = {
        id: Number;
        number: Number;
        question: string;
        answer: string;
    };

    function addQuestion() {
        questions = [...questions, {id: Date.now(), number: questions.length + 1, question: '', answer: ''}]
    }
</script>

<div>
    {#each questions as question (question.id)}
        <LargeQuestion 
        id = {question.id}
        number={question.number}
        bind:question = {question.question}
        bind:answer = {question.answer}
        />
    {/each}
    <button on:click={addQuestion}>Add Question</button>
</div>
