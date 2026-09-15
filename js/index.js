document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item-ejercicio');
    const titulo = document.getElementById('titulo-ejercicio');
    const subtitulo = document.getElementById('subtitulo-ejercicio');
    const descripcion = document.getElementById('descripcion-ejercicio');

    const tituloOriginal = titulo ? titulo.textContent : 'SELECCIONA';
    const subtituloOriginal = subtitulo ? subtitulo.textContent : 'UN EJERCICIO';
    const descOriginal = descripcion ? descripcion.textContent : 'PASA EL CURSOR SOBRE UNA OPCIÓN PARA VER SU DESCRIPCIÓN.';

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const nuevoTitulo = item.getAttribute('data-titulo');
            const nuevoSub = item.getAttribute('data-sub');
            const nuevaDesc = item.getAttribute('data-desc');

            if (titulo && nuevoTitulo) titulo.textContent = nuevoTitulo;
            if (subtitulo && nuevoSub) subtitulo.textContent = nuevoSub;
            if (descripcion && nuevaDesc) descripcion.textContent = nuevaDesc;
        });

        item.addEventListener('mouseleave', () => {
            if (titulo) titulo.textContent = tituloOriginal;
            if (subtitulo) subtitulo.textContent = subtituloOriginal;
            if (descripcion) descripcion.textContent = descOriginal;
        });
    });
});