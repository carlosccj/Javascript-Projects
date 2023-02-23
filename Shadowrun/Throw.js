
export default class Throw {
    constructor(dicePool) {
        this._die = this.throwDice(dicePool)
        this._hits = this.evaluateHits()
        this._glitch = this.evaluateGlitch()
    }

    get die() {
        return this._die
    }

    get hits() {
        return this._hits
    }

    get glitch() {
        return this._glitch
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
        for (let i = 0; i < this._die.length; i++) {
            if (this._die[i] > 4) result++
        }
        return result
    }

    evaluateGlitch() {
        let glitchCounter = this._die.length % 2 == 0 ? this._die.length / 2 + 1 : Math.ceil(this._die.length / 2)
        let result = 0
        for (let i = 0; i < this._die.length; i++) {
            if (this._die[i] == 1) glitchCounter--
        }
        if (glitchCounter <= 0 && this._hits <= 0) result = 2
        else if (glitchCounter <= 0) result = 1
        return result
    }
}

/* let test = new Throw(5)
console.log("This is your throw: " + test.die)
console.log("Those are the hits: " + test.hits)
console.log("Did you glitch? " + test.glitch) */