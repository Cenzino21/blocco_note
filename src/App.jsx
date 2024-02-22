import './App.css';
import React from 'react';

//Funzione principale
function App() {
  return (
    <div className="App">
      <Intestazione />
      <div class="contenitore">
        <ElencoNote />
        <CompilaNota />
      </div>
      <TitoliDiCoda />
    </div>
  );
}

export default App;
