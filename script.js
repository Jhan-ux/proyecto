const boton = document.getElementById('boton');
const mensaje = document.getElementById('mensaje');

boton.addEventListener('click', function () {
  mensaje.textContent = 'Hola, JavaScript esta funcionando.';
});
