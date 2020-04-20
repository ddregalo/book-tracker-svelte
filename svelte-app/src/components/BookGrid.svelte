<script>
    import { onMount } from 'svelte'
    import Book from './Book.svelte'; 
    import { get } from '../clients/booksClient.js';

    let books = [];

    onMount(async function () {
        const booksResponse = await get("?_sort=id&_order=desc");

        if (booksResponse.status)
        {
            books = booksResponse.data
        }
    });

</script>

<div id="books-container">
    {#each books as book}
        <Book {book} />
    {/each}
</div>

<style>

    #books-container {
        display: grid;
        margin: 2em;
        grid-template-columns: repeat(5, 1fr);
    }
</style>