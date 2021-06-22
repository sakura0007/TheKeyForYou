
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