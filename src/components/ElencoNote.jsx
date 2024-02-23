//import { useState } from "react";
import Titolo from "./Titolo";

function ElencoNote() {
  const note = ["Nota 1", "Nota 2", "Nota 3", "Nota 4", "Nota 5"];
  const elencoNote = note.map((nota) => 
    <li>{nota}</li>
  );
  return(
    <div className="parteNote">
      <Titolo />
      <button type="button">Aggiungi nota</button>
      <div>
        <div>{elencoNote}</div>
      </div>
    </div>
  )
}

export default ElencoNote;