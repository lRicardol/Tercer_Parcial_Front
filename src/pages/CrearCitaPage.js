import React, { useState } from 'react';
import { crearCita } from '../api/citaApi';

export default function CrearCitaPage() {
  const [formulario, setFormulario] = useState({
    correo: '',
    especialidad: '',
    fecha: ''
  });

  const handleChange = e => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const cita = await crearCita(formulario);
      alert(`Cita creada con ID: ${cita.id}`);
    } catch (error) {
      alert("Error al crear cita");
    }
  };

  return (
    <div>
      <h2>Crear Cita Médica</h2>
      <form onSubmit={handleSubmit}>
        <input name="correo" placeholder="Correo" onChange={handleChange} required /><br />
        <input name="especialidad" placeholder="Especialidad" onChange={handleChange} required /><br />
        <input name="fecha" type="datetime-local" onChange={handleChange} required /><br />
        <button type="submit">Crear Cita</button>
      </form>
    </div>
  );
}
