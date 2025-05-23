import React, { useEffect, useState } from 'react';
import { obtenerEspecialidades } from '../api/especialidadApi';

export default function EspecialidadesPage() {
  const [especialidades, setEspecialidades] = useState([]);

  useEffect(() => {
    obtenerEspecialidades().then(setEspecialidades).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Especialidades Médicas</h2>
      <ul>
        {especialidades.map((esp, index) => (
          <li key={index}>{esp}</li>
        ))}
      </ul>
    </div>
  );
}
