const cards = document.querySelectorAll(".card")
let hasFlippedCard = false;
let firstCard, secondCard;
let lockboard = false;

function flipCard() {
    if (lockboard) return;
    if (this===firstCard) return;
    this.classList.add("flip");
    // first click
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    }
    else {
        // second click
        hasFlippedCard = false;
        secondCard = this;

    // les cartes marchent ?
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
    }
    else {
        // not a match
        setTimeout(() => {
             firstCard.classList.remove("flip");
             secondCard.classList.remove("flip");
        },500);
       return;
    };
    secondCard = this;
    checkForMatch();
}}

function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
    }
    else {
        // not a match
        unflipCards();
       
    }
}


function disableCards() {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        resetBoard();
}

function unflipCards() {
    lockboard = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
             secondCard.classList.remove("flip");
             resetBoard();
    },1500 );

    function resetBoard() {
        [hasFlippedCard.lockboard] = [false, false];
        firstCard, secondCard = [null, null];
    }
             

}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random()*20);
        card.style.order = randomPos ;
    });
})();

cards.forEach(card => card.addEventListener("click",flipCard))

