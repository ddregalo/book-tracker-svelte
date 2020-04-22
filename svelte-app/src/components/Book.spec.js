import { render } from '@testing-library/svelte';
import Book from './Book.svelte';

const book = {
  coverUrl: 'http://wwww.test.com',
  title: 'Test Book Title',
  author: 'Mr. Test Author'
}

describe('Book container', () => {
  it('should render book details html correctly', () => {
    const { container } = render(Book, {
      props: { book } 
    })

    expect(container).toContainHTML('<div class="book-details"><p class="title">Test Book Title</p> <p class="author">Mr. Test Author</p></div>')
  })

  it('should display book title', () => {
    const { getByText } = render(Book, {
      props: { book } 
    })

    expect(getByText(book.title)).toBeInTheDocument()
  })

  it('should display book author', () => {
    const { getByText } = render(Book, {
      props: { book } 
    });

    expect(getByText(book.author)).toBeInTheDocument()
  })
})