import { useParams } from "react-router-dom"

function PaginaUtenti() {

    const idUtente = useParams().idUtente

    return(
        <div>
            <h1>Questo utente ha Id: {idUtente}</h1>
        </div>

    )
}

export default PaginaUtenti