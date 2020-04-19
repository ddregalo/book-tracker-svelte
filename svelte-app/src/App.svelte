<script>
	import NavBar from './components/common/NavBar.svelte';
	import Button from './components/common/Button.svelte';
	import BookGrid from './components/BookGrid.svelte';

	let books = [
		{
			title: "What I Think About When I Think About Running.",
			author: "Murakami",
			rating: 4,
		},
		{
			title: "The Beach.",
			author: "Leonardo Di Caprio",
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

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>