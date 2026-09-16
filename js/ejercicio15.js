document.addEventListener('DOMContentLoaded', () => {
    const inputNombre = document.getElementById('nombre');
    const inputCalificacion = document.getElementById('calificacion');
    const btnAgregar = document.getElementById('btn-agregar');
    const btnCalcular = document.getElementById('btn-calcular');
    const mensajeError = document.getElementById('mensaje-error');
    const listaEstudiantes = document.getElementById('lista-estudiantes');
    const inputPromedio = document.getElementById('promedio');
    const inputMejorEstudiante = document.getElementById('mejor-estudiante');
    const inputPeorEstudiante = document.getElementById('peor-estudiante');

    let estudiantes = [];
    function renderizarLista() {
        listaEstudiantes.innerHTML = '';

        if (estudiantes.length === 0) {
            const li = document.createElement('li');
            li.classList.add('lista-vacia');
            li.textContent = 'Aún no hay estudiantes agregados.';
            listaEstudiantes.appendChild(li);
            return;
        }

        estudiantes.forEach(estudiante => {
            const li = document.createElement('li');
            li.textContent = `${estudiante.nombre} — ${estudiante.calificacion}`;
            listaEstudiantes.appendChild(li);
        });
    }

    function limpiarResultados() {
        inputPromedio.value = '';
        inputMejorEstudiante.value = '';
        inputPeorEstudiante.value = '';
    }

    function agregarEstudiante() {
        const nombre = inputNombre.value.trim();
        const valorCalificacion = inputCalificacion.value.trim();

        if (nombre === '' || valorCalificacion === '') {
            mensajeError.textContent = 'Por favor, completa el nombre y la calificación.';
            return;
        }

        const calificacion = Number(valorCalificacion);
        if (isNaN(calificacion)) {
            mensajeError.textContent = 'La calificación debe ser un número válido.';
            return;
        }

        mensajeError.textContent = '';

        estudiantes.push({ nombre, calificacion });

        renderizarLista();

        inputNombre.value = '';
        inputCalificacion.value = '';
        inputNombre.focus();
    }

    function realizarCalculo() {
        if (estudiantes.length === 0) {
            mensajeError.textContent = 'Agrega al menos un estudiante antes de calcular.';
            limpiarResultados();
            return;
        }

        mensajeError.textContent = '';

        const suma = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
        const promedio = suma / estudiantes.length;

        const calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
        const calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

        const mejorEstudiante = estudiantes.find(e => e.calificacion === calificacionMaxima);
        const peorEstudiante = estudiantes.find(e => e.calificacion === calificacionMinima);

        inputPromedio.value = Number.isInteger(promedio) ? promedio : promedio.toFixed(2);
        inputMejorEstudiante.value = `${mejorEstudiante.nombre} (${mejorEstudiante.calificacion})`;
        inputPeorEstudiante.value = `${peorEstudiante.nombre} (${peorEstudiante.calificacion})`;
    }

    btnAgregar.addEventListener('click', agregarEstudiante);
    btnCalcular.addEventListener('click', realizarCalculo);

    inputCalificacion.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            agregarEstudiante();
        }
    });
});
