
let numero
const valorEntrada = 870

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

let personas = parseFloat(prompt("Ingrese el número de acompañantes con los que irá al cine y le diremos cuánto le saldrá"))

const calcularEntrada = (monto) => monto * valorEntrada

let resultado = calcularEntrada(personas)

if (isNaN(personas) || personas >= 0) {
    alert(resultado)
} else {
    alert("Por favor ingresá números validos")
}
