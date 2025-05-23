import React, { useState } from 'react';
import { cancelarCita } from '../api/citaApi';

export default function CancelarCitaPage() {
  const [id, setId] = useState('');

  const cancelar = async () => {
    try {
      await cancelarCita(id);
      alert("Cita cancelada");
    } catch {
      alert("No se pudo cancelar la cita");
    }
  };

  return (
    <div>
      <h2>Cancelar Cita</h2>
      <input value={id} onChange={e => setId(e.target.value)} placeholder="ID de la cita" />
      <button onClick={cancelar}>Cancelar</button>
    </div>
  );
}
