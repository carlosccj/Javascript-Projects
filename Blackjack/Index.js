import player from "./player"

const blackjack = 21
const lowestValue = 1
const highestValue = 13

let isAlive = false
let isBlackjack = false
let cardsPlayed = []
let sum = 0
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

function startGame() {
    playerEl.textContent = player.getName() + ": $" + player.getChips()
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cardsPlayed.push(firstCard, secondCard)
    sum = firstCard + secondCard
    renderGame()
}

function showCards() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cardsPlayed.length; i++) {
        cardsEl.textContent += " " + cardsPlayed[i]
    }
    sumEl.textContent += " | " + sum
}

function renderGame() {
    showCards()
    if (sum < blackjack) {
        message = "Do you want to draw a new card?"
    } else if (sum === blackjack) {
        message = "You have got Blackjack!"
        isBlackjack = true
    } else {
        message = "You're out of luck!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive && !isBlackjack) {
        let card = getRandomCard()
        cardsPlayed.push(card)
        sum += card;
        renderGame()
    }
}

function getRandomCard() {
    let result = Math.floor(Math.random() * (highestValue - lowestValue + 1) + lowestValue)
    if (result > 10) {
        result = 10
    }
    return result
}