<script lang="ts">
    let selectedSection = '';
    let sections: section[] = [];

    type question = {
        id: Number;
        number: Number;
        question: string;
        answer: string;
    }

    type section = {
        id: Number;
        typeSection: string;
        questions: question[];
    }

    function addSection() {
        if (selectedSection == 'Desarrollo') {
            sections = [...sections, {id: Date.now(), typeSection: "Desarrollo", questions: []}]
        }
    }

</script>

<div>
    <select name="" id="" bind:value={selectedSection} on:select={addSection}>
        <option value="Alternativas">Alternativas</option>
        <option value="Desarrollo">Desarrollo</option>
        <option value="VoF">Verdadero o Falso</option>
    </select>

    {#each sections as section}
        
    {/each}
</div>