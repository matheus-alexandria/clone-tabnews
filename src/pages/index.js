import React, { useState } from "react";

function Home() {
  const [name, setName] = useState('Matheus');

  function buildPhrase() {
    if (name === 'Lívia') {
      return `A ${name} é a pessoa que eu mais amo no mundo`
    }
    return `Eu tenho toda certeza que o ${name} é um otário`;
  }

  return (
    <>
      <h1>
        {buildPhrase()}
      </h1>
      <select onChange={(event) => { setName(event.target.value) }}>
        <option value='Diego'>Diego</option>
        <option value='Marcelo P1'>P1</option>
        <option value='Marcelo P2'>P2</option>
        <option value='Douglas'>Douglas</option>
        <option value='Lívia'>Lívia</option>
      </select>
    </>
  );
}

export default Home;
