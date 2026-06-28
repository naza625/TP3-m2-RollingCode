
let ciudades = [];

while (true) {
    let ciudad = prompt("Ingrese una ciudad (Cancelar para terminar):");

    if (ciudad == null) {
        break;
    }

    ciudades.push(ciudad);
}

document.write("<p>El arreglo de ciudades tiene " + ciudades.length + " elementos</p>");

document.write("<ul>");
document.write("<li>Elemento 1er posición: " + ciudades[0] + "</li>");
document.write("<li>Elemento 3er posición: " + ciudades[2] + "</li>");
document.write("<li>Elemento última posición: " + ciudades[ciudades.length - 1] + "</li>");
document.write("</ul>");

ciudades.push("París");

document.write("<p>Elemento última posición: " + ciudades[ciudades.length - 1] + "</p>");

// Mostrar la segunda ciudad
document.write("<p>Elemento segunda posición: " + ciudades[1] + "</p>");

// Reemplazar la segunda ciudad por Barcelona
ciudades[1] = "Barcelona";

// Mostrar el arreglo final
document.write("<h1>Arreglo de ciudades</h1>");
document.write("<ul>");

for (let i = 0; i < ciudades.length; i++) {
    document.write("<li>Elemento: " + ciudades[i] + "</li>");
}

document.write("</ul>");