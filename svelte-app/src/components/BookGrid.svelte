<script>
    export let books = [];
</script>

<div class="books-container">
    {#each books as book}
        <p>Title: {book.title}</p>
        <p>Author: {book.author}</p>
        <p>Rating: {book.rating}</p>        
        <hr />
    {/each}
</div>

<style>

</style>