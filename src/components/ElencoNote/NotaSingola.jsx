import { setUtenti } from "../Redux/reducers/utentiReducer"

export default function NotaSingola({id, nome, cognome}) {
    const visualizzaTitolo = () => {
        setUtenti(id, nome, cognome);
    }
    return(
        <div onClick={visualizzaTitolo}>
            {id}{nome}{cognome}
        </div>
    )
}