

let numero

do {
    numero = parseFloat(prompt("Ingrese un número del 1 al 5 para una recomendación de pelicula"))

    if(numero < 1 || numero > 5 || (isNaN(numero))) {
        alert("Solo números del 1 al 5")
    }

} while (numero < 1 || numero > 5 || (isNaN(numero)))

switch(numero) {
    case 1:
        alert("Spiderman")
        break
    case 2:
        alert("Dr. Strange")
        break
    case 3:
        alert("Iron Man")
        break
    case 4:
        alert("Black Widow")
        break
    case 5:
        alert("Thor")
        break
}

