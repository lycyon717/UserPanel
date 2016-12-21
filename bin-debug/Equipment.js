var Equipment = (function () {
    function Equipment(equipmentHP, equipmentDefence, equipmentAtk, equipmentCrit) {
        this.jewels = [];
        this.properties = new Properties();
        this.properties.createProperties(equipmentHP, equipmentDefence, equipmentAtk, equipmentCrit);
    }
    var d = __define,c=Equipment,p=c.prototype;
    d(p, "fightPower"
        ,function () {
            var result = 100;
            this.jewels.forEach(function (jewel) { return result += jewel.fightPower; });
            return result;
        }
    );
    p.getTotalValueByName = function (propertyName) {
        var result = this.properties.getPropertyByName(propertyName);
        this.jewels.forEach(function (jewel) { return result += jewel.getTotalValueByName(propertyName); });
        return result;
    };
    p.addJewel = function (jewel) {
        this.jewels.push(jewel);
    };
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
//# sourceMappingURL=Equipment.js.map