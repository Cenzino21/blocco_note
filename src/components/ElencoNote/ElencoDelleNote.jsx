import NotaSingola from "./NotaSingola";

export default function ElencoDelleNote({
  notaCompleta,
  setTitolo,
  setContenuto,
}) {
  return (
    <div>
      {notaCompleta.map((item, index) => {
        return (
          <NotaSingola 
            titolo={item.titolo} 
            contenuto={item.contenuto} 
            setTitolo={setTitolo} 
            setContenuto={setContenuto} 
            key={index}/>
        );
      })}
    </div>
  );
}
