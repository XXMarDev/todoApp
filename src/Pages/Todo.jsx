import { useState } from 'react';
import '../Styles/todo.css';
import Attivita from '../Components/attivita';

function Todo() {
    const [listaToDo, setListaToDo] = useState([
        {
            titolo: "Activity1",
            descrizione: "Description1"
        },
        {
            titolo: "Activity2",
            descrizione: "Description2"
        },
        {
            titolo: "Activity3",
            descrizione: "Description3"
        }
    ])
    const [listaProgress, setListaProgress] = useState([
        {
            titolo: "Activity1",
            descrizione: "Description1"
        },
        {
            titolo: "Activity2",
            descrizione: "Description2"
        }
    ])

    const [listaTesting, setListaTesting] = useState([
        {
            titolo: "Activity1",
            descrizione: "Description1"
        },
        {
            titolo: "Activity2",
            descrizione: "Description2"
        },
        {
            titolo: "Activity3",
            descrizione: "Description3"
        }
    ])


    return (
        <div>
            <h1 className='text-[red]'>Notes - To Do</h1>
            <div className='contenitoreGenerale'>
                <div className="containerTodo">
                    <div className='activity1'>

                        <h1>To Do /3</h1>
                        <div style={{
                            height: "340px",
                            overflowY: 'scroll',
                            overflowX: 'hidden'
                        }}>
                            {
                                listaToDo.map(elemento => (
                                    <Attivita titolo={elemento.titolo} descrizione={elemento.descrizione} />
                                ))
                            }
 
                        </div>
                    </div>


                </div>

                <div className="containerTodo2">
                    <div className="activity2">
                        <h1>In progress /2</h1>
                        <div style={{
                            height: "340px"
                        }}>{
                                listaProgress.map(element => (
                                    <Attivita titolo={element.titolo} descrizione={element.descrizione} />
                                ))
                            }</div>
                    </div>
                </div>

                <div className="containerTodo3">
                    <div className="activity3">
                        <div className='activity1'>
                            <h1>Testing /3</h1>
                            <div style={{
                                height: "340px",
                                overflowY: 'scroll',
                                overflowX: 'hidden'
                            }}>
                                {
                                    listaTesting.map(elemento => (
                                        <Attivita titolo={elemento.titolo} descrizione={elemento.descrizione} />
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>

                <div className="containerTodo4">
                <div className="activity2">
                        <h1>In progress /2</h1>
                        <div style={{
                            height: "340px"
                        }}>{
                                listaProgress.map(element => (
                                    <Attivita titolo={element.titolo} descrizione={element.descrizione} />
                                ))
                            }</div>
                    </div>
                    
                </div>

            </div>

        </div>



    )
}

export default Todo;