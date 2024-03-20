//import { nuoveNote } from "../../App"
import React from "react"
import { DARK } from "../../utils/themeConst";
//import NotaSingola from "./NotaSingola"

export default function CompilaNota(props) { 
  if (!props.notaSelezionata) {
    return (
      <div className={`parteTesto ${props.theme === DARK ? "parteTestoDark" : ""}`}>
        <p>Nessuna nota selezionata</p>
      </div>
    );
  }
  return (
    <div className={`parteTesto ${props.theme === DARK ? "parteTestoDark" : ""}`}>
      <p>Titolo: {props.notaSelezionata.titoloNota}</p>
      <p>Data: {props.notaSelezionata.data}</p>
      <p>Ora: {props.notaSelezionata.ora}</p>
      <p>Contenuto: {props.notaSelezionata.contenutoNota}</p>
    </div>
  )
}

/*
function CompilaNota({titolo, data, ora, testo}) {
  
  return (
    <div className="parteTesto">
      <input type="text" placeholder="Titolo" className="inserimentoTitolo" value={titolo}></input>
      <div className="dataOra">
      <div>{data}</div> <div>{ora}</div>
      </div> 
      <input type="text" placeholder="Testo" className="inserimentoTesto" value={testo}></input>
    </div>
  )
}*/

/*
export default function CompilaNota({nuoveNote}) { 
  
  return (
    <div className="parteTesto">
      <div>{nuoveNote.map((nota) => 
        <div>
          <input type="text" className="inserimentoTitolo">{nota.titoloNota}</input>
          <div className="dataOra">
            <div>Data: {nota.data}</div> <div>Ora: {nota.ora}</div>
            </div> 
          <input type="text" className="inserimentoTesto">{nota.contenutoNota}</input>
        </div>
      )}</div>
    </div>
  )
}
*/

/*
export default function CompilaNota({notaSelezionata}) { 
  return (
    <div className="parteTesto">
      {notaSelezionata.map((nota) =>
      <div key={nota.titoloNota}>
        <NotaSingola titolo={nota.titoloNota} data={nota.data} ora={nota.ora} testo={nota.contenutoNota}/>
      </div> 
      )}
    </div>
  )
}
 */


