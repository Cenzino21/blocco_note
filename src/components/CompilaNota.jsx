function CompilaNota() {
  const titolo = "Ciao :)";
  const testo = "Torna al lavoro!!!";
  const data = "Data: 2024-05-21";
  const ora = "Ora: 21:05";
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

export default CompilaNota;