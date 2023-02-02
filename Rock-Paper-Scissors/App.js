
const userChoice = document.getElementById("user-choice")
const computerChoice = document.getElementById("computer-choice")
const result = document.getElementById("result")

let user = 0
let computer = 0

function calculateResult(user) {
    generateComputerChoice()
    if (user == computer) {
        result.textContent = " Draw!"
    } else if (user == 0) {
        if (computer == 1) result.textContent = " Computer Wins!"
        else result.textContent = " You Win!"
    } else if (user == 1) {
        if (computer == 2) result.textContent = " Computer Wins!"
        else result.textContent = " You Win!"
    } else if (user == 2) {
        if (computer == 0) result.textContent = " Computer Wins!"
        else result.textContent = " You Win!"
    }
}

function clickRock() {
    userChoice.textContent = " Rock"
    user = 0
    calculateResult(user)
}

function clickPaper() {
    userChoice.textContent = " Paper"
    user = 1
    calculateResult(user)
}

function clickScissors() {
    userChoice.textContent = " Scissors"
    user = 2
    calculateResult(user)
}

function generateComputerChoice() {
    computer = Math.floor(Math.random() * (2 - 0 + 1) + 0)
    if (computer == 0) computerChoice.textContent = " Rock"
    else if (computer == 1) computerChoice.textContent = " Paper"
    else computerChoice.textContent = " Scissors"
}