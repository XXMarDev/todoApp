import { useState } from "react";

function Todo() {
    const [nome, setNome] = useState('Mar')
    return(
        <div>
            <h1>Hello {nome} </h1>
            
            {
                nome == 'Marco' ?(
                    <button>Il tuo nome è Marco</button>
                ): (
                    <button>Il tuo nome non è Marco</button>
                )
            }

        </div>
    )
}

export default Todo;