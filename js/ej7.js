function tablaMultiplicar(numero) {

    for (let i = 1; i <= 10; i++) {
        document.write(numero + " x " + i + " = " + (numero * i) + "<br>");
    }

}

let num = parseInt(prompt("Ingrese un número:"));

tablaMultiplicar(num);