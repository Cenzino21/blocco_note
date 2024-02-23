import './App.css';
import React from "react";
import Intestazione from "./components/Intestazione";
import ElencoNote from "./components/ElencoNote";
import CompilaNota from "./components/CompilaNota";
import TitoliDiCoda from "./components/TitoliDiCoda";

//Funzione principale
function App() {
  return (
    <div className="App">
      <Intestazione />
      <div className="contenitore">
        <ElencoNote />
        <CompilaNota />
      </div>
      <TitoliDiCoda />
    </div>
  );
}

export default App;
