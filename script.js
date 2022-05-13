

class eleccionPelicula {
    constructor (id, nombre){
        this.id = id
        this.nombre = nombre
    }
}
const pelicula1 = new eleccionPelicula (1, "Animales Fantásticos 3")
const pelicula2 = new eleccionPelicula (2, "Morbius")
const pelicula3 = new eleccionPelicula (3, "Batman")
const pelicula4 = new eleccionPelicula (4, "Sonic 2")
const pelicula5 = new eleccionPelicula (5, "La ciudad perdida")
const peliculas = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5]

class candy {
    constructor (nombre, precio, id){
        this.nombre = nombre
        this.precio = precio
        this.id = id
    }
}
const candy1 = new candy("nachos", 670, 1)
const candy2 = new candy("pochoclos", 820, 2)
const candy3 = new candy("panchos", 500, 3)

eleccionCandy = [candy1, candy2, candy3]


let numero
let personas
let usuarioEleccion
let peliculaElegida = []
let acompaniamiento
let precioTotal
const valorEntrada = 870
const montoFinal = []
let peliculaSeleccionada

let formCantidad = document.getElementById('formCantidad')

formCantidad.addEventListener('submit', (event) => {
    event.preventDefault()
    //elección de película
    usuarioEleccion = document.getElementById('idPeliculas').value
    peliculaSeleccionada = peliculas.find(peli=>peli.id == usuarioEleccion)
    peliculaElegida.push(peliculaSeleccionada)
    peliculaElegida.forEach((peliculas) => {
        peliculaElegida = peliculas.nombre})


    //elección de número de acompañantes y cálculo del valor de entradas mediante función.
    personas = document.getElementById('idCantidad').value
    const calcularEntrada = (monto) => monto * valorEntrada
    let resultado = calcularEntrada(personas)
    montoFinal.push(new candy("Entrada", resultado))
    

    //elección de producto del candy.
    acompaniamiento =  document.getElementById('idAcompaniamiento').value
    acompaniamientoSeleccionado = eleccionCandy.find(candy=>candy.id == acompaniamiento)
    montoFinal.push(acompaniamientoSeleccionado)

    precioTotal = montoFinal.reduce ((valPrevio, valActual) => valPrevio + valActual.precio, 0)

    divResultado.innerHTML += `<p>Su pelicula sorteada es ${peliculaElegida} y el monto total de su visita al cine es de ${precioTotal}. ¡Gracias por usar nuestros servicios!</p>`
    formCantidad.reset()
})

