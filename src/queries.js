import { gql } from '@apollo/client';

export const ALL_AUTHORS = gql`
query {
  allAuthors {
    name,
    born 
  }
}
`
export const ALL_BOOKS = gql`
query {
  allBooks {
    author
    title
    published
  }
}
`
export const CREATE_BOOK = gql`
mutation createBook($title: String!, $author: String!, $published: String!, $genres: [String]) {
 addBook(title: $title, author: $author, published: $published, genres: $genres) {
   title
   author
   published
 }
}
`
export const SET_BIRTHYEAR = gql`
mutation setBirthYear($author: String!, $birthYear: String!) {
  editAuthor(author: $author, birthYear: $birthYear) {
    name
    born
  }
}
`