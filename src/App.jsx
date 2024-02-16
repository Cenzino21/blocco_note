import './App.css';
import { useState } from 'react';

function AggiungiNota() {
  const[numeroNota, setNumeroNota] = useState(0);
  return(
    <button onClick={() => setNumeroNota(numeroNota + 1)}>Aggiungi nota</button>
  );
}

function Tabella() {
  return(
    <div id="NuovaNota">
      <AggiungiNota />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <p>Ciao Bro, ecco qua il tuo blocco note!!!</p>
      <Tabella />
    </div>
  );
}

export default App;
