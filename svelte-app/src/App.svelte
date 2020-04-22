<script>
	import NavBar from './components/common/NavBar.svelte';
	import Button from './components/common/Button.svelte';
	import BookGrid from './components/BookGrid.svelte';
	import { get } from './clients/booksClient'

	let books = []
	
	onMount(async function () {
		const { data } = await getBooks('/?_sort=title&_order=desc');

		books = data;
	})

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