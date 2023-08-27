import React from 'react';
import '../Styles/ecommLogin.css'; // Assicurati di importare il file CSS qui
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()

    const navigazione = () => {
        navigate('/registrati')
    }
    return (
        <div className='body'>
            <button className='btnRegistrati' onClick={navigazione}>Registrati</button>
            <div className='containerLogin'>
                <div>
                    <h1 className='titleAccedi'>Accedi</h1>
                </div>
                <div className='containerInput'>
                    <input type="email" name='email' placeholder='Inserisci e-mail' />
                    <input type="password" name='password' placeholder='Inserisci password' />
                </div>
                <div className='containerButtonAccedi'>
                    <button>
                        Accedi
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
