"use strict";
cc._RF.push(module, '49beeCgEf5GYLf8URg19L0H', 'Login');
// Script/Login/Login.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    ID_editbox: {
      "default": null,
      type: cc.Node,
      displayName: "ID输入框",
      tooltip: "ID输入框"
    },
    Pass_editbox: {
      "default": null,
      type: cc.Node,
      displayName: "密码输入框",
      tooltip: "密码输入框"
    }
  },
  onLoad: function onLoad() {
    this.SystemModule = cc.find("SystemModule").getComponent("SystemModule"); // 加载 Prefab

    var that = this;
    cc.resources.load("Prefab/TopWin", function (err, prefab) {
      var newNode = cc.instantiate(prefab);
      that.TopWin = newNode;
    });
  },
  start: function start() {
    //加载预制
    this.domain();
  },
  domain: function domain() {
    this.TopWinPool = new cc.NodePool();
    var InstanceTopWin = cc.instantiate(this.TopWin); // 创建节点

    this.TopWinPool.put(InstanceTopWin); // 通过 put 接口放入对象池
  },
  LogIn: function LogIn() {
    var ID = this.ID_editbox.getComponent(cc.EditBox).string;
    var Pass = this.Pass_editbox.getComponent(cc.EditBox).string; //this.SystemModule.LogIn(ID, Pass);

    this.SystemModule.LogIn("haoya100@qq.com", "haoya1001");
  },
  Registered: function Registered() {
    //this.TopWin;
    //this.SystemModule.Registered(ID, Pass);
    this.SystemModule.Registered("haoya100@qq.com", "haoya1001");
  },
  SetOptions: function SetOptions() {
    var ID = "haoya100@qq.com";
    var SetString = "Avatar:8&volume:10&voice:10";
    this.SystemModule.SetUpdate(ID, SetString);
  },
  GameOff: function GameOff() {
    this.SystemModule.GameOff();
  } // update (dt) {},

});

cc._RF.pop();