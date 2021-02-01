import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

// these are queries, NOT schema definitions. schema definitions are what you wrote in the backend code. queries are what you input into the graphql playground to test backend
// a mutation is a kind a query (the kind of query of changes the data)
const CREATE_BOOK = gql`
 mutation createBook($title: String!, $author: String!, $published: String!, $genres: [String]) {
  addBook(title: $title, author: $author, published: $published, genres: $genres) {
    title
    author
    published
  }
 }
 `
const NewBook = (props) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [published, setPublished] = useState('')
  const [genre, setGenre] = useState('')
  const [genres, setGenres] = useState([])
  
  const [addBook] = useMutation(CREATE_BOOK); // when addBook is called the ADD_BOOK query is executed

  if (!props.show) {
    return null
  }

  const submit = async (event) => {
    event.preventDefault()
    addBook({  // ADD_BOOK mutation query make when submit button clicked
      variables: { // query parameters, these come from the local state
        title,
        author,
        published,
        genres
      }
    });
    console.log('add book...')

    setTitle('') // clearing state values
    setPublished('')
    setAuthor('')
    setGenres([])
    setGenre('')
  }

  const addGenre = () => {
    setGenres(genres.concat(genre))
    setGenre('')
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          title
          <input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          author
          <input
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          published
          <input
            type='number'
            value={published}
            onChange={({ target }) => setPublished(target.value)}
          />
        </div>
        <div>
          <input
            value={genre}
            onChange={({ target }) => setGenre(target.value)}
          />
          <button onClick={addGenre} type="button">add genre</button>
        </div>
        <div>
          genres: {genres.join(' ')}
        </div>
        <button type='submit'>create book</button>
      </form>
    </div>
  )
}

export default NewBook