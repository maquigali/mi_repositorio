
const productosContainer = document.querySelector("#contenedor-productos")

const carrito = []

const carritoContenedor = document.querySelector("#carrito-contenedor")

const contadorCarrito = document.querySelector("#contadorCarrito")

const precioTotal = document.querySelector("#precio-total")

const modalContainer = document.querySelector("#modal-container")
const openModal = document.querySelector("#open-modal")
const closeModal = document.querySelector("#close-modal")

openModal.addEventListener("click", () => {
    modalContainer.classList.add("modal-container-visible")

})

closeModal.addEventListener("click", () => {
    modalContainer.classList.remove("modal-container-visible")
})

stockProductos.forEach((item) => {
    console.log(item)
    const div = document.createElement("div")
    div.classList.add("producto")

    div.innerHTML = `
                    
                <div class="modelos-arcoiris col-sm-12 col-md-6 col-lg-6">
                    <div class="row g-0 fotos-p-padding" style="border: 3px solid #78A1A6">
                        <img src=${item.img}  class="img-fluid w-100" alt="arcoiris"> 
                    </div>
                    

                    <h2 class="grid-prod-b1-descripcion"> <br> ${item.nombre} <br> </h2> 
                    <h3 class="grid-prod-b1-descripcion"> PRECIO: $ ${item.precio}</h3> 
                    <div class="d-flex justify-content-center div-boton-vermodelos">
                        <button onclick="agregarAlCarrito(${item.id})" class="btn-ghost btn boton-agregar"> HACÉ TU PEDIDO </button>
                    </div>


                </div>


                    `

    


    productosContainer.append(div)

})



//fx carrito

const agregarAlCarrito = (id) => {
    const item = stockProductos.find ( (prod) => prod.id === id )
    carrito.push(item)

    console.log(carrito)
    renderCarrito()
    renderCantidad()
    renderTotal()

}

//const removerDelCarrito = (id) => {
    //const item = carrito.find((producto) => producto.id === id)
    //console.log(item)
//}

const renderCarrito = () => {
    carritoContenedor.innerHTML = ""

    carrito.forEach((item) => {

        const div = document.createElement("div")

        div.classList.add("productosEnCarrito")

        div.innerHTML = `
                            <div class="productosEnCarrito">
                                <p>${item.nombre}</p>
                                <p>Precio: $${item.precio}</p>
                                
                            </div>
      `
      carritoContenedor.append(div)



    })

}

const renderCantidad = () => {
    contadorCarrito.innerText = carrito.length
}

const renderTotal = () => {
    let total = 0
    carrito.forEach((producto) => {
        total += producto.precio

    
        })

        precioTotal.innerText = total

}