
let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let nombre = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let mensaje = document.getElementById('message').value;

  if (nombre === '' || email === '' || mensaje === '') {
    alert('Por favor, complete todos los campos');
    return;
  } 

  alert('Gracias por enviar tu mensaje');

  console.log({ nombre, email, mensaje });

  form.reset();
});

document.getElementById('form').scrollIntoView({ behavior: 'smooth' });