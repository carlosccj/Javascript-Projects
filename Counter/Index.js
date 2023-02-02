// 'countEl' is the variable which stores the internal text string attached to the html document
// 'count' is the variable which mutates through the process and is copied to 'countEl' when necessary
let countEl = document.getElementById("count-el")
let count = 0;
let savedAccounts = document.getElementById("saved-accounts")
let first = true

function increment() {
    count++;
    countEl.textContent = count;
}

function decrease() {
    if (count > 0) {
        count--
        countEl.textContent = count
    }
}

function restart() {
    count = 0;
    countEl.textContent = count
}

function save() {
    if (first) {
        savedAccounts.textContent = savedAccounts.textContent + count
        first = false
    } else {
        savedAccounts.textContent = savedAccounts.textContent + ", " + count
    }
    restart()
}

//console.log(count)

// This is executed in our personal server-enviroment (personal laptop) because of Node.js
// Node.js can also execute scripts directly from the Linux terminal with the 'node' command
// console.log(count) 