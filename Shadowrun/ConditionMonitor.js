
class ConditionMonitor {
    constructor(attribute) {
        this._maxBoxNumber = Math.ceil(attribute / 2) + 8
        this._boxNumber = this._maxBoxNumber
        this._damageDone = 0
        this._woundMalus = 0
        this._overflowDamage = 0
    }

    get maxBoxNumber() {
        return this._maxBoxNumber
    }

    set maxBoxNumber(newMaxBoxes) {
        this._maxBoxNumber += newMaxBoxes
    }

    get boxNumber() {
        return this._boxNumber
    }

    set boxNumber(newBoxes) {
        this._boxNumber += newBoxes
    }

    get damageDone() {
        return this._damageDone
    }

    get woundMalus() {
        return this._woundMalus
    }

    get overflowDamage() {
        return this._overflowDamage
    }

    dealDamage(damage) {
        this._damageDone += damage
        this.calculateDamage(damage)
        this.calculateWoundMalus()
    }

    calculateDamage(damage) {
        this._boxNumber -= damage
        if (this._boxNumber < 0) {
            this._overflowDamage += Math.abs(this._boxNumber)
            this._boxNumber = 0
        } 
    }

    calculateWoundMalus() {
        if (this._boxNumber > 0) this._woundMalus = -(Math.floor(this._damageDone / 3))
        else this._woundMalus = -(Math.floor(this._maxBoxNumber / 3) + 1)
    }

    healDamage(healing) {
        this.dealDamage(-(healing))
    }
}

/* let test = new ConditionMonitor(5)
test.dealDamage(10)
console.log("Damage done: " + test.damageDone)
console.log("Number of boxes left: " + test.boxNumber)
console.log("Wound malus: " + test.woundMalus)
console.log("Overflow damage: " + test.overflowDamage + "\n")
test.healDamage(2)
console.log("Damage done: " + test.damageDone)
console.log("Number of boxes left: " + test.boxNumber)
console.log("Wound malus: " + test.woundMalus)
console.log("Overflow damage: " + test.overflowDamage + "\n")
test.healDamage(4)
console.log("Damage done: " + test.damageDone)
console.log("Number of boxes left: " + test.boxNumber)
console.log("Wound malus: " + test.woundMalus)
console.log("Overflow damage: " + test.overflowDamage + "\n") */