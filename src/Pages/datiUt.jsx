import { useState } from "react";
import Utente from "../Components/utente";

function DatiUt() {
    const [utenti, setUtente] = useState([
        {
            nome: "Marco",
            cognome: "Salvi"
        }, 
        {
            nome: "Marco",
            cognome: "Salvi"
        }





    ])   

    return (
        <div>
            {utenti.map(elemento => (
           <Utente elemento={elemento}/>
            ))}
        </div>
    )
}

export default DatiUt;