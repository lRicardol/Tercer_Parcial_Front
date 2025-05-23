import React, { useState } from 'react';
import { obtenerHistorialPorCorreo } from '../api/citaApi';

export default function HistorialCitasPage() {
  const [correo, setCorreo] = useState('');
  const [citas, setCitas] = useState([]);

  const buscar = async () => {
    try {
      const resultado = await obtenerHistorialPorCorreo(correo);
      setCitas(resultado);
    } catch {
      alert("No se pudo obtener el historial");
    }
  };

  return (
    <div>
      <h2>Historial de Citas</h2>
      <input value={correo} onChange={e => setCorreo(e.target.value)} placeholder="Correo" />
      <button onClick={buscar}>Buscar</button>
      <ul>
        {citas.map((cita, index) => (
          <li key={index}>
            {cita.especialidad} - {cita.fecha} - {cita.estado}
          </li>
        ))}
      </ul>
    </div>
  );
}
