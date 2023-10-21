const selectElement = document.getElementById('m_select');
const selElement = document.querySelector('.sel');
document.addEventListener("DOMContentLoaded", function() {


// Recuperar el estado guardado en localStorage
const isSelVisible = localStorage.getItem('isSelVisible') === 'true';

// Mostrar u ocultar el elemento 'sel' según el estado guardado en localStorage
if (isSelVisible) {
  selElement.classList.add('show');
}

if (selectElement) {
  selectElement.addEventListener('click', () => {
    console.log("mostrar");
    selElement.classList.toggle('show');

    // Guardar el estado en localStorage
    localStorage.setItem('isSelVisible', selElement.classList.contains('show'));
  });
}
});