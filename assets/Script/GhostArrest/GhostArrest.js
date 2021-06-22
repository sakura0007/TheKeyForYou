cc.Class({
    extends: cc.Component,

    properties: {
        gatetime: 0,
        Grade: 2,
        NewCoverPrefab: cc.Prefab,
        DKPrefab: cc.Prefab,
        TimeLeft: cc.Node,
        RemainingSpace: cc.Node,
        IntegralNode: cc.Node
    },

    onLoad() {
        //关卡难度，主要与生成的道具复杂数量有关,1简单、2普通、3困难
        //this.Grade = 2;
        this.trap = 0;

        //生成矩阵
        var matrix_X_max = 19;
        var matrix_Y_max = 9;
        this.matrix = [];
        for (let x = 0; x <= matrix_X_max; x++) {
            for (let y = 0; y <= matrix_Y_max; y++) {
                let setX = x * 60 + 30;
                let setY = y * 60 + 30;
                this.matrix.push([x, y, setX, setY, false, false, null]);//格子坐标x，格子坐标y，像素坐标x，像素坐标y，是否炸弹，覆盖层判断打开，格子节点
            };
        };

        //生成炸弹,列表
        if (this.Grade == 1) {
            this.trap = 5;
        }
        if (this.Grade == 2) {
            this.trap = 10;
        }
        if (this.Grade == 3) {
            this.trap = 15;
        };
        let matrix_max = Number(this.matrix.length) - 1;
        this.traplist = [];
        for (let i = 0; i < this.trap; i++) {
            let suijimake = Math.floor(Math.random() * matrix_max) + 1;
            if (this.matrix[suijimake][4]) {
                i += (-1);
            } if (this.matrix[suijimake][4] != true) {
                this.matrix[suijimake][4] = true;
                this.traplist.push([this.matrix[suijimake][2], this.matrix[suijimake][3], this.matrix[suijimake][0], this.matrix[suijimake][1]]);
            };
        };

        //点击节点
        this.thenode = cc.find('Canvas/Main Display/GridMap');
        //已经打开的列表
        this.openlist = [];
        //打开窗口，限制点击事件
        this.winisopen = false;
        //幽灵数量
        this.IntegralNode.getComponent(cc.Label).string = "幽灵数量：" + this.trap;
        //剩余方片数量
        this.RemainingSpace.getComponent(cc.Label).string = "剩余空格：" + String(this.matrix.length - this.openlist.length - this.traplist.length);
        //剩余时间
        this.TimeLeft.getComponent(cc.Label).string = "剩余时间：" + this.gatetime;
    },

    start () {
        //生成覆盖
        for (let i = 0; i < this.matrix.length; i++) {
            let NewCover = cc.instantiate(this.NewCoverPrefab);
            NewCover.parent = cc.find('Canvas/Main Display/GridMap');
            NewCover.setPosition(this.matrix[i][2], this.matrix[i][3]);
            this.matrix[i][6] = NewCover;
        };

        //for (let i = 0; i < this.traplist.length; i++) {
        //    let NewCover = cc.instantiate(this.DKPrefab);
        //    NewCover.parent = cc.find('Canvas/Main Display/GridMap');
        //    NewCover.setPosition(this.traplist[i][0], this.traplist[i][1]);
        //    this.matrix[i][6] = NewCover;
        //};

        this.theON();

        var the = this;
        the.schedule(function () {
            if (this.winisopen != true) {
                this.gatetime += (-1);
                this.TimeLeft.getComponent(cc.Label).string = "剩余时间：" + this.gatetime;
                if (this.gatetime == 0) {
                    this.winisopen = true;
                };
            };
        }, 1, cc.macro.REPEAT_FOREVER, 0);
    },

    //开启注册激活
    theON() {
        this.thenode.on(cc.Node.EventType.TOUCH_START, function (event) {
            //if (this.winisopen != true) {
            let nodegetLocation = this.thenode.convertToNodeSpaceAR(event.getLocation());
            let tiledx = Math.floor(nodegetLocation.x / 60);
            let tiledy = Math.floor(nodegetLocation.y / 60);
            let theGrild = null;
            let theGrildx = null;
            let theGrildy = null;
            //cc.log("点击位置：" + tiledx + "" + tiledy);
            if (this.winisopen != true) {
                //判断是否重复打开
                let openisoff = false;
                for (let i = 0; i < this.openlist.length; i++) {
                    if (tiledx === this.openlist[i][0] && tiledy === this.openlist[i][1]) {
                        openisoff = true;
                        break;
                    };
                };
                //如果未打开，添加该位置到已打开列表
                if (openisoff == false && tiledx >= 0 && tiledy >= 0) {
                    this.openlist.push([tiledx, tiledy]);
                };
                //判断点到的是不是炸弹
                let opentheTrap = false;
                for (let i = 0; i < this.matrix.length; i++) {
                    if (tiledx === this.matrix[i][0] && tiledy === this.matrix[i][1]) {
                        if (this.matrix[i][4]) {
                            opentheTrap = true;
                        };
                        //使覆盖层判断开关打开
                        this.matrix[i][5] = true;
                        theGrild = this.matrix[i][6];
                        theGrildx = this.matrix[i][2];
                        theGrildy = this.matrix[i][3];
                    };
                };
                if (openisoff == false && opentheTrap) {
                    theGrild.getChildByName("Cover").opacity = 0;
                    let NewTrap = cc.instantiate(this.DKPrefab);
                    NewTrap.parent = cc.find('Canvas/Main Display/GridMap');
                    NewTrap.setPosition(theGrildx, theGrildy);
                    this.winisopen = true;
                };
                if (openisoff == false && opentheTrap != true) {
                    theGrild.getChildByName("Cover").opacity = 0;
                    theGrild.getChildByName("TheGrid").opacity = 50;
                    theGrild.getChildByName("Number").opacity = 200;
                    //计算周围炸弹数量
                    var theTrapNumber = 0;
                    let around = [[tiledx - 1, tiledy - 1], [tiledx, tiledy - 1], [tiledx + 1, tiledy - 1],
                        [tiledx - 1, tiledy], [tiledx + 1, tiledy],
                        [tiledx - 1, tiledy + 1], [tiledx, tiledy + 1], [tiledx + 1, tiledy + 1]];
                    for (let i = 0; i < around.length; i++) {
                        for (let o = 0; o < this.matrix.length; o++) {
                            if (around[i][0] == this.matrix[o][0] && around[i][1] == this.matrix[o][1] && this.matrix[o][4]) {
                                theTrapNumber += 1;
                            };
                        };
                    };
                    theGrild.getChildByName("Number").getComponent(cc.Label).string = theTrapNumber;
                    if (theTrapNumber == 0) {
                        theGrild.getChildByName("Number").opacity = 0;
                        this.Openthezero(tiledx, tiledy);
                    };


                    //修改方片计数
                    let Covernumber = String(this.matrix.length - this.openlist.length - this.traplist.length);
                    this.RemainingSpace.getComponent(cc.Label).string = "剩余空格：" + Covernumber;
                    //消除周围已经8方向打开的数字
                    let rimnumber = [[tiledx - 1, tiledy - 1], [tiledx, tiledy - 1], [tiledx + 1, tiledy - 1],
                        [tiledx - 1, tiledy], [tiledx + 1, tiledy],
                        [tiledx - 1, tiledy + 1], [tiledx, tiledy + 1], [tiledx + 1, tiledy + 1]];
                    for (let o = 0; o < rimnumber.length; o++) {
                        let rimnumberx = rimnumber[o][0];
                        let rimnumbery = rimnumber[o][1];
                        let rimnumber2 = [[rimnumberx - 1, rimnumbery - 1], [rimnumberx, rimnumbery - 1], [rimnumberx + 1, rimnumbery - 1],
                        [rimnumberx - 1, rimnumbery], [rimnumberx + 1, rimnumbery],
                        [rimnumberx - 1, rimnumbery + 1], [rimnumberx, rimnumbery + 1], [rimnumberx + 1, rimnumbery + 1]];
                        let therimison = true;
                        for (let i = 0; i < rimnumber2.length; i++) {
                            for (let u = 0; u < this.matrix.length; u++) {
                                if (rimnumber2[i][0] === this.matrix[u][0] && rimnumber2[i][1] === this.matrix[u][1] && this.matrix[u][5] === false) {
                                    therimison = false;
                                };
                            };
                        };
                        if (therimison) {
                            for (let u = 0; u < this.matrix.length; u++) {
                                if (rimnumberx === this.matrix[u][0] && rimnumbery === this.matrix[u][1]) {
                                    this.matrix[u][6].getChildByName("Number").opacity = 0;
                                };
                            };
                        };
                    };
                };

                ////完成
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
            };
        }, this);
    },

    Openthezero(TheLatticeX, TheLatticeY) {
        let around = [[TheLatticeX, TheLatticeY - 1], [TheLatticeX - 1, TheLatticeY], [TheLatticeX, TheLatticeY + 1], [TheLatticeX + 1, TheLatticeY]];
        for (let i = 0; i < around.length; i++) {
            if (around[i][0] >= 0 && around[i][1] >= 0 && around[i][0] <= 19 && around[i][1] <= 9) {
                let IsOpen = false;
                for (let o = 0; o < this.openlist.length; o++) {
                    if (around[i][0] == this.openlist[o][0] && around[i][1] == this.openlist[o][1]) {
                        IsOpen = true;
                    }
                    if (o == this.openlist.length - 1 && IsOpen != true) {
                        let theGrild = null;
                        this.openlist.push([around[i][0], around[i][1]]);
                        for (let c = 0; c < this.matrix.length; c++) {
                            if (around[i][0] === this.matrix[c][0] && around[i][1] === this.matrix[c][1]) {
                                //使覆盖层判断开关打开
                                this.matrix[c][5] = true;
                                theGrild = this.matrix[c][6]
                            };
                        };

                        let aroundagain = [[around[i][0] - 1, around[i][1] - 1], [around[i][0], around[i][1] - 1], [around[i][0] + 1, around[i][1] - 1],
                        [around[i][0] - 1, around[i][1]], [around[i][0] + 1, around[i][1]],
                        [around[i][0] - 1, around[i][1] + 1], [around[i][0], around[i][1] + 1], [around[i][0] + 1, around[i][1] + 1]];
                        //计算周围炸弹数量
                        let theTrapNumber = 0;
                        for (let q = 0; q < aroundagain.length; q++) {
                            for (let p = 0; p < this.matrix.length; p++) {
                                if (aroundagain[q][0] == this.matrix[p][0] && aroundagain[q][1] == this.matrix[p][1] && this.matrix[p][4]) {
                                    theTrapNumber += 1;
                                };
                            };
                            if (q == aroundagain.length - 1) {
                                theGrild.getChildByName("Cover").opacity = 0;
                                theGrild.getChildByName("TheGrid").opacity = 50;
                                theGrild.getChildByName("Number").opacity = 200;
                                theGrild.getChildByName("Number").getComponent(cc.Label).string = theTrapNumber;

                                //修改方片计数
                                let Covernumber = String(this.matrix.length - this.openlist.length - this.traplist.length);
                                //消除周围已经8方向打开的数字
                                let rimnumber = [[around[i][0] - 1, around[i][1] - 1], [around[i][0], around[i][1] - 1], [around[i][0] + 1, around[i][1] - 1],
                                [around[i][0] - 1, around[i][1]], [around[i][0] + 1, around[i][1]],
                                [around[i][0] - 1, around[i][1] + 1], [around[i][0], around[i][1] + 1], [around[i][0] + 1, around[i][1] + 1]];
                                for (let a = 0; a < rimnumber.length; a++) {
                                    let rimnumberx = rimnumber[a][0];
                                    let rimnumbery = rimnumber[a][1];
                                    let rimnumber2 = [[rimnumberx - 1, rimnumbery - 1], [rimnumberx, rimnumbery - 1], [rimnumberx + 1, rimnumbery - 1],
                                    [rimnumberx - 1, rimnumbery], [rimnumberx + 1, rimnumbery],
                                    [rimnumberx - 1, rimnumbery + 1], [rimnumberx, rimnumbery + 1], [rimnumberx + 1, rimnumbery + 1]];
                                    let therimison = true;
                                    for (let b = 0; b < rimnumber2.length; b++) {
                                        for (let u = 0; u < this.matrix.length; u++) {
                                            if (rimnumber2[b][0] === this.matrix[u][0] && rimnumber2[b][1] === this.matrix[u][1] && this.matrix[u][5] === false) {
                                                therimison = false;
                                            };
                                        };
                                    };
                                    if (therimison) {
                                        for (let u = 0; u < this.matrix.length; u++) {
                                            if (rimnumberx === this.matrix[u][0] && rimnumbery === this.matrix[u][1]) {
                                                this.matrix[u][6].getChildByName("Number").opacity = 0;
                                            };
                                        };
                                    };
                                };
                            };
                            if (q == aroundagain.length - 1 && theTrapNumber == 0) {
                                theGrild.getChildByName("Number").opacity = 0;
                                this.Openthezero(around[i][0], around[i][1]);
                            }
                        };
                    }
                };
            };
        };
    },

    Again(){
        cc.director.loadScene("Scene/GhostArrest");
    },

    GameOver() {
        cc.game.end();
    },
    // update (dt) {},
});
