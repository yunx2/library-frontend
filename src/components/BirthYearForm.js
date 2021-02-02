import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SET_BIRTHYEAR, ALL_AUTHORS } from '../queries';

const BirthYearForm = ({authorslist}) => {
  const [author, setAuthor] = useState('');
  const [birthYear, setBirthYear] = useState('');

  const [editAuthor] = useMutation(SET_BIRTHYEAR, {
    refetchQueries: [{ query: ALL_AUTHORS }]
  });
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