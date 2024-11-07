
// Menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
navList.classList.toggle('show');
})

let index = 0;

function mostrarImagen() {
    const imagenes = document.querySelector('.imagenes');
    const totalImagenes = document.querySelectorAll('.imagenes img').length;
    const offset = index * -1000; // Ancho de las imágenes
    imagenes.style.transform = `translateX(${offset}px)`;
}

function cambiarImagen(direccion) {
    const totalImagenes = document.querySelectorAll('.imagenes img').length;
    index += direccion;

    if (index < 0) {
        index = totalImagenes - 1;
    } else if (index >= totalImagenes) {
        index = 0;
    }

    mostrarImagen();
}

const cards = document.querySelectorAll('.cards-sub');

// Iterar sobre cada tarjeta y agregar un event listener para el evento de clic
cards.forEach(card => {
    card.addEventListener('click', function () {
        // Colapsar todas las tarjetas primero
        collapseAllCards();
        // Expandir la tarjeta seleccionada
        expandCard(card);
    });

    // Agregar event listener para el evento de doble clic
    card.addEventListener('dblclick', function () {
        collapseCard(card);
    });
});

function expandCard(card) {
    // Agregar la clase "expanded" para cambiar el tamaño de la tarjeta
    card.classList.add('expanded');
}

function collapseCard(card) {
    // Quitar la clase "expanded" para volver al tamaño original
    card.classList.remove('expanded');
}

function collapseAllCards() {
    // Quitar la clase "expanded" de todas las tarjetas
    cards.forEach(card => {
        card.classList.remove('expanded');
    });
}

