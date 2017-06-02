/*
 * Archivo principal de JS
 */

function ventanaModal (){
	var proyectos = Array.from(document.getElementsByClassName("col-4 galeria"));//se llaman todas las clases que contienen foto y titulo
    var modalPort = document.getElementById("ventana-modal");//se llama al div principal que contiene el modal oculto
    var modalMostrar, cerrar;/*variables a usar para el evento - modalMostrar mostrara el div oculto con la imagen
    a pantalla completa - cerrar contiene la clase que oculta el modal - equis es la imagen con el evento que oculta*/

    proyectos.forEach(function(foto){//se recorre cada elemento clase  en el html, o sea cada imagen y su texto

    	foto.addEventListener("click", function(){//a cada clase encontrada le va a agregar el evento click

    	modalPort.innerHTML="";//indica que el id esta vacio

    	modalMostrar= document.createElement("div");//crea un div nuevo
    	modalMostrar.classList.add("foto-modal");//se agrega la clase 
    	modalMostrar.innerHTML= foto.innerHTML;//el contenido de cada clase se imprime dentro del nuevo div

    	modalPort.appendChild(modalMostrar);//se coloca nuevo div 
    	modalPort.classList.remove("hide");//se le quita la clase que lo oculta 

    	cerrar = document.createElement("span");//crea un span
    	cerrar.setAttribute("class", "cerrarX");//se le asigna una clase
    	crearX = document.createTextNode("X");//se crea nodo de texto que tendra la X
    	cerrar.appendChild(crearX);//se coloca la X dentro del span
    	modalMostrar.appendChild(cerrar);//se coloca el span junto con la foto


    	cerrar.addEventListener("click",function(){
    			modalPort.classList.add("hide");
    			mostrar.classList.remove("hide");
});
    	});

    });
}
ventanaModal();
