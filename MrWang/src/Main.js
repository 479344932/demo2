/**
 * @author anlun214 QQ:58529016
 */
var F2xExtend=__extends;
var globalVal = {
    //舞台
    stage:{},
    stageTop:{},
    //点击事件
    clickEvent:{
        //点击选择题目按钮
        clickTopicBtn:function(btn,pos){
            btn.addEventListener("onMouseUp",function(){
                //判断是否选择了OLED
                if(pos == 8){
                    globalVal.isSelectOLED = true;
                }
                //记录已选了多少道题
                globalVal.answerNum++;
                //点击后跳转页面的事件
                globalDispatcher.dispatchEvent(new Event("clickSelectBtn"));
                //在前三道没选OLED那道题的情况下
                if(!globalVal.isSelectOLED && globalVal.answerNum == 4){
                    globalVal.fourTopic = pos;
                    globalVal.selectTopicDir = 8;
                    globalDispatcher.dispatchEvent(new Event("beAnswerEight"));
                    globalVal.alreadySelect.push(8);
                }else{
                    //记录点了哪道题
                    globalVal.selectTopicDir = pos;
                    globalVal.alreadySelect.push(pos);
                }
                //控制题目按钮的样式
                globalDispatcher.addEventListener("changeSelectBtnStyle",function(){
                    btn.gotoAndStop(2);
                });
                btn.gotoAndStop(2);
                //使已选题目下次不能再选
                btn.mouseChildren = false;
                btn.mouseEnable = false;
            });
        }
    },
    //判断选择了哪个答案
    getSelect:function(s,answer){
        if(globalVal.selectTopicDir == 8){
            s.gotoAndStop(2);
        }else{
            s.gotoAndStop(1);
        }
        s.addEventListener("onMouseUp",function(){
            if(globalVal.selectTopicDir == 8){
                globalVal.specialMusic.play(0,1);
            }
            globalDispatcher.dispatchEvent(new annie.Event("getSelect"));
            s.select.gotoAndStop(2);
            globalVal.selectAnswer.push(answer);

            //传送到后台的数据
            var selectMessage;
            selectMessage = globalVal.alreadySelect[globalVal.alreadySelect.length - 1]+
                "-"+globalVal.selectAnswer[globalVal.selectAnswer.length - 1];
            var answerMessage = globalVal.getMessage("http://oled.help2x.com/index.php/index/index/answer","post",
                {answer:selectMessage,activityId:globalVal.userId});
            if(answerMessage.code == 1 && globalVal.userId == 0){
                globalVal.userId = answerMessage.activityId;
            }
        });
    },
    //与后台的连接
    getMessage:function(a,c,message){
        var b;
        $.ajax({
            url:a,
            type:c,
            cache:!1,
            dataType:"json",
            async:!1,
            data:message,
            success:function(event){b=event},
            error:function(){
                console.log("请求失败");
                b=""
            }
        });
        return b
    },
    //结果页的控制
    resultPage:function(s){
        var v = globalVal.averageScore;
        var result;
        if(v>=1&&v<=3){
            s.gotoAndStop(1);
            result = "A";
        }else if(v<=5){
            s.gotoAndStop(2);
            result = "B";
        }else if(v<=7){
            s.gotoAndStop(3);
            result = "C";
        }else if(v<=10){
            s.gotoAndStop(4);
            result = "D";
        }
        if(!globalVal.isRequireResult){
            var resultMessage = globalVal.getMessage(" http://oled.help2x.com/index.php/index/index/end","post",
                {score:result,activityId:globalVal.userId});
            globalVal.isRequireResult = true;
        }
        return result;
    },
    //加载页面
    onLoadScene:function(str){
        Flash2x.loadScene(str,function(per){
            //加载进度
            if(str != "loading"){
                globalVal.stage.children[0].home.plan.txt.text = per + "%";
                globalVal.stage.children[0].home.plan_bar.gotoAndStop(per);
            }
        },function(result){
            if(result.sceneId==result.sceneTotal) {
                //加载完成
                if (str == "loading") {
                    globalVal.onLoadScene(["pageHome", "star", "selectTopic", "topic", "result"]);
                    globalVal.stage.addChild(new loading.Loading());
                } else {
                    globalVal.music = Flash2x.getMediaByName("pageHome", "BgMusic");
                    globalVal.music.play(0, 1000);
                    globalVal.stage.removeAllChildren();
                    Flash2x.getMediaByName("loading", "ChangePageSound").play(0, 1);
                    globalVal.stage.addChild(new pageHome.PageHome());
                    var music = new pageHome.Btn_music();
                    music.x = 680;
                    music.y = 62;
                    globalVal.stageTop.addChild(music);
                    globalVal.specialMusic = Flash2x.getMediaByName("topic", "SpecialSound");
                    var rLogo_mc = new pageHome.RLOGO();
                    var lLogo_mc = new pageHome.LLOGO();
                    lLogo_mc.x = globalVal.stageTop.viewRect.x + 10;
                    lLogo_mc.y = 18;
                    rLogo_mc.x = 870 - globalVal.stageTop.viewRect.x - 218;
                    rLogo_mc.y = 10;
                    globalVal.stageTop.addChild(lLogo_mc);
                    globalVal.stageTop.addChild(rLogo_mc);
                    globalVal.lLogo_mc = lLogo_mc;
                    globalVal.rLogo_mc = rLogo_mc;
                }
            }
        });
    },
    //选择的题目
    selectTopicDir:1,
    //是否在答题
    isInAnswer:false,
    //已回答题目数
    answerNum:0,
    //判断是否选择了OLED那道题
    isSelectOLED:false,
    //已选择题目
    alreadySelect:[],
    //已选答案
    selectAnswer:[],
    //最终平均分
    averageScore:0,
    //用户ID
    userId:0,
    //判断是否向后台传结果
    isRequireResult:false,
    //第四道题选哪道
    fourTopic:0,
    //判断背景音乐是否播放
    musicIsPlay:true,
    //音乐
    music:{},
    //第四道题点击时的音乐
    specialMusic:{}
};
annie.debug=false;
window.addEventListener("load",function(){
    /**
     * 最上层div的id,可以在一个页面同时放多个stage.
     * 设计尺寸的宽
     * 设计尺寸的高
     * FPS刷新率
     * 缩放模式
     * 渲染模式
     */
    globalVal.stageTop=new annie.Stage("annieEngine",870,1136,30,annie.StageScaleMode.FIXED_HEIGHT,0);
    globalVal.stage = new annie.Sprite();
    globalVal.stageTop.addChild(globalVal.stage);
    globalVal.stageTop.addEventListener(annie.Event.INIT_TO_STAGE,function (e) {
        globalVal.onLoadScene("loading")
    })
});
