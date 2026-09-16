document.addEventListener('DOMContentLoaded', () => {
    const inputKilometros = document.getElementById('kilometros');
    const inputMillas = document.getElementById('millas');
    const btnConvertir = document.getElementById('btn-convertir');
    const mensajeError = document.getElementById('mensaje-error');

    const FACTOR_CONVERSION = 0.621371;

    function realizarConversion() {
        const valorInput = inputKilometros.value.trim();
        if (valorInput === '') {
            mensajeError.textContent = 'Por favor, ingresa una distancia en kilómetros.';
            inputMillas.value = '';
            inputKilometros.focus();
            return;
        }
        const kilometros = Number(valorInput);
        if (isNaN(kilometros)) {
            mensajeError.textContent = 'El valor debe ser numérico.';
            inputMillas.value = '';
            return;
        }
        mensajeError.textContent = '';
        const millas = kilometros * FACTOR_CONVERSION;
        const resultadoFormateado = Number.isInteger(millas)
            ? `${millas} mi`
            : `${millas.toFixed(5)} mi`;

        inputMillas.value = resultadoFormateado;
    }

    btnConvertir.addEventListener('click', realizarConversion);

    inputKilometros.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            realizarConversion();
        }
    });
});