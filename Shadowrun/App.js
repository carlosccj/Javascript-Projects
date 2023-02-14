
const selectorGridDimensions = 5
const NoSelected = "rgba(169, 169, 169, 0)"
const selectorPurple = "rgba(189, 119, 255, 0.718)"

const cellsDoc = document.querySelectorAll('#selector')
const cellsArray = []
const rows = selectorGridDimensions
const cols = selectorGridDimensions

let metatype = 'D'
let nature = "MAG"

let selectedCellRowNumber = 0
let selectedCellColNumber = 0
let selectedCellCoordinates = []
let metaPoints = 13
let magicAndResonancePoints = 2
let nuyen = 8000

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
            cellsDoc[cellSelected].addEventListener('click', () => changeCellColor(cellSelected))
            cellsDoc[cellSelected].addEventListener('click', () => adjustCharacter())
            cnt++;
        }
    }
}

function changeCellColor(cellSelected) {
    selectedCellCoordinates.length = 0
    selectedCellRowNumber = Math.floor(cellSelected / selectorGridDimensions)
    selectedCellColNumber = cellSelected % selectorGridDimensions
    selectedCellCoordinates.push(selectedCellRowNumber, selectedCellColNumber)
    const displacedCellRowNumber = adjustColumn(cellSelected)
    adjustRow(displacedCellRowNumber)
}

function adjustCharacter() {
    adjustMetatype()
    adjustNature()
    adjustNuyen()
    
    console.log("Metatype: " + metatype + "\n" + 
    "Metapoints: " + metaPoints + "\n" + 
    "Nature: " + nature + "\n" + 
    "Magic/Resonance: " + magicAndResonancePoints + "\n" + 
    "Nuyen: " + nuyen) 
}

function adjustColumn(cellSelected) {
    let found = false
    let result = 0
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

function adjustRow(displacedCellRowNumber) {
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
    changeMetatypeOptionMenu(metatypeRow)
    setMetatype()
    setMetaPoints(metatypeCell)
}

function changeMetatypeOptionMenu(metatypeRow) {
    let metatypeSelectorDoc = document.getElementById('race')
    if ((metatypeRow == 0 || metatypeRow == 1) && metatypeSelectorDoc.options.length > 3) {
        metatypeSelectorDoc.remove(4)
        metatypeSelectorDoc.remove(3)
    } else if ((metatypeRow == 2 || metatypeRow == 3 || metatypeRow == 4) && metatypeSelectorDoc.options.length < 5) {
        let optionHuman = document.createElement('option')
        optionHuman.text = "Human"
        optionHuman.value = "H"
        let optionElf = document.createElement('option')
        optionElf.text = "Elf"
        optionElf.value = "E"
        metatypeSelectorDoc.add(optionHuman)
        metatypeSelectorDoc.add(optionElf)
    }
}

function setMetatype() {
    const metatypeSelectorDoc = document.getElementById('race')
    metatype = metatypeSelectorDoc.value
}

function setMetaPoints(metatypeCell) {
    const regex = /\d+/
    const cellText = cellsDoc[metatypeCell].innerHTML
    metaPoints = parseInt(cellText.match(regex))
}

function adjustNature() {
    const natureColumn = 2
    const natureRow = getRow(natureColumn)
    const natureCell = selectorGridDimensions * natureRow + natureColumn
    changeNatureOptionMenu(natureRow)
    setNature()
    setMagicAndResonancePoints(natureCell)
}

function changeNatureOptionMenu(natureRow) {
    let natureSelectorDoc = document.getElementById('nature')
    if (natureRow == 4) {
        natureSelectorDoc.remove(4)
        natureSelectorDoc.remove(3)
        natureSelectorDoc.remove(2)
        natureSelectorDoc.remove(1)
        natureSelectorDoc.remove(0)
        let optionMundane = document.createElement('option')
        optionMundane.text = "Mundane"
        optionMundane.value = "MUN"
        natureSelectorDoc.add(optionMundane)
    } else if ((natureRow == 4 || natureRow == 3 || natureRow == 2 || natureRow == 1 || natureRow == 0) 
    && natureSelectorDoc.options.length < 5) {
        natureSelectorDoc.remove(0)
        let optionMagician = document.createElement('option')
        optionMagician.text = "Magician"
        optionMagician.value = "MAG"
        natureSelectorDoc.add(optionMagician)
        let optionAspectedMagician = document.createElement('option')
        optionAspectedMagician.text = "Aspected Magician"
        optionAspectedMagician.value = "AMAG"
        natureSelectorDoc.add(optionAspectedMagician)
        let optionMysticAdept = document.createElement('option')
        optionMysticAdept.text = "Mystic Adept"
        optionMysticAdept.value = "MYAD"
        natureSelectorDoc.add(optionMysticAdept)
        let optionAdept = document.createElement('option')
        optionAdept.text = "Adept"
        optionAdept.value = "AD"
        natureSelectorDoc.add(optionAdept)
        let optionTechnomancer = document.createElement('option')
        optionTechnomancer.text = "Technomancer"
        optionTechnomancer.value = "T"
        natureSelectorDoc.add(optionTechnomancer)
    }
}

function setNature() {
    const natureSelectorDoc = document.getElementById('nature')
    nature = natureSelectorDoc.value
}

function setMagicAndResonancePoints(natureCell) {
    if (nature != "MUN") {
        const regex = /\d+/
        const cellText = cellsDoc[natureCell].innerHTML
        magicAndResonancePoints = parseInt(cellText.match(regex))
        if (nature == "AMAG") magicAndResonancePoints += 1
    } else {
        magicAndResonancePoints = 0
    }
}

function adjustNuyen() {
    const nuyenColumn = 4
    const nuyenRow = getRow(nuyenColumn)
    const nuyenCell = selectorGridDimensions * nuyenRow + nuyenColumn
    const regex = /\d+/
    const cellText = cellsDoc[nuyenCell].innerHTML
    nuyen = parseInt(cellText.match(regex)) * 1000
}

function getRow(column) {
    let found = false
    let row = 0 
    for (let i = 0; row < selectorGridDimensions && !found; i++) {
        if (cellsArray[i][column] == true) {
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