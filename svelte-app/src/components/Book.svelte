<script>
    export let book = {};
    export let onBookSelect;

    function isValidUrl(url) {
        return url && /http.+\.(jpg|jpeg|png|gif)$/.test(url);
    }

</script>

<a href="#" class="book-card" on:click={() => onBookSelect(book.id)}>
    <img class="cover-img" alt="Book cover image for {book.title}"src={isValidUrl(book.coverUrl) ? book.coverUrl : ''} />
    <div class="book-details">
        <p class="title">{ book.title || 'title not found' }</p>
        <p class="author">{ book.author || 'author not found' }</p>
    </div>
    
</a>

<style>
    img {
        height: 150px;;
        width: auto;
    }
    
    .book-card {
        font: "Manrope";
        font-size: 0.7em;
    }
</style>