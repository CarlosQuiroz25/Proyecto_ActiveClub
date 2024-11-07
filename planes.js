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

