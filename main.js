// Vincular inputs
let inpName = document.getElementById("inputName");
let inpBook = document.getElementById("inputBook");
let inpPizza = document.getElementById("inputPizza");

// Vincular botón-1
let boton = document.getElementById("boton-1");

//Vincular etiquetas
let mostName =  document.getElementById("mostrarName");
let mostBook = document.getElementById("mostrarBook");
let mostPizza = document.getElementById("mostrarPizza");
let imagen = document.getElementById("imagen");

//Código principal

//Función mostrar
 const mostrar = () => {
     mostName.innerHTML = inpName.value;
     mostBook.innerHTML = inpBook.value;
     if(inpPizza.value === "si"){
        mostPizza.innerHTML = ":("
     } else if (inpPizza.value === "no"){
        mostPizza.innerHTML = ":)"
     } else {
        // mostPizza.innerHTML = "??"
        imagen.classList.remove('d-none');
 }
}

//Botón
boton.addEventListener('click', mostrar);