document.addEventListener("DOMContentLoaded", function() {
  $('.countdown').countdown({
    date: '05/14/2022 15:35:00',
    day: 'Dia',
    days: 'Dias',
    hour: 'Hora',
    hours: 'Horas',
    minute: 'Minuto',
    minutes: 'Minutos',
    second: 'Segundo',
    seconds: 'Segundos',
  });
}, false);