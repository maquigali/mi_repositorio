

const productos = JSON.parse(localStorage.getItem("Productos"))

console.log(productos)

const cantidad = JSON.parse(localStorage.getItem("Cantidad"))

console.log(cantidad)

const contadorCarrito = document.getElementById("contadorCarritoAI")

contadorCarrito.innerText = cantidad




// let nombre = prompt("Ingrese su nombe:")
// console.log("Hola " + nombre + "!")



// //FUNCIONES//
// function listadoProdu () {
//     alert ("Estos son nuestros productos: - rompecabezas  $1500 / - mordillos $500")

// }

// function cantidadMasProducto () {
//     console.log ("Tu compra es de " + cantidad + " " + producto)
// }

// function NoStock () {
//     console.log ("Lo lamento no contamos con tanto stock :( ")
// }

// function ningunProducto () {
//     console.log("Auch, parece que no quieres ningun producto! No importa, te esperamos la proxima.")

// }

// function noExiste () {
//     alert ("Oh no! No tenemos ese producto. Unicamente los que estan en el listado.")

// }
// //

// listadoProdu ()

// let producto = prompt ("Indique producto deseado: ")

// while (producto != "rompecabezas" && producto != "mordillos" && producto != "mordillo"){
//     noExiste ()
//     listadoProdu ()
//     producto = prompt ("Indique producto deseado: ")

// }

// const cantidad = Number (prompt("Ingrese cantidad deseada: "))
// let precioRompecabezas = 1500
// let precioMordillo = 500

// const totalR = precioRompecabezas * cantidad 
// const totalM = precioMordillo * cantidad 

//if//

// if (producto == "rompecabezas") {
   
//     console.log("Perfecto, elegiste llevar " + producto + "!")
    

//     if (cantidad <= 30){

//         cantidadMasProducto ()

//         console.log("El precio de tu pedido es: $" + totalR)
        
//     }

//     else if (cantidad == 0) {
//         ningunProducto ()        
//     }

//     else {
        
//         NoStock ()        

//     }
    

// } 

// else if (producto == "mordillos" || producto == "mordillo") {
//     console.log("Perfecto, elegiste llevar " + producto + "!")

//     if (cantidad <= 50){

//         cantidadMasProducto ()

//         console.log("El precio de tu pedido es: $" + totalM)
        
//     }
    
//     else if (cantidad == 0) {
//         ningunProducto ()        
//     }

//     else {
        
//         NoStock ()        

//     }
    


// }

















