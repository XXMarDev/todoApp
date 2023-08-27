import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './Pages/todo';
import DatiUt from './Pages/datiUt';
import Prova from './Pages/prova';
import Studenti from './Components/utenti';
import PaginaUtenti from './Pages/paginaUtenti';
import Ecommerce from './Ecommerce/ecommerce';
import Login from './Ecommerce/ecommLogin';
import Registrati from './Ecommerce/ecommRegistrati';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/datiUt" element={<DatiUt />}/>
        <Route path='/prova' element={<Prova />} />
        <Route path='/studenti' element={<Studenti />}/>
        <Route path='/utente/:idUtente' element={<PaginaUtenti />} />
        <Route path='/ecommerce' element={<Ecommerce />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/registrati' element={<Registrati />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
