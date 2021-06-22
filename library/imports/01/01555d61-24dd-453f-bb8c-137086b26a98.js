"use strict";
cc._RF.push(module, '015551hJN1FP7uME3CGsmqY', 'SystemModule');
// Script/SystemComponents/SystemModule.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    var that = this; //常驻节点

    cc.game.addPersistRootNode(this.node); //let display = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "display", "(Ljava/lang/String;)Ljava/lang/String;", "display");
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
  start: function start() {},
  //登录
  LogIn: function LogIn(ID, Pass) {
    var that = this;
    var data = {
      MessageType: 'LogIn',
      ID: ID,
      Pass: Pass
    };
    var jsonStr = JSON.stringify(data);
    that.ws.send(jsonStr);
  },
  //注册
  Registered: function Registered(ID, Pass) {
    var that = this;
    var data = {
      MessageType: 'Registered',
      Email: ID,
      Pass: Pass
    };
    var jsonStr = JSON.stringify(data);
    that.ws.send(jsonStr);
  },
  //
  SetUpdate: function SetUpdate(ID, SetString) {
    var that = this;
    var data = {
      MessageType: 'SetUpdate',
      ID: ID,
      SetString: SetString
    };
    var jsonStr = JSON.stringify(data);
    that.ws.send(jsonStr);
  },
  GameOff: function GameOff() {
    cc.game.end();
  } // update (dt) {},

});

cc._RF.pop();