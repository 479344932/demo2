var F2xExtend=__extends,globalVal={stage:{},stageTop:{},clickEvent:{clickTopicBtn:function(b,a){b.addEventListener("onMouseUp",function(){8==a&&(globalVal.isSelectOLED=!0);globalVal.answerNum++;globalDispatcher.dispatchEvent(new Event("clickSelectBtn"));globalVal.isSelectOLED||4!=globalVal.answerNum?(globalVal.selectTopicDir=a,globalVal.alreadySelect.push(a)):(globalVal.fourTopic=a,globalVal.selectTopicDir=8,globalDispatcher.dispatchEvent(new Event("beAnswerEight")),globalVal.alreadySelect.push(8));
globalDispatcher.addEventListener("changeSelectBtnStyle",function(){b.gotoAndStop(2)});b.gotoAndStop(2);b.mouseChildren=!1;b.mouseEnable=!1})}},getSelect:function(b,a){8==globalVal.selectTopicDir?b.gotoAndStop(2):b.gotoAndStop(1);b.addEventListener("onMouseUp",function(){8==globalVal.selectTopicDir&&globalVal.specialMusic.play(0,1);globalDispatcher.dispatchEvent(new annie.Event("getSelect"));b.select.gotoAndStop(2);globalVal.selectAnswer.push(a);var c=globalVal.getMessage("http://oled.help2x.com/index.php/index/index/answer",
"post",{answer:globalVal.alreadySelect[globalVal.alreadySelect.length-1]+"-"+globalVal.selectAnswer[globalVal.selectAnswer.length-1],activityId:globalVal.userId});1==c.code&&0==globalVal.userId&&(globalVal.userId=c.activityId)})},getMessage:function(b,a,c){var d;$.ajax({url:b,type:a,cache:!1,dataType:"json",async:!1,data:c,success:function(a){d=a},error:function(){console.log("请求失败");d=""}});return d},resultPage:function(b){var a=globalVal.averageScore,c;1<=a&&3>=a?(b.gotoAndStop(1),c="A"):5>=a?(b.gotoAndStop(2),
c="B"):7>=a?(b.gotoAndStop(3),c="C"):10>=a&&(b.gotoAndStop(4),c="D");globalVal.isRequireResult||(globalVal.getMessage(" http://oled.help2x.com/index.php/index/index/end","post",{score:c,activityId:globalVal.userId}),globalVal.isRequireResult=!0);return c},onLoadScene:function(b){Flash2x.loadScene(b,function(a){"loading"!=b&&(globalVal.stage.children[0].home.plan.txt.text=a+"%",globalVal.stage.children[0].home.plan_bar.gotoAndStop(a))},function(){if("loading"==b)globalVal.onLoadScene(["pageHome","star",
"selectTopic","topic","result"]),globalVal.stage.addChild(new loading.Loading);else{globalVal.music=Flash2x.getMediaByName("pageHome","BgMusic");globalVal.music.play(0,1E3);globalVal.stage.removeAllChildren();Flash2x.getMediaByName("loading","ChangePageSound").play(0,1);globalVal.stage.addChild(new pageHome.PageHome);var a=new pageHome.Btn_music;a.x=680;a.y=62;globalVal.stageTop.addChild(a);globalVal.specialMusic=Flash2x.getMediaByName("topic","SpecialSound");var a=new pageHome.RLOGO,c=new pageHome.LLOGO;
c.x=globalVal.stageTop.viewRect.x+10;c.y=18;a.x=870-globalVal.stageTop.viewRect.x-218;a.y=10;globalVal.stageTop.addChild(c);globalVal.stageTop.addChild(a);globalVal.lLogo_mc=c;globalVal.rLogo_mc=a}})},selectTopicDir:1,isInAnswer:!1,answerNum:0,isSelectOLED:!1,alreadySelect:[],selectAnswer:[],averageScore:0,userId:0,isRequireResult:!1,fourTopic:0,musicIsPlay:!0,music:{},specialMusic:{}};annie.debug=!1;
window.addEventListener("load",function(){globalVal.stageTop=new annie.Stage("annieEngine",870,1136,30,annie.StageScaleMode.FIXED_HEIGHT,0);globalVal.stage=new annie.Sprite;globalVal.stageTop.addChild(globalVal.stage);globalVal.stageTop.addEventListener(annie.Event.INIT_TO_STAGE,function(b){globalVal.onLoadScene("loading")})});