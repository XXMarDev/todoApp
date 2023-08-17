import React, { useState } from "react";

function Prova() {
    const titoloStyle = {
        textAlign: "center"
    };

    const contenitoreEsternoStyle = {
        marginTop: "-180px",
        display: "flex",
        flexDirection: "column", // Allinea verticalmente
        alignItems: "center", // Centra orizzontalmente
        justifyContent: "center", // Centra verticalmente
        minHeight: "100vh", // Imposta l'altezza minima dell'intera pagina
    };

    const contenitoriStyle = {
        display: "inline-block", // Posiziona i div affianco
        margin: "10px",
        width: "200px",
        height: "300px",
        backgroundColor: "orangered",
        borderRadius: "10px",
        textAlign: "center",
        marginLeft: "50px",
    };

    const [prodotti, setProdotti] = useState([
        {
          titoloProdotto1: "Controller",
          descrizioneProdotto1: "Molto leggero"   
        },
        {
            titoloProdotto2: "Bottiglia",
            descrizioneProdotto2: "Rimane fresca"
        },
        {
            titoloProdotto3: "Cuscino",
            descrizioneProdotto3: "Molto comodo"
        }
    ])

    return (
        <div style={contenitoreEsternoStyle}>
            <h1 style={titoloStyle}>I migliori prodotti dell'anno</h1>

            <div>
                <div style={contenitoriStyle}>{
                    prodotti.map( elementoCont => (
                        <div>
                            <h1>{elementoCont.titoloProdotto1}</h1>
                            <p>{elementoCont.descrizioneProdotto1}</p>
                        </div>
                    ))
                }
                </div>
                <div style={contenitoriStyle}>
                    {
                        prodotti.map(elementoCont => (
                            <div>
                                <h1>{elementoCont.titoloProdotto2}</h1>
                                <p>{elementoCont.descrizioneProdotto2}</p>
                            </div>
                        ))
                    }
                </div>
                <div style={contenitoriStyle}>
                    {
                        prodotti.map( elementoCont => (
                            <div>
                                <h1>{elementoCont.titoloProdotto3}</h1>
                                <p>{elementoCont.descrizioneProdotto3}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Prova;
