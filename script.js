function saludoIterativo() {
    var numIteraciones = parseInt(document.getElementById("numIteraciones").value);
    var saludosDiv = document.getElementById("saludos");
    saludosDiv.innerHTML = ""; // Limpiamos el contenido del div antes de mostrar los resultados

    for (var i = 1; i <= numIteraciones; i++) {
        var saludo = prompt("Introduce un saludo (ej. Hola, Adiós, etc) para la iteración " + i + ":");
        var nombre = prompt("Introduce un nombre para la iteración " + i + ":");
        saludosDiv.innerHTML += saludo + " " + nombre + "<br>";
    }
}

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function calcular() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var operacion = document.getElementById("operacion").value;

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpiamos el contenido del div antes de mostrar el resultado

    if (operacion === "+") {
        resultadoDiv.textContent = "Resultado de la suma: " + sumar(numero1, numero2);
    } else if (operacion === "-") {
        resultadoDiv.textContent = "Resultado de la resta: " + restar(numero1, numero2);
    } else {
        resultadoDiv.textContent = "Operación no válida";
    }
}
