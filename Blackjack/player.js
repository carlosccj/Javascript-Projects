export default Player

function Player (name, chips) {
    this.name = name
    this.chips = chips
}

function getName() {
    return this.name
}

function getChips() {
    return this.chips
}
