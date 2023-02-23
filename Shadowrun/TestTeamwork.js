import Test from './Test.js'
import Throw from './Throw.js'

class TestTeamwork {
    constructor(helpersSkill, helpersLinkedAttribute, helpersBonus, leaderSkill,
        leaderLinkedAttribute, leaderBonus, threshold) {
        this._helpersThrow = this.calculateHelpersThrows(helpersSkill, helpersLinkedAttribute, helpersBonus)
        this._helpersHits = this.calculateHelpersHits()
        this._helpersGlitch = this.calculateHelpersGlitch()
        this._newLeaderBonus = leaderBonus + this._helpersHits
        this._newLeaderTest = new Test(leaderSkill, leaderLinkedAttribute, this._newLeaderBonus, threshold)
    }

    get helpersThrow() {
        return this._helpersThrow
    }

    get helpersHits() {
        return this._helpersHits
    }

    get helpersGlitch() {
        return this._helpersGlitch
    }

    get newLeaderBonus() {
        return this._newLeaderBonus
    }

    get newLeaderTest() {
        return this._newLeaderTest
    }

    calculateHelpersThrows(helpersSkill, helpersLinkedAttribute, helpersBonus) {
        let result = []
        for (let i = 0; i < helpersSkill.length; i++) {
            const helperDicePool = helpersSkill[i] + helpersLinkedAttribute[i] + helpersBonus[i]
            const helperThrow = new Throw(helperDicePool)
            result.push(helperThrow)
        }
        return result
    }

    calculateHelpersHits() {
        let result = 0
        for (let i = 0; i < this._helpersThrow.length; i++) {
            const hits = this._helpersThrow[i].hits
            result += hits
        }
        return result
    }

    calculateHelpersGlitch() {
        let result = []
        for (let i = 0; i < this._helpersThrow.length; i++) {
            const glitchType = this._helpersThrow[i].glitch
            result.push(glitchType)
        }
        return result
    }
}

/* const hSkills = [2, 3, 2]
const hAttributes = [4, 2, 2]
const hBonuses = [0, 0, 0]
const test = new TestTeamwork(hSkills, hAttributes, hBonuses, 1, 2, 0, 5)
console.log("Those are the helpers throws:")
for (let i = 0; i < 3; i++) {
    console.log("Helper " + i + ": " + test.helpersThrow[i].die)
}
console.log("Those are the helpers hits: " + test.helpersHits)
console.log("Those are the helper glitches: " + test.helpersGlitch)
console.log("This is the new Leader Bonus: " + test.newLeaderBonus)
console.log("This is the leader throw: " + test._newLeaderTest.throw.die)
console.log("Those are the Test net hits: " + test.newLeaderTest.netHits)
console.log("This is the Test result: " + test.newLeaderTest.result) */