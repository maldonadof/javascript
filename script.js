
let numero
const valorEntrada = 870
const montoFinal = []

let bienvenida = "Bienvenido a PelisFan.\nA continuación, le recomendaremos una película al azar que esté en cartelera, luego indíquenos la cantidad de acompañantes y seleccione un producto del candy para que le digamos el monto final de su visita al cine. Gracias!"
const imprimirBienvenida = (mensajeUsuario) => {
    alert(mensajeUsuario)
}
imprimirBienvenida(bienvenida)

do {
    numero = parseFloat(prompt("Ingrese un número del 1 al 5 para una recomendación de pelicula que se encuentre en cartelera"))

    if(numero < 1 || numero > 5 || (isNaN(numero))) {
        alert("Solo números del 1 al 5")
    }

} while (numero < 1 || numero > 5 || (isNaN(numero)))

switch(numero) {
    case 1:
        alert("Animales Fantasticos 3")
        break
    case 2:
        alert("Morbius")
        break
    case 3:
        alert("Batman")
        break
    case 4:
        alert("Sonic 2")
        break
    case 5:
        alert("La ciudad perdida")
        break
}

class candy {
    constructor (nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}

let personas = parseFloat(prompt("Ingrese el número de acompañantes con los que irá al cine"))

const calcularEntrada = (monto) => monto * valorEntrada

let resultado = calcularEntrada(personas)

montoFinal.push(new candy("Entrada", resultado))

let acompaniamiento

do {
    acompaniamiento = parseFloat(prompt("Seleccione 1 para Nachos con queso más bebida, 2 para Pochoclos más bebida y 3 para panchos más bebida"))
    if(numero < 1 || numero > 3 || (isNaN(numero))) {
        alert("Elija solo entre 1 y 3")
    }

} while (numero < 1 || numero > 3 || (isNaN(numero)))

switch(numero) {
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

let acumulador = 0 

for(let productos of montoFinal) {
    acumulador += productos.precio 
}

let mensajeFinal = `El monto total de su visita al cine es de ${acumulador}. ¡Gracias por usar nuestros servicios!`
const imprimirFinal = (mensajeUsuarioFinal) => {
    alert(mensajeUsuarioFinal)
}

imprimirFinal(mensajeFinal)