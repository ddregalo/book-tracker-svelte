<script>
    import { onMount } from 'svelte'
    import Book from './Book.svelte'; 

    export let books;
    export let selectBook;
</script>

<div id="books-container">
    {#each books as book}
        <Book {book} onBookSelect={selectBook} />
    {/each}
</div>

<style>

    #books-container {
        display: grid;
        margin: 2em;
        grid-template-columns: repeat(5, 1fr);
    }
</style>