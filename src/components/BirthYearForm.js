import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const SET_BIRTHYEAR = gql`
mutation setBirthYear($author: String!, $birthYear: String!) {
  editAuthor(author: $author, birthYear: $birthYear) {
    name
    born
  }
}
`
const BirthYearForm = ({authorslist}) => {
  const [author, setAuthor] = useState('');
  const [birthYear, setBirthYear] = useState('');

  const [editAuthor] = useMutation(SET_BIRTHYEAR);
  const submit = async (e) => {
    e.preventDefault();
    editAuthor({
      variables: {
        author,
        birthYear
      }
    });
    setAuthor('');
    setBirthYear('');
  }
  return (
    <form onSubmit={submit}>
      <h2>Set Birthyear</h2>
      <div>
        <select onChange={e => setAuthor(e.target.value)}>
          {authorslist.map(a => <option key={a.name} value={a.name}>{a.name}</option>)}
        </select>
      </div>
      <div>
        <label>born <input 
          type="text"
          value={birthYear}
          onChange={e => setBirthYear(e.target.value)} />
        </label>
      </div>
      <button type="submit">update author</button>
    </form>
  )
}

export default BirthYearForm;