const precio = 400000;
let  cantidad = 0;


/*Casilla Precio*/
const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

/*Casilla Cantidad*/
const cantidadSpan = document.querySelector(".cantidad");
cantidadSpan.innerHTML = cantidad;

const preciototalSpan = document.querySelector(".valor-total");


/*Botones*/
function incrementar() {
    cantidad = cantidad + 1
    // o cantidad++
    cantidadSpan.innerHTML = cantidad
    preciototalSpan.innerHTML = precio * cantidad;
}

function disminuir() { 
    if (cantidad == 0) return //detiene la ejecucion

    cantidad = cantidad - 1
    //o cantidad--
    cantidadSpan.innerHTML = cantidad
    preciototalSpan.innerHTML = precio * cantidad;
}



