<script>
    import { onMount } from 'svelte'
    import Book from './Book.svelte'; 

    export let books;
</script>

<div id="books-container">
    {#each books as book}
        <Book {book} on:book-select />
    {/each}
</div>

<style>

    #books-container {
        display: grid;
        margin: 2em;
        grid-template-columns: repeat(5, 1fr);
    }
</style>