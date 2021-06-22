
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/GhostArrest/GhostArrest');
require('./assets/Script/Login/Login');
require('./assets/Script/SystemComponents/SystemModule');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Login/Login.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxMb2dpblxcTG9naW4uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJJRF9lZGl0Ym94IiwidHlwZSIsIk5vZGUiLCJkaXNwbGF5TmFtZSIsInRvb2x0aXAiLCJQYXNzX2VkaXRib3giLCJvbkxvYWQiLCJTeXN0ZW1Nb2R1bGUiLCJmaW5kIiwiZ2V0Q29tcG9uZW50IiwidGhhdCIsInJlc291cmNlcyIsImxvYWQiLCJlcnIiLCJwcmVmYWIiLCJuZXdOb2RlIiwiaW5zdGFudGlhdGUiLCJUb3BXaW4iLCJzdGFydCIsImRvbWFpbiIsIlRvcFdpblBvb2wiLCJOb2RlUG9vbCIsIkluc3RhbmNlVG9wV2luIiwicHV0IiwiTG9nSW4iLCJJRCIsIkVkaXRCb3giLCJzdHJpbmciLCJQYXNzIiwiUmVnaXN0ZXJlZCIsIlNldE9wdGlvbnMiLCJTZXRTdHJpbmciLCJTZXRVcGRhdGUiLCJHYW1lT2ZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sSUFGRDtBQUdSQyxNQUFBQSxXQUFXLEVBQUUsT0FITDtBQUlSQyxNQUFBQSxPQUFPLEVBQUU7QUFKRCxLQURKO0FBT1JDLElBQUFBLFlBQVksRUFBRTtBQUNWLGlCQUFTLElBREM7QUFFVkosTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLElBRkM7QUFHVkMsTUFBQUEsV0FBVyxFQUFFLE9BSEg7QUFJVkMsTUFBQUEsT0FBTyxFQUFFO0FBSkM7QUFQTixHQUhQO0FBbUJMRSxFQUFBQSxNQW5CSyxvQkFtQkk7QUFDTCxTQUFLQyxZQUFMLEdBQW9CWCxFQUFFLENBQUNZLElBQUgsQ0FBUSxjQUFSLEVBQXdCQyxZQUF4QixDQUFxQyxjQUFyQyxDQUFwQixDQURLLENBRUw7O0FBQ0EsUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQWQsSUFBQUEsRUFBRSxDQUFDZSxTQUFILENBQWFDLElBQWIsQ0FBa0IsZUFBbEIsRUFBbUMsVUFBVUMsR0FBVixFQUFlQyxNQUFmLEVBQXVCO0FBQ3RELFVBQUlDLE9BQU8sR0FBR25CLEVBQUUsQ0FBQ29CLFdBQUgsQ0FBZUYsTUFBZixDQUFkO0FBQ0FKLE1BQUFBLElBQUksQ0FBQ08sTUFBTCxHQUFjRixPQUFkO0FBQ0gsS0FIRDtBQUlILEdBM0JJO0FBNkJMRyxFQUFBQSxLQTdCSyxtQkE2Qkk7QUFDTDtBQUNBLFNBQUtDLE1BQUw7QUFDSCxHQWhDSTtBQWtDTEEsRUFBQUEsTUFsQ0ssb0JBa0NJO0FBQ0wsU0FBS0MsVUFBTCxHQUFrQixJQUFJeEIsRUFBRSxDQUFDeUIsUUFBUCxFQUFsQjtBQUNBLFFBQUlDLGNBQWMsR0FBRzFCLEVBQUUsQ0FBQ29CLFdBQUgsQ0FBZSxLQUFLQyxNQUFwQixDQUFyQixDQUZLLENBRTZDOztBQUNsRCxTQUFLRyxVQUFMLENBQWdCRyxHQUFoQixDQUFvQkQsY0FBcEIsRUFISyxDQUdnQztBQUN4QyxHQXRDSTtBQXdDTEUsRUFBQUEsS0F4Q0ssbUJBd0NHO0FBQ0osUUFBSUMsRUFBRSxHQUFHLEtBQUt6QixVQUFMLENBQWdCUyxZQUFoQixDQUE2QmIsRUFBRSxDQUFDOEIsT0FBaEMsRUFBeUNDLE1BQWxEO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLEtBQUt2QixZQUFMLENBQWtCSSxZQUFsQixDQUErQmIsRUFBRSxDQUFDOEIsT0FBbEMsRUFBMkNDLE1BQXRELENBRkksQ0FLSjs7QUFDQSxTQUFLcEIsWUFBTCxDQUFrQmlCLEtBQWxCLENBQXdCLGlCQUF4QixFQUEyQyxXQUEzQztBQUNILEdBL0NJO0FBaURMSyxFQUFBQSxVQWpESyx3QkFpRFE7QUFDVDtBQUVBO0FBQ0EsU0FBS3RCLFlBQUwsQ0FBa0JzQixVQUFsQixDQUE2QixpQkFBN0IsRUFBK0MsV0FBL0M7QUFDSCxHQXRESTtBQXdETEMsRUFBQUEsVUF4REssd0JBd0RRO0FBQ1QsUUFBSUwsRUFBRSxHQUFHLGlCQUFUO0FBQ0EsUUFBSU0sU0FBUyxHQUFHLDZCQUFoQjtBQUNBLFNBQUt4QixZQUFMLENBQWtCeUIsU0FBbEIsQ0FBNEJQLEVBQTVCLEVBQWdDTSxTQUFoQztBQUNILEdBNURJO0FBOERMRSxFQUFBQSxPQTlESyxxQkE4REs7QUFDTixTQUFLMUIsWUFBTCxDQUFrQjBCLE9BQWxCO0FBQ0gsR0FoRUksQ0FpRUw7O0FBakVLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgSURfZWRpdGJveDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJJROi+k+WFpeahhlwiLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIklE6L6T5YWl5qGGXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBQYXNzX2VkaXRib3g6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwi5a+G56CB6L6T5YWl5qGGXCIsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5a+G56CB6L6T5YWl5qGGXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLlN5c3RlbU1vZHVsZSA9IGNjLmZpbmQoXCJTeXN0ZW1Nb2R1bGVcIikuZ2V0Q29tcG9uZW50KFwiU3lzdGVtTW9kdWxlXCIpO1xyXG4gICAgICAgIC8vIOWKoOi9vSBQcmVmYWJcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJQcmVmYWIvVG9wV2luXCIsIGZ1bmN0aW9uIChlcnIsIHByZWZhYikge1xyXG4gICAgICAgICAgICB2YXIgbmV3Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgIHRoYXQuVG9wV2luID0gbmV3Tm9kZTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8v5Yqg6L296aKE5Yi2XHJcbiAgICAgICAgdGhpcy5kb21haW4oKTtcclxuICAgIH0sXHJcblxyXG4gICAgZG9tYWluKCkge1xyXG4gICAgICAgIHRoaXMuVG9wV2luUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xyXG4gICAgICAgIGxldCBJbnN0YW5jZVRvcFdpbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuVG9wV2luKTsgLy8g5Yib5bu66IqC54K5XHJcbiAgICAgICAgdGhpcy5Ub3BXaW5Qb29sLnB1dChJbnN0YW5jZVRvcFdpbik7IC8vIOmAmui/hyBwdXQg5o6l5Y+j5pS+5YWl5a+56LGh5rGgXHJcbiAgICB9LFxyXG5cclxuICAgIExvZ0luKCkge1xyXG4gICAgICAgIGxldCBJRCA9IHRoaXMuSURfZWRpdGJveC5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIGxldCBQYXNzID0gdGhpcy5QYXNzX2VkaXRib3guZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuXHJcblxyXG4gICAgICAgIC8vdGhpcy5TeXN0ZW1Nb2R1bGUuTG9nSW4oSUQsIFBhc3MpO1xyXG4gICAgICAgIHRoaXMuU3lzdGVtTW9kdWxlLkxvZ0luKFwiaGFveWExMDBAcXEuY29tXCIsIFwiaGFveWExMDAxXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBSZWdpc3RlcmVkKCkge1xyXG4gICAgICAgIC8vdGhpcy5Ub3BXaW47XHJcblxyXG4gICAgICAgIC8vdGhpcy5TeXN0ZW1Nb2R1bGUuUmVnaXN0ZXJlZChJRCwgUGFzcyk7XHJcbiAgICAgICAgdGhpcy5TeXN0ZW1Nb2R1bGUuUmVnaXN0ZXJlZChcImhhb3lhMTAwQHFxLmNvbVwiLFwiaGFveWExMDAxXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBTZXRPcHRpb25zKCkge1xyXG4gICAgICAgIGxldCBJRCA9IFwiaGFveWExMDBAcXEuY29tXCI7XHJcbiAgICAgICAgbGV0IFNldFN0cmluZyA9IFwiQXZhdGFyOjgmdm9sdW1lOjEwJnZvaWNlOjEwXCI7XHJcbiAgICAgICAgdGhpcy5TeXN0ZW1Nb2R1bGUuU2V0VXBkYXRlKElELCBTZXRTdHJpbmcpO1xyXG4gICAgfSxcclxuXHJcbiAgICBHYW1lT2ZmKCkge1xyXG4gICAgICAgIHRoaXMuU3lzdGVtTW9kdWxlLkdhbWVPZmYoKTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SystemComponents/SystemModule.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTeXN0ZW1Db21wb25lbnRzXFxTeXN0ZW1Nb2R1bGUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJ0aGF0IiwiZ2FtZSIsImFkZFBlcnNpc3RSb290Tm9kZSIsIm5vZGUiLCJ3cyIsIldlYlNvY2tldCIsIm9ub3BlbiIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsIm9ubWVzc2FnZSIsImRhdGEiLCJvbmVycm9yIiwib25jbG9zZSIsInN0YXJ0IiwiTG9nSW4iLCJJRCIsIlBhc3MiLCJNZXNzYWdlVHlwZSIsImpzb25TdHIiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZCIsIlJlZ2lzdGVyZWQiLCJFbWFpbCIsIlNldFVwZGF0ZSIsIlNldFN0cmluZyIsIkdhbWVPZmYiLCJlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBTUxDLEVBQUFBLE1BTkssb0JBTUk7QUFDTCxRQUFJQyxJQUFJLEdBQUcsSUFBWCxDQURLLENBRUw7O0FBQ0FMLElBQUFBLEVBQUUsQ0FBQ00sSUFBSCxDQUFRQyxrQkFBUixDQUEyQixLQUFLQyxJQUFoQyxFQUhLLENBSUw7QUFDQTs7QUFFQSxTQUFLQyxFQUFMLEdBQVUsSUFBSUMsU0FBSixDQUFjLHlCQUFkLENBQVY7O0FBQ0FMLElBQUFBLElBQUksQ0FBQ0ksRUFBTCxDQUFRRSxNQUFSLEdBQWlCLFVBQVVDLEtBQVYsRUFBaUI7QUFDOUJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDSCxLQUZEOztBQUdBVCxJQUFBQSxJQUFJLENBQUNJLEVBQUwsQ0FBUU0sU0FBUixHQUFvQixVQUFVSCxLQUFWLEVBQWlCO0FBQ2pDQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFhRixLQUFLLENBQUNJLElBQS9CO0FBQ0gsS0FGRDs7QUFHQVgsSUFBQUEsSUFBSSxDQUFDSSxFQUFMLENBQVFRLE9BQVIsR0FBa0IsVUFBVUwsS0FBVixFQUFpQjtBQUMvQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNILEtBRkQ7O0FBR0FULElBQUFBLElBQUksQ0FBQ0ksRUFBTCxDQUFRUyxPQUFSLEdBQWtCLFVBQVVOLEtBQVYsRUFBaUI7QUFDL0JDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDSCxLQUZEO0FBR0gsR0ExQkk7QUE0QkxLLEVBQUFBLEtBNUJLLG1CQTRCSSxDQUVSLENBOUJJO0FBZ0NMO0FBQ0FDLEVBQUFBLEtBakNLLGlCQWlDQ0MsRUFqQ0QsRUFpQ0tDLElBakNMLEVBaUNXO0FBQ1osUUFBSWpCLElBQUksR0FBRyxJQUFYO0FBQ0EsUUFBSVcsSUFBSSxHQUFHO0FBQ1BPLE1BQUFBLFdBQVcsRUFBRSxPQUROO0FBRVBGLE1BQUFBLEVBQUUsRUFBRUEsRUFGRztBQUdQQyxNQUFBQSxJQUFJLEVBQUVBO0FBSEMsS0FBWDtBQUtBLFFBQUlFLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWVWLElBQWYsQ0FBZDtBQUNBWCxJQUFBQSxJQUFJLENBQUNJLEVBQUwsQ0FBUWtCLElBQVIsQ0FBYUgsT0FBYjtBQUNILEdBMUNJO0FBNENMO0FBQ0FJLEVBQUFBLFVBN0NLLHNCQTZDTVAsRUE3Q04sRUE2Q1VDLElBN0NWLEVBNkNnQjtBQUNqQixRQUFJakIsSUFBSSxHQUFHLElBQVg7QUFDQSxRQUFJVyxJQUFJLEdBQUc7QUFDUE8sTUFBQUEsV0FBVyxFQUFFLFlBRE47QUFFUE0sTUFBQUEsS0FBSyxFQUFFUixFQUZBO0FBR1BDLE1BQUFBLElBQUksRUFBRUE7QUFIQyxLQUFYO0FBS0EsUUFBSUUsT0FBTyxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVYsSUFBZixDQUFkO0FBQ0FYLElBQUFBLElBQUksQ0FBQ0ksRUFBTCxDQUFRa0IsSUFBUixDQUFhSCxPQUFiO0FBQ0gsR0F0REk7QUF3REw7QUFDQU0sRUFBQUEsU0F6REsscUJBeURLVCxFQXpETCxFQXlEU1UsU0F6RFQsRUF5RG9CO0FBQ3JCLFFBQUkxQixJQUFJLEdBQUcsSUFBWDtBQUNBLFFBQUlXLElBQUksR0FBRztBQUNQTyxNQUFBQSxXQUFXLEVBQUUsV0FETjtBQUVQRixNQUFBQSxFQUFFLEVBQUVBLEVBRkc7QUFHUFUsTUFBQUEsU0FBUyxFQUFFQTtBQUhKLEtBQVg7QUFLQSxRQUFJUCxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixJQUFmLENBQWQ7QUFDQVgsSUFBQUEsSUFBSSxDQUFDSSxFQUFMLENBQVFrQixJQUFSLENBQWFILE9BQWI7QUFDSCxHQWxFSTtBQW9FTFEsRUFBQUEsT0FwRUsscUJBb0VLO0FBQ05oQyxJQUFBQSxFQUFFLENBQUNNLElBQUgsQ0FBUTJCLEdBQVI7QUFDSCxHQXRFSSxDQXdFTDs7QUF4RUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAvL+W4uOmpu+iKgueCuVxyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgLy9sZXQgZGlzcGxheSA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcImRpc3BsYXlcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nO1wiLCBcImRpc3BsYXlcIik7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImRpc3BsYXlcIiArIGRpc3BsYXkpO1xyXG5cclxuICAgICAgICB0aGlzLndzID0gbmV3IFdlYlNvY2tldChcIndzOi8vMTA2LjU0Ljg2LjE1NjozMDQwXCIpO1xyXG4gICAgICAgIHRoYXQud3Mub25vcGVuID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+e5o6l5pyN5Yqh56uvXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhhdC53cy5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmjqXmlLbmnI3liqHnq6/kv6Hmga86XCIgKyBldmVudC5kYXRhKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoYXQud3Mub25lcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW8guW4uOWFs+mXrVwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoYXQud3Mub25jbG9zZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaWreW8gOi/nuaOpVwiKTtcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvL+eZu+W9lVxyXG4gICAgTG9nSW4oSUQsIFBhc3MpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIE1lc3NhZ2VUeXBlOiAnTG9nSW4nLFxyXG4gICAgICAgICAgICBJRDogSUQsXHJcbiAgICAgICAgICAgIFBhc3M6IFBhc3MsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQganNvblN0ciA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgIHRoYXQud3Muc2VuZChqc29uU3RyKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/ms6jlhoxcclxuICAgIFJlZ2lzdGVyZWQoSUQsIFBhc3MpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIE1lc3NhZ2VUeXBlOiAnUmVnaXN0ZXJlZCcsXHJcbiAgICAgICAgICAgIEVtYWlsOiBJRCxcclxuICAgICAgICAgICAgUGFzczogUGFzcyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBqc29uU3RyID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgdGhhdC53cy5zZW5kKGpzb25TdHIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL1xyXG4gICAgU2V0VXBkYXRlKElELCBTZXRTdHJpbmcpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIE1lc3NhZ2VUeXBlOiAnU2V0VXBkYXRlJyxcclxuICAgICAgICAgICAgSUQ6IElELFxyXG4gICAgICAgICAgICBTZXRTdHJpbmc6IFNldFN0cmluZyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBqc29uU3RyID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgdGhhdC53cy5zZW5kKGpzb25TdHIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBHYW1lT2ZmKCkge1xyXG4gICAgICAgIGNjLmdhbWUuZW5kKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GhostArrest/GhostArrest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7219c3lmblB2JbGY3r7HMC7', 'GhostArrest');
// Script/GhostArrest/GhostArrest.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    gatetime: 0,
    Grade: 2,
    NewCoverPrefab: cc.Prefab,
    DKPrefab: cc.Prefab,
    TimeLeft: cc.Node,
    RemainingSpace: cc.Node,
    IntegralNode: cc.Node
  },
  onLoad: function onLoad() {
    //关卡难度，主要与生成的道具复杂数量有关,1简单、2普通、3困难
    //this.Grade = 2;
    this.trap = 0; //生成矩阵

    var matrix_X_max = 19;
    var matrix_Y_max = 9;
    this.matrix = [];

    for (var x = 0; x <= matrix_X_max; x++) {
      for (var y = 0; y <= matrix_Y_max; y++) {
        var setX = x * 60 + 30;
        var setY = y * 60 + 30;
        this.matrix.push([x, y, setX, setY, false, false, null]); //格子坐标x，格子坐标y，像素坐标x，像素坐标y，是否炸弹，覆盖层判断打开，格子节点
      }

      ;
    }

    ; //生成炸弹,列表

    if (this.Grade == 1) {
      this.trap = 5;
    }

    if (this.Grade == 2) {
      this.trap = 10;
    }

    if (this.Grade == 3) {
      this.trap = 15;
    }

    ;
    var matrix_max = Number(this.matrix.length) - 1;
    this.traplist = [];

    for (var i = 0; i < this.trap; i++) {
      var suijimake = Math.floor(Math.random() * matrix_max) + 1;

      if (this.matrix[suijimake][4]) {
        i += -1;
      }

      if (this.matrix[suijimake][4] != true) {
        this.matrix[suijimake][4] = true;
        this.traplist.push([this.matrix[suijimake][2], this.matrix[suijimake][3], this.matrix[suijimake][0], this.matrix[suijimake][1]]);
      }

      ;
    }

    ; //点击节点

    this.thenode = cc.find('Canvas/Main Display/GridMap'); //已经打开的列表

    this.openlist = []; //打开窗口，限制点击事件

    this.winisopen = false; //幽灵数量

    this.IntegralNode.getComponent(cc.Label).string = "幽灵数量：" + this.trap; //剩余方片数量

    this.RemainingSpace.getComponent(cc.Label).string = "剩余空格：" + String(this.matrix.length - this.openlist.length - this.traplist.length); //剩余时间

    this.TimeLeft.getComponent(cc.Label).string = "剩余时间：" + this.gatetime;
  },
  start: function start() {
    //生成覆盖
    for (var i = 0; i < this.matrix.length; i++) {
      var NewCover = cc.instantiate(this.NewCoverPrefab);
      NewCover.parent = cc.find('Canvas/Main Display/GridMap');
      NewCover.setPosition(this.matrix[i][2], this.matrix[i][3]);
      this.matrix[i][6] = NewCover;
    }

    ; //for (let i = 0; i < this.traplist.length; i++) {
    //    let NewCover = cc.instantiate(this.DKPrefab);
    //    NewCover.parent = cc.find('Canvas/Main Display/GridMap');
    //    NewCover.setPosition(this.traplist[i][0], this.traplist[i][1]);
    //    this.matrix[i][6] = NewCover;
    //};

    this.theON();
    var the = this;
    the.schedule(function () {
      if (this.winisopen != true) {
        this.gatetime += -1;
        this.TimeLeft.getComponent(cc.Label).string = "剩余时间：" + this.gatetime;

        if (this.gatetime == 0) {
          this.winisopen = true;
        }

        ;
      }

      ;
    }, 1, cc.macro.REPEAT_FOREVER, 0);
  },
  //开启注册激活
  theON: function theON() {
    this.thenode.on(cc.Node.EventType.TOUCH_START, function (event) {
      //if (this.winisopen != true) {
      var nodegetLocation = this.thenode.convertToNodeSpaceAR(event.getLocation());
      var tiledx = Math.floor(nodegetLocation.x / 60);
      var tiledy = Math.floor(nodegetLocation.y / 60);
      var theGrild = null;
      var theGrildx = null;
      var theGrildy = null; //cc.log("点击位置：" + tiledx + "" + tiledy);

      if (this.winisopen != true) {
        //判断是否重复打开
        var openisoff = false;

        for (var i = 0; i < this.openlist.length; i++) {
          if (tiledx === this.openlist[i][0] && tiledy === this.openlist[i][1]) {
            openisoff = true;
            break;
          }

          ;
        }

        ; //如果未打开，添加该位置到已打开列表

        if (openisoff == false && tiledx >= 0 && tiledy >= 0) {
          this.openlist.push([tiledx, tiledy]);
        }

        ; //判断点到的是不是炸弹

        var opentheTrap = false;

        for (var _i = 0; _i < this.matrix.length; _i++) {
          if (tiledx === this.matrix[_i][0] && tiledy === this.matrix[_i][1]) {
            if (this.matrix[_i][4]) {
              opentheTrap = true;
            }

            ; //使覆盖层判断开关打开

            this.matrix[_i][5] = true;
            theGrild = this.matrix[_i][6];
            theGrildx = this.matrix[_i][2];
            theGrildy = this.matrix[_i][3];
          }

          ;
        }

        ;

        if (openisoff == false && opentheTrap) {
          theGrild.getChildByName("Cover").opacity = 0;
          var NewTrap = cc.instantiate(this.DKPrefab);
          NewTrap.parent = cc.find('Canvas/Main Display/GridMap');
          NewTrap.setPosition(theGrildx, theGrildy);
          this.winisopen = true;
        }

        ;

        if (openisoff == false && opentheTrap != true) {
          theGrild.getChildByName("Cover").opacity = 0;
          theGrild.getChildByName("TheGrid").opacity = 50;
          theGrild.getChildByName("Number").opacity = 200; //计算周围炸弹数量

          var theTrapNumber = 0;
          var around = [[tiledx - 1, tiledy - 1], [tiledx, tiledy - 1], [tiledx + 1, tiledy - 1], [tiledx - 1, tiledy], [tiledx + 1, tiledy], [tiledx - 1, tiledy + 1], [tiledx, tiledy + 1], [tiledx + 1, tiledy + 1]];

          for (var _i2 = 0; _i2 < around.length; _i2++) {
            for (var o = 0; o < this.matrix.length; o++) {
              if (around[_i2][0] == this.matrix[o][0] && around[_i2][1] == this.matrix[o][1] && this.matrix[o][4]) {
                theTrapNumber += 1;
              }

              ;
            }

            ;
          }

          ;
          theGrild.getChildByName("Number").getComponent(cc.Label).string = theTrapNumber;

          if (theTrapNumber == 0) {
            theGrild.getChildByName("Number").opacity = 0;
            this.Openthezero(tiledx, tiledy);
          }

          ; //修改方片计数

          var Covernumber = String(this.matrix.length - this.openlist.length - this.traplist.length);
          this.RemainingSpace.getComponent(cc.Label).string = "剩余空格：" + Covernumber; //消除周围已经8方向打开的数字

          var rimnumber = [[tiledx - 1, tiledy - 1], [tiledx, tiledy - 1], [tiledx + 1, tiledy - 1], [tiledx - 1, tiledy], [tiledx + 1, tiledy], [tiledx - 1, tiledy + 1], [tiledx, tiledy + 1], [tiledx + 1, tiledy + 1]];

          for (var _o = 0; _o < rimnumber.length; _o++) {
            var rimnumberx = rimnumber[_o][0];
            var rimnumbery = rimnumber[_o][1];
            var rimnumber2 = [[rimnumberx - 1, rimnumbery - 1], [rimnumberx, rimnumbery - 1], [rimnumberx + 1, rimnumbery - 1], [rimnumberx - 1, rimnumbery], [rimnumberx + 1, rimnumbery], [rimnumberx - 1, rimnumbery + 1], [rimnumberx, rimnumbery + 1], [rimnumberx + 1, rimnumbery + 1]];
            var therimison = true;

            for (var _i3 = 0; _i3 < rimnumber2.length; _i3++) {
              for (var u = 0; u < this.matrix.length; u++) {
                if (rimnumber2[_i3][0] === this.matrix[u][0] && rimnumber2[_i3][1] === this.matrix[u][1] && this.matrix[u][5] === false) {
                  therimison = false;
                }

                ;
              }

              ;
            }

            ;

            if (therimison) {
              for (var _u = 0; _u < this.matrix.length; _u++) {
                if (rimnumberx === this.matrix[_u][0] && rimnumbery === this.matrix[_u][1]) {
                  this.matrix[_u][6].getChildByName("Number").opacity = 0;
                }

                ;
              }

              ;
            }

            ;
          }

          ;
        }

        ; ////完成
        //if (Number(this.openlist.length) == (Number(this.matrix.length) - Number(this.trap)) && opentheTrap != true) {
        //    //音效
        //    //cc.find('permanent/click1bgm').getComponent(cc.AudioSource).play();
        //    this.passthegate = true;
        //    this.winisopen = true;
        //    //cc.find('permanent').getComponent('permanent').passtheGate2 = true;
        //    for (let o = 0; o < this.traplist.length; o++) {
        //        let NewTrap = cc.instantiate(this.NewTrapPrefab);
        //        NewTrap.parent = cc.find('Canvas/tiledmap/appear');
        //        NewTrap.setPosition(this.traplist[o][0], this.traplist[o][1]);
        //    };
        //    let the = this;
        //    the.scheduleOnce(function () {
        //        let win_2Prefab = cc.instantiate(this.win_2Prefab);
        //        win_2Prefab.parent = this.node;
        //        win_2Prefab.setPosition(0, 0);
        //        win_2Prefab.size = 0;
        //        win_2Prefab.getComponent('win_2').tryopacity(255);
        //        win_2Prefab.getComponent('win_2').trysize(1);
        //    }, 0.8);
        //};
        ////音效
        ////cc.find('permanent/click2bgm').getComponent(cc.AudioSource).play();
      }

      ;
    }, this);
  },
  Openthezero: function Openthezero(TheLatticeX, TheLatticeY) {
    var around = [[TheLatticeX, TheLatticeY - 1], [TheLatticeX - 1, TheLatticeY], [TheLatticeX, TheLatticeY + 1], [TheLatticeX + 1, TheLatticeY]];

    for (var i = 0; i < around.length; i++) {
      if (around[i][0] >= 0 && around[i][1] >= 0 && around[i][0] <= 19 && around[i][1] <= 9) {
        var IsOpen = false;

        for (var o = 0; o < this.openlist.length; o++) {
          if (around[i][0] == this.openlist[o][0] && around[i][1] == this.openlist[o][1]) {
            IsOpen = true;
          }

          if (o == this.openlist.length - 1 && IsOpen != true) {
            var theGrild = null;
            this.openlist.push([around[i][0], around[i][1]]);

            for (var c = 0; c < this.matrix.length; c++) {
              if (around[i][0] === this.matrix[c][0] && around[i][1] === this.matrix[c][1]) {
                //使覆盖层判断开关打开
                this.matrix[c][5] = true;
                theGrild = this.matrix[c][6];
              }

              ;
            }

            ;
            var aroundagain = [[around[i][0] - 1, around[i][1] - 1], [around[i][0], around[i][1] - 1], [around[i][0] + 1, around[i][1] - 1], [around[i][0] - 1, around[i][1]], [around[i][0] + 1, around[i][1]], [around[i][0] - 1, around[i][1] + 1], [around[i][0], around[i][1] + 1], [around[i][0] + 1, around[i][1] + 1]]; //计算周围炸弹数量

            var theTrapNumber = 0;

            for (var q = 0; q < aroundagain.length; q++) {
              for (var p = 0; p < this.matrix.length; p++) {
                if (aroundagain[q][0] == this.matrix[p][0] && aroundagain[q][1] == this.matrix[p][1] && this.matrix[p][4]) {
                  theTrapNumber += 1;
                }

                ;
              }

              ;

              if (q == aroundagain.length - 1) {
                theGrild.getChildByName("Cover").opacity = 0;
                theGrild.getChildByName("TheGrid").opacity = 50;
                theGrild.getChildByName("Number").opacity = 200;
                theGrild.getChildByName("Number").getComponent(cc.Label).string = theTrapNumber; //修改方片计数

                var Covernumber = String(this.matrix.length - this.openlist.length - this.traplist.length); //消除周围已经8方向打开的数字

                var rimnumber = [[around[i][0] - 1, around[i][1] - 1], [around[i][0], around[i][1] - 1], [around[i][0] + 1, around[i][1] - 1], [around[i][0] - 1, around[i][1]], [around[i][0] + 1, around[i][1]], [around[i][0] - 1, around[i][1] + 1], [around[i][0], around[i][1] + 1], [around[i][0] + 1, around[i][1] + 1]];

                for (var a = 0; a < rimnumber.length; a++) {
                  var rimnumberx = rimnumber[a][0];
                  var rimnumbery = rimnumber[a][1];
                  var rimnumber2 = [[rimnumberx - 1, rimnumbery - 1], [rimnumberx, rimnumbery - 1], [rimnumberx + 1, rimnumbery - 1], [rimnumberx - 1, rimnumbery], [rimnumberx + 1, rimnumbery], [rimnumberx - 1, rimnumbery + 1], [rimnumberx, rimnumbery + 1], [rimnumberx + 1, rimnumbery + 1]];
                  var therimison = true;

                  for (var b = 0; b < rimnumber2.length; b++) {
                    for (var u = 0; u < this.matrix.length; u++) {
                      if (rimnumber2[b][0] === this.matrix[u][0] && rimnumber2[b][1] === this.matrix[u][1] && this.matrix[u][5] === false) {
                        therimison = false;
                      }

                      ;
                    }

                    ;
                  }

                  ;

                  if (therimison) {
                    for (var _u2 = 0; _u2 < this.matrix.length; _u2++) {
                      if (rimnumberx === this.matrix[_u2][0] && rimnumbery === this.matrix[_u2][1]) {
                        this.matrix[_u2][6].getChildByName("Number").opacity = 0;
                      }

                      ;
                    }

                    ;
                  }

                  ;
                }

                ;
              }

              ;

              if (q == aroundagain.length - 1 && theTrapNumber == 0) {
                theGrild.getChildByName("Number").opacity = 0;
                this.Openthezero(around[i][0], around[i][1]);
              }
            }

            ;
          }
        }

        ;
      }

      ;
    }

    ;
  },
  Again: function Again() {
    cc.director.loadScene("Scene/GhostArrest");
  },
  GameOver: function GameOver() {
    cc.game.end();
  } // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHaG9zdEFycmVzdFxcR2hvc3RBcnJlc3QuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJnYXRldGltZSIsIkdyYWRlIiwiTmV3Q292ZXJQcmVmYWIiLCJQcmVmYWIiLCJES1ByZWZhYiIsIlRpbWVMZWZ0IiwiTm9kZSIsIlJlbWFpbmluZ1NwYWNlIiwiSW50ZWdyYWxOb2RlIiwib25Mb2FkIiwidHJhcCIsIm1hdHJpeF9YX21heCIsIm1hdHJpeF9ZX21heCIsIm1hdHJpeCIsIngiLCJ5Iiwic2V0WCIsInNldFkiLCJwdXNoIiwibWF0cml4X21heCIsIk51bWJlciIsImxlbmd0aCIsInRyYXBsaXN0IiwiaSIsInN1aWppbWFrZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRoZW5vZGUiLCJmaW5kIiwib3Blbmxpc3QiLCJ3aW5pc29wZW4iLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsIlN0cmluZyIsInN0YXJ0IiwiTmV3Q292ZXIiLCJpbnN0YW50aWF0ZSIsInBhcmVudCIsInNldFBvc2l0aW9uIiwidGhlT04iLCJ0aGUiLCJzY2hlZHVsZSIsIm1hY3JvIiwiUkVQRUFUX0ZPUkVWRVIiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiZXZlbnQiLCJub2RlZ2V0TG9jYXRpb24iLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsImdldExvY2F0aW9uIiwidGlsZWR4IiwidGlsZWR5IiwidGhlR3JpbGQiLCJ0aGVHcmlsZHgiLCJ0aGVHcmlsZHkiLCJvcGVuaXNvZmYiLCJvcGVudGhlVHJhcCIsImdldENoaWxkQnlOYW1lIiwib3BhY2l0eSIsIk5ld1RyYXAiLCJ0aGVUcmFwTnVtYmVyIiwiYXJvdW5kIiwibyIsIk9wZW50aGV6ZXJvIiwiQ292ZXJudW1iZXIiLCJyaW1udW1iZXIiLCJyaW1udW1iZXJ4IiwicmltbnVtYmVyeSIsInJpbW51bWJlcjIiLCJ0aGVyaW1pc29uIiwidSIsIlRoZUxhdHRpY2VYIiwiVGhlTGF0dGljZVkiLCJJc09wZW4iLCJjIiwiYXJvdW5kYWdhaW4iLCJxIiwicCIsImEiLCJiIiwiQWdhaW4iLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIkdhbWVPdmVyIiwiZ2FtZSIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBRSxDQURGO0FBRVJDLElBQUFBLEtBQUssRUFBRSxDQUZDO0FBR1JDLElBQUFBLGNBQWMsRUFBRU4sRUFBRSxDQUFDTyxNQUhYO0FBSVJDLElBQUFBLFFBQVEsRUFBRVIsRUFBRSxDQUFDTyxNQUpMO0FBS1JFLElBQUFBLFFBQVEsRUFBRVQsRUFBRSxDQUFDVSxJQUxMO0FBTVJDLElBQUFBLGNBQWMsRUFBRVgsRUFBRSxDQUFDVSxJQU5YO0FBT1JFLElBQUFBLFlBQVksRUFBRVosRUFBRSxDQUFDVTtBQVBULEdBSFA7QUFhTEcsRUFBQUEsTUFiSyxvQkFhSTtBQUNMO0FBQ0E7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FBWixDQUhLLENBS0w7O0FBQ0EsUUFBSUMsWUFBWSxHQUFHLEVBQW5CO0FBQ0EsUUFBSUMsWUFBWSxHQUFHLENBQW5CO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJSCxZQUFyQixFQUFtQ0csQ0FBQyxFQUFwQyxFQUF3QztBQUNwQyxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUlILFlBQXJCLEVBQW1DRyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLFlBQUlDLElBQUksR0FBR0YsQ0FBQyxHQUFHLEVBQUosR0FBUyxFQUFwQjtBQUNBLFlBQUlHLElBQUksR0FBR0YsQ0FBQyxHQUFHLEVBQUosR0FBUyxF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QTFCLElBQStCMEMsYUFBYSxJQUFJLENBQXBELEVBQXVEO0FBQ25EUixnQkFBQUEsUUFBUSxDQUFDSyxjQUFULENBQXdCLFFBQXhCLEVBQWtDQyxPQUFsQyxHQUE0QyxDQUE1QztBQUNBLHFCQUFLSyxXQUFMLENBQWlCRixNQUFNLENBQUN6QyxDQUFELENBQU4sQ0FBVSxDQUFWLENBQWpCLEVBQStCeUMsTUFBTSxDQUFDekMsQ0FBRCxDQUFOLENBQVUsQ0FBVixDQUEvQjtBQUNIO0FBQ0o7O0FBQUE7QUFDSjtBQUNKOztBQUFBO0FBQ0o7O0FBQUE7QUFDSjs7QUFBQTtBQUNKLEdBMVNJO0FBNFNMNEQsRUFBQUEsS0E1U0ssbUJBNFNFO0FBQ0h2RixJQUFBQSxFQUFFLENBQUN3RixRQUFILENBQVlDLFNBQVosQ0FBc0IsbUJBQXRCO0FBQ0gsR0E5U0k7QUFnVExDLEVBQUFBLFFBaFRLLHNCQWdUTTtBQUNQMUYsSUFBQUEsRUFBRSxDQUFDMkYsSUFBSCxDQUFRQyxHQUFSO0FBQ0gsR0FsVEksQ0FtVEw7O0FBblRLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ2F0ZXRpbWU6IDAsXHJcbiAgICAgICAgR3JhZGU6IDIsXHJcbiAgICAgICAgTmV3Q292ZXJQcmVmYWI6IGNjLlByZWZhYixcclxuICAgICAgICBES1ByZWZhYjogY2MuUHJlZmFiLFxyXG4gICAgICAgIFRpbWVMZWZ0OiBjYy5Ob2RlLFxyXG4gICAgICAgIFJlbWFpbmluZ1NwYWNlOiBjYy5Ob2RlLFxyXG4gICAgICAgIEludGVncmFsTm9kZTogY2MuTm9kZVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy/lhbPljaHpmr7luqbvvIzkuLvopoHkuI7nlJ/miJDnmoTpgZPlhbflpI3mnYLmlbDph4/mnInlhbMsMeeugOWNleOAgTLmma7pgJrjgIEz5Zuw6Zq+XHJcbiAgICAgICAgLy90aGlzLkdyYWRlID0gMjtcclxuICAgICAgICB0aGlzLnRyYXAgPSAwO1xyXG5cclxuICAgICAgICAvL+eUn+aIkOefqemYtVxyXG4gICAgICAgIHZhciBtYXRyaXhfWF9tYXggPSAxOTtcclxuICAgICAgICB2YXIgbWF0cml4X1lfbWF4ID0gOTtcclxuICAgICAgICB0aGlzLm1hdHJpeCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDw9IG1hdHJpeF9YX21heDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDw9IG1hdHJpeF9ZX21heDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2V0WCA9IHggKiA2MCArIDMwO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNldFkgPSB5ICogNjAgKyAzMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0cml4LnB1c2goW3gsIHksIHNldFgsIHNldFksIGZhbHNlLCBmYWxzZSwgbnVsbF0pOy8v5qC85a2Q5Z2Q5qCHeO+8jOagvOWtkOWdkOagh3nvvIzlg4/ntKDlnZDmoId477yM5YOP57Sg5Z2Q5qCHee+8jOaYr+WQpueCuOW8ue+8jOimhuebluWxguWIpOaWreaJk+W8gO+8jOagvOWtkOiKgueCuVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v55Sf5oiQ54K45by5LOWIl+ihqFxyXG4gICAgICAgIGlmICh0aGlzLkdyYWRlID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy50cmFwID0gNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuR3JhZGUgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLnRyYXAgPSAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuR3JhZGUgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLnRyYXAgPSAxNTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBtYXRyaXhfbWF4ID0gTnVtYmVyKHRoaXMubWF0cml4Lmxlbmd0aCkgLSAxO1xyXG4gICAgICAgIHRoaXMudHJhcGxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJhcDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzdWlqaW1ha2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXRyaXhfbWF4KSArIDE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdHJpeFtzdWlqaW1ha2VdWzRdKSB7XHJcbiAgICAgICAgICAgICAgICBpICs9ICgtMSk7XHJcbiAgICAgICAgICAgIH0gaWYgKHRoaXMubWF0cml4W3N1aWppbWFrZV1bNF0gIT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbc3VpamltYWtlXVs0XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYXBsaXN0LnB1c2goW3RoaXMubWF0cml4W3N1aWppbWFrZV1bMl0sIHRoaXMubWF0cml4W3N1aWppbWFrZV1bM10sIHRoaXMubWF0cml4W3N1aWppbWFrZV1bMF0sIHRoaXMubWF0cml4W3N1aWppbWFrZV1bMV1dKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+eCueWHu+iKgueCuVxyXG4gICAgICAgIHRoaXMudGhlbm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9NYWluIERpc3BsYXkvR3JpZE1hcCcpO1xyXG4gICAgICAgIC8v5bey57uP5omT5byA55qE5YiX6KGoXHJcbiAgICAgICAgdGhpcy5vcGVubGlzdCA9IFtdO1xyXG4gICAgICAgIC8v5omT5byA56qX5Y+j77yM6ZmQ5Yi254K55Ye75LqL5Lu2XHJcbiAgICAgICAgdGhpcy53aW5pc29wZW4gPSBmYWxzZTtcclxuICAgICAgICAvL+W5veeBteaVsOmHj1xyXG4gICAgICAgIHRoaXMuSW50ZWdyYWxOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLlub3ngbXmlbDph4/vvJpcIiArIHRoaXMudHJhcDtcclxuICAgICAgICAvL+WJqeS9meaWueeJh+aVsOmHj1xyXG4gICAgICAgIHRoaXMuUmVtYWluaW5nU3BhY2UuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuWJqeS9meepuuagvO+8mlwiICsgU3RyaW5nKHRoaXMubWF0cml4Lmxlbmd0aCAtIHRoaXMub3Blbmxpc3QubGVuZ3RoIC0gdGhpcy50cmFwbGlzdC5sZW5ndGgpO1xyXG4gICAgICAgIC8v5Ymp5L2Z5pe26Ze0XHJcbiAgICAgICAgdGhpcy5UaW1lTGVmdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5Ymp5L2Z5pe26Ze077yaXCIgKyB0aGlzLmdhdGV0aW1lO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy/nlJ/miJDopobnm5ZcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF0cml4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBOZXdDb3ZlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuTmV3Q292ZXJQcmVmYWIpO1xyXG4gICAgICAgICAgICBOZXdDb3Zlci5wYXJlbnQgPSBjYy5maW5kKCdDYW52YXMvTWFpbiBEaXNwbGF5L0dyaWRNYXAnKTtcclxuICAgICAgICAgICAgTmV3Q292ZXIuc2V0UG9zaXRpb24odGhpcy5tYXRyaXhbaV1bMl0sIHRoaXMubWF0cml4W2ldWzNdKTtcclxuICAgICAgICAgICAgdGhpcy5tYXRyaXhbaV1bNl0gPSBOZXdDb3ZlcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL2ZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmFwbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICAgIGxldCBOZXdDb3ZlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuREtQcmVmYWIpO1xyXG4gICAgICAgIC8vICAgIE5ld0NvdmVyLnBhcmVudCA9IGNjLmZpbmQoJ0NhbnZhcy9NYWluIERpc3BsYXkvR3JpZE1hcCcpO1xyXG4gICAgICAgIC8vICAgIE5ld0NvdmVyLnNldFBvc2l0aW9uKHRoaXMudHJhcGxpc3RbaV1bMF0sIHRoaXMudHJhcGxpc3RbaV1bMV0pO1xyXG4gICAgICAgIC8vICAgIHRoaXMubWF0cml4W2ldWzZdID0gTmV3Q292ZXI7XHJcbiAgICAgICAgLy99O1xyXG5cclxuICAgICAgICB0aGlzLnRoZU9OKCk7XHJcblxyXG4gICAgICAgIHZhciB0aGUgPSB0aGlzO1xyXG4gICAgICAgIHRoZS5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLndpbmlzb3BlbiAhPSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhdGV0aW1lICs9ICgtMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRpbWVMZWZ0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLliankvZnml7bpl7TvvJpcIiArIHRoaXMuZ2F0ZXRpbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYXRldGltZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5pc29wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LCAxLCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUiwgMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v5byA5ZCv5rOo5YaM5r+A5rS7XHJcbiAgICB0aGVPTigpIHtcclxuICAgICAgICB0aGlzLnRoZW5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAvL2lmICh0aGlzLndpbmlzb3BlbiAhPSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlZ2V0TG9jYXRpb24gPSB0aGlzLnRoZW5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgICAgIGxldCB0aWxlZHggPSBNYXRoLmZsb29yKG5vZGVnZXRMb2NhdGlvbi54IC8gNjApO1xyXG4gICAgICAgICAgICBsZXQgdGlsZWR5ID0gTWF0aC5mbG9vcihub2RlZ2V0TG9jYXRpb24ueSAvIDYwKTtcclxuICAgICAgICAgICAgbGV0IHRoZUdyaWxkID0gbnVsbDtcclxuICAgICAgICAgICAgbGV0IHRoZUdyaWxkeCA9IG51bGw7XHJcbiAgICAgICAgICAgIGxldCB0aGVHcmlsZHkgPSBudWxsO1xyXG4gICAgICAgICAgICAvL2NjLmxvZyhcIueCueWHu+S9jee9ru+8mlwiICsgdGlsZWR4ICsgXCJcIiArIHRpbGVkeSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLndpbmlzb3BlbiAhPSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WIpOaWreaYr+WQpumHjeWkjeaJk+W8gFxyXG4gICAgICAgICAgICAgICAgbGV0IG9wZW5pc29mZiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wZW5saXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbGVkeCA9PT0gdGhpcy5vcGVubGlzdFtpXVswXSAmJiB0aWxlZHkgPT09IHRoaXMub3Blbmxpc3RbaV1bMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbmlzb2ZmID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAvL+WmguaenOacquaJk+W8gO+8jOa3u+WKoOivpeS9jee9ruWIsOW3suaJk+W8gOWIl+ihqFxyXG4gICAgICAgICAgICAgICAgaWYgKG9wZW5pc29mZiA9PSBmYWxzZSAmJiB0aWxlZHggPj0gMCAmJiB0aWxlZHkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3Blbmxpc3QucHVzaChbdGlsZWR4LCB0aWxlZHldKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAvL+WIpOaWreeCueWIsOeahOaYr+S4jeaYr+eCuOW8uVxyXG4gICAgICAgICAgICAgICAgbGV0IG9wZW50aGVUcmFwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF0cml4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbGVkeCA9PT0gdGhpcy5tYXRyaXhbaV1bMF0gJiYgdGlsZWR5ID09PSB0aGlzLm1hdHJpeFtpXVsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXRyaXhbaV1bNF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW50aGVUcmFwID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/kvb/opobnm5blsYLliKTmlq3lvIDlhbPmiZPlvIBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbaV1bNV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVHcmlsZCA9IHRoaXMubWF0cml4W2ldWzZdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVHcmlsZHggPSB0aGlzLm1hdHJpeFtpXVsyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlR3JpbGR5ID0gdGhpcy5tYXRyaXhbaV1bM107XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBpZiAob3Blbmlzb2ZmID09IGZhbHNlICYmIG9wZW50aGVUcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhlR3JpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJDb3ZlclwiKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgTmV3VHJhcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuREtQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIE5ld1RyYXAucGFyZW50ID0gY2MuZmluZCgnQ2FudmFzL01haW4gRGlzcGxheS9HcmlkTWFwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgTmV3VHJhcC5zZXRQb3NpdGlvbih0aGVHcmlsZHgsIHRoZUdyaWxkeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5pc29wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlmIChvcGVuaXNvZmYgPT0gZmFsc2UgJiYgb3BlbnRoZVRyYXAgIT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoZUdyaWxkLmdldENoaWxkQnlOYW1lKFwiQ292ZXJcIikub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhlR3JpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJUaGVHcmlkXCIpLm9wYWNpdHkgPSA1MDtcclxuICAgICAgICAgICAgICAgICAgICB0aGVHcmlsZC5nZXRDaGlsZEJ5TmFtZShcIk51bWJlclwiKS5vcGFjaXR5ID0gMjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6K6h566X5ZGo5Zu054K45by55pWw6YePXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoZVRyYXBOdW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhcm91bmQgPSBbW3RpbGVkeCAtIDEsIHRpbGVkeSAtIDFdLCBbdGlsZWR4LCB0aWxlZHkgLSAxXSwgW3RpbGVkeCArIDEsIHRpbGVkeSAtIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGlsZWR4IC0gMSwgdGlsZWR5XSwgW3RpbGVkeCArIDEsIHRpbGVkeV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0aWxlZHggLSAxLCB0aWxlZHkgKyAxXSwgW3RpbGVkeCwgdGlsZWR5ICsgMV0sIFt0aWxlZHggKyAxLCB0aWxlZHkgKyAxXV07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcm91bmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbyA9IDA7IG8gPCB0aGlzLm1hdHJpeC5sZW5ndGg7IG8rKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyb3VuZFtpXVswXSA9PSB0aGlzLm1hdHJpeFtvXVswXSAmJiBhcm91bmRbaV1bMV0gPT0gdGhpcy5tYXRyaXhbb11bMV0gJiYgdGhpcy5tYXRyaXhbb11bNF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVUcmFwTnVtYmVyICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhlR3JpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJOdW1iZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGVUcmFwTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGVUcmFwTnVtYmVyID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlR3JpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJOdW1iZXJcIikub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuT3BlbnRoZXplcm8odGlsZWR4LCB0aWxlZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL+S/ruaUueaWueeJh+iuoeaVsFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBDb3Zlcm51bWJlciA9IFN0cmluZyh0aGlzLm1hdHJpeC5sZW5ndGggLSB0aGlzLm9wZW5saXN0Lmxlbmd0aCAtIHRoaXMudHJhcGxpc3QubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlJlbWFpbmluZ1NwYWNlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLliankvZnnqbrmoLzvvJpcIiArIENvdmVybnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5raI6Zmk5ZGo5Zu05bey57uPOOaWueWQkeaJk+W8gOeahOaVsOWtl1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByaW1udW1iZXIgPSBbW3RpbGVkeCAtIDEsIHRpbGVkeSAtIDFdLCBbdGlsZWR4LCB0aWxlZHkgLSAxXSwgW3RpbGVkeCArIDEsIHRpbGVkeSAtIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGlsZWR4IC0gMSwgdGlsZWR5XSwgW3RpbGVkeCArIDEsIHRpbGVkeV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0aWxlZHggLSAxLCB0aWxlZHkgKyAxXSwgW3RpbGVkeCwgdGlsZWR5ICsgMV0sIFt0aWxlZHggKyAxLCB0aWxlZHkgKyAxXV07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbyA9IDA7IG8gPCByaW1udW1iZXIubGVuZ3RoOyBvKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJpbW51bWJlcnggPSByaW1udW1iZXJbb11bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByaW1udW1iZXJ5ID0gcmltbnVtYmVyW29dWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmltbnVtYmVyMiA9IFtbcmltbnVtYmVyeCAtIDEsIHJpbW51bWJlcnkgLSAxXSwgW3JpbW51bWJlcngsIHJpbW51bWJlcnkgLSAxXSwgW3JpbW51bWJlcnggKyAxLCByaW1udW1iZXJ5IC0gMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtyaW1udW1iZXJ4IC0gMSwgcmltbnVtYmVyeV0sIFtyaW1udW1iZXJ4ICsgMSwgcmltbnVtYmVyeV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtyaW1udW1iZXJ4IC0gMSwgcmltbnVtYmVyeSArIDFdLCBbcmltbnVtYmVyeCwgcmltbnVtYmVyeSArIDFdLCBbcmltbnVtYmVyeCArIDEsIHJpbW51bWJlcnkgKyAxXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aGVyaW1pc29uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByaW1udW1iZXIyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB1ID0gMDsgdSA8IHRoaXMubWF0cml4Lmxlbmd0aDsgdSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJpbW51bWJlcjJbaV1bMF0gPT09IHRoaXMubWF0cml4W3VdWzBdICYmIHJpbW51bWJlcjJbaV1bMV0gPT09IHRoaXMubWF0cml4W3VdWzFdICYmIHRoaXMubWF0cml4W3VdWzVdID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVyaW1pc29uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGVyaW1pc29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB1ID0gMDsgdSA8IHRoaXMubWF0cml4Lmxlbmd0aDsgdSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJpbW51bWJlcnggPT09IHRoaXMubWF0cml4W3VdWzBdICYmIHJpbW51bWJlcnkgPT09IHRoaXMubWF0cml4W3VdWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0cml4W3VdWzZdLmdldENoaWxkQnlOYW1lKFwiTnVtYmVyXCIpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vLy/lrozmiJBcclxuICAgICAgICAgICAgICAgIC8vaWYgKE51bWJlcih0aGlzLm9wZW5saXN0Lmxlbmd0aCkgPT0gKE51bWJlcih0aGlzLm1hdHJpeC5sZW5ndGgpIC0gTnVtYmVyKHRoaXMudHJhcCkpICYmIG9wZW50aGVUcmFwICE9IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgIC8v6Z+z5pWIXHJcbiAgICAgICAgICAgICAgICAvLyAgICAvL2NjLmZpbmQoJ3Blcm1hbmVudC9jbGljazFiZ20nKS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgIHRoaXMucGFzc3RoZWdhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgdGhpcy53aW5pc29wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgLy9jYy5maW5kKCdwZXJtYW5lbnQnKS5nZXRDb21wb25lbnQoJ3Blcm1hbmVudCcpLnBhc3N0aGVHYXRlMiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBmb3IgKGxldCBvID0gMDsgbyA8IHRoaXMudHJhcGxpc3QubGVuZ3RoOyBvKyspIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICBsZXQgTmV3VHJhcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuTmV3VHJhcFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgTmV3VHJhcC5wYXJlbnQgPSBjYy5maW5kKCdDYW52YXMvdGlsZWRtYXAvYXBwZWFyJyk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgTmV3VHJhcC5zZXRQb3NpdGlvbih0aGlzLnRyYXBsaXN0W29dWzBdLCB0aGlzLnRyYXBsaXN0W29dWzFdKTtcclxuICAgICAgICAgICAgICAgIC8vICAgIH07XHJcbiAgICAgICAgICAgICAgICAvLyAgICBsZXQgdGhlID0gdGhpcztcclxuICAgICAgICAgICAgICAgIC8vICAgIHRoZS5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIGxldCB3aW5fMlByZWZhYiA9IGNjLmluc3RhbnRpYXRlKHRoaXMud2luXzJQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIHdpbl8yUHJlZmFiLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB3aW5fMlByZWZhYi5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB3aW5fMlByZWZhYi5zaXplID0gMDtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB3aW5fMlByZWZhYi5nZXRDb21wb25lbnQoJ3dpbl8yJykudHJ5b3BhY2l0eSgyNTUpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIHdpbl8yUHJlZmFiLmdldENvbXBvbmVudCgnd2luXzInKS50cnlzaXplKDEpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgfSwgMC44KTtcclxuICAgICAgICAgICAgICAgIC8vfTtcclxuICAgICAgICAgICAgICAgIC8vLy/pn7PmlYhcclxuICAgICAgICAgICAgICAgIC8vLy9jYy5maW5kKCdwZXJtYW5lbnQvY2xpY2syYmdtJykuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIE9wZW50aGV6ZXJvKFRoZUxhdHRpY2VYLCBUaGVMYXR0aWNlWSkge1xyXG4gICAgICAgIGxldCBhcm91bmQgPSBbW1RoZUxhdHRpY2VYLCBUaGVMYXR0aWNlWSAtIDFdLCBbVGhlTGF0dGljZVggLSAxLCBUaGVMYXR0aWNlWV0sIFtUaGVMYXR0aWNlWCwgVGhlTGF0dGljZVkgKyAxXSwgW1RoZUxhdHRpY2VYICsgMSwgVGhlTGF0dGljZVldXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyb3VuZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoYXJvdW5kW2ldWzBdID49IDAgJiYgYXJvdW5kW2ldWzFdID49IDAgJiYgYXJvdW5kW2ldWzBdIDw9IDE5ICYmIGFyb3VuZFtpXVsxXSA8PSA5KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgSXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBvID0gMDsgbyA8IHRoaXMub3Blbmxpc3QubGVuZ3RoOyBvKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJvdW5kW2ldWzBdID09IHRoaXMub3Blbmxpc3Rbb11bMF0gJiYgYXJvdW5kW2ldWzFdID09IHRoaXMub3Blbmxpc3Rbb11bMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG8gPT0gdGhpcy5vcGVubGlzdC5sZW5ndGggLSAxICYmIElzT3BlbiAhPSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aGVHcmlsZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3Blbmxpc3QucHVzaChbYXJvdW5kW2ldWzBdLCBhcm91bmRbaV1bMV1dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLm1hdHJpeC5sZW5ndGg7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyb3VuZFtpXVswXSA9PT0gdGhpcy5tYXRyaXhbY11bMF0gJiYgYXJvdW5kW2ldWzFdID09PSB0aGlzLm1hdHJpeFtjXVsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5L2/6KaG55uW5bGC5Yik5pat5byA5YWz5omT5byAXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbY11bNV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZUdyaWxkID0gdGhpcy5tYXRyaXhbY11bNl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJvdW5kYWdhaW4gPSBbW2Fyb3VuZFtpXVswXSAtIDEsIGFyb3VuZFtpXVsxXSAtIDFdLCBbYXJvdW5kW2ldWzBdLCBhcm91bmRbaV1bMV0gLSAxXSwgW2Fyb3VuZFtpXVswXSArIDEsIGFyb3VuZFtpXVsxXSAtIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXJvdW5kW2ldWzBdIC0gMSwgYXJvdW5kW2ldWzFdXSwgW2Fyb3VuZFtpXVswXSArIDEsIGFyb3VuZFtpXVsxXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthcm91bmRbaV1bMF0gLSAxLCBhcm91bmRbaV1bMV0gKyAxXSwgW2Fyb3VuZFtpXVswXSwgYXJvdW5kW2ldWzFdICsgMV0sIFthcm91bmRbaV1bMF0gKyAxLCBhcm91bmRbaV1bMV0gKyAxXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v6K6h566X5ZGo5Zu054K45by55pWw6YePXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aGVUcmFwTnVtYmVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcSA9IDA7IHEgPCBhcm91bmRhZ2Fpbi5sZW5ndGg7IHErKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCB0aGlzLm1hdHJpeC5sZW5ndGg7IHArKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcm91bmRhZ2FpbltxXVswXSA9PSB0aGlzLm1hdHJpeFtwXVswXSAmJiBhcm91bmRhZ2FpbltxXVsxXSA9PSB0aGlzLm1hdHJpeFtwXVsxXSAmJiB0aGlzLm1hdHJpeFtwXVs0XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVUcmFwTnVtYmVyICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocSA9PSBhcm91bmRhZ2Fpbi5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlR3JpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJDb3ZlclwiKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVHcmlsZC5nZXRDaGlsZEJ5TmFtZShcIlRoZUdyaWRcIikub3BhY2l0eSA9IDUwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZUdyaWxkLmdldENoaWxkQnlOYW1lKFwiTnVtYmVyXCIpLm9wYWNpdHkgPSAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlR3JpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJOdW1iZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGVUcmFwTnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+S/ruaUueaWueeJh+iuoeaVsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBDb3Zlcm51bWJlciA9IFN0cmluZyh0aGlzLm1hdHJpeC5sZW5ndGggLSB0aGlzLm9wZW5saXN0Lmxlbmd0aCAtIHRoaXMudHJhcGxpc3QubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+a2iOmZpOWRqOWbtOW3sue7jzjmlrnlkJHmiZPlvIDnmoTmlbDlrZdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmltbnVtYmVyID0gW1thcm91bmRbaV1bMF0gLSAxLCBhcm91bmRbaV1bMV0gLSAxXSwgW2Fyb3VuZFtpXVswXSwgYXJvdW5kW2ldWzFdIC0gMV0sIFthcm91bmRbaV1bMF0gKyAxLCBhcm91bmRbaV1bMV0gLSAxXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXJvdW5kW2ldWzBdIC0gMSwgYXJvdW5kW2ldWzFdXSwgW2Fyb3VuZFtpXVswXSArIDEsIGFyb3VuZFtpXVsxXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Fyb3VuZFtpXVswXSAtIDEsIGFyb3VuZFtpXVsxXSArIDFdLCBbYXJvdW5kW2ldWzBdLCBhcm91bmRbaV1bMV0gKyAxXSwgW2Fyb3VuZFtpXVswXSArIDEsIGFyb3VuZFtpXVsxXSArIDFdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IHJpbW51bWJlci5sZW5ndGg7IGErKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmltbnVtYmVyeCA9IHJpbW51bWJlclthXVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJpbW51bWJlcnkgPSByaW1udW1iZXJbYV1bMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByaW1udW1iZXIyID0gW1tyaW1udW1iZXJ4IC0gMSwgcmltbnVtYmVyeSAtIDFdLCBbcmltbnVtYmVyeCwgcmltbnVtYmVyeSAtIDFdLCBbcmltbnVtYmVyeCArIDEsIHJpbW51bWJlcnkgLSAxXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JpbW51bWJlcnggLSAxLCByaW1udW1iZXJ5XSwgW3JpbW51bWJlcnggKyAxLCByaW1udW1iZXJ5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JpbW51bWJlcnggLSAxLCByaW1udW1iZXJ5ICsgMV0sIFtyaW1udW1iZXJ4LCByaW1udW1iZXJ5ICsgMV0sIFtyaW1udW1iZXJ4ICsgMSwgcmltbnVtYmVyeSArIDFdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRoZXJpbWlzb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBiID0gMDsgYiA8IHJpbW51bWJlcjIubGVuZ3RoOyBiKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHUgPSAwOyB1IDwgdGhpcy5tYXRyaXgubGVuZ3RoOyB1KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmltbnVtYmVyMltiXVswXSA9PT0gdGhpcy5tYXRyaXhbdV1bMF0gJiYgcmltbnVtYmVyMltiXVsxXSA9PT0gdGhpcy5tYXRyaXhbdV1bMV0gJiYgdGhpcy5tYXRyaXhbdV1bNV0gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZXJpbWlzb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoZXJpbWlzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHUgPSAwOyB1IDwgdGhpcy5tYXRyaXgubGVuZ3RoOyB1KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmltbnVtYmVyeCA9PT0gdGhpcy5tYXRyaXhbdV1bMF0gJiYgcmltbnVtYmVyeSA9PT0gdGhpcy5tYXRyaXhbdV1bMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbdV1bNl0uZ2V0Q2hpbGRCeU5hbWUoXCJOdW1iZXJcIikub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocSA9PSBhcm91bmRhZ2Fpbi5sZW5ndGggLSAxICYmIHRoZVRyYXBOdW1iZXIgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZUdyaWxkLmdldENoaWxkQnlOYW1lKFwiTnVtYmVyXCIpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuT3BlbnRoZXplcm8oYXJvdW5kW2ldWzBdLCBhcm91bmRbaV1bMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgQWdhaW4oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJTY2VuZS9HaG9zdEFycmVzdFwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgR2FtZU92ZXIoKSB7XHJcbiAgICAgICAgY2MuZ2FtZS5lbmQoKTtcclxuICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
