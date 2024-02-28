import { useState } from "react"

export default function CompilaNota() { 
  
  return (
    <div className="parteTesto">
      <input type="text" placeholder="Titolo" className="inserimentoTitolo"></input>
      <div className="dataOra">
        <div>Data: </div> <div>Ora: </div>
      </div>
      <input type="text" placeholder="Testo" className="inserimentoTesto"></input>
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
          <p className="inserimentoTitolo">{nota.titoloNota}</p>
          <div className="dataOra">
            <div>Data: {nota.data}</div> <div>Ora: {nota.ora}</div>
            </div> 
          <p className="inserimentoTesto">{nota.contenutoNota}</p>
        </div>
      )}</div>
    </div>
  )
}
*/


