<script>
    export let book = {};

    function isValidUrl(url) {
        return url && /http.+\.(jpg|jpeg|png|gif)$/.test(url);
    }
</script>

<a href="#" class="book-card">
    <img class="cover-img" src={isValidUrl(book.coverUrl) ? book.coverUrl : ''} />
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

    .book-details {

    }

    #books-container {
        display: grid;

        grid-template-columns: 1fr 1fr 1fr;
    }
</style>