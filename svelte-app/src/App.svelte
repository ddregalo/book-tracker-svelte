<script>
	import NavBar from './components/common/NavBar.svelte';
	import Button from './components/common/Button.svelte';
	import BookGrid from './components/BookGrid.svelte';

	let books = [
		{
			title: 'What I Think About When I Think About Running',
			author: 'Haruki Murakami',
			coverUrl: 'https://miro.medium.com/max/3056/1*cApQ5sl_OaVJMwHFpoOc1Q.jpeg',
			rating: 4,
		},
		{
			title: 'The Beach',
			author: 'Alex Garland',
			coverUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1539508673l/578523._SY475_.jpg',
			rating: 3,
		}
	]
</script>

<main>
	<NavBar username="katie wise" />
	<Button>add book</Button>
	<BookGrid books="{books}" />
</main>

<style>
	main {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	#add-book-btn {
		margin: 4em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>