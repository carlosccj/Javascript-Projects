import Quality from './Quality.js'

class QualityBucket {
    constructor() {
        this._numberOfQualities = 64
        this._arrayOfQualities = this.createNewArrayOfQualities()
    }

    get numberOfQualities() {
        return this._numberOfQualities
    }

    get arrayOfQualities() {
        return this._arrayOfQualities
    }
    
    createNewArrayOfQualities() {
        let result = []
        result.push(new Quality("Ambidextrous", "You are equally adept at using either your right or left side. Whether shooting a gun, throwing agrenade, or kicking a ball, you can switch it upwith the best of them.",
        4, 1, "GameEffect"))
        result.push(new Quality("Analytical Mind", "You are a master problem solver. You can analyze information to help deduce solutions, while separating useful bits from the distractions and noise.",
        3, 1, "GameEffect"))
        result.push(new Quality("Aptitude", "The best look up to you. You have the natural potential to be even better than the best in a particular skill.",
        12, 1, "GameEffect"))
        result.push(new Quality("Astral Chamaleon", "Your aura never seems to stabilize for very long. You have the ability to blend in with the astral environment around you and make it harder to identify and read your aura and astral signature.", 
        9, 1, "GameEffect"))
        result.push(new Quality("Blandness", "You are the least interesting person in the world. You're average height, average weight, average build, average everything. Nothing at all about you tends to stand out, and that can be extremely useful.", 
        8, 1, "GameEffect"))
        result.push(new Quality("Built Tough", "You're built like a brick drekhouse. You're pretty good at taking a few extra hits before the lights go out.", 
        4, 4, "GameEffect"))
        return result
    }
}

let test = new QualityBucket()
console.log(test.arrayOfQualities)