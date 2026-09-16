document.addEventListener('DOMContentLoaded', () => {
    const inputNumeros = document.getElementById('numeros');
    const inputMayor = document.getElementById('mayor');
    const inputMenor = document.getElementById('menor');
    const inputPromedio = document.getElementById('promedio');
    const btnCalcular = document.getElementById('btn-calcular');
    const mensajeError = document.getElementById('mensaje-error');
    function limpiarResultados() {
        inputMayor.value = '';
        inputMenor.value = '';
        inputPromedio.value = '';
    }

    function realizarCalculo() {
        const valorInput = inputNumeros.value.trim();

        if (valorInput === '') {
            mensajeError.textContent = 'Por favor, ingresa al menos un número.';
            limpiarResultados();
            inputNumeros.focus();
            return;
        }

        const partes = valorInput.split(',').map(parte => parte.trim());

        const numeros = partes.map(Number);

        const hayValorInvalido = numeros.some(numero => isNaN(numero)) || partes.some(parte => parte === '');
        if (hayValorInvalido) {
            mensajeError.textContent = 'Ingresa solo números válidos separados por comas.';
            limpiarResultados();
            return;
        }

        mensajeError.textContent = '';

        const mayor = Math.max(...numeros);
        const menor = Math.min(...numeros);

        const suma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
        const promedio = suma / numeros.length;

        inputMayor.value = mayor;
        inputMenor.value = menor;
        inputPromedio.value = Number.isInteger(promedio) ? promedio : promedio.toFixed(2);
    }

    btnCalcular.addEventListener('click', realizarCalculo);

    inputNumeros.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            realizarCalculo();
        }
    });
});
