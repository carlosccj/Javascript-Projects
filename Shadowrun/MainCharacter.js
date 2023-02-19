
class MainCharacter {
    constructor() {
        this._charName = ""
        this._alias = ""
        this._sex = 'M'
        this._ethnicity = ""
        this._age = 0
        this._height = 0
        this._weight = 0
        this._rol = 'SS'
        this._lifestyle = 'S'

        this._metatype = 'D'
        this._metaPoints = 0
        this._nature = 'Mundane'
        this._magicAndResonancePoints = 0
        this._skillPoints = 0
        this._attributePoints = 0
        this._resources = 0

    }

    get charName() {
        return this._charName;
    }

    set charName(newCharName) {
        this._charName = newCharName;
    }

    get alias() {
        return this._alias;
    }

    set alias(newAlias) {
        this._alias = newAlias;
    }

    get sex() {
        return this._sex
    }

    set sex(newSex) {
        this._sex = newSex;
    }

    get ethnicity() {
        return this._ethnicity;
    }

    set ethnicity(newEthnicity) {
        this._ethnicity = newEthnicity;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        this._age = newAge;
    }

    get height() {
        return this._height;
    }

    set height(newHeight) {
        this._height = newHeight;
    }
    
    get weight() {
        return this._weight;
    }

    set weight(newWeight) {
        this._weight = newWeight;
    }

    get rol() {
        return this._rol;
    }

    set rol(newRol) {
        this._rol = newRol;
    }

    get lifestyle() {
        return this._lifestyle;
    }

    set lifestyle(newLifestyle) {
        this._lifestyle = newLifestyle;
    }

    get metatype() {
        return this._metatype;
    }

    set metatype(newMetatype) {
        this._metatype = newMetatype;
    }

    get metaPoints() {
        return this._metaPoints;
    }

    set metaPoints(newMetaPoints) {
        this._metaPoints = newMetaPoints;
    }

    get nature() {
        return this._nature;
    }

    set nature(newNature) {
        this._nature = newNature;
    }

    get magicAndResonancePoints() {
        return this._magicAndResonancePoints;
    }

    set magicAndResonancePoints(newMagicAndResonancePoints) {
        this._magicAndResonancePoints = newMagicAndResonancePoints;
    }

    get skillPoints() {
        return this._skillPoints;
    }

    set skillPoints(newSkillPoints) {
        this._skillPoints = newSkillPoints;
    }

    get attributePoints() {
        return this._attributePoints;
    }

    set attributePoints(newAttributePoints) {
        this._attributePoints = newAttributePoints;
    }

    get resources() {
        return this._resources;
    }

    set resources(newResources) {
        this._resources = newResources;
    }

}

export default MainCharacter