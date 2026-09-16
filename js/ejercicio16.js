const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

function calcularOperacion(operacion) {
    var valor1 = document.getElementById("numero1").value;
    var valor2 = document.getElementById("numero2").value;

    if (valor1 === "" || valor2 === "") {
        Swal.fire({
            icon: 'error',
            title: 'Vaya, vaya, vaya...',
            text: 'Por favor, ingresa ambos números.'
        });
        return;
    }

    var numero1 = parseFloat(valor1);
    var numero2 = parseFloat(valor2);

    if (isNaN(numero1) || isNaN(numero2)) {
        Swal.fire({
            icon: 'error',
            title: 'Vaya, vaya, vaya...',
            text: 'Ambos valores deben ser números válidos.'
        });
        return;
    }

    var resultado;
    if (operacion === 'suma') {
        resultado = sumar(numero1, numero2);
    } else if (operacion === 'resta') {
        resultado = restar(numero1, numero2);
    } else if (operacion === 'multiplicacion') {
        resultado = multiplicar(numero1, numero2);
    } else if (operacion === 'division') {
        resultado = dividir(numero1, numero2);
    }
    if (typeof resultado === 'string') {
        Swal.fire({
            icon: 'error',
            title: 'Vaya, vaya, vaya...',
            text: resultado
        });
        document.getElementById("resultado").value = "";
        return;
    }
    document.getElementById("resultado").value = resultado;
}