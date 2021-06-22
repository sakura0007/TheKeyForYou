cc.Class({
    extends: cc.Component,

    properties: {
        ID_editbox: {
            default: null,
            type: cc.Node,
            displayName: "ID输入框",
            tooltip: "ID输入框",
        },
        Pass_editbox: {
            default: null,
            type: cc.Node,
            displayName: "密码输入框",
            tooltip: "密码输入框",
        },
    },


    onLoad() {
        this.SystemModule = cc.find("SystemModule").getComponent("SystemModule");
        // 加载 Prefab
        let that = this;
        cc.resources.load("Prefab/TopWin", function (err, prefab) {
            var newNode = cc.instantiate(prefab);
            that.TopWin = newNode;
        });
    },

    start () {
        //加载预制
        this.domain();
    },

    domain() {
        this.TopWinPool = new cc.NodePool();
        let InstanceTopWin = cc.instantiate(this.TopWin); // 创建节点
        this.TopWinPool.put(InstanceTopWin); // 通过 put 接口放入对象池
    },

    LogIn() {
        let ID = this.ID_editbox.getComponent(cc.EditBox).string;
        let Pass = this.Pass_editbox.getComponent(cc.EditBox).string;


        //this.SystemModule.LogIn(ID, Pass);
        this.SystemModule.LogIn("haoya100@qq.com", "haoya1001");
    },

    Registered() {
        //this.TopWin;

        //this.SystemModule.Registered(ID, Pass);
        this.SystemModule.Registered("haoya100@qq.com","haoya1001");
    },

    SetOptions() {
        let ID = "haoya100@qq.com";
        let SetString = "Avatar:8&volume:10&voice:10";
        this.SystemModule.SetUpdate(ID, SetString);
    },

    GameOff() {
        this.SystemModule.GameOff();
    }
    // update (dt) {},
});
