let nombre = prompt("Ingrese su nombe:")
console.log("Hola " + nombre + "!")



//FUNCIONES//
function listadoProdu () {
    alert ("Estos son nuestros productos: - rompecabezas  $1500 / - mordillos $500")

}

function cantidadMasProducto () {
    console.log ("Tu compra es de " + cantidad + " " + producto)
}

function NoStock () {
    console.log ("Lo lamento no contamos con tanto stock :( ")
}

function ningunProducto () {
    console.log("Auch, parece que no quieres ningun producto! No importa, te esperamos la proxima.")

}

function noExiste () {
    alert ("Oh no! No tenemos ese producto. Unicamente los que estan en el listado.")

}
//

listadoProdu ()

let producto = prompt ("Indique producto deseado: ")

while (producto != "rompecabezas" && producto != "mordillos" && producto != "mordillo"){
    noExiste ()
    listadoProdu ()
    producto = prompt ("Indique producto deseado: ")

}

const cantidad = Number (prompt("Ingrese cantidad deseada: "))
let precioRompecabezas = 1500
let precioMordillo = 500

const totalR = precioRompecabezas * cantidad 
const totalM = precioMordillo * cantidad 

//if//

if (producto == "rompecabezas") {
   
    console.log("Perfecto, elegiste llevar " + producto + "!")
    

    if (cantidad <= 30){

        cantidadMasProducto ()

        console.log("El precio de tu pedido es: $" + totalR)
        
    }

    else if (cantidad == 0) {
        ningunProducto ()        
    }

    else {
        
        NoStock ()        

    }
    

} 

else if (producto == "mordillos" || producto == "mordillo") {
    console.log("Perfecto, elegiste llevar " + producto + "!")

    if (cantidad <= 50){

        cantidadMasProducto ()

        console.log("El precio de tu pedido es: $" + totalM)
        
    }
    
    else if (cantidad == 0) {
        ningunProducto ()        
    }

    else {
        
        NoStock ()        

    }
    


}


//OBJ Y ARR


class ProductosMuma {
    constructor (id, nombre, precio){        
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }




}


const productos = [
    new ProductosMuma(1, "Arcoiris Waldorf", 1800),
    new ProductosMuma(2, "Babitas", 500),
    new ProductosMuma(3, "Conejitos de Apego", 900),
    new ProductosMuma(4, "Cubos Sensoriales", 1600),
    new ProductosMuma(5, "Librito Soft", 900),
    new ProductosMuma(6, "Pelotas Montessori", 1800),
    new ProductosMuma(7, "Memotest", 1600),
    new ProductosMuma(8, "Mordillos", 400),
    new ProductosMuma(6, "Pizarron Muma", 1800),
    new ProductosMuma(7, "Portachupetes", 400),
    new ProductosMuma(8, "Rompecabezas", 1800),

]


console.log (productos)

for (const item of productos) {
    console.log(item.nombre)

}








