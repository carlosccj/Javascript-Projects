
const selectorGridDimensions = 5
const NoSelected = "rgba(169, 169, 169, 0)"
const selectorPurple = "rgba(189, 119, 255, 0.718)"

const cellsDoc = document.querySelectorAll('#selector')
const cellsArray = []
const rows = selectorGridDimensions
const cols = rows

let selectedCellCoordinates = []
let metaPoints = 0

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
    const selectedCellRowNumber = Math.floor(cellSelected / selectorGridDimensions)
    const selectedCellColNumber = cellSelected % selectorGridDimensions
    selectedCellCoordinates.push(selectedCellRowNumber, selectedCellColNumber)
    changeColor(cellSelected, selectedCellRowNumber, selectedCellColNumber)
    adjustMetatype()
    adjustNature()
    adjustNuyen()
    selectedCellCoordinates.length = 0
}

function changeColor(cellSelected, selectedCellRowNumber, selectedCellColNumber) {
    adjustColumn(selectedCellRowNumber, selectedCellColNumber, cellSelected)
}

function adjustColumn(selectedCellRowNumber, selectedCellColNumber, cellSelected) {
    let found = false
    let result
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
    adjustRow(selectedCellRowNumber, selectedCellColNumber, result)
}

function adjustRow(selectedCellRowNumber, selectedCellColNumber, displacedCellRowNumber) {
    let found = false
    for (let j = 0; j < cols && !found; j++) {
        if (cellsArray[selectedCellRowNumber][j] == true && j != selectedCellColNumber) {
            found = true
            cellsDoc[selectorGridDimensions * selectedCellRowNumber + j].style.backgroundColor = NoSelected
            cellsArray[selectedCellRowNumber][j] = false
            cellsDoc[selectorGridDimensions * displacedCellRowNumber + j].style.backgroundColor = selectorPurple
            cellsArray[displacedCellRowNumber][j] = true
        }
    }
}

function adjustMetatype() {
    const metatypeColumn = 0
    const metatypeRow = getRow(metatypeColumn)
    const metatypeCell = selectorGridDimensions * metatypeRow + metatypeColumn
    setMetaPoints(metatypeCell)
    changeMetatypeOption(metatypeRow)
}

function setMetaPoints(metatypeCell) {
    const regex = /\d+/
    let cellText = cellsDoc[metatypeCell].innerHTML
    metaPoints = parseInt(cellText.match(regex))
}

function changeMetatypeOption(metatypeRow) {
    let raceSelectorDoc = document.getElementById('race')
    if ((metatypeRow == 0 || metatypeRow == 1) && raceSelectorDoc.options.length > 3) {
        raceSelectorDoc.remove(4)
        raceSelectorDoc.remove(3)
    } else if ((metatypeRow == 2 || metatypeRow == 3 || metatypeRow == 4) && raceSelectorDoc.options.length < 5) {
        let optionHuman = document.createElement('option')
        optionHuman.text = "Human"
        optionHuman.value = "H"
        let optionElf = document.createElement('option')
        optionElf.text = "Elf"
        optionElf.value = "E"
        raceSelectorDoc.add(optionHuman)
        raceSelectorDoc.add(optionElf)
    }
}

function adjustNature() {

}

function adjustNuyen() {

}

function getRow(metatypeColumn) {
    let found = false
    let row = 0 
    for (let i = 0; row < selectorGridDimensions && !found; i++) {
        if (cellsArray[i][metatypeColumn] == true) {
            row = i
            found = true
        }
    }
    return row
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