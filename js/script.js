// let sel = document.getElementById('sel'),
//     caja = document.getElementById('caja');

// sel.addEventListener('click', function () {
//   caja.classList.toggle('mostrar');
// }, false);

// Obtener los elementos por su id

window.onload=function(){
  var m_select = document.getElementById("m_select");
 var sel = document.getElementById("sel");
 
 // Definir una función que cambie el display del ul
 function toggleSel() {
   // Obtener el valor actual del display
   var display = sel.style.display;
   // Cambiar el valor según el caso
   if (display == "none") {
      sel.style.display = "block";
     sel.style.transition = 'all 0.1s ease-out 0.1s'
   } else {
     sel.style.display = "none";
     sel.style.transition = 'all 0.1s ease-out 0.1s'
   }
 }
 
 // Agregar un listener al evento de clic del div
 m_select.addEventListener("click", toggleSel);}