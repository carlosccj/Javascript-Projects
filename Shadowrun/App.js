
const selectorGridDimensions = 5
const NoSelected = "rgba(169, 169, 169, 0)"
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
            let cellSelected = cnt
            cellsDoc[cellSelected].addEventListener('click', () => changeCell(cellSelected))
            cnt++;
        }
    }
}

function changeCell(cellSelected) {
    let selectedCellCoordinates = []
    let displacedCellCoordinates = []
    const selectedCellRowNumber = Math.floor(cellSelected / selectorGridDimensions)
    const selectedCellColNumber = cellSelected % selectorGridDimensions
    selectedCellCoordinates.push(selectedCellRowNumber, selectedCellColNumber)
    displacedCellCoordinates = changeColor(cellSelected, selectedCellRowNumber, selectedCellColNumber)
}

function changeColor(cellSelected, selectedCellRowNumber, selectedCellColNumber) {
    let result = []
    const displacedCellRowNumber = adjustColumn(selectedCellRowNumber, selectedCellColNumber, cellSelected)
    const displacedCellColNumber = adjustRow(selectedCellRowNumber, selectedCellColNumber, displacedCellRowNumber)
    result.push(displacedCellRowNumber, displacedCellColNumber)
    return result
}

function adjustColumn(selectedCellRowNumber, selectedCellColNumber, cellSelected) {
    let found = false
    let result;
    for (let i = 0; i < rows && !false; i++) {
        if (cellsArray[i][selectedCellColNumber] == true && i != selectedCellRowNumber) {
            found = true
            cellsDoc[cellSelected].style.backgroundColor = selectorPurple
            cellsArray[selectedCellRowNumber][selectedCellColNumber] = true
            cellsDoc[selectorGridDimensions * i + selectedCellColNumber].style.backgroundColor = NoSelected
            cellsArray[i][selectedCellColNumber] = false
            result = i
        }
    }
    return result
}

function adjustRow(selectedCellRowNumber, selectedCellColNumber, displacedCellRowNumber) {
    let found = false
    let result
    for (let j = 0; j < cols && !found; j++) {
        if (cellsArray[selectedCellRowNumber][j] == true && j != selectedCellColNumber) {
            found = true
            cellsDoc[selectorGridDimensions * selectedCellRowNumber + j].style.backgroundColor = NoSelected
            cellsArray[selectedCellRowNumber][j] = false
            cellsDoc[selectorGridDimensions * displacedCellRowNumber + j].style.backgroundColor = selectorPurple
            cellsArray[displacedCellRowNumber][j] = true
            result = j
        }
    }
    return result
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