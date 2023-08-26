
function Utente({elemento}) {

    return(
        <div>
                 <div className="bg-[#000]">
                    <h2>{elemento.nome}</h2>
                    <h2>{elemento.cognome}</h2>
                </div>
        </div>
    )
}

export default Utente;
