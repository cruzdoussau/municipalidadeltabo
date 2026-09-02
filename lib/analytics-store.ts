export async function getAnalyticsSummary() {
  return {
    range: "Últimos 30 días",
    totals: [
      { label: "Visitas", value: "42.318", change: "+18%" },
      { label: "Usuarios únicos", value: "24.906", change: "+11%" },
      { label: "Tiempo promedio", value: "2m 46s", change: "+9%" },
      { label: "Tasa de rebote", value: "38%", change: "-6%" },
    ],
    traffic: [
      { label: "Noticias", value: 12840 },
      { label: "Trámites y servicios", value: 9270 },
      { label: "DIDECO", value: 6810 },
      { label: "Portal laboral", value: 4860 },
      { label: "Direcciones", value: 3940 },
    ],
    sources: [
      { label: "Búsqueda orgánica", value: 44 },
      { label: "Redes sociales", value: 27 },
      { label: "Directo", value: 21 },
      { label: "Referidos", value: 8 },
    ],
    devices: [
      { label: "Móvil", value: 68 },
      { label: "Desktop", value: 24 },
      { label: "Tablet", value: 8 },
    ],
    behavior: [
      { label: "Ingresan al sitio", value: 100 },
      { label: "Exploran una noticia", value: 61 },
      { label: "Usan buscador o menú", value: 44 },
      { label: "Abren trámite o formulario", value: 23 },
    ],
  };
}
