document.addEventListener('DOMContentLoaded', () => {
    const inputPesos = document.getElementById('pesos');
    const inputDolares = document.getElementById('dolares');
    const btnConvertir = document.getElementById('btn-convertir');
    const mensajeError = document.getElementById('mensaje-error');

    const TASA_DE_CAMBIO = 0.055;

    function realizarConversion() {
        const valorInput = inputPesos.value.trim();

        if (valorInput === '') {
            mensajeError.textContent = 'Por favor, ingresa una cantidad en pesos mexicanos.';
            inputDolares.value = '';
            inputPesos.focus();
            return;
        }

        const pesos = Number(valorInput);
        if (isNaN(pesos)) {
            mensajeError.textContent = 'El valor ingresado debe ser numérico.';
            inputDolares.value = '';
            return;
        }

        if (pesos <= 0) {
            mensajeError.textContent = 'El valor ingresado debe ser un número positivo.';
            inputDolares.value = '';
            return;
        }

        mensajeError.textContent = '';

        const dolares = pesos * TASA_DE_CAMBIO;

        inputDolares.value = `${dolares.toFixed(2)} USD`;
    }

    btnConvertir.addEventListener('click', realizarConversion);

    inputPesos.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            realizarConversion();
        }
    });
});
