
class Equipment {

    jewels: Jewel[] = [];

    private properties: Properties = new Properties()

    constructor(equipmentHP: number, equipmentDefence: number, equipmentAtk: number, equipmentCrit: number) {

        this.properties.createProperties(equipmentHP, equipmentDefence, equipmentAtk, equipmentCrit);
    }

    get fightPower() {

        var result = 100;
        this.jewels.forEach(jewel => result += jewel.fightPower);
        return result;
    }

    getTotalValueByName(propertyName: PropertyName) {

        var result = this.properties.getPropertyByName(propertyName);
        this.jewels.forEach(jewel => result += jewel.getTotalValueByName(propertyName));
        return result;
    }

    addJewel(jewel: Jewel) {

        this.jewels.push(jewel);
    }
}