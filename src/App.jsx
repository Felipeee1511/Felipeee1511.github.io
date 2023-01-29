import Inicio from './components/inicio/Inicio'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FormularioContacto from './components/contacto/FormularioContacto';
import Servicios from './components/servicios/Servicios';
import Nosotros from './components/nosotros/Nosotros';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/contact" element={<FormularioContacto/>}/>
          <Route path="/services" element={<Servicios/>}/>
          <Route path="/about_us" element={<Nosotros/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
