import Throw from './Throw.js'

export default class Test {
    constructor(skill, linkedAttribute, bonus, threshold) {
        this._throw = new Throw(skill + linkedAttribute + bonus)
        this._threshold = threshold
        this._netHits = this.evaluateNetHits()
        this._glitch = this.evaluateTypeOfGlitch()
        this._result = this.evaluateResult()
    }

    get throw() {
        return this._throw
    }

    get threshold() {
        return this._threshold
    }

    set threshold(newThreshold) {
        this._threshold = newThreshold
    }

    get netHits() {
        return this._netHits
    }

    get glitch() {
        return this._glitch
    }

    evaluateNetHits() {
        return this.throw.hits - this.threshold
    }

    evaluateTypeOfGlitch() {
        let result = 0
        if (this.throw.glitch && this.netHits < 0) result = 2
        else if (this.throw.glitch) result = 1
        else result = 0
        return result
    }

    evaluateResult() {
        return this._netHits >= 0 ? 'W' : 'L'
    }
}

/* let test = new Test(3, 2, 0, 3)
console.log("This is your throw: " + test.throw.die)
console.log("Did you glitch?: " + test.glitch)
console.log("You got " + test.throw.hits + " hits")
console.log("You got " + test.netHits + " net hits") */