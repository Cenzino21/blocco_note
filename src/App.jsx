import './App.css';
//import { useState } from 'react';


/*function Tabella() {
  const[numeroNota, setNumeroNota] = useState(0);
  const[testoNota, setTestoNota] = useState("testo");
  return(
    <div id="NuovaNota">
      <div>
      <button onClick={() => setNumeroNota(numeroNota + 1) && setTestoNota("testo")}>Aggiungi nota</button> <br/>
      <p>{numeroNota} {testoNota}</p>
      </div>    
    </div>
  );
}*/

function App() {
  return (
    <div className="App">
      <h2 id="messaggioDiBenvenuto">Ciao Bro, ecco qua il tuo blocco note!!!</h2> <br/>
      <div class="contenitore">
        <div id="parteNote">
          <h3>Elenco note</h3>
          <ol>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </div>
        <div id="parteTesto">
          <h3>Elenco testi</h3>
          <input type="text" class="inserimentoTesto"></input> <br/>
          <input type="text" class="inserimentoTesto"></input> <br/>
          <input type="text" class="inserimentoTesto"></input> <br/>
          <input type="text" class="inserimentoTesto"></input> <br/>
          <input type="text" class="inserimentoTesto"></input>
        </div>
        </div>
    </div>
  );
}

export default App;
