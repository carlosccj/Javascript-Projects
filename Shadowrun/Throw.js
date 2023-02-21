
export default class Throw {
    constructor(dicePool) {
        this._die = this.throwDice(dicePool)
        this._glitch = this.evaluateGlitch(this._die) 
    }

    get die() {
        return this._die
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

    evaluateGlitch(die) {
        let glitchCounter = die.length % 2 == 0 ? die.length / 2 + 1 : Math.ceil(die.length / 2)
        let result = false
        for (let i = 0; i < die.length; i++) {
            if (die[i] == 1) glitchCounter--
        }
        if (glitchCounter <= 0) result = true
        return result
    }
}

/* let test = new Throw(5)
console.log(test.die)
console.log(test.glitch) */