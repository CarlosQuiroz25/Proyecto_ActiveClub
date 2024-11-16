const cardsSub = document.querySelectorAll('.cards-sub');

// Iterar sobre cada tarjeta y agregar un event listener para el evento de clic
cardsSub.forEach(card => {
    card.addEventListener('click', function () {
        collapseAllCards();
        expandCard(card);
    });

    card.addEventListener('dblclick', function () {
        collapseCard(card);
    });
});

function expandCard(card) {
    card.classList.add('expanded');
}

function collapseCard(card) {
    card.classList.remove('expanded');
}

function collapseAllCards() {
    cardsSub.forEach(card => {
        card.classList.remove('expanded');
    });
}


