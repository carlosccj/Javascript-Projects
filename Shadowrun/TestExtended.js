import Test from './Test.js'

class TestExtended {
    constructor(skill, linkedAttribute, bonus, threshold, interval) {
        this._interval = interval
        const totalTests = this.arrayOfTests(skill, linkedAttribute, bonus, threshold)
        this._throwList = this.calculateThrowList(totalTests)
        this._totalHits = this.calculateTotalHits(totalTests)
        this._netHits = this.evaluateNetHits(threshold)
        this._timeSpent = this.calculateTimeSpent(totalTests, threshold)
    }

    get interval() {
        return this._interval
    }

    get throwList() {
        return this._throwList
    }

    get totalHits() {
        return this._totalHits
    }

    get netHits() {
        return this._netHits
    }

    get timeSpent() {
        return this._timeSpent
    }

    arrayOfTests(skill, linkedAttribute, bonus, threshold) {
        let result = []
        while (skill + linkedAttribute + bonus > 0) {
            let testAttempt = new Test(skill, linkedAttribute, bonus, threshold)
            result.push(testAttempt)
            bonus--
        }
        return result
    }

    calculateThrowList(totalTests) {
        let result = []
        for(let i = 0; i < totalTests.length; i++) {
            result.push("\n[" + totalTests[i].throw.dice + "]")
        }
        return result
    }

    calculateTotalHits(totalTests) {
        let result = 0
        for(let i = 0; i < totalTests.length; i++) {
            result += totalTests[i].throw.hits
        }
        return result
    }

    evaluateNetHits(threshold) {
        return this._totalHits - threshold
    }

    calculateTimeSpent(totalTests, threshold) {
        let accumulatedInterval = 0
        let accumulatedHits = 0
        let overcome = false
        for (let i = 0; i < totalTests.length && !overcome; i++) {
            accumulatedHits += totalTests[i].throw.hits
            accumulatedInterval += this._interval
            if (accumulatedHits >= threshold) overcome = true
        }
        return accumulatedInterval
    }
}

/* let test = new TestExtended(3, 6, 0, 10, 1)
console.log("This is the list of throws: " + test.throwList)
console.log("Those are the total hits: " + test.totalHits)
console.log("Those are the net hits: " + test.netHits)
console.log("This is the time spent: " + test.timeSpent) */