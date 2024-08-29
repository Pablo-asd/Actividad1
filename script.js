function agregarTabla(){
    
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;

    let tabla=document.getElementById("table1").getElementsByTagName('tbody')[0];
    

   let fila=tabla.insertRow();
   let celdaNombre= fila.insertCell(0);
   let celdaApellido=fila.insertCell(1);

   celdaNombre.innerHTML=nombre;
   celdaApellido.innerHTML=apellido;
    
}