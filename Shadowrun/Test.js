import Throw from './Throw.js'

export default class Test {
    constructor(skill, linkedAttribute, bonus, threshold) {
        this._throw = new Throw(skill + linkedAttribute + bonus)
        this._threshold = threshold
        this._netHits = this.evaluateResult()
    }

    get throw() {
        return this._throw.die
    }

    get glitch() {
        let result = 0
        if (this.netHits != -1 && this._throw.glitch) result = 1
        else if (this.netHits == -1 && this._throw.glitch) result = 2
        else result = 0
        return result
    }

    get threshold() {
        return this._threshold
    }

    get netHits() {
        return this._netHits
    }

    evaluateResult() {
        let hits = 0
        let netHits = 0
        for (let i = 0; i < this.throw.length; i++) {
            if (this.throw[i] > 4) hits++
        }
        if (hits >= this.threshold) netHits = hits - this.threshold
        else netHits = -1
        return netHits
    }
}

let test = new Test(3, 2, 0, 3)
console.log("This is your throw: " + test.throw)
console.log("Did you glitch?: " + test.glitch)
console.log("You got " + test.netHits + " net hits")