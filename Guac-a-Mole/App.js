
const scoreDoc = document.getElementById('score')
const timeDoc = document.getElementById('time')
const cellsDoc = document.querySelectorAll('.cell')
const moleDoc = document.querySelector('.mole')
const playAgainDoc = document.getElementById('start')

let score = 0
let time = 0
let hitPosition 
let timerId = null
let timerMatch = null

/*
Here, we must call the 'clearInterval()' function inside of the interval itself. 'timerId' and 'timerMatch' are declared as global variables
and are later used to stop the timers in the 'restartGame()' function
*/
function startGame() {
    setGameParameters()
    moveMole()
    timerMatch = setInterval(() => {
        time -= 1
        timeDoc.textContent = time
        if (time <= 0) restartGame() 
    }, 1000)
}

function setGameParameters() {
    time = 30
    timeDoc.textContent = time
    score = 0
    scoreDoc.textContent = score
    playAgainDoc.textContent = "PLAYING..."
}

/*
The global variables 'timerId' and 'timerMatch' are retrieved here and used to stop both timers. They are then setted again to null (their
initial value) to be initiated again once the 'PLAY AGAIN?' button is pressed.
*/
function restartGame() {
    clearInterval(timerId)
    clearInterval(timerMatch)
    timerId = null
    timerMatch = null
    playAgainDoc.textContent = "PLAY AGAIN?"
    cellsDoc.forEach(cell => {
        cell.classList.remove('mole')
    })
}

function moveMole() {
    timerId = setInterval(randomCell, 500)
}

/*
This method is the one called each 500 milliseconds. First it goes over each of the cells of the grid and remove the 'mole' element and then
chooses a random cell to put the mole in it again. For that it has to access the cell's class list and add the mole as a new class. 'hitPosition'
is then setted to that cell's id. WARNING --> The function 'addEventListener()' has a weird syntax.
*/
function randomCell() {
    cellsDoc.forEach(cell => {
        cell.classList.remove('mole')
    })

    let randomCell = cellsDoc[Math.floor(Math.random() * 9)]
    randomCell.classList.add('mole')
    hitPosition = randomCell.id
    cellsDoc.forEach(cell => {
        cell.addEventListener('click', () => scored(cell.id))
    })
}

function scored(id) {
    if (id == hitPosition) {
        score++;
        scoreDoc.textContent = score;
        hitPosition = null
    }   
}



