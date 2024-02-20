import './App.css';
import React from 'react';

function App() {
  /*
  function eliminaNota() {
    let indice = document.querySelector("#parteNote li");
    let testo = document.querySelector("#parteTesto input[type='text']");
    let bottone = document.querySelector("#parteTesto button");
    if(indice && testo && bottone) {
      indice.remove();
      testo.remove();
      bottone.remove();
    }
  }*/
  return (
    <div className="App">
      <header id="messaggioDiBenvenuto"><h2>Ciao Bro, ecco qua il tuo blocco note!!!</h2></header>
      <div class="contenitore">
        <div id="parteNote">
          <h3>Elenco note</h3>
          <button type="button">Aggiungi nota</button>
          <div>
            <p>Nota 1</p>
            <p>Nota 2</p>
            <p>Nota 3</p>
          </div>
        </div>
        <div id="parteTesto">
          <input type="text" placeholder="Titolo" id="inserimentoTitolo"></input>
          <input type="text" placeholder="Testo" id="InserimentoTesto"></input>
        </div>
      </div>
    </div>
  );
}

export default App;
