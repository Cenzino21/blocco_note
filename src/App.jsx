import './App.css';
import React from 'react';

//Header della pagina
function Intestazione() {
  return (
    <header id="messaggioDiBenvenuto"><h2>Ciao Bro, ecco qua il tuo blocco note!!!</h2></header>
  )
}

//Titolo della parte delle note
function Titolo() {
  return (
    <h3>Elenco note</h3>
  )
}

//Elenco delle note
function ElencoNote() {
  return(
    <div id="parteNote">
          <Titolo />
          <button type="button">Aggiungi nota</button>
          <div>
            <p>Nota 1</p>
            <p>Nota 2</p>
            <p>Nota 3</p>
          </div>
        </div>
  )
}

//Parte testuale del blocco note
function CompilaNota() {
  return (
    <div id="parteTesto">
      <input type="text" placeholder="Titolo" id="inserimentoTitolo"></input>
      <input type="text" placeholder="Testo" id="inserimentoTesto"></input>
    </div>
  )
}

//Funzione principale
function App() {
  return (
    <div className="App">
      <Intestazione />
      <div class="contenitore">
        <ElencoNote />
        <CompilaNota />
      </div>
    </div>
  );
}

export default App;
