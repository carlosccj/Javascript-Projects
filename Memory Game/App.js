import Token from './Token.js'

const tokenArray = [
    new Token("Fighter", 'Images/Fighter.png'),
    new Token("Rogue", 'Images/Rogue.png'),
    new Token("Wizard", 'Images/Wizard.png'),
    new Token("Paladin", 'Images/Paladin.png'),
    new Token("Bard", 'Images/Bard.png'),
    new Token("Ranger", 'Images/Ranger.png'),
    new Token("Fighter", 'Images/Fighter.png'),
    new Token("Rogue", 'Images/Rogue.png'),
    new Token("Wizard", 'Images/Wizard.png'),
    new Token("Paladin", 'Images/Paladin.png'),
    new Token("Bard", 'Images/Bard.png'),
    new Token("Ranger", 'Images/Ranger.png')
];

let flippedTokenArray = []

// This is a nice way to randomly sort an array in Javascript. The 'sort' function take another function as a
// parameter which returns a random boolean. This random boolean defines the order of the elements.
tokenArray.sort(() => 0.5 - Math.random())

const scoreDoc = document.getElementById('score')
const gridDisplay = document.querySelector('#grid')
const flippedArrayDoc = document.getElementById('flipped-array')
const result = document.getElementById('result')

let score = 0;

function createGrid() {
    for (let i = 0; i < tokenArray.length; i++) {
        const token = document.createElement('img')
        token.setAttribute('src', 'Images/Blank.png')
        token.setAttribute('token-id', i)
        tokenArray[i].index = i
        token.addEventListener('click', flipToken)
        gridDisplay.appendChild(token)
    }
}
createGrid()


function flipToken () {
    const tokenId = this.getAttribute('token-id')
    this.setAttribute('src', tokenArray[tokenId].img)
    flippedTokenArray.push(tokenArray[tokenId])
    if (flippedTokenArray.length == 2)   setTimeout(testToken, 500)
}


function testToken() {
    const tokens = document.querySelectorAll('img')
    if (flippedTokenArray[0].name == flippedTokenArray[1].name) {
        score++;
        scoreDoc.textContent = score
        if (score == tokenArray.length / 2) result.textContent = "YOU WIN!"
        for(let i = 0; i < flippedTokenArray.length; i++) {
            (tokens[flippedTokenArray[i].index]).removeEventListener('click', flipToken)           
        }
    } else {
        for(let i = 0; i < flippedTokenArray.length; i++) {
            (tokens[flippedTokenArray[i].index]).setAttribute('src', 'Images/Blank.png')            
        }
        //(tokens[flippedTokenArray[0].index]).setAttribute('src', 'Images/Blank.png')
        //(tokens[flippedTokenArray[1].index]).setAttribute('src', 'Images/Blank.png')
    }
    flippedTokenArray.length = 0;
}
