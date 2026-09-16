document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('nuevoElemento');
    const botonAgregar = document.getElementById('agregarBtn');
    const lista = document.getElementById('lista');
    const mensajeError = document.getElementById('mensaje-error');

    function agregarElemento() {
        const texto = input.value.trim();

        if (texto === '') {
            mensajeError.textContent = 'Escribe algo para agregar a la lista.';
            return;
        }

        mensajeError.textContent = '';

        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        const textoNodo = document.createTextNode(texto);
        const contenedorTexto = document.createElement('span');
        contenedorTexto.appendChild(textoNodo);
        li.appendChild(contenedorTexto);

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-outline-danger', 'btn-sm');
        botonEliminar.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(botonEliminar);
        lista.appendChild(li);

        input.value = '';
        input.focus();
    }

    botonAgregar.addEventListener('click', agregarElemento);

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            agregarElemento();
        }
    });
});
