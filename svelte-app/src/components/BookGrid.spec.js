import { render } from '@testing-library/svelte';
import BookGrid from './BookGrid.svelte';

const books = [
  {
    coverUrl: 'http://wwww.test.com',
    title: 'Test Book Title',
    author: 'Ms. Test Author'
  },
  {
    coverUrl: 'http://wwww.secondplace.com',
    title: 'Never The First',
    author: 'Unknown'
  }
]

describe('Book container', () => {
  it('should render book grid html books-container div tag', () => {
    const { container } = render(BookGrid, {
      props: { books } 
    })

    expect(container).toContainHTML('<div id="books-container">')
  })
})