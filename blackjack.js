let firstCard = getRandomCard
let secondCard = getRandomCard
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")



function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 1) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    }

}

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "sum " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {

    let Card = getRandomCard
    sum += Card
    cards.push(Card)
    renderGame()
}