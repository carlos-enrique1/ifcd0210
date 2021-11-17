
const elemTareas = document.getElementById("tareas");

const formulario = document.getElementById("formulario_tareas");

var tareas = ["Aspirar al perro"];

function mostrarTareas() {

   var s = "";

   for (let i = 0; i < tareas.length; i++) {

      s += "<li>" + "<input type='checkbox'></input>" + tareas[i] + "</li>";   }


   elemTareas.innerHTML = s;


}

function añadirTareas() {

   let tarea = formulario_tareas.tareas.value;

   tareas.push(tarea);

   mostrarTareas();

   formulario.reset();

   return false
}

mostrarTareas();





