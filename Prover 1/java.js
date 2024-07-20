function sumarNumeros() {
   
    var n = parseInt(prompt("¿Cuántos números deseas ingresar?"), 10);
    var numeros = [];

    for (var i = 0; i < n; i++) {
        var numero = parseFloat(prompt("Ingresa el número " + (i + 1) + ":"));
        numeros.push(numero);
    }

    var j = parseInt(prompt("¿Cuántos de los primeros números deseas sumar?"), 10);

    if (j > n) {
        alert("El número de elementos a sumar no puede ser mayor que el total de elementos ingresados.");
        return;
    }

    var suma = 0;

    for (var i = 0; i < j; i++) {
        suma += numeros[i];
    }
    alert('La suma de los primeros ' + j + ' números es: ' + suma);
}
window.onload = sumarNumeros;