const elemTareas = document.getElementById("tareas");

const formulario = document.getElementById("formulario_tareas");


/* inicializamos el array vacia
*/

var tareas = [];

var tareasHechas = [];

/* esta funcion sirve para mostrar las tareas grabadas
*/

function mostrarTareas() {

   var s = "";
   var x = "";
   
   for (let i = 0; i < tareas.length; i++) {
      
      
      if (tareasHechas[i]) {x = "checked"; }

      s += "<li>" + "<input type='checkbox' " + x + " onchange='marcarTareas(" + i + ")'>" + tareas[i] + "</li>";
    
              
         elemTareas.innerHTML = s;

         }
      }

   function añadirTareas(event) {

         tareas.push(formulario.tarea.value);
         
         mostrarTareas();
         
         formulario.reset();
         
         guardarDatos();
         
            return false;
         
         }   
            
   function guardarDatos() {

      localStorage.setItem("tareas", JSON.stringify(tareas));
      localStorage.setItem("tareasHechas", JSON.stringify(tareasHechas));
         
         }  

   function cargarDatos() {

      tareas = JSON.parse(localStorage.getItem("tareas")) || [];
         
      tareasHechas = JSON.parse(localStorage.getItem("tareasHechas")) || [];
          
         
       }   

/* en esta funcion marcamos las tareas realizadas
/* y las guardamos
*/

function marcarTareas(i) {
   tareas[i] = !tareas[i];

   guardarDatos();

}      

cargarDatos();

mostrarTareas();

