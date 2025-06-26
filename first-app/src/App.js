import './App.css';
import Evento from './components/Evento';
import List from './components/List';
import Pessoa from './components/Pessoa';

import React, { useState } from 'react';

function App() {

  const name = "Pedro";
  const [contador, setContador] = useState(0);// Realizar alterção no front
  const url = "https://placehold.co/150"

  const handleClick = () => {
    setContador(contador + 1);
  };

  return (
    <div className="App">
      <h2>Alterações JXS - {name}</h2>
      <div>
        <h2>Quantidade clicada: {contador}</h2>
        <button onClick={handleClick}>Click</button>
      </div>
      <Pessoa nome={name} idade="25" foto={url} profissao="Dev"/>
      <List />
      <br/>
      <Evento/>
    </div>
  );
}

export default App;