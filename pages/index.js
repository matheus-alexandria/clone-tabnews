import React, { useState } from "react";

function Home() {
  const [name, setName] = useState('Matheus');
  return (
    <>
      <h1>
        {`Eu tenho toda certeza que o ${name} é um otário`}
      </h1>
      <select onChange={(event) => { setName(event.target.value) }}>
        <option value='Diego'>Diego</option>
        <option value='Marcelo P1'>P1</option>
        <option value='Marcelo P2'>P2</option>
        <option value='Douglas'>Douglas</option>
      </select>
    </>
  );
}

export default Home;
