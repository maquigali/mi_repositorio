

//otros
const productosContainer = document.querySelector("#grid-productos")

const carritoContenedor = document.querySelector("#carrito-contenedor")

const contadorCarrito = document.querySelector("#contadorCarrito")

const btnVaciar = document.querySelector("#vaciarCarrito")


let carrito 
const carritoEnLs = JSON.parse(localStorage.getItem("carrito"))



const precioTotal = document.getElementById("precio-total")

const modalContainer = document.querySelector("#modal-container")
const openModal = document.querySelector("#open-modal")
const closeModal = document.querySelector("#close-modal")

const btnTosty = document.querySelector("#tostyAgregado")




//filtro-buscador
let productosprueba  = [
    {nombre:"VER TODOS", href: "../pages/productos.html"},
    {nombre:"COMBOS", href: "../pages/p-combos.html"},
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


{/* <li><a class="dropdown-item h3" href="../pages/productos.html"> VER TODOS </a></li>
                        <li><a class="dropdown-item h3" href="../pages/p-combos.html"> COMBOS </a></li>
                        <li><a class="dropdown-item h3" href="../pages/p-arcoiris.html"> ARCOIRIS WALDORF </a></li>
                        <li><a class="dropdown-item h3" href="../pages/p-babitas.html"> BABITAS </a></li>
                        <li><a class="dropdown-item h3" href="../pages/p-conejos.html"> CONEJITOS DE APEGO</a></li>
                        <li><a class="dropdown-item h3" href="../pages/p-cubos.html"> CUBOS SENSORIALES </a></li>
                        <li><a class="dropdown-item h3" href="../pages/p-librito.html"> LIBRITO MUMA SOFT </a></li>
                        <li><a class="dropdown-item h3" href="../pages/p-pelota.html"> PELOTAS MONTESSORI </a></li>
                        <li><a class="dropdown-item h3" href="../pages/p-memotest.html"> MEMOTEST </a></li>
                        <li><a class="dropdown-item h3" href="../pages/p-mordillo.html"> MORDILLOS </a></li>
                        <li><a class="dropdown-item h3" href="../pages/p-pizarron.html"> PIZARRÓN MUMA </a></li>
                        <li><a class="dropdown-item h3" href="../pages/p-portachu.html"> PORTACHUPETES </a></li>
                        <li><a class="dropdown-item h3" href="../pages/p-rompecabezas.html"> VALIJITA-ROMPECABEZAS</a></li> */}





const formulario = document.querySelector("#buscador-formulario")

const resultado = document.querySelector("#resultado")

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

    }

    if(resultado.innerHTML === ""){
        resultado.innerHTML += `
        <li> <a class="dropdown-item h3"> Ups! No tenemos ese producto </a> </li>
        `
    }
}


formulario.addEventListener("keyup", filtrar)

filtrar()

//modal
openModal.addEventListener("click", () => {
        modalContainer.classList.add("modal-container-visible")

})

closeModal.addEventListener("click", () => {
    modalContainer.classList.remove("modal-container-visible")
})

//html
let stockProductos = []

fetch ("../tienda.json")
    .then((res) => res.json())
    .then((data) => {
        stockProductos = data

        data.forEach((item) => {
            console.log(item)
            const div = document.createElement("div")
            div.classList.add("elementos-productos")
        
            div.innerHTML = `
                                <div class="elementos-productos">
                                    <div>
                                        <img src=${item.img} class="img-fluid" alt="arcoiris" style="border: 3px solid #78A1A6"> 
                                        <h2 class="grid-prod-b1-descripcion"> <br> ${item.nombre} <br> </h2> 
                                        <h3 class="grid-prod-b1-descripcion"> PRECIO: $ ${item.precio}</h3> 
                                        <div class="justify-content-center">
                                            <button onclick="agregarAlCarrito(${item.id})" id="tostyAgregado" class="btn-ghost btn boton-agregar"> LO QUIERO! </button>   
                                        </div>
                                    </div>                        
        
                                </div>
        
                            `
        
            
        
        
            productosContainer.append(div)
        
        })

})






//fx carrito

const agregarAlCarrito = (id) => {
    const item = stockProductos.find ( (prod) => prod.id === id )
    carrito.push(item)

    toastyAgregadoCarrito (item.nombre)

    localStorage.setItem("carrito", JSON.stringify(carrito))

    console.log(carrito)
    renderCarrito()
    renderCantidad()
    renderTotal()

}

const removerDelCarrito = (id) => {
    const item = carrito.find((producto) => producto.id === id)
    const indice = carrito.indexOf (item)
    carrito.splice(indice, 1)

    localStorage.setItem("carrito", JSON.stringify(carrito))

    renderCarrito()
    renderCantidad()
    renderTotal()

}

const renderCarrito = () => {
    carritoContenedor.innerHTML = ""

    carrito.forEach((item) => {

        const div = document.createElement("div")

        div.classList.add("productosEnCarrito")

        div.innerHTML = `
                            <div class="productosEnCarrito">
                                <p>${item.nombre}</p>
                                <p>Precio: $${item.precio}</p>
                                <div class="row justify-content-center">
                                    <button onclick= "removerDelCarrito(${item.id})"class="btn btn-ghost boton-eliminar">NO LO QUIERO</button>
                           
                                </div>
                            </div>
      `
      carritoContenedor.append(div)



    })

}

//vaciar carrito

const vaciarCarrito = () => {
    carrito = []

    localStorage.setItem("carrito", JSON.stringify(carrito))

    renderCarrito()
    renderCantidad()
    renderTotal()

}



btnVaciar.addEventListener("click", vaciarCarrito)

//cantidad en carrito

const renderCantidad = () => {
    contadorCarrito.innerText = carrito.length
}

//total $$

const renderTotal = () => {
    let total = 0
    carrito.forEach((producto) => {
        total += producto.precio

    
        })


        precioTotal.innerText = total

}


//carritoLS

if (carritoEnLs) {
    carrito = carritoEnLs

    renderCarrito()
    renderCantidad()
    renderTotal()


} else {
    carrito = []
}

//TOASTY

const toastyAgregadoCarrito = (producto) => {

    Toastify({

        className: "toastyAgregado-style",   
        text: `Agregaste ${producto} al Carrito!`,        
        duration: 3000,   
        gravity: `bottom`,
        position: `right`,   
      
    
    
    }).showToast();
}


//Storage Y JSON

localStorage.setItem("Productos", JSON.stringify(stockProductos))
localStorage.setItem("Cantidad", JSON.stringify(carrito.length))
