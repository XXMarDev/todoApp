import { useNavigate } from "react-router-dom";

function Studente({nome, descrizione, age, id}) {
    const contenitoriStile = (
        {
            width: "300px",
            height: "500px",
            backgroundColor: "#E9C46A",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
            color: "#1A237E",
            border: "1px solid black"
        }
    )

    const btnStyle = (
        {
            height: "40px",
            borderRadius: "5px",
            border: "2px solid white",
            backgroundColor: "#5472d3",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
            marginTop: "70px",
            color: "white",
        }
    )

    const navigate = useNavigate();

    return( 
        <div style={contenitoriStile}>
        <div className="bg-[red]">
            <h1 className="text-[red]">{nome}</h1>
            <h2>{age}</h2>
            <p>{descrizione}</p>
        </div>
        <button className="bg-[red]" onClick={() => navigate('/utente/' + id)}>Leggi di più</button>
    </div>

    )
}

export default Studente;