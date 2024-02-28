import { useState } from "react";
import Titolo from "./Titolo";

const titoloNote = "Elenco note";

export default function ElencoNote({note}) {
  return(
    <div className="parteNote">
      <Titolo titoloNote={titoloNote} />
      <button type="button">Aggiungi nota</button>
      <div>
        <div>
          {note.map((nota) => 
          <div><button type="button">{nota}</button></div>)}
        </div>
      </div>
    </div>
  )
}

//passing data between components

