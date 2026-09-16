document.addEventListener('DOMContentLoaded', () => {
    const inputTarea = document.getElementById('tarea');
    const btnAgregar = document.getElementById('btn-agregar');
    const mensajeError = document.getElementById('mensaje-error');
    const listaTareas = document.getElementById('lista-tareas');

    const CLAVE_STORAGE = 'tareas-pendientes'; 
    const manejarTareas = (() => {
        let tareas = obtenerTareasDesdeStorage();

        function obtenerTareasDesdeStorage() {
            const datosGuardados = localStorage.getItem(CLAVE_STORAGE);
            return datosGuardados ? JSON.parse(datosGuardados) : [];
        }

        function guardarEnStorage() {
            localStorage.setItem(CLAVE_STORAGE, JSON.stringify(tareas));
        }

        return {
            agregarTarea(texto) {
                tareas.push({ id: Date.now(), texto });
                guardarEnStorage();
                return tareas;
            },
            eliminarTarea(id) {
                tareas = tareas.filter(tarea => tarea.id !== id);
                guardarEnStorage();
                return tareas;
            },
            obtenerTareas() {
                return tareas;
            }
        };
    })();

    function renderizarTareas() {
        const tareas = manejarTareas.obtenerTareas();
        listaTareas.innerHTML = '';

        if (tareas.length === 0) {
            const li = document.createElement('li');
            li.classList.add('lista-vacia');
            li.textContent = 'No tienes tareas pendientes.';
            listaTareas.appendChild(li);
            return;
        }

        tareas.forEach(tarea => {
            const li = document.createElement('li');
            li.classList.add('item-tarea');

            const span = document.createElement('span');
            span.textContent = tarea.texto;

            const btnEliminar = document.createElement('button');
            btnEliminar.type = 'button';
            btnEliminar.classList.add('btn-eliminar');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.addEventListener('click', () => confirmarEliminacion(tarea.id));

            li.appendChild(span);
            li.appendChild(btnEliminar);
            listaTareas.appendChild(li);
        });
    }

    function confirmarEliminacion(id) {
        Swal.fire({
            icon: 'warning',
            title: '¿Eliminar tarea?',
            text: 'Esta acción no se puede deshacer.',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#E63946',
            cancelButtonColor: '#927dc1'
        }).then(resultado => {
            if (resultado.isConfirmed) {
                manejarTareas.eliminarTarea(id);
                renderizarTareas();
                Swal.fire({
                    icon: 'success',
                    title: 'Tarea eliminada',
                    confirmButtonColor: '#927dc1'
                });
            }
        });
    }

    function agregarNuevaTarea() {
        const texto = inputTarea.value.trim();

        if (texto === '') {
            mensajeError.textContent = 'Por favor, escribe una tarea antes de agregarla.';
            return;
        }

        mensajeError.textContent = '';

        manejarTareas.agregarTarea(texto);
        renderizarTareas();

        inputTarea.value = '';
        inputTarea.focus();
    }

    btnAgregar.addEventListener('click', agregarNuevaTarea);

    inputTarea.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            agregarNuevaTarea();
        }
    });
    renderizarTareas();
});
