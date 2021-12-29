<svelte:options tag={null}/>

<script lang="ts">
    import Button from '@smui/button'
    import Textfield from '@smui/textfield'

    export let commitExpression
    export let discard

    let fileinput
    let name = ""
    let description = ""

    let bundle = ""

    function onFileSelected(e) {
        let bundleFile = e.target.files[0];
        let reader = new FileReader();
        reader.readAsText(bundleFile);
        reader.onload = e => {
            bundle = e.target.result.toString()
        };
    }

    function commit() {
        commitExpression({
            name,
            description,
            bundle
        })
    }

    function commitDisabled() {
        return name.length == 0 || description.length == 0
    }
</script>

<div class="container">
    <p>
        <span>Name:</span> <input bind:value={name}>
    </p>
    <p>
        <span>Description:</span> <input bind:value={description}>
    </p>
    

    <input type="file" accept=".js" on:change={(e)=>onFileSelected(e)} bind:this={fileinput}>

    {#if name.length == 0 || description.length == 0}
        <button disabled>Commit</button>
    {:else}
        <button on:click={commit}>Commit</button>
    {/if}
    <button on:click={discard}>Discard</button>

    <div class="text">
        {bundle}
    </div>
</div>


<style>
    .container {
        color: burlywood;
        width: 400px;
        height: 300px;
    }

    input {
        width: 100%;
        height: 200px;
    }
</style>