// TypeScript file
var PropertyDisplayFactory = (function () {
    function PropertyDisplayFactory() {
    }
    var d = __define,c=PropertyDisplayFactory,p=c.prototype;
    PropertyDisplayFactory.create = function (body) {
        if (!body.getTotalValueByName) {
            console.log("error");
            return;
        }
        var container = new egret.DisplayObjectContainer();
        var x = 0;
        var y = 0;
        for (var i = 0; i < body.properties.all.length; i++) {
            var tf = new egret.TextField();
            if (body.properties.all[i].isRate) {
                tf.text = body.properties.all[i].name + "：" + body.getTotalValueByName(i) / 10 + "%";
            }
            else {
                tf.text = body.properties.all[i].name + "：" + body.getTotalValueByName(i);
            }
            tf.x = x;
            tf.y = y;
            x += PropertyDisplayFactory.xDistance;
            if (x >= PropertyDisplayFactory.xDistance * 2) {
                y += PropertyDisplayFactory.yDistance;
                x = 0;
            }
            container.addChild(tf);
        }
        var fp = new egret.TextField();
        fp.text = "           战斗力：" + body.fightPower;
        fp.x = x;
        fp.y = y;
        container.addChild(fp);
        return container;
    };
    PropertyDisplayFactory.xDistance = 200;
    PropertyDisplayFactory.yDistance = 60;
    return PropertyDisplayFactory;
}());
egret.registerClass(PropertyDisplayFactory,'PropertyDisplayFactory');
//# sourceMappingURL=PropertyDisplayFactory.js.map