
class Skill {
    constructor(name, skillLevel, maxSkillLevel, untrainedUse, specializationsArray) {
        this._name = name
        this._skillLevel = skillLevel
        this._maxSkillLevel = maxSkillLevel
        this._untrainedUse = untrainedUse
        this._specializationsArray = specializationsArray
        this._specialization = ""
        this._expertise = ""
    }

    get name() {
        return this._name
    }

    get skillLevel() {
        return this._skillLevel
    }

    get maxSkillLevel() {
        return this._maxSkillLevel
    }

    set maxSkillLevel(newValue) {
        this._maxSkillLevel = newValue
    }

    set skillLevel(newValue) {
        if (newValue <= this._maxSkillLevel) {
            this._skillLevel = newValue
        }
    }

    get untrainedUse() {
        return this._untrainedUse
    }

    get specializationsArray() {
        return this._specializationsArray
    }

    get specialization() {
        return this._specialization
    }

    get expertise() {
        return this._expertise
    }

    get specialization() {
        return this._specialization
    }

    set specialization(specializationName) {
        const alreadySpecialized = this.checkSpecialization()
        if (!alreadySpecialized) {
            let found = false
            for(let i = 0; i < this._specializationsArray.length && !found; i++) {
                if (this._specializationsArray[i] == specializationName) {
                    this._specialization = specializationName
                    this.upgradeSkill(2)
                    found = true
                }
            }
        }
    }

    get expertise() {
        return this._expertise
    }

    upgradeSkill(value) {
        if (value == undefined) value = 1
        if (this._skillLevel <= this._maxSkillLevel) {
            this._skillLevel += value
        }
    }

    addExpertise() {
        const alreadySpecialized = this.checkSpecialization()
        if (alreadySpecialized) {
            this._expertise = this._specialization
            this._specialization = ""
        }
    }

    checkSpecialization() {
        let result = true
        if (this._specialization == "") result = false
        return result
    }

    addCustomizedSpecialization(newCustomizedSpecialization) {
        this._specializationsArray.push(newCustomizedSpecialization)
    }
}

let test = new Skill("Biotech", 3, 9, false, ["Biotechnology", "Cybertechnology", "First Aid", "Medicine"])
console.log("Name of the skill: " + test.name)
console.log("Actual level of the skill: " + test.skillLevel)
console.log("Max cap of the skill: " + test.maxSkillLevel)
console.log("Can be used untrained: " + test.untrainedUse)
console.log("Those are the available specializations: " + test.specializationsArray)
test.upgradeSkill(2)
console.log("Actual level of the skill: " + test.skillLevel)
test.addCustomizedSpecialization("Bioware")
test.specialization = "Bioware"
console.log("This is the specialization: " + test.specialization)


