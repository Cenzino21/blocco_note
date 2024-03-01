import React from "react"

export default function NotaSingola({titolo, data, ora, testo}) {
  
    return (
      <div className="parteTesto">
        <input type="text" placeholder="Titolo" className="inserimentoTitolo" value={titolo}></input>
        <div className="dataOra">
        <div>{data}</div> <div>{ora}</div>
        </div> 
        <input type="text" placeholder="Testo" className="inserimentoTesto" value={testo}></input>
      </div>
    )
  }