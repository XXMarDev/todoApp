import { useState } from "react";

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
            nomeInt1: "Marco Salvi",
            age1: "13.3",
            descrzione1: "Marco è un ragazzo di 13 anni pieno di curiosità e creatività. Ama leggere, fare nuove amicizie e suonare il pianoforte. Con il suo sorriso contagioso, è un amico premuroso e socievole."
        },
        {
            nomeInt2: "Franceso Romano",
            age2: "13.7",
            descrzione2: "Francesco, 13 anni, è un animo curioso con una passione per la tecnologia e l'immaginazione. Amico premuroso e appassionato di sport, è sempre pronto a scoprire nuove avventure."
        },
        {
            nomeInt3: "Giuseppe Rossi",
            age3: "13.5",
            descrzione3: "Giuseppe, 13 anni, è un esploratore instancabile con una passione per il calcio e una creatività che si riflette nei suoi disegni e nelle storie che crea."
        },
        {
            nomeInt4: "Raffaele Bianchi",
            age4: "14.1",
            descrzione4: "Raffaele Bianchi, con i suoi 14 anni di età, è un ragazzo che irradia vitalità e intraprendenza. Ha una grande passione per la musica per l'arte e per l' informatica."
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

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Migliori studenti</h1>
            <div style={contenitoreGeneraleStyle}>
                <div style={contenitoriStile}>{utenti.map(elementoUtenti => (
                    <div>
                        <h1>{elementoUtenti.nomeInt1}</h1>
                        <h2>{elementoUtenti.age1}</h2>
                        <p>{elementoUtenti.descrzione1}</p>
                    </div>

                ))}
                    <button style={btnStyle}><a href="/utOne" style={linkStyle}>Leggi di più...</a></button>
                </div>
                <div style={contenitoriStile}>{utenti.map(elementoUtenti => (
                    <div>
                        <h1>{elementoUtenti.nomeInt2}</h1>
                        <h2>{elementoUtenti.age2}</h2>
                        <p>{elementoUtenti.descrzione2}</p>
                    </div>

                ))}
                    <button style={btnStyle}><a href="/utDue" style={linkStyle}>Leggi di più...</a></button>
                </div>
                <div style={contenitoriStile}>{utenti.map(elementoUtenti => (
                    <div>
                        <h1>{elementoUtenti.nomeInt3}</h1>
                        <h2>{elementoUtenti.age3}</h2>
                        <p>{elementoUtenti.descrzione3}</p>
                    </div>
                ))}

                    <button style={btnStyle}>
                    <a href="/utre" style={linkStyle}>Leggi di più...</a>
                    </button>
                </div>
                <div style={contenitoriStile}>{utenti.map(elementoUtenti => (
                    <div>
                        <h1>{elementoUtenti.nomeInt4}</h1>
                        <h2>{elementoUtenti.age4}</h2>
                        <p>{elementoUtenti.descrzione4}</p>
                    </div>
                ))}
                    <button style={btnStyle}>
                        <a href="/utquattro" style={linkStyle}>Leggi di più...</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Studenti;