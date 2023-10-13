// let sel = document.getElementById('sel'),
//     caja = document.getElementById('caja');

// sel.addEventListener('click', function () {
//   caja.classList.toggle('mostrar');
// }, false);

// Obtener los elementos por su id

window.onload=function(){

  var m_select = document.getElementById("m_select");
  var sel = document.getElementById("sel");
  // var m_sel = document.getElementById("sel");
  
   // iniciar el valor del display siempre en none
  var display = 0;
 
  // Definir una función que cambie el display del ul
 function toggleSel() {
 
   // Cambiar el valor según el caso
   if (display == 0) {
    sel.style.display = "block";
    sel.style.transition = 'all 0.1s ease-out 0.1s'
    m_select.classList.toggle('m');
    display = 1;
   } else {
     sel.style.display = "none";
     sel.style.transition = 'all 0.1s ease-out 0.1s'
     m_select.classList.toggle('m');
     display = 0;

   }
 }
 
 // Agregar un listener al evento de clic del div
 m_select.addEventListener("click", toggleSel);
}