<script>
	import { onMount } from 'svelte';
	import NavBar from './components/common/NavBar.svelte';
	import Button from './components/common/Button.svelte';
	import BookGrid from './components/BookGrid.svelte';
	import { getBooks } from './clients/booksClient';

	let books = [];

	onMount(async function () {
			const booksResponse = await getBooks("?_sort=id&_order=desc");

			if (booksResponse.status)
			{
					books = booksResponse.data
			}
	});

	function showBookDetail(event) {
		console.log('book event - book id: ' + event.detail.id);
	}
</script>

<main>
	<NavBar username="katie wise" />
	<Button>add book</Button>
	<BookGrid {books} on:book-select={showBookDetail}/>
</main>

<style>
	main {
		text-align: center;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>