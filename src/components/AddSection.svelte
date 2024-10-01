<script lang="ts">
	import LargeSection from "./LargeSection.svelte";
	import RadioSection from "./RadioSection.svelte";
	import TrueFalseSection from "./TrueFalseSection.svelte";

    let sections: section<any>[] = [];

    type section<T> = {
        id: Number;
        typeSection: string;
        questions: T[];
    }


    function addSection(type: string) {
        const newSection = {
            id: Date.now(),
            typeSection: type,
            questions: [] // Inicialmente sin preguntas
        };

        sections = [...sections, newSection];
    }

    function removeSection(id: any) {
        sections = sections.filter(section => section.id !== id);
    };

</script>

<div class="flex flex-col w-[50%] mx-auto justify-center items-center bg-white my-5 rounded-lg p-5">
    {#each sections as section (section.id)}
        {#if section.typeSection === 'large-question'}
            <LargeSection onRemove={() => removeSection(section.id)}/>
        {:else if section.typeSection === 'multiple-choice'}
            <RadioSection onRemove={() => removeSection(section.id)}/>
        {:else if section.typeSection === 'true-false'}
            <TrueFalseSection onRemove={() => removeSection(section.id)}/>
        {/if}
    {/each}

    <div class="flex flex-row gap-8">
        <button on:click={() => addSection('large-question')}>+ Sección Desarrollo</button>
        <button on:click={() => addSection('true-false')}>+ Sección Verdadero y Falso</button>
        <button on:click={() => addSection('multiple-choice')}>+ Selección Múltiple</button>
    </div>
</div>