import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import Authors from './Authors'
import Books from './Books'
import NewBook from './NewBook'
import { ALL_AUTHORS, ALL_BOOKS } from '../queries';

// gql queries must have names in this format


const App = () => {
  const [page, setPage] = useState('authors')
  const [query, setQuery] = useState(ALL_AUTHORS)
  let result = useQuery(query);
  
  if (result.loading) {
    return <div>loading...</div>
  }
  return (
    <div>
      <div>
        <button onClick={() => {
          setPage('authors')
          setQuery(ALL_AUTHORS)
        }}>authors</button>
        <button onClick={() => {
          setPage('books')
          setQuery(ALL_BOOKS);
          }}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>

      <Authors
        show={page === 'authors'} authors={result.data.allAuthors}
      />

      <Books
        show={page === 'books'} books={result.data.allBooks}
      />

      <NewBook
        show={page === 'add'}
      />

    </div>
  )
}

export default App