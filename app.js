                  
   const elemTareas = document.getElementById("tareas");

   var tareas = ["Aspirar al perro"];

   function mostrarTareas()

   { var s=""; 

     for (let i =0; i < tareas.length; i++)

     { s+= "<li>"+tareas[i]+"</li>";}

     elemTareas.innerHTML=s;
}

    function añadirTareas()


    function borrarTareas()

   
   mostrarTareas();

   añadirTareas();

   borrarTareas();
