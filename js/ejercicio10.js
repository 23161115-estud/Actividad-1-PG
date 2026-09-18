document.addEventListener('DOMContentLoaded', () => {
    const inputCelsius = document.getElementById('celsius');
    const inputFahrenheit = document.getElementById('fahrenheit');
    const btnConvertir = document.getElementById('btn-convertir');
    const mensajeError = document.getElementById('mensaje-error');

    function realizarConversion() {
        const valorInput = inputCelsius.value.trim();

        if (valorInput === '') {
            mensajeError.textContent = 'Por favor, ingresa un valor en grados Celsius.';
            inputFahrenheit.value = '';
            inputCelsius.focus();
            return;
        }

        const celsius = Number(valorInput);
        if (isNaN(celsius)) {
            mensajeError.textContent = 'El valor ingresado debe ser numérico.';
            inputFahrenheit.value = '';
            return;
        }

        mensajeError.textContent = '';

        const fahrenheit = (celsius * 9 / 5) + 32;

        const resultadoFormateado = Number.isInteger(fahrenheit) 
            ? `${fahrenheit}°F` 
            : `${fahrenheit.toFixed(2)}°F`;

        inputFahrenheit.value = resultadoFormateado;
    }

    btnConvertir.addEventListener('click', realizarConversion);

    inputCelsius.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            realizarConversion();
        }
    });
});
