let numero
const valorEntrada = 870
const montoFinal = []

class eleccionPelicula {
    constructor (id, nombre){
        this.id = id
        this.nombre = nombre
    }
}

class candy {
    constructor (nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}
/*
//elección de película

const peliculas = []

let usuarioEleccion = parseFloat(prompt("Ingrese un número del 1 al 5 para una recomendación de pelicula que se encuentre en cartelera"))

const pelicula1 = new eleccionPelicula (1, "Animales Fantásticos 3")
const pelicula2 = new eleccionPelicula (2, "Morbius")
const pelicula3 = new eleccionPelicula (3, "Batman")
const pelicula4 = new eleccionPelicula (4, "Sonic 2")
const pelicula5 = new eleccionPelicula (5, "La ciudad perdida")

if (usuarioEleccion == 1) {
    peliculas.push (pelicula1)
    } if (usuarioEleccion == 2 ){
        peliculas.push (pelicula2)
        } if (usuarioEleccion == 3) {
            peliculas.push (pelicula3)
            } if (usuarioEleccion == 4) {
                peliculas.push (pelicula4)
                } if (usuarioEleccion == 5) {
                    peliculas.push (pelicula5)
                    } 

let peliculaElegida 

peliculas.forEach((peliculas) => {
    peliculaElegida = peliculas.nombre
})
*/

//elección de número de acompañantes y cálculo del valor de entradas mediante función.

let personas
let formCantidad = document.getElementById('formCantidad')

formCantidad.addEventListener('submit', (event) => {
    event.preventDefault()
    personas = document.getElementById('idCantidad').value
    const calcularEntrada = (monto) => monto * valorEntrada
    let resultado = calcularEntrada(personas)
    montoFinal.push(new candy("Entrada", resultado))
    console.log(resultado)
    formCantidad.reset()
})


/*
//elección de producto del candy.

let acompaniamiento

do {
    acompaniamiento = parseFloat(prompt("Seleccione 1 para Nachos con queso más bebida, 2 para Pochoclos más bebida y 3 para panchos más bebida"))
    if(acompaniamiento < 1 || acompaniamiento > 3 || (isNaN(acompaniamiento))) {
        alert("Elija solo entre 1 y 3")
    }

} while (acompaniamiento < 1 || acompaniamiento > 3 || (isNaN(acompaniamiento)))

switch(acompaniamiento) {
    case 1:
        montoFinal.push(new candy("nachos", 670))
        break
    case 2:
        montoFinal.push(new candy("pochoclos", 820))
        break
    case 3:
        montoFinal.push (new candy("panchos", 500))
        break
}

//función para el monto total más mensaje de despedida.

let precioTotal = montoFinal.reduce ((valPrevio, valActual) => valPrevio + valActual.precio, 0)

let mensajeFinal = `Su pelicula sorteada es ${peliculaElegida} y el monto total de su visita al cine es de ${precioTotal}. ¡Gracias por usar nuestros servicios!`
const imprimirFinal = (mensajeUsuarioFinal) => {
    alert(mensajeUsuarioFinal)
}

imprimirFinal(mensajeFinal)*/