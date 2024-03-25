import Titolo from "../Titolo";
import React from "react";
import ElencoDelleNote from "./ElencoDelleNote";

const titoloDelleNote = "Elenco note";

export default function ElencoTitoli({
  notaCompleta,
  titolo,
  contenuto,
  setNotaCompleta,
  setTitolo,
  setContenuto,
}) {

  const aggiungiNota = () => {
    const nuovaNota = {
      titolo: titolo,
      contenuto: contenuto
    };
    setNotaCompleta([...notaCompleta, nuovaNota])
  }

  return (
    <div className="parteNote">
      <Titolo titoloNote={titoloDelleNote} />
      <button type="button" onClick={aggiungiNota}>Inserisci nota</button>
      <ElencoDelleNote
        notaCompleta={notaCompleta}
        setTitolo={setTitolo}
        setContenuto={setContenuto}
      />
    </div>
  );
}
