

/*Desarrollo Ejercicio*/

const precio = 400000
let  cantidad = 0


/*Casilla Precio*/
precioSpan = document.querySelector(".precio-inicial")
precioSpan.innerHTML = precio

/*Casilla Cantidad*/
cantidadSpan = document.querySelector(".cantidad")
cantidadSpan.innerHTML = cantidad

/*Casilla total a pagar*/
totalSpan = document.querySelector(".valor-total")
totalSpan.innerHTML = precio * cantidad


/*Botones*/
function incrementar() {
    cantidad++
    cantidadSpan.innerHTML = cantidad
    totalfinal()

}

function disminuir() {
    if (cantidad == 0) {
        return cantidad
    }
    cantidadSpan.innerHTML = cantidad--
totalfinal()
}

/*Actualizar total*/
function totalfinal() {
    totalSpan.innerHTML = cantidad * precio

}







