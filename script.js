let numero
const valorEntrada = 870
const montoFinal = []

class candy {
    constructor (nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}

//mensaje de bienvenida
let bienvenida = "Bienvenido a PelisFan.\nA continuación, le recomendaremos una película al azar que esté en cartelera, luego indíquenos la cantidad de acompañantes y seleccione un producto del candy para que le digamos el monto final de su visita al cine. Gracias!"
const imprimirBienvenida = (mensajeUsuario) => {
    alert(mensajeUsuario)
}
imprimirBienvenida(bienvenida)

//elección de película a través de un do while y switch
do {
    numero = parseFloat(prompt("Ingrese un número del 1 al 5 para una recomendación de pelicula que se encuentre en cartelera"))

    if(numero < 1 || numero > 5 || (isNaN(numero))) {
        alert("Solo números del 1 al 5")
    }

} while (numero < 1 || numero > 5 || (isNaN(numero)))

switch(numero) {
    case 1:
        alert("Su recomendación es Animales Fantasticos 3")
        break
    case 2:
        alert("Su recomendación es Morbius")
        break
    case 3:
        alert("Su recomendación es Batman")
        break
    case 4:
        alert("Su recomendación es Sonic 2")
        break
    case 5:
        alert("Su recomendación es La ciudad perdida")
        break
}

//elección de número de acompañantes y cálculo del valor de entradas mediante función.

let personas = parseFloat(prompt("Ingrese el número de acompañantes con los que irá al cine"))

const calcularEntrada = (monto) => monto * valorEntrada

let resultado = calcularEntrada(personas)

montoFinal.push(new candy("Entrada", resultado))

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

let mensajeFinal = `El monto total de su visita al cine es de ${precioTotal}. ¡Gracias por usar nuestros servicios!`
const imprimirFinal = (mensajeUsuarioFinal) => {
    alert(mensajeUsuarioFinal)
}

imprimirFinal(mensajeFinal)