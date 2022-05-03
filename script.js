
let numero
const valorEntrada = 870
const montoFinal = []

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

let personas = parseFloat(prompt("Ingrese el número de acompañantes con los que irá al cine y le diremos cuánto le saldrá"))

const calcularEntrada = (monto) => monto * valorEntrada

let resultado = calcularEntrada(personas)

if (personas >= 0) {
    alert(resultado)
} else {
    alert("Por favor ingresá números validos")
}

montoFinal.push(new candy("Entrada", resultado))

let acompaniamiento = parseFloat(prompt("Seleccione 1 para Nachos con queso más bebida, 2 para Pochoclos más bebida y 3 para panchos más bebida"))

if (acompaniamiento === 1) {
    montoFinal.push(new candy("nachos", 670))
} if (acompaniamiento === 2) {
    montoFinal.push(new candy("pochoclos", 820))
} if (acompaniamiento === 3) {
    montoFinal.push (new candy("panchos", 500))
    } else {
    alert("Por favor ingresá números validos")
}

for(let productos of montoFinal) {
    acumulador += productos.precio 
}

console.log (montoFinal)