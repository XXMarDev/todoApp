import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Studente from "./studente";

function Studenti() {
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

    const contenitoreGeneraleStyle = (
        {
            display: "flex",
            justifyContent: "center",
            justifyContent: "space-evenly"
        }
    )

    const [utenti, setUtenti] = useState([
        {
            nomeInt: "Marco Salvi",
            age: "13.3",
            descrzione: "Marco è un ragazzo di 13 anni pieno di curiosità e creatività. Ama leggere, fare nuove amicizie e suonare il pianoforte. Con il suo sorriso contagioso, è un amico premuroso e socievole.",
            id: 1111
        },
        {
            nomeInt: "Franceso Romano",
            age: "13.7",
            descrzione: "Francesco, 13 anni, è un animo curioso con una passione per la tecnologia e l'immaginazione. Amico premuroso e appassionato di sport, è sempre pronto a scoprire nuove avventure.",
            id: 2222
        },
        {
            nomeInt: "Giuseppe Rossi",
            age: "13.5",
            descrzione: "Giuseppe, 13 anni, è un esploratore instancabile con una passione per il calcio e una creatività che si riflette nei suoi disegni e nelle storie che crea.",
            id: 3333
        },
        {
            nomeInt: "Raffaele Bianchi",
            age: "14.1",
            descrzione: "Raffaele Bianchi, con i suoi 14 anni di età, è un ragazzo che irradia vitalità e intraprendenza. Ha una grande passione per la musica per l'arte e per l' informatica.",
            id: 4444
        }

    ])

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

    const linkStyle = (
        {
            textDecoration: "none",
            color: "white"
        }
    )

    const navigate =  useNavigate()
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Studenti dell'anno</h1>
            <div style={contenitoreGeneraleStyle}>
                {
                    utenti.map(elemento => (
                       <Studente nome={elemento.nomeInt} descrizione={elemento.descrzione} age={elemento.age} id={elemento.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Studenti;