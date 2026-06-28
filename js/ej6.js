function calcularPerimetro(ladoA, ladoB) {
    return 2 * (ladoA + ladoB);
}

let ladoA = parseFloat(prompt("Ingrese el valor del lado A:"));
let ladoB = parseFloat(prompt("Ingrese el valor del lado B:"));

document.write("El perímetro del rectángulo es: " + calcularPerimetro(ladoA, ladoB));
