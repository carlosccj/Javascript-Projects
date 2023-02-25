
export default class Throw {
    constructor(dicePool) {
        this._dice = this.throwDice(dicePool)
        this._hits = this.evaluateHits()
        this._glitch = this.evaluateGlitch()
        this._totalSum = this.evaluateTotalSum()
    }

    get dice() {
        return this._dice
    }

    get hits() {
        return this._hits
    }

    get glitch() {
        return this._glitch
    }

    get totalSum() {
        return this._totalSum
    }

    throwDice(dicePool) {
        const highestValue = 6
        const lowestValue = 1
        let result = []
        for (let i = 0; i < dicePool; i++) {
            let dice = Math.floor(Math.random() * (highestValue - lowestValue + 1) + lowestValue)
            result.push(dice)
        }
        return result
    }

    evaluateHits() {
        let result = 0
        for (let i = 0; i < this._dice.length; i++) {
            if (this._dice[i] > 4) result++
        }
        return result
    }

    evaluateGlitch() {
        let glitchCounter = this._dice.length % 2 == 0 ? this._dice.length / 2 + 1 : Math.ceil(this._dice.length / 2)
        let result = 0
        for (let i = 0; i < this._dice.length; i++) {
            if (this._dice[i] == 1) glitchCounter--
        }
        if (glitchCounter <= 0 && this._hits <= 0) result = 2
        else if (glitchCounter <= 0) result = 1
        return result
    }

    evaluateTotalSum() {
        let result = 0
        for(let i = 0; i < this._dice.length; i++) {
            result += this._dice[i]
        }
        return result
    }
}

/* let test = new Throw(5)
console.log("This is your throw: " + test.dice)
console.log("Those are the hits: " + test.hits)
console.log("Did you glitch? " + test.glitch) */