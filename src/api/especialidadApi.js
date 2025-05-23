
const API_BASE = "tercerparcial-cvcfa0g3ewg9awbp.canadacentral-01.azurewebsites.net";

export async function obtenerEspecialidades() {
  const response = await fetch(`${API_BASE}/especialidades`);
  if (!response.ok) {
    throw new Error("Error al obtener las especialidades");
  }
  return response.json();
}
