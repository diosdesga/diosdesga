import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicio from './components/Inicio';
import Perfil from './components/Perfil';

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
          <Route path='/diosdesga' index element={<Inicio/>}/>
          <Route path='/diosdesga/:id' index element={<Perfil/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
