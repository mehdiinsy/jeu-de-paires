const cards = document.querySelectorAll(".card")

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.toggle("flip");
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
        },1500) 
       
    }
}}

cards.forEach(card => card.addEventListener("click",flipCard))

