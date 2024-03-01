import './App.css';
import React, { useState } from "react";
import ElencoNote from "./components/ElencoNote/ElencoNote";
import CompilaNota from "./components/CompilaNote/CompilaNota";


//const note = ["Nota 1", "Nota 2", "Nota 3", "Nota 4", "Nota 5"];
export const nuoveNote = [
  { titoloNota: "Titolo 1", data: "2024-05-21", ora: "21:05", contenutoNota: "Ciao" },
  { titoloNota: "Titolo 2", data: "2023-07-15", ora: "12:21", contenutoNota: "Hey" },
  { titoloNota: "Titolo 3", data: "2024-02-12", ora: "17:37", contenutoNota: "Salve" },
  { titoloNota: "Titolo 4", data: "2023-10-22", ora: "09:09", contenutoNota: "Buonsalve"}];
  

//Funzione principale
export default function App() {
  const [notaSelezionata, setNotaSelezionata] = useState();
  console.log(notaSelezionata)

  return (
    <div className="App">
      <header className="messaggioDiBenvenuto">Benvenuto, ecco qua il tuo blocco note!!!</header>
      <div className="contenitore">
        <ElencoNote elencoNote={nuoveNote} setNota={setNotaSelezionata}/>
        <CompilaNota notaSelezionata={nuoveNote} setNotaSelezionata={setNotaSelezionata}/>
      </div>
      <footer>
        <div>Questo è il mio primo lavoro in React</div>
      </footer>
    </div>
  );
}


