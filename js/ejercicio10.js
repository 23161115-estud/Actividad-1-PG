document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item-ejercicio');
    const tituloEl = document.getElementById('titulo-ejercicio');
    const subtituloEl = document.getElementById('subtitulo-ejercicio');
    const descripcionEl = document.getElementById('descripcion-ejercicio');

    // Valores por defecto
    const tituloDefault = "SELECCIONA";
    const subtituloDefault = "UN EJERCICIO";
    const descDefault = "PASA EL CURSOR SOBRE UNA OPCIÓN PARA VER SU DESCRIPCIÓN.";

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const titulo = item.getAttribute('data-titulo');
            const sub = item.getAttribute('data-sub');
            const desc = item.getAttribute('data-desc');

            tituloEl.textContent = titulo;
            subtituloEl.textContent = sub;
            descripcionEl.textContent = desc;
        });

        item.addEventListener('mouseleave', () => {
            tituloEl.textContent = tituloDefault;
            subtituloEl.textContent = subtituloDefault;
            descripcionEl.textContent = descDefault;
        });
    });
});