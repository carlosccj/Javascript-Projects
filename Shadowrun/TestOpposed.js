import Test from './Test.js'
import Throw from './Throw.js'

class TestOpposed extends Test {
    constructor(skillAggressor, linkedAttributeAggressor, bonusAggressor, 
        skillDefender, linkedAttributeDefender, bonusDefender) {
            const threshold = new Throw(skillDefender + linkedAttributeDefender + bonusDefender)
            super(skillAggressor, linkedAttributeAggressor, bonusAggressor, threshold.hits)
            this._defenderThrow = threshold
            this._winner = this.determineWinner()
    }

    get aggressorThrow() {
        return super.throw
    }

    get defenderThrow() {
        return this._defenderThrow
    }

    get winner() {
        return this._winner
    }

    get netHits() {
        return Math.abs(super.netHits)
    }

    determineWinner() {
        return this.aggressorThrow.hits >= this.defenderThrow.hits ? 'A' : 'D'
    }

}

/* let test = new TestOpposed(2, 3, 0, 2, 3, 0)
console.log("This is the aggressor throw: " + test.aggressorThrow.die)
console.log("This is the defender throw: " + test.defenderThrow.die)
console.log("Hits from the aggressor: " + test.aggressorThrow.hits)
console.log("Hits from the defender: " + test.defenderThrow.hits)
console.log("The winner is: " + test.winner)
console.log("The winner got " + test.netHits + " net hits") */