export const booksApiUrl = 'http://localhost:3000/books';

export function getBooks(path) {
  return send(path)
}

export function addBook(path, book) {
  return send(path, 'POST', book)
}

export function updateBook(path, book) {
  return send(path, 'PUT', book)
}

async function send(path, method = 'GET', data) {
  const response = await fetch(booksApiUrl + path, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: data && JSON.stringify(data)
  })

  const books = await response.json()
  
  return { status: response.ok, data: books }
}