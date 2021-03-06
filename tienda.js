

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


const formulario = document.querySelector("#buscador-formulario")
const botonBuscador = document.querySelector("#boton-buscador")

//filtro-buscador

const productosprueba  = [
    {nombre: "Pelotas Montessri", Valor: 1500},
    {nombre: "Cubo Sensorial", Valor: 1500},
    {nombre: "Memotest", Valor: 1500},


]

const resultado = document.querySelector("#resultado")

const filtrar = () => {
    resultado.innerHTML = "";

    const texto = formulario.value.toLowerCase();

    for(let producto of productosprueba){
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <li>${productosprueba.nombre} - Valor ${productosprueba.valor}</li>`

        }

    }

    if(resultado.innerHTML === ""){
        resultado.innerHTML += `
        <li>PRODCUTO NO ENCONTRADO </li>
        `
    }
}

botonBuscador.addEventListener("click", filtrar)

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
