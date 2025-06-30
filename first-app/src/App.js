import './App.css';
import Condicional from './components/Condicional';
import Evento from './components/Evento';
import Form from './components/Form';
import List from './components/List';
import OutraLista from './components/OutraLista';
import Pessoa from './components/Pessoa';

import React, { useState } from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {

  const name = "Pedro";
  const [contador, setContador] = useState(0);// Realizar alterção no front
  const url = "https://placehold.co/150"

  const handleClick = () => {
    setContador(contador + 1);
  };

  const [state,setState] = useState(true);

  const meusItens = ["React","Vue","angular"];

  const [nome,setNome] = useState()

  return (
    <div className="App">
      <div>
        <h1>State Lift</h1>
        <SeuNome setNome={setNome}/>
        <Saudacao nome={nome}/>
      </div>
      <div>
        <label htmlFor="variante">Trocar:</label>
        <input type="checkbox" id="variante" name="variante" 
                    onChange={(e)=>setState(!state)} value={state}/>
      </div>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
      {state ? (
        <Condicional />
      ):(
        <>
              <h2>Alterações JXS - {name}</h2>
          <div>
            <h2>Quantidade clicada: {contador}</h2>
            <button onClick={handleClick}>Click</button>
          </div>
          <Pessoa nome={name} idade="25" foto={url} profissao="Dev"/>
          <List />
          <br/>
          <Evento numero={contador}/>
          <Form /> 
        </>
      )}
    </div>
  );
}

export default App;