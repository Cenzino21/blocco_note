import './App.css';
import React, { useCallback, useState } from "react";
import ElencoNote from "./components/ElencoNote/ElencoNote";
import CompilaNota from "./components/CompilaNote/CompilaNota";
//import CambioColore from './components/Redux/CambioColore';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from './components/Redux/themeSlice';
import { DARK, LIGHT } from './utils/themeConst';
//import { useSelector } from 'react-redux';


//const note = ["Nota 1", "Nota 2", "Nota 3", "Nota 4", "Nota 5"];
export const nuoveNote = [
  { titoloNota: "Titolo 1", data: "2024-05-21", ora: "21:05", contenutoNota: "Ciao" },
  { titoloNota: "Titolo 2", data: "2023-07-15", ora: "12:21", contenutoNota: "Hey" },
  { titoloNota: "Titolo 3", data: "2024-02-12", ora: "17:37", contenutoNota: "Salve" },
  { titoloNota: "Titolo 4", data: "2023-10-22", ora: "09:09", contenutoNota: "Buonsalve"}];
  

//Funzione principale
export default function App() {
  const [notaSelezionata, setNotaSelezionata] = useState();
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleChangeTheme = useCallback(()=> {
    if(theme.value === DARK) {
      dispatch(changeTheme(LIGHT));
    } else {
      dispatch(changeTheme(DARK));
    }
  },[theme, dispatch])

  //console.log(theme.value === "Dark" && "dark");
  console.log(theme.value);

  return (
    <div className={`App ${theme.value === DARK ? "AppDark" : ""}`}>
      <header className="messaggioDiBenvenuto"><p>Benvenuto, ecco qua il tuo blocco note!!!</p>
      <button type="button" className={`bottoneCambiaTema ${theme.value === "Dark" && "dark"}`} onClick={handleChangeTheme}>Cambia tema</button>
      </header>
      <div className="contenitore">
        <ElencoNote elencoNote={nuoveNote} setNota={setNotaSelezionata}/>
        <CompilaNota notaSelezionata={notaSelezionata}/>
      </div>
      <footer>
        <div>Questo è il mio primo lavoro in React</div>
      </footer>
    </div>
  );
}


