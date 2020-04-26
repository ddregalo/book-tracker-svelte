<script>
    import { onMount } from 'svelte';
    import { getBooks } from '../clients/booksClient.js';

    export let id;

    let book = {};

    onMount(async() => {
        const { data } = await getBooks('/' + id);
        book = data;
    });
</script>

<h1>Book Detail Page for id: {book.title}</h1>

<style>
    h1 {
        color: purple;
    }
</style>