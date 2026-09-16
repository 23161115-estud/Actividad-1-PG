document.addEventListener('DOMContentLoaded', () => {
    const inputEdad = document.getElementById('edad');
    const inputResultado = document.getElementById('resultado');
    const btnVerificar = document.getElementById('btn-verificar');
    const mensajeError = document.getElementById('mensaje-error');

    const EDAD_MINIMA_VOTO = 18;

    function realizarVerificacion() {
        const valorInput = inputEdad.value.trim();

        if (valorInput === '') {
            mensajeError.textContent = 'Por favor, ingresa tu edad.';
            inputResultado.value = '';
            inputEdad.focus();
            return;
        }

        const edad = Number(valorInput);
        if (isNaN(edad)) {
            mensajeError.textContent = 'El valor ingresado debe ser numérico.';
            inputResultado.value = '';
            return;
        }

        if (edad <= 0) {
            mensajeError.textContent = 'El valor ingresado debe ser un número positivo.';
            inputResultado.value = '';
            return;
        }

        mensajeError.textContent = '';

        inputResultado.value = edad >= EDAD_MINIMA_VOTO ? 'Puedes votar' : 'No puedes votar';
    }

    btnVerificar.addEventListener('click', realizarVerificacion);

    inputEdad.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            realizarVerificacion();
        }
    });
});
