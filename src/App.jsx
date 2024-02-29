import './App.css';
import React from "react";
import Intestazione from "./components/Intestazione";
import ElencoNote from "./components/ElencoNote/ElencoNote";
import CompilaNota from "./components/CompilaNote/CompilaNota";
import TitoliDiCoda from "./components/TitoliDiCoda";


//const note = ["Nota 1", "Nota 2", "Nota 3", "Nota 4", "Nota 5"];
export const nuoveNote = 
  [{ titoloNota: "Titolo 1", data: "2024-05-21", ora: "21:05", contenutoNota: "Ciao" },
   { titoloNota: "Titolo 2", data: "2023-07-15", ora: "12:21", contenutoNota: "Hey" },
   { titoloNota: "Titolo 3", data: "2024-02-12", ora: "17:37", contenutoNota: "Salve" },
   { titoloNota: "Titolo 4", data: "2023-10-22", ora: "09:09", contenutoNota: "Buonsalve"}];
  
  const messaggioDiInizio = "Benvenuto, ecco qua il tuo blocco note!!!"
  const messaggioConclusivo = "Questo è il mio primo lavoro in React";

//Funzione principale
export default function App() {
  return (
    <div className="App">
      <Intestazione messaggioDiInizio={messaggioDiInizio} />
      <div className="contenitore">
        <ElencoNote />
        <CompilaNota note={nuoveNote}/>
      </div>
      <TitoliDiCoda messaggioConclusivo={messaggioConclusivo}/>
    </div>
  );
}


