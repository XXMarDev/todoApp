import React from 'react';
import '../Styles/utOne.css';
import photoBoy from '../photos/ragazzo.webp'

function UtOne() {
    const descriptionStyle = {
        width: '400px',
        margin: '0 auto',
        marginLeft: "102px"
    };

    return (
        <div>
            <h1 className='titoloUt1'>Marco Salvi</h1>
            <p className='desc'>Miglior studente</p>
            <div className="contenitoreStudenti1">
                <p className="studentiTre">Francesco Romano</p>
                <p className="studentiTre">Giuseppe Rossi</p>
                <p className="studentiTre">Raffaele Bianchi</p>
            </div>
            <div style={descriptionStyle}>
                <p>
                    Marco è un giovane di 13 anni con una passione inarrestabile per la scoperta e la creatività. Ogni giorno è un'avventura per lui, poiché si tuffa nella lettura appassionata di libri che gli consentono di viaggiare in mondi fantastici e conoscere nuove culture. La sua sete di conoscenza è ineguagliabile, e ama immergersi in qualsiasi argomento che catturi la sua attenzione, dall'astronomia all'arte contemporanea.
                    <br />
                    Una delle sue doti più luminose è la sua capacità di stringere amicizie sincere con chiunque incontri. La sua natura socievole e amichevole lo rende ben voluto da tutti coloro che hanno il piacere di conoscerlo. È sempre il primo a tendere una mano di aiuto e ad ascoltare le preoccupazioni degli altri con attenzione e senza giudizio.
                    <br />
                    Ma non è solo un amico premuroso, è anche un musicista talentuoso. Le sue dita danzano elegantemente sulle tastiere del pianoforte, creando melodie che possono far emozionare o far sognare chiunque ascolti. La musica è la sua via di fuga, il suo modo di esprimere emozioni che a volte le parole non riescono a catturare.
                </p>
            </div>
            <button className='btnHome'><a href="/studenti">Home</a></button>
            <div className='contImg'>
            <img src={photoBoy} alt="" className='boyPhoto' />
            <p className='dataImg'>Naples | 25/12/2022</p>
            </div>
        </div>
    );
}

export default UtOne;
