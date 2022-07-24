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