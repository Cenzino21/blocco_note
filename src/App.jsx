import './App.css';
import React from "react";
import Intestazione from "./components/Intestazione";
import ElencoNote from "./components/ElencoNote";
import CompilaNota from "./components/CompilaNota";
import TitoliDiCoda from "./components/TitoliDiCoda";


const note = ["Nota 1", "Nota 2", "Nota 3", "Nota 4", "Nota 5"];
const nuoveNote = [
  {
    titoloNota: "Titolo 1",
    data: "2024-05-21",
    ora: "21:05",
    contenutoNota: "Ciao"
  },
  {
    titoloNota: "Titolo 2",
    data:"2024-02-27",
    ora: "14:32",
    contenutoNota: "Lavoriamo"
  }
];

const messaggioDiInizio = "Benvenuto, ecco qua il tuo blocco note!!!"
const messaggioConclusivo = "Questo è il mio primo lavoro in React";

//Funzione principale
export default function App() {
  return (
    <div className="App">
      <Intestazione messaggioDiInizio={messaggioDiInizio} />
      <div className="contenitore">
        <ElencoNote note={note} />
        <CompilaNota nuoveNote={nuoveNote} />
      </div>
      <TitoliDiCoda messaggioConclusivo={messaggioConclusivo}/>
    </div>
  );
}


