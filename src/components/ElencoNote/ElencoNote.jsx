import Titolo from "../Titolo";
import React from "react";

const titoloDelleNote = "Elenco note";

export default function ElencoNote(props) {
  return(
    <div className="parteNote">
      <Titolo titoloNote={titoloDelleNote} />
      <button type="button">Aggiungi nota</button>
      <div>
        <div>
          {props.elencoNote.map((nota) =>
          <div><button onClick={() => props.setNota(nota)}>{nota.titoloNota}</button></div>
          )}
        </div>
      </div>
    </div>
  )
}

//passing data between components

