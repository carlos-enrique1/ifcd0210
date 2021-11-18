
const elemTareas = document.getElementById("tareas");

const formulario = document.getElementById("formulario_tareas");

var tareas = ["Aspirar al perro"];

var tareasHechas = [];


function mostrarTareas() {

   var s = "";

   var x = "";

   for (let i = 0; i < tareas.length; i++) {

      if (tareasHechas[i]) {

         x = "checked";
         
      }

         s += "<li>" + "<input type='checkbox' " + x + " onchange='marcarTareas(" + i + ")'>" + tareas[i] + "</li>";

         }

   elemTareas.innerHTML = s;


}


function añadirTareas() {

   let tarea = formulario.tareas.value;

   tareas.push(tarea);

   mostrarTareas();

   formulario.reset();

   guardarDatos();

   return false;

}

function marcarTareas(i) {
   tareas[i] = !tareas[i];

   guardarDatos();
}

function guardarDatos() {
   localStorage.setItem("tareas", JSON.stringify(tareas));
   localStorage.setItem("tareasHechas", JSON.stringify(tareasHechas));

}

function cargarDatos() {

   tareas = JSON.parse(localStorage.getItem("tareas"));

   tareasHechas = JSON.parse(localStorage.getItem("tareasHechas"));

}

function pendientes(x,i)

{ 
    return !tareasHechas[i];
 }

function borrarTareasHechas()

{
   tareas=tareas.filter(pendientes);
   tareasHechas=[];
   guardarDatos();
   mostrarTareas();

}

cargarDatos();

mostrarTareas();
