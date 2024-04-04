import './App.css';
import React, { useState } from "react";

import CompilaNota from "./components/CompilaNote/CompilaNota";
import ElencoTitoli from './components/ElencoNote/ElencoTitoli';

/*
const url= "https://dummyjson.com/users"
const api = async () => {
  const response = await fetch(url)
  .then(response => response.json())
  console.log(response);
}*/
  
//Funzione principale
export default function App() {
  const [titoloNota, setTitoloNota] = useState();
  const [contenutoNota, setContenutoNota] = useState(); 

  /*
  useEffect(() => {
    api();
  }, [])*/

  return (
    <div className="App">
      <header className="messaggioDiBenvenuto">
        <p>Benvenuto, ecco qua il tuo blocco note!!!</p></header>
      <div className="contenitore">
        <ElencoTitoli 
          titolo={titoloNota}
          contenuto={contenutoNota}
          setTitolo={setTitoloNota}
          setContenuto={setContenutoNota}/>
        <CompilaNota
          titolo={titoloNota}
          contenuto={contenutoNota}
          setTitolo={setTitoloNota}
          setContenuto={setContenutoNota}
        />
      </div>
      <footer>
        <div>Questo è il mio primo lavoro in React</div>
      </footer>
    </div>
  );
}


/*
const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleChangeTheme = useCallback(()=> {
    if(theme.value === DARK) {
      dispatch(changeTheme(LIGHT));
    } else {
      dispatch(changeTheme(DARK));
    }
  },[theme, dispatch])*/