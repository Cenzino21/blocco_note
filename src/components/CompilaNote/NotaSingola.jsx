import React from "react"
import { DARK } from "../../utils/themeConst"

export default function NotaSingola(theme, {titolo, data, ora, testo}) {
  
    return (
      <div className={`parteTesto ${theme === DARK ? "parteTestoDark" : ""}`}>
        <input type="text" placeholder="Titolo" className="inserimentoTitolo" value={titolo}></input>
        <div className="dataOra">
        <div>{data}</div> <div>{ora}</div>
        </div> 
        <input type="text" placeholder="Testo" className="inserimentoTesto" value={testo}></input>
      </div>
    )
  }