
class User {

    private level = 1;

    properties = new Properties();

    public static user: User;

    public __cachefightPower;

    heroesPool: Hero[] = [];
    heroesInTeam: Hero[] = [];
    equipments: Equipment[] = [];


    constructor(userHP: number, userDefence: number, userAtk: number, userCrit: number) {

        if (!User.user) {
            this.properties.createProperties(userHP, userDefence, userAtk, userCrit);
            User.user = this;
        }
        return User.user;
    }

    addHero(hero: Hero) {

        this.heroesPool.push(hero);
    }

    addEquipment(equipment: Equipment) {

        this.equipments.push(equipment);
    }

    //heroUpAndDown(heroUp, heroDown) {}

    levelUp() {
        this.level++;
    }

    get fightPower() {

        console.log("got the fight power!");
        var result = this.level * 100;
        this.heroesInTeam.forEach(hero => result += hero.fightPower);
        this.equipments.forEach(equip => result += equip.fightPower);

        //this.__cachefightPower = result;
        return result;
    }

    getTotalValueByName(propertyName: PropertyName) {

        var result = this.properties.getPropertyByName(propertyName);
        this.equipments.forEach(equip => result += equip.getTotalValueByName(propertyName));
        return result;
    }
}

