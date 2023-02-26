import Throw from './Throw.js'

export default class Test {
    constructor(skill, linkedAttribute, bonus, threshold) {
        if (skill <= 0) bonus -= 1
        this._throw = new Throw(skill + linkedAttribute + bonus)
        this._threshold = threshold
        this._netHits = this.evaluateNetHits()
        this._result = this.evaluateResult()
    }

    get throw() {
        return this._throw
    }

    get threshold() {
        return this._threshold
    }

    get netHits() {
        return this._netHits
    }

    get result() {
        return this._result
    }

    evaluateNetHits() {
        return this.throw.hits - this.threshold
    }

    evaluateResult() {
        return this._netHits >= 0 ? 'W' : 'L'
    }
}

/* let test = new Test(3, 2, 0, 3)
console.log("This is your throw: " + test.throw.dice)
console.log("Did you glitch?: " + test.throw.glitch)
console.log("You got " + test.throw.hits + " hits")
console.log("You got " + test.netHits + " net hits") */