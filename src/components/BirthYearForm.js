import React from 'react';

const BirthYearForm = () => {
  return (
    <form>
      <h2>Set Birthyear</h2>
      <div>
        <label>name <input type="text" /></label>
      </div>
      <div>
        <label>born <input type="text" /></label>
      </div>
      <button type="submit">update author</button>
    </form>
  )
}

export default BirthYearForm;