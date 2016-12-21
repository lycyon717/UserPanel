var User = (function () {
    function User(userHP, userDefence, userAtk, userCrit) {
        this.level = 1;
        this.properties = new Properties();
        this.heroesPool = [];
        this.heroesInTeam = [];
        this.equipments = [];
        if (!User.user) {
            this.properties.createProperties(userHP, userDefence, userAtk, userCrit);
            User.user = this;
        }
        return User.user;
    }
    var d = __define,c=User,p=c.prototype;
    p.addHero = function (hero) {
        this.heroesPool.push(hero);
    };
    p.addEquipment = function (equipment) {
        this.equipments.push(equipment);
    };
    //heroUpAndDown(heroUp, heroDown) {}
    p.levelUp = function () {
        this.level++;
    };
    d(p, "fightPower"
        ,function () {
            console.log("got the fight power!");
            var result = this.level * 100;
            this.heroesInTeam.forEach(function (hero) { return result += hero.fightPower; });
            this.equipments.forEach(function (equip) { return result += equip.fightPower; });
            //this.__cachefightPower = result;
            return result;
        }
    );
    p.getTotalValueByName = function (propertyName) {
        var result = this.properties.getPropertyByName(propertyName);
        this.equipments.forEach(function (equip) { return result += equip.getTotalValueByName(propertyName); });
        return result;
    };
    return User;
}());
egret.registerClass(User,'User');
//# sourceMappingURL=User.js.map