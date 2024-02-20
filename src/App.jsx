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
          <ol>
            <li class="numeriDelleNote"></li>
            <li class="numeriDelleNote"></li>
            <li class="numeriDelleNote"></li>
            <li class="numeriDelleNote"></li>
            <li class="numeriDelleNote"></li>
          </ol>
        </div>
        <div id="parteTesto">
          <h3>Elenco testi</h3>
          <input type="text" class="inserimentoTesto"></input> 
          <button type="button">Elimina</button> <br/>
          <input type="text" class="inserimentoTesto"></input> 
          <button type="button">Elimina</button> <br/>
          <input type="text" class="inserimentoTesto"></input>
          <button type="button">Elimina</button> <br/>
          <input type="text" class="inserimentoTesto"></input>
          <button type="button">Elimina</button> <br/>
          <input type="text" class="inserimentoTesto"></input>
          <button type="button">Elimina</button> <br/>
        </div>
        </div>
    </div>
  );
}

export default App;
