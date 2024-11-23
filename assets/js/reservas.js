document.getElementById('reservation-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const className = document.getElementById('class-name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
  
    if (className && date && time) {
      alert(`¡Reserva confirmada para la clase de ${className} el ${date} a las ${time}!`);
    } else {
      alert('Por favor, completa todos los campos.');
    }
  });