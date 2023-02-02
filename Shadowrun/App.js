
const selectorGridDimensions = 5
const darkGray = "rgb(169, 169, 169)"
const selectorPurple = "rgba(189, 119, 255, 0.718)"

const cellsDoc = document.querySelectorAll('#selector')
const cellsArray = []
const rows = selectorGridDimensions
const cols = rows

createGrid()

function createGrid() {
    createCellsArray()
    let cnt = 0
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i == j) {
                cellsDoc[cnt].style.backgroundColor = selectorPurple
                cellsArray[i][j] = true
            }
            let noSenseVariable = cnt
            cellsDoc[noSenseVariable].addEventListener('click', () => changeColor(noSenseVariable))
            cnt++;
        }
    }
}

function changeColor(cellSelected) {
    let rowNumber = Math.floor(cellSelected / selectorGridDimensions)
    let colNumber = cellSelected % selectorGridDimensions
    adjustColumn(rowNumber, colNumber, cellSelected)
}

function adjustColumn(rowNumber, colNumber, cellSelected) {
    let found = false
    for (let i = 0; i < rows && !false; i++) {
        if (cellsArray[i][colNumber] == true && i != rowNumber) {
            found = true
            cellsDoc[cellSelected].style.backgroundColor = selectorPurple
            cellsArray[rowNumber][colNumber] = true
            cellsDoc[selectorGridDimensions * i + colNumber].style.backgroundColor = darkGray
            cellsArray[i][colNumber] = false
            adjustRow(rowNumber, colNumber, i)
        }
    }
}

function adjustRow(rowNumber, colNumber, i) {
    let found = false
    for (let j = 0; j < cols && !found; j++) {
        if (cellsArray[rowNumber][j] == true && j != colNumber) {
            found = true
            cellsDoc[selectorGridDimensions * rowNumber + j].style.backgroundColor = darkGray
            cellsArray[rowNumber][j] = false
            cellsDoc[selectorGridDimensions * i + j].style.backgroundColor = selectorPurple
            cellsArray[i][j] = true
        }
    }
}

function createCellsArray() {
    for (let i = 0; i < cols; i++) {
        cellsArray[i] = []
    }
    let numberCells = 0
    for (let i = 0; i < rows && numberCells < rows * cols; i++) {
        for (let j = 0; j < cols && numberCells < rows * cols; j++) {
            cellsArray[i][j] = (false)
            numberCells++;
        }
    }
}