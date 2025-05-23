const API_BASE = "tercerparcial-cvcfa0g3ewg9awbp.canadacentral-01.azurewebsites.net";

export async function crearCita(cita) {
  const response = await fetch(`${API_BASE}/citas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cita)
  });
  if (!response.ok) {
    throw new Error("Error al crear la cita");
  }
  return response.json();
}

export async function obtenerHistorialPorCorreo(correo) {
  const response = await fetch(`${API_BASE}/citas?correo=${encodeURIComponent(correo)}`);
  if (!response.ok) {
    throw new Error("Error al obtener historial");
  }
  return response.json();
}

export async function cancelarCita(id) {
  const response = await fetch(`${API_BASE}/citas/${id}/cancelar`, {
    method: 'PUT'
  });
  if (!response.ok) {
    throw new Error("Error al cancelar la cita");
  }
  return response.json();
}
