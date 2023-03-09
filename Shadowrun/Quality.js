
export default class Quality {
    constructor(name, description, karma, maxRank, gameEffect) {
        this._name = name
        this._description = description 
        this._karma = karma
        this._kind = karma < 1 ? "Bad" : "Good"
        this._maxRank = maxRank
        this._ranked = maxRank == 1 ? false : true
        this._rank = 1
        this._gameEffect = gameEffect // This may be a new object called 'Bonus'
    }

    get name() {
        return this._name
    }

    get description() {
        return this._description
    }

    get kind() {
        return this._kind
    }

    get ranked() {
        return this._ranked
    }

    get rank() {
        return this._rank
    }

    get maxRank() {
        return this._maxRank
    }

    get karma() {
        return this._karma
    }

    get gameEffect() {
        return this._gameEffect
    }
}

/* let test = new Quality("Ambidextrous", 
"You are equally adept at using either your right or left side. Whether shooting a gun, throwing agrenade, or kicking a ball, you can switch it upwith the best of them.",
4, 1, "GameEffect")
console.log("Name: " + test.name)
console.log("Description: " + test.description)
console.log("Karma: " + test.karma)
console.log("Kind: " + test.kind)
console.log("Ranked: " + test.ranked)
console.log("Rank: " + test.rank)
console.log("Maximum Rank: " + test.maxRank)
console.log("Game Effect: " + test.gameEffect) */
