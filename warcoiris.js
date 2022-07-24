

const productos = JSON.parse(localStorage.getItem("Productos"))

console.log(productos)

const cantidad = JSON.parse(localStorage.getItem("Cantidad"))

console.log(cantidad)

const contadorCarrito = document.getElementById("contadorCarritoAI")

contadorCarrito.innerText = cantidad

//filtro-buscador BARRA MENU

const formulario = document.querySelector("#buscador-formulario")

const resultado = document.querySelector("#resultado")

let productosprueba  = [
    {nombre:"TIENDA MUMA!", href: "../pages/productos.html"},
    {nombre:"ARMÁ TU COMBO", href: "../pages/p-combos.html"},
    {nombre:"ARCOIRIS WALDORF", href: "../pages/p-arcoiris.html"},
    {nombre:"BABITAS", href:"../pages/p-babitas.html"},
    {nombre:"CONEJITOS DE APEGO", href: "../pages/p-conejos.html"},
    {nombre:"CUBOS SENSORIALES", href: "../pages/p-cubos.html"},
    {nombre:"MEMOTEST", href:"../pages/p-memotest.html"},
    {nombre:"MINI LIBRITO SOFT", href: "../pages/p-librito.html"},
    {nombre:"MORDILLOS", href: "../pages/p-mordillo.html"},
    {nombre:"PELOTAS MONTESSORI", href:"../pages/p-pelota.html"},
    {nombre:"PIZARRÓN MUMA", href: "../pages/p-pizarron.html"},
    {nombre:"PORTACHUPETES", href: "../pages/p-portachu.html"},
    {nombre:"VALIJITA-ROMPECABEZAS", href:"../pages/p-rompecabezas.html"}

]



const filtrar = () =>{
    resultado.innerHTML = ""

    const texto = formulario.value.toLowerCase()

    for(let producto of productosprueba){
        let nombre = producto.nombre.toLowerCase()

        if(nombre.indexOf(texto) !== -1){

            const div = document.createElement("li")
            div.classList.add("menu-desplegable")

            resultado.innerHTML += `
            <li><a class="dropdown-item h3" href=${producto.href}> ${producto.nombre} </a></li>
            `

        }
        else if (resultado.innerHTML === "") {
            resultado.innerHTML += `
         <li> <a class="dropdown-item h3"> Ups! No tenemos ese producto </a> </li>
         `

        }

    }

   
}


formulario.addEventListener("keyup", filtrar)

filtrar()















// const lista = document.getElementById("productos-wa")

// fetch ("../tienda.json")
//     .then((res) => res.json())
//     .then((data) => {

//         console.log(data)

//         data.forEach(item => {
//             const div = document.createElement("div")
//             div.innerHTML = `
//             <div class="elementos-productos">
//                 <div>
//                 <img src=${item.img} class="img-fluid" alt="arcoiris" style="border: 3px solid #78A1A6"> 
//                 <h2 class="grid-prod-b1-descripcion"> <br> ${item.nombre} <br> </h2> 
//                 <h3 class="grid-prod-b1-descripcion"> PRECIO: $ ${item.precio}</h3> 
//                 <div class="justify-content-center">
//                     <button onclick="agregarAlCarrito(${item.id})" id="tostyAgregado" class="btn-ghost btn boton-agregar"> LO QUIERO! </button>   
//                 </div>
//                 </div>                        

//             </div>

//         `

//         lista.append(div)
            
//         });
//     })



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

















