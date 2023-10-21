// includeHTML();

// function loadContentAndAddEvent() {
  // let seleccionar;
  // seleccionar = /* document.querySelector('.m_select'); */ document.getElementById('m_select');
  // document.querySelector('.m_select');
//  document.addEventListener("DOMContentLoaded", function() {

//   document.getElementById('m_select').addEventListener('click', () => {
   
//     console.log("mostrar");
//       document.querySelector('.sel').classList.toggle('show');
//       document.querySelector('.m_select').classList.toggle('m');
//   });
//  });
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




// document.addEventListener("DOMContentLoaded", function() {
//   const selectElement = document.getElementById('m_select');
//   const selElement = document.querySelector('.sel');
//   const mSelectElement = document.querySelector('.m_select');

//   if (selectElement && selElement && mSelectElement) {
//     selectElement.addEventListener('click', () => {
//       console.log("mostrar");
//       selElement.classList.toggle('show');
//       mSelectElement.classList.toggle('m');
      
//       // Guardar el estado en localStorage
//       localStorage.setItem('isDropdownShown', selElement.classList.contains('show'));
//     });
//   }
// });



// document.addEventListener("DOMContentLoaded", function() {
//   const selectElement = document.getElementById('m_select');
//   const selElement = document.querySelector('.sel');
//   const mSelectElement = document.querySelector('.m_select');

//   // Recuperar el estado guardado en localStorage
//   const isShown = localStorage.getItem('isDropdownShown') === 'true';

//   // Mostrar u ocultar el dropdown según el estado guardado en localStorage
//   if (isShown) {
//     selElement.classList.add('show');
//     mSelectElement.classList.add('m');
//   }

//   // Agregar un listener para mostrar/ocultar el dropdown
//   selectElement.addEventListener('click', () => {
//     console.log("mostrar");
//     selElement.classList.toggle('show');
//     mSelectElement.classList.toggle('m');

//     // Guardar el estado en localStorage
//     localStorage.setItem('isDropdownShown', selElement.classList.contains('show'));
//   });
// });




//  }
// loadContentAndAddEvent();


document.addEventListener("DOMContentLoaded", function() {
// Verificar si el elemento con clase 'sel' existe en el DOM

const selElement = document.querySelector('.sel');
if (selElement) {
  console.log("El elemento con clase 'sel' existe en el DOM");
} else {
  console.log("El elemento con clase 'sel' NO existe en el DOM");
}

// Verificar si el elemento con clase 'm' existe en el DOM
const mElement = document.querySelector('.m_select');
if (mElement) {
  console.log("El elemento con clase 'm_select' existe en el DOM");
} else {
  console.log("El elemento con clase 'm_select' NO existe en el DOM");
}

});


// document.write('<script src="js/include-html.js defer"></script>');


















// let sel = document.getElementById('sel'),
//     caja = document.getElementById('caja');

// sel.addEventListener('click', function () {
//   caja.classList.toggle('mostrar');
// }, false);

// Obtener los elementos por su id

// window.onload=function(){

//   var m_select = document.getElementById("m_select");
//   var sel = document.getElementById("sel");
//   // var m_sel = document.getElementById("sel");
  
//    // iniciar el valor del display siempre en none
//   var display = 0;
 
//   // Definir una función que cambie el display del ul
//  function toggleSel() {
 
//    // Cambiar el valor según el caso
//    if (display == 0) {
//     sel.style.display = "block";
//     sel.style.transition = 'all 0.1s ease-out 0.1s'
//     m_select.classList.toggle('m');
//     display = 1;
//    } else {
//      sel.style.display = "none";
//      sel.style.transition = 'all 0.1s ease-out 0.1s'
//      m_select.classList.toggle('m');
//      display = 0;

//    }
//  }
 
//  // Agregar un listener al evento de clic del div
//  m_select.addEventListener("click", toggleSel);
// }

// document.querySelector('.m_select').addEventListener('click', () => {
//   document.querySelector('.sel').classList.toggle('show');
//   });


// Definir una función para cargar contenido dinámico y agregar eventos después de que se cargue.
// function loadContentAndAddEvent() {
     // Cargar contenido dinámico
// document.querySelector('.m_select').addEventListener('click', () => {
//   document.querySelector('.sel').classList.toggle('show');
//   });
    // Agregar un evento después de cargar el contenido
    // var m_select = document.getElementById("m_select");
    // var sel = document.getElementById("sel");
    // console.log(sel);
    // if (m_select && sel) { // Verificar que los elementos existan
    //   console.log("bbbbbb");  
    //   var display = 0;

    //     function toggleSel() {
          
    //         if (display == 0) {
              
    //             sel.style.display = "block";
    //             sel.style.transition = 'all 0.1s ease-out 0.1s'
    //             m_select.classList.toggle('m');
    //             display = 1;
    //         } else {
    //             sel.style.display = "none";
    //             sel.style.transition = 'all 0.1s ease-out 0.1s'
    //             m_select.classList.toggle('m');
    //             display = 0;
    //         }
    //     }

    //     m_select.addEventListener("click", toggleSel);
    // }
// }

// Llamar a la función para cargar contenido y agregar eventos después de cargar.
// loadContentAndAddEvent();



// // Definir una función para cargar contenido dinámico y agregar eventos después de que se cargue.
// function loadContentAndAddEvent() {
//     // Agregar un evento después de cargar el contenido
//     var m_select = document.getElementById("m_select");
//     var sel = document.getElementById("sel");

//     if (m_select && sel) { // Verificar que los elementos existan
//         var display = 0;

//         function toggleSel() {
//             if (display == 0) {
//                 sel.style.display = "block";
//                 sel.style.transition = 'all 0.1s ease-out 0.1s'
//                 m_select.classList.toggle('m');
//                 display = 1;
//             } else {
//                 sel.style.display = "none";
//                 sel.style.transition = 'all 0.1s ease-out 0.1s'
//                 m_select.classList.toggle('m');
//                 display = 0;
//             }
//         }

//         m_select.addEventListener("click", toggleSel);
//     }
// }

// // Llamar a la función para cargar contenido y agregar eventos después de cargar.
// includeHTML(function() {
//     loadContentAndAddEvent();
// });
