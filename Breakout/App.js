import Block from './Block.js'
import Ball from './Ball.js'

const gridRows = 8
const gridColumns = 15
const gridLeftMargin = 10
const gridTopMargin = 5

const blockWidth = 65
const blockHeight = 23

const barWidth = 83
const barHeight = 17
const barBottomDistance = 27
const barSpeed = 20

const ballDefaultSize = 15
const ballInitialSpeed = 3 

const container = document.querySelector('.container')
const containerWidth = container.offsetWidth
const containerHeight = container.offsetHeight

const bar = document.createElement('div')
const barStartPosition = (containerWidth / 2) - (barWidth / 2)
let barActualPosition = barStartPosition
let barMiddle = barActualPosition + 34 //502.5 in the start

let blockList = []

function createGrid() {
    let blockXBottomAxis, blockYBottomAxis
    for (let i = 0; i < gridRows; i++) {
        for (let j = 0; j < gridColumns; j++) {
            const block = document.createElement('div')
            block.classList.add('block')
            blockXBottomAxis = j * blockWidth + gridLeftMargin
            blockYBottomAxis = i * blockHeight + gridTopMargin
            block.style.left = blockXBottomAxis + "px"
            block.style.top = blockYBottomAxis + "px" 
            blockList.push[new Block(blockXBottomAxis, blockYBottomAxis, blockWidth, blockHeight)]
            if (i == 0) block.style.backgroundImage = "url(Images/Pink.png)"
            else if (i == 1) block.style.backgroundImage = "url(Images/Red.png)"
            else if (i == 2) block.style.backgroundImage = "url(Images/Orange.png)"
            else if (i == 3) block.style.backgroundImage = "url(Images/Yellow.png)"
            else if (i == 4) block.style.backgroundImage = "url(Images/Green.png)"
            else if (i == 5) block.style.backgroundImage = "url(Images/Blue.png)"
            else if (i == 6) block.style.backgroundImage = "url(Images/Purple.png)"
            else if (i == 7) block.style.backgroundImage = "url(Images/Cyan.png)"
            container.appendChild(block)
        }
    }
    bar.classList.add('bar')
    bar.style.left = barStartPosition + "px"
    container.appendChild(bar)
    document.addEventListener('keydown', moveBar)
}

function createBall (size, ball, ballInitialSpeed) {
    let ballResult = new Ball(size, barMiddle, ballInitialSpeed)
    ball.classList.add('ball')
    ball.style.left = ballResult.xAxis + "px"
    ball.style.bottom = ballResult.yAxis + "px"
    container.appendChild(ball)
    return ballResult
}

function startGame() {
    const ball = document.createElement('div')
    const ballObject = createBall(ballDefaultSize, ball, ballInitialSpeed)
    
    // Working with two distinct references here (left, bottom), need to tweak this a little
    setInterval (() => {
        if (ballObject.xAxis + ballObject.size >= containerWidth || ballObject.xAxis + ballObject.size <= 0) {
            ballObject.speedX = -ballObject.speedX
        }
        if (ballObject.yAxis + ballObject.size >= containerHeight || ballObject.yAxis + ballObject.size <= 20) {
            ballObject.speedY = -ballObject.speedY
        }
        if (ballObject.xAxis <= barActualPosition + barWidth && ballObject.xAxis >= barActualPosition && 
            ballObject.yAxis <= barHeight + barBottomDistance && ballObject.yAxis >= barBottomDistance) {
                ballObject.speedY = -ballObject.speedY
        }
        ballObject.xAxis += ballObject.speedX
        ballObject.yAxis += ballObject.speedY
        ball.style.left = ballObject.xAxis + "px"
        ball.style.bottom = ballObject.yAxis + "px"
    }, 15)
     
}

function moveBar(e) {
    if (e.key === 'ArrowRight' && barActualPosition <= containerWidth - barWidth) {
        if (barActualPosition + barSpeed > containerWidth - barWidth) barActualPosition = containerWidth - barWidth
        else barActualPosition += barSpeed
        bar.style.left = barActualPosition + "px"
    } else if (e.key === 'ArrowLeft' && barActualPosition >= 0) {
        if (barActualPosition - barSpeed < 0) barActualPosition = 0 
        else barActualPosition -= barSpeed
        bar.style.left = barActualPosition + "px"
    }
}


createGrid()
startGame()