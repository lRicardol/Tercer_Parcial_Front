// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Páginas (crearás estas en src/pages)
import Especialidades from './pages/Especialidades';
import CrearCita from './pages/CrearCita';
import Historial from './pages/Historial';
import CancelarCita from './pages/CancelarCita';

function App() {
  return (
    <Router>
      <div>
        <header>
          ECI Salud Vital - Sistema de Citas
        </header>
        <nav>
          <Link to="/">Especialidades</Link>
          <Link to="/crear">Programar Cita</Link>
          <Link to="/historial">Historial</Link>
          <Link to="/cancelar">Cancelar Cita</Link>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Especialidades />} />
            <Route path="/crear" element={<CrearCita />} />
            <Route path="/historial" element={<Historial />} />
            <Route path="/cancelar" element={<CancelarCita />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
