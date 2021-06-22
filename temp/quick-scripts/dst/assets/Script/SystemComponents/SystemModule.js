
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