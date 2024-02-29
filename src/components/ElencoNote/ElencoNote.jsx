import Titolo from "../Titolo";
import {nuoveNote} from "../../App";

const titoloDelleNote = "Elenco note";

export default function ElencoNote() {
  return(
    <div className="parteNote">
      <Titolo titoloNote={titoloDelleNote} />
      <button type="button">Aggiungi nota</button>
      <div>
        <div>
          {nuoveNote.map((nota) =>
          <div><button>{nota.titoloNota}</button></div>
          )}
        </div>
      </div>
    </div>
  )
}

//passing data between components

