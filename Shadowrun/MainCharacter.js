/* There has to be sub-classes based on the 'nature' attribute. Magic classes should have new attributes like an array
of spells, adept powers, rituals, invocations, enchantments etc... while Technomancers should have their complex forms
and so. */


class MainCharacter {
    constructor() {
        this.charId

        // Character metadata which has no effect on the course of the game whatsoever
        this._charName = ""
        this._alias = ""
        this._sex = 'M'
        this._ethnicity = ""
        this._age = 0
        this._height = 0
        this._weight = 0
        this._rol = 'SS'
        this._lifestyle = 'S'

        // Character data which is only or specially important in creation proccess
        this._metatype = 'D'
        this._metaPoints = 0
        this._nature = 'Mundane'
        this._magicAndResonancePoints = 0
        this._skillPoints = 0
        this._attributePoints = 0
        this._resources = 0
        this._karma = 50
        this._qualities = [] // Quality has to be its own Object

        //Character attributes (magic and resonance in its own subclasses)
        this._body = 1
        this._agility = 1
        this._reaction = 1
        this._strength = 1
        this._willpower = 1
        this._intuition = 1
        this._logic = 1
        this._charisma = 1
        this._edge = 1
        this._essence = 1

        // Character skills (they have to be objects with 'number', 'training', 'specialization' and 'expertise')
        this._astral =
        this._athletics =
        this._biotech =
        this._closeCombat =
        this._con =
        this._conjuring =
        this._cracking =
        this._electronics =
        this._enchanting = 
        this._engineering = 
        this._exoticWeapons = 
        this._firearms = 
        this._influence = 
        this._outdoors = 
        this._perception = 
        this._piloting = 
        this._sorcering = 
        this._stealth = 
        this._tasking = 

        // Character knowledge and language skills (have to think about it)

        // Character condition monitors (this may have to be turned into objects)
        this._physicalConditionMonitor = Math.ceil(this._body / 2) + 8
        this._stunConditionMonitor = Math.ceil(this._willpower / 2) + 8

        // Character initiative
        this._initiativeBonus = 0
        this._initiativeRank = this._reaction + this._intuition + this._initiativeBonus
        this._initiativeDice = 1
        this._initiative = this._initiativeRank + this._initiativeDice

        // Character AR and DR
        this._attackRating = 
        this._defenseRating = 

        // Character data which remains relevant and changing over the entire course of the game
        this._gear = [] // Gear has to be its own Object
        this._contacts = [] // Contact has to be its own Object

        // Character actions (this may be an object)
        this._majorActions =
        this._minorActions = 

        // Character status (have to think about it)
        
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

    get karma() {
        return this._karma
    }

    set karma(newKarma) {
        this._karma = newKarma
    }

}

export default MainCharacter