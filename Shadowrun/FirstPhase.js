import MainCharacter from "./MainCharacter.js"

const selectorGridDimensions = 5
const NoSelected = "rgba(169, 169, 169, 0)"
const selectorPurple = "rgba(189, 119, 255, 0.718)"

const cellsDoc = document.querySelectorAll('#selector')
const cellsArray = []
const rows = selectorGridDimensions
const cols = selectorGridDimensions
const metatypeColumn = 0
const attributePointsColumn = 1
const natureColumn = 2
const skillPointsColumn = 3
const resourcesColumn = 4

let metatype = 'D'
let metaPoints = 13
let attributePoints = 16
let nature = "MAG"
let magicAndResonancePoints = 2
let skillPoints = 16
let resources = 8000

let charName = ""
let alias = ""
let sex = ""
let ethnicity = ""
let age = 0
let height = 0
let weight = 0
let rol = 'SS'
let lifestyle = ""

let selectedCellRowNumber = 0
let selectedCellColNumber = 0
let selectedCellCoordinates = []

let newCharacter = new MainCharacter()
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
            document.getElementById('char-age').addEventListener('change', () => checkAge())
            document.getElementById('char-height').addEventListener('change', () => checkHeight())
            document.getElementById('char-weight').addEventListener('change', () => checkWeight())
            document.getElementById('char-metatype').addEventListener('change', () => clearHeightAndWeight())
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

function setattributePoints(attributePointsCell) {
    const regex = /\d+/
    const cellText = cellsDoc[attributePointsCell].innerHTML
    attributePoints = parseInt(cellText.match(regex))
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

function setskillPoints(skillPointsCell) {
    const regex = /\d+/
    const cellText = cellsDoc[skillPointsCell].innerHTML
    skillPoints = parseInt(cellText.match(regex))
}

function setResources(resourcesCell) {
    const regex = /\d+/
    const cellText = cellsDoc[resourcesCell].innerHTML
    resources = parseInt(cellText.match(regex)) * 1000
}

function setCharName() {
    charName = document.getElementById('char-name').value
}

function setAlias() {
    alias = document.getElementById('char-alias').value
}

function setSex() {
    const sexSelectorDoc = document.getElementById('char-sex')
    const sexSelected = sexSelectorDoc.selectedIndex
    sex = sexSelectorDoc.options[sexSelected].value
}

function setEthnicity() {
    ethnicity = document.getElementById('char-ethnicity').value
}

function setAge() {
    age = document.getElementById('char-age').value
}

function setHeight() {
    height = document.getElementById('char-height').value
}

function setWeight() {
    weight = document.getElementById('char-weight').value
}

function setRol() {
    const rolSelectorDoc = document.getElementById('char-rol')
    const rolSelected = rolSelectorDoc.selectedIndex
    rol = rolSelectorDoc.options[rolSelected].value
}

function setLifestyle() {
    const lifestyleSelectorDoc = document.getElementById('char-lifestyle')
    const lifestyleSelected = lifestyleSelectorDoc.selectedIndex
    lifestyle = lifestyleSelectorDoc.options[lifestyleSelected].value
}


export function previousScreen() {
    //It should link to the Main Menu here (no need to save any data at this point)
}

export function saveData() {
    const metatypeCell = getCell(metatypeColumn)
    const attributePointsCell = getCell(attributePointsColumn)
    const natureCell = getCell(natureColumn)
    const skillPointsCell = getCell(skillPointsColumn)
    const resourcesCell = getCell(resourcesColumn)
    setMetatype()
    setMetaPoints(metatypeCell)
    setattributePoints(attributePointsCell)
    setNature()
    setMagicAndResonancePoints(natureCell)
    setskillPoints(skillPointsCell)
    setResources(resourcesCell)
    setCharName()
    setAlias()
    setSex()
    setEthnicity()
    setAge()
    setHeight()
    setWeight()
    setRol()
    setLifestyle()
}

export function saveDataAndNext() {
    saveData()

    console.log("Metatype: " + metatype + "\n" +
        "Metapoints: " + metaPoints + "\n" +
        "Attributes: " + attributePoints + "\n" +
        "Nature: " + nature + "\n" +
        "Magic/Resonance: " + magicAndResonancePoints + "\n" +
        "Skills: " + skillPoints + "\n" +
        "resources: " + resources)

    console.log("Name: " + charName + "\n" +
        "Alias: " + alias + "\n" +
        "Sex: " + sex + "\n" +
        "Ethnicity: " + ethnicity + "\n" +
        "Age: " + age + "\n" +
        "Height: " + height + "\n" +
        "Weight: " + weight + "\n" +
        "Rol: " + rol + "\n" +
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

function checkAge() {
    let ageSelector = document.getElementById('char-age')
    if (ageSelector.value < 16) ageSelector.value = 16
    if (ageSelector.value > 65) ageSelector.value = 65
}

function checkHeight() {
    let heightSelector = document.getElementById('char-height')
    const charMetatype = document.getElementById('char-metatype').value
    if (charMetatype == 'T') {
        if (heightSelector.value > 235) heightSelector.value = 235
        if (heightSelector.value < 180) heightSelector.value = 180
    } else if (charMetatype == 'D') {
        if (heightSelector.value < 130) heightSelector.value = 130
        if (heightSelector.value > 165) heightSelector.value = 165
    } else {
        if (heightSelector.value > 215) heightSelector.value = 215
        if (heightSelector.value < 155) heightSelector.value = 155
    }
}

function checkWeight() {
    let weightSelector = document.getElementById('char-weight')
    const charMetatype = document.getElementById('char-metatype').value
    if (charMetatype == 'T') {
        if (weightSelector.value > 300) weightSelector.value = 300
        if (weightSelector.value < 75) weightSelector.value = 75
    }
    else if (charMetatype == 'D') {
        if (weightSelector.value > 75) weightSelector.value = 75
        if (weightSelector.value < 50) weightSelector.value = 50
    }
    else {
        if (weightSelector.value > 120) weightSelector.value = 120
        if (weightSelector.value < 55) weightSelector.value = 55
    }
}

function clearHeightAndWeight() {
    document.getElementById('char-height').value = ""
    document.getElementById('char-weight').value = ""
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