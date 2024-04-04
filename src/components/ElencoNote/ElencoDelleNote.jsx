import { useDispatch, useSelector } from "react-redux";
import NotaSingola from "./NotaSingola";
import { setUtenti } from "../Redux/reducers/utentiReducer";
//import { useEffect } from "react";
//import { useState } from "react";

export default function ElencoDelleNote({
  setTitolo,
  setContenuto
}) {
  const utenti = useSelector((state) => state.utenti.utenti);

  //const [utenti, setUtenti] = useState([]);
  const url = "https://dummyjson.com/users";
    /**
     *  titolo={item.titolo} 
            contenuto={item.contenuto} 
            setTitolo={setTitolo} 
            setContenuto={setContenuto} 
     */

    const dispatch = useDispatch();
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setUtenti(data.users));
      });

  //const noteRedux = useSelector((state) => state.note.note); //Sto pushando volta per volta note dentro lo stato di note

  return (
    <div>
      {utenti.map((item, index) => {
        return (
          <NotaSingola 
            id={item.id}
            nome={item.firstName}
            cognome={item.lasttName}
            key={index}/>
        );
      })}
    </div>
  );
}
