function actualizarFechaHora() {
    var fechaHoraActual = new Date();
    var fecha = fechaHoraActual.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
    var hora = fechaHoraActual.toLocaleTimeString('es-ES', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    var fechaHoraElemento = document.getElementById('fechaHora');
    fechaHoraElemento.textContent = fecha + ' ' +  hora;
  }
  setInterval(actualizarFechaHora, 1000);
  actualizarFechaHora();