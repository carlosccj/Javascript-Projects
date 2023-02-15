
const selectorGridDimensions = 5
const NoSelected = "rgba(169, 169, 169, 0)"
const selectorPurple = "rgba(189, 119, 255, 0.718)"

const cellsDoc = document.querySelectorAll('#selector')
const cellsArray = []
const rows = selectorGridDimensions
const cols = selectorGridDimensions
const metatypeColumn = 0
const numberAttributesColumn = 1
const natureColumn = 2
const numberSkillsColumn = 3
const resourcesColumn = 4

let metatype = 'D'
let metaPoints = 13
let numberAttributes = 16
let nature = "MAG"
let magicAndResonancePoints = 2
let numberSkills = 16
let resources = 8000

let charName = document.getElementById('char-name').value
let alias = document.getElementById('char-alias').value
let sex = document.getElementById('char-sex').options[document.getElementById('char-sex').selectedIndex].value
let ethnicity = document.getElementById('char-ethnicity').value
let age = document.getElementById('char-age').value
let height = document.getElementById('char-height').value
let weight = document.getElementById('char-weight').value
let lifestyle = document.getElementById('char-lifestyle').options[document.getElementById('char-lifestyle').selectedIndex].value

let selectedCellRowNumber = 0
let selectedCellColNumber = 0
let selectedCellCoordinates = []

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
            cellsDoc[cellSelected].addEventListener('click', () => adjustCharacterOptions())
            cnt++;
        }
    }
}

function setMetatype() {
    const metatypeSelectorDoc = document.getElementById('char-metatype')
    metatype = metatypeSelectorDoc.value
}

function setMetaPoints(metatypeCell) {
    const regex = /\d+/
    const cellText = cellsDoc[metatypeCell].innerHTML
    metaPoints = parseInt(cellText.match(regex))
}

function setNumberAttributes(numberAttributesCell) {
    const regex = /\d+/
    const cellText = cellsDoc[numberAttributesCell].innerHTML
    numberAttributes = parseInt(cellText.match(regex))
}

function setNature() {
    const natureSelectorDoc = document.getElementById('char-nature')
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

function setNumberSkills(numberSkillsCell) {
    const regex = /\d+/
    const cellText = cellsDoc[numberSkillsCell].innerHTML
    numberSkills = parseInt(cellText.match(regex))
}

function setResources(resourcesCell) {
    const regex = /\d+/
    const cellText = cellsDoc[resourcesCell].innerHTML
    resources = parseInt(cellText.match(regex)) * 1000
}

function previousScreen() {
    //It should link to the Main Menu here (no need to save any data at this point)
}

function saveData() {
    const metatypeCell = getCell(metatypeColumn)
    const numberAttributesCell = getCell(numberAttributesColumn)
    const natureCell = getCell(natureColumn)
    const numberSkillsCell = getCell(numberSkillsColumn)
    const resourcesCell = getCell(resourcesColumn)
    setMetatype()
    setMetaPoints(metatypeCell)
    setNumberAttributes(numberAttributesCell)
    setNature()
    setMagicAndResonancePoints(natureCell)
    setNumberSkills(numberSkillsCell)
    setResources(resourcesCell)
}

function setDataAndNext() {
    saveData()

    console.log("Metatype: " + metatype + "\n" + 
    "Metapoints: " + metaPoints + "\n" +
    "Attributes: " + numberAttributes + "\n" + 
    "Nature: " + nature + "\n" + 
    "Magic/Resonance: " + magicAndResonancePoints + "\n" + 
    "Skills: " + numberSkills + "\n" +
    "resources: " + resources)

    console.log("Name: " + charName + "\n" + 
    "Alias: " + alias + "\n" + 
    "Sex: " + sex + "\n" + 
    "Ethnicity: " + ethnicity + "\n" + 
    "Age: " + age + "\n" + 
    "Height: " + height + "\n" + 
    "Weight: " + weight + "\n" + 
    "Lifestyle: " + lifestyle + "\n")

    //It should load the next HTML page here
}

function changeCellColor(cellSelected) {
    selectedCellCoordinates.length = 0
    selectedCellRowNumber = Math.floor(cellSelected / selectorGridDimensions)
    selectedCellColNumber = cellSelected % selectorGridDimensions
    selectedCellCoordinates.push(selectedCellRowNumber, selectedCellColNumber)
    const displacedCellRowNumber = adjustColumn(cellSelected)
    adjustRow(displacedCellRowNumber)
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

function adjustCharacterOptions() {
    changeMetatypeOptionMenu()
    changeNatureOptionMenu()
    changeResourcesOptionMenu()
}

function changeMetatypeOptionMenu() {
    const metatypeRow = getRow(metatypeColumn)
    let metatypeSelectorDoc = document.getElementById('char-metatype')
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

function changeNatureOptionMenu() {
    const natureRow = getRow(natureColumn)
    let natureSelectorDoc = document.getElementById('char-nature')
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

function changeResourcesOptionMenu() {
    let resourceSelectorDoc = document.getElementById('nuyen')
    const resourcesRow = getRow(resourcesColumn)
    if (resourcesRow == 0) resourceSelectorDoc.value = "450.000"
    else if (resourcesRow == 1) resourceSelectorDoc.value = "275.000"
    else if (resourcesRow == 2) resourceSelectorDoc.value = "150.000"
    else if (resourcesRow == 3) resourceSelectorDoc.value = "50.000"
    else if (resourcesRow == 4) resourceSelectorDoc.value = "8.000"
}

function getCell(cellColumn) {
    const cellRow = getRow(cellColumn)
    return selectorGridDimensions * cellRow + cellColumn
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