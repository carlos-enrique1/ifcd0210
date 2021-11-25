
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

  /* en esta funcion añadimos tareas a las ya grabadas
  /* y las guardamos
  */

  
function añadirTareas() {

tareas.push(formulario.tarea.value);

mostrarTareas();

formulario.reset();

guardarDatos();

   return false;

}

/* en esta funcion marcamos las tareas realizadas
/* y las guardamos
*/

function marcarTareas(i) {
   tareas[i] = !tareas[i];

   guardarDatos();
}

/* en esta funcion guardamos las tareas hechas y las no hechas
/* en el localStorage
*/

function guardarDatos() {
   localStorage.setItem("tareas", JSON.stringify(tareas));
   localStorage.setItem("tareasHechas", JSON.stringify(tareasHechas));

}

/* en esta funcion cargamos las tareas del localStorage para visualizarlos
/* tanto las tareas hechas como las no echas
*/
function cargarDatos() {

   tareas = JSON.parse(localStorage.getItem("tareas")) || [];

   tareasHechas = JSON.parse(localStorage.getItem("tareasHechas")) || [];
 

   }

/* en esta funcion tenemos las tareas pendientes
*/

function pendientes(x,i)

{ 
    return !tareasHechas[i];
 }

 /* en esta funcion borramos las tareas hechas
 /*  e inicializamos a vacio las tareas hechas
 /*  y las guardamos el el locateStorage
 */

function borrarTareasHechas()

{
   tareas=tareas.filter((t,i) => !tareasHechas[i];
   tareasHechas=[];
   mostrarTareas();
   guardarDatos();


}

cargarDatos();

mostrarTareas();
