import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './Pages/todo';
import DatiUt from './Pages/datiUt';
import Prova from './Pages/prova';
import Studenti from './Components/utenti';
import UtOne from './Components/utOne';
import UtDue from './Components/utDue';
import UtTre from './Components/utTre';
import UtFour from './Components/utFour';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/datiUt" element={<DatiUt />}/>
        <Route path='/prova' element={<Prova />} />
        <Route path='/studenti' element={<Studenti />}/>
        <Route path='/utone' element={<UtOne />}/>
        <Route path='/utdue' element={<UtDue />}/>
        <Route path='/utre' element={<UtTre />}/>
        <Route path='/utquattro' element={<UtFour />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
