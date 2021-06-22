cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad() {
        let that = this;
        //常驻节点
        cc.game.addPersistRootNode(this.node);
        //let display = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "display", "(Ljava/lang/String;)Ljava/lang/String;", "display");
        //console.log("display" + display);

        this.ws = new WebSocket("ws://106.54.86.156:3040");
        that.ws.onopen = function (event) {
            console.log("连接服务端");
        };
        that.ws.onmessage = function (event) {
            console.log("接收服务端信息:" + event.data);
        };
        that.ws.onerror = function (event) {
            console.log("异常关闭");
        };
        that.ws.onclose = function (event) {
            console.log("断开连接");
        };
    },

    start () {

    },

    //登录
    LogIn(ID, Pass) {
        let that = this;
        let data = {
            MessageType: 'LogIn',
            ID: ID,
            Pass: Pass,
        };
        let jsonStr = JSON.stringify(data);
        that.ws.send(jsonStr);
    },

    //注册
    Registered(ID, Pass) {
        let that = this;
        let data = {
            MessageType: 'Registered',
            Email: ID,
            Pass: Pass,
        };
        let jsonStr = JSON.stringify(data);
        that.ws.send(jsonStr);
    },

    //
    SetUpdate(ID, SetString) {
        let that = this;
        let data = {
            MessageType: 'SetUpdate',
            ID: ID,
            SetString: SetString,
        };
        let jsonStr = JSON.stringify(data);
        that.ws.send(jsonStr);
    },

    GameOff() {
        cc.game.end();
    },

    // update (dt) {},
});
