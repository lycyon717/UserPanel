
class BasicPanel extends egret.DisplayObjectContainer {

    static A_HEIGHT = 1600 * 0.6;
    static A_WIDTH = 900 * 0.6;

    private belowPanel: egret.Shape = new egret.Shape();
    private userIcon: egret.Bitmap = new egret.Bitmap();

    private showContainer = new egret.DisplayObjectContainer();

    constructor() {

        super();
        this.belowPanel.graphics.beginFill(0x000000, 0.5);
        this.belowPanel.graphics.drawRect(0, 0, BasicPanel.A_WIDTH, BasicPanel.A_HEIGHT);
        this.belowPanel.graphics.endFill();
        this.addChild(this.belowPanel);

        this.userIcon.texture = RES.getRes("wyz_jpg");
        this.userIcon.scaleX = 0.8;
        this.userIcon.scaleY = 0.8;
        this.userIcon.x = (BasicPanel.A_WIDTH - this.userIcon.width * 0.8) / 2;
        this.userIcon.y = 30;
        this.addChild(this.userIcon);

        var equIcon1 = new egret.Bitmap();
        equIcon1.texture = RES.getRes("zb1_png");
        equIcon1.y = 30;
        equIcon1.x = 5;
        equIcon1.width = 80;
        equIcon1.height = 80;
        this.addChild(equIcon1);

        var equIcon2 = new egret.Bitmap();
        equIcon2.texture = RES.getRes("zb2_png");
        equIcon2.y = 180;
        equIcon2.x = 5;
        equIcon2.width = 80;
        equIcon2.height = 80;
        this.addChild(equIcon2);

        var equIcon3 = new egret.Bitmap();
        equIcon3.texture = RES.getRes("zb3_png");
        equIcon3.y = 330;
        equIcon3.x = 5;
        equIcon3.width = 80;
        equIcon3.height = 80;
        this.addChild(equIcon3);

        var equIcon4 = new egret.Bitmap();
        equIcon4.texture = RES.getRes("zb4_png");
        equIcon4.y = 30;
        equIcon4.x = 455;
        equIcon4.width = 80;
        equIcon4.height = 80;
        this.addChild(equIcon4);

        var equIcon5 = new egret.Bitmap();
        equIcon5.texture = RES.getRes("zb5_png");
        equIcon5.y = 180;
        equIcon5.x = 455;
        equIcon5.width = 80;
        equIcon5.height = 80;
        this.addChild(equIcon5);

        var equIcon6 = new egret.Bitmap();
        equIcon6.texture = RES.getRes("zb6_png");
        equIcon6.y = 330;
        equIcon6.x = 455;
        equIcon6.width = 80;
        equIcon6.height = 80;
        this.addChild(equIcon6);


        this.showContainer = PropertyDisplayFactory.create(User.user);
        this.showContainer.x = (BasicPanel.A_WIDTH - this.userIcon.width * 0.8) / 2;
        this.showContainer.y = 600;
        this.addChild(this.showContainer);

        equIcon1.touchEnabled = true;
        equIcon2.touchEnabled = true;
        equIcon3.touchEnabled = true;
        equIcon4.touchEnabled = true;
        equIcon5.touchEnabled = true;
        equIcon6.touchEnabled = true;
        this.userIcon.touchEnabled = true;


        equIcon1.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {

            this.removeChild(this.showContainer);
            this.showContainer = PropertyDisplayFactory.create(User.user.equipments[0]);
            this.addChild(this.showContainer);
            this.showContainer.x = (BasicPanel.A_WIDTH - this.userIcon.width * 0.8) / 2;
            this.showContainer.y = 600;
        }, this);

        equIcon2.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {

            this.removeChild(this.showContainer);
            this.showContainer = PropertyDisplayFactory.create(User.user.equipments[1]);
            this.addChild(this.showContainer);
            this.showContainer.x = (BasicPanel.A_WIDTH - this.userIcon.width * 0.8) / 2;
            this.showContainer.y = 600;
        }, this);

        equIcon3.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {

            this.removeChild(this.showContainer);
            this.showContainer = PropertyDisplayFactory.create(User.user.equipments[2]);
            this.addChild(this.showContainer);
            this.showContainer.x = (BasicPanel.A_WIDTH - this.userIcon.width * 0.8) / 2;
            this.showContainer.y = 600;
        }, this);

        equIcon4.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {

            this.removeChild(this.showContainer);
            this.showContainer = PropertyDisplayFactory.create(User.user.equipments[3]);
            this.addChild(this.showContainer);
            this.showContainer.x = (BasicPanel.A_WIDTH - this.userIcon.width * 0.8) / 2;
            this.showContainer.y = 600;
        }, this);

        equIcon5.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {

            this.removeChild(this.showContainer);
            this.showContainer = PropertyDisplayFactory.create(User.user.equipments[4]);
            this.addChild(this.showContainer);
            this.showContainer.x = (BasicPanel.A_WIDTH - this.userIcon.width * 0.8) / 2;
            this.showContainer.y = 600;
        }, this);

        equIcon6.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {

            this.removeChild(this.showContainer);
            this.showContainer = PropertyDisplayFactory.create(User.user.equipments[5]);
            this.addChild(this.showContainer);
            this.showContainer.x = (BasicPanel.A_WIDTH - this.userIcon.width * 0.8) / 2;
            this.showContainer.y = 600;
        }, this);

        this.userIcon.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
            this.removeChild(this.showContainer);
            this.showContainer = PropertyDisplayFactory.create(User.user);
            this.addChild(this.showContainer);
            this.showContainer.x = (BasicPanel.A_WIDTH - this.userIcon.width * 0.8) / 2;
            this.showContainer.y = 600;
        }, this);

    }

}
