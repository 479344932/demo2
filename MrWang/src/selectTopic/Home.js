var selectTopic=selectTopic||{};
selectTopic.Home=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
	s.txt_tip.visible = false;
	s.btn_result.visible = false;
	s.addEventListener(annie.Event.END_FRAME,function(){
		s.btns_mc.btns.mouseChildren = true;
		s.btns_mc.btns.mouseEnable = true;
	});
	globalDispatcher.addEventListener("clickSelectBtn",function(){
		s.play(false);
		s.addFrameScript(0,function(){
			Flash2x.getMediaByName("loading","ChangePageSound").play(0,1);
			globalVal.stage.addChild(new topic.Topic());
		});

		//无题可选时隐藏文字提示
		if(!globalVal.isSelectOLED && globalVal.answerNum == 7){
			s.txt_tip.visible = false;
		}else if(globalVal.isSelectOLED && globalVal.answerNum == 8){
			s.txt_tip.visible = false;
		}
	});

	globalDispatcher.addEventListener("startSelectPage",function(){
		Flash2x.getMediaByName("loading","ChangePageSound").play(0,1);
		if(globalVal.answerNum == 4){
			s.txt_tip.visible = true;
			s.btn_result.visible = true;
		}
		s.gotoAndPlay(2);
		globalVal.lLogo_mc.x=globalVal.stageTop.viewRect.x+10;
		globalVal.lLogo_mc.y=18;
		globalVal.rLogo_mc.x=870-globalVal.stageTop.viewRect.x-218;
		globalVal.rLogo_mc.y=10;
		globalDispatcher.dispatchEvent(new Event("changeSelectBtnStyle"));
	});
	s.addFrameScript(1,function(){
		globalDispatcher.dispatchEvent(new Event("changeSelectBtnStyle"));
	});

	s.isEight = false;

	globalDispatcher.addEventListener("beAnswerEight",function(){
		s.isEight = true;
	});
	s.addFrameScript(10,function(){
		if(s.isEight){
			globalDispatcher.dispatchEvent(new Event("changeBtns"));
		}
	});

	//查看结果
	s.btn_result.addEventListener("onMouseUp",function(){
		var total = 0;
		for(var a in globalVal.selectAnswer){
			switch (globalVal.selectAnswer[a]){
				case "A":
					total += 1;
					break;
				case "B":
					total += 4;
					break;
				case "C":
					total += 7;
					break;
				case "D":
					total += 10;
					break;
			}
		}
		globalVal.averageScore = parseInt(total/globalVal.selectAnswer.length);
		s.play(false);
		s.addFrameScript(0,function(){
			globalVal.stage.removeAllChildren();
			Flash2x.getMediaByName("loading","ChangePageSound").play(0,1);
			globalVal.stage.addChild(new result.Result());
		});
	});

};
F2xExtend(selectTopic.Home,F2xMovieClip);
selectTopic.Home.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new selectTopic.F2xAuto_29();
	_d0.name="txt_tip";
	s.txt_tip=_d0;
	var _d1=new selectTopic.F2xAuto_27();
	_d1.name="btn_result";
	s.btn_result=_d1;
	var _d2=new selectTopic.F2xAuto_26();
	var _d3=new selectTopic.F2xAuto_34();
	var _d4=new selectTopic.F2xAuto_46();
	var _d5=new selectTopic.F2xAuto_28();
	var _d6=new selectTopic.F2xAuto_36();
	var _d7=new selectTopic.F2xAuto_37();
	var _d8=new selectTopic.F2xAuto_50();
	var _d9=new selectTopic.F2xAuto_35();
	_d9.name="btns_mc";
	s.btns_mc=_d9;
	var _d10=Flash2x.b("selectTopic","F2xAuto_109");
	s.a().b(31).b(1).c(_d0,{x:318,y:1079,o:0}).b(1).c(_d0,{x:318,y:1082.45,o:0.1445}).b(1).c(_d0,{x:318,y:1085.85,o:0.2852}).b(1).c(_d0,{x:318,y:1089.3,o:0.4297}).b(1).c(_d0,{x:318,y:1092.7,o:0.5703}).b(1).c(_d0,{x:318,y:1096.15,o:0.7148}).b(1).c(_d0,{x:318,y:1099.55,o:0.8555}).b(2).c(_d0,{x:318,y:1103});
	s.a().b(26).b(1).c(_d1,{x:443.5,y:1126.05,a:0.01,b:0.01}).b(1).c(_d1,{x:422.3,y:1097.35,a:0.222,b:0.222}).b(1).c(_d1,{x:401.05,y:1068.6,a:0.434,b:0.434}).b(1).c(_d1,{x:379.85,y:1039.9,a:0.646,b:0.646}).b(1).c(_d1,{x:358.65,y:1011.2,a:0.858,b:0.858}).b(1).c(_d1,{x:335.9,y:981.7,a:1.07,b:1.07}).b(1).c(_d1,{x:337.7,y:990.35,a:1.0525,b:1.035}).b(1).c(_d1,{x:339.45,y:999,a:1.035}).b(1).c(_d1,{x:341.25,y:1007.6,a:1.0175,b:0.965}).b(1).c(_d1,{x:343,y:1016.25,b:0.93}).b(1).c(_d1,{x:343,y:1014.75,b:0.95}).b(1).c(_d1,{x:343,y:1013.2,b:0.97}).b(1).c(_d1,{x:343,y:1011.8,b:0.99}).b(1).c(_d1,{x:343,y:1011});
	s.a().b(40).c(_d2,{x:170,y:126}).g("play once",0,0);
	s.a().b(16).b(1).c(_d3,{x:693.6,y:867.9,o:0}).b(1).c(_d3,{x:617.65,y:867.35,o:0.1445}).b(1).c(_d3,{x:547,y:866.8,o:0.2812}).b(1).c(_d3,{x:481.55,y:866.3,o:0.4062}).b(1).c(_d3,{x:421.35,y:865.85,o:0.5195}).b(1).c(_d3,{x:366.35,y:865.45,o:0.625}).b(1).c(_d3,{x:316.6,y:865.1,o:0.7188}).b(1).c(_d3,{x:272.1,y:864.75,o:0.8047}).b(1).c(_d3,{x:232.8,y:864.45,o:0.8789}).b(1).c(_d3,{x:198.8,y:864.2,o:0.9453}).b(14).c(_d3,{x:170,y:864});
	s.a().b(16).b(1).c(_d4,{x:-12,y:861,o:0}).b(1).c(_d4,{x:69.2,y:863.3,o:0.1445}).b(1).c(_d4,{x:144.8,y:865.5,o:0.2812}).b(1).c(_d4,{x:214.8,y:867.5,o:0.4062}).b(1).c(_d4,{x:279.2,y:869.3,o:0.5195}).b(1).c(_d4,{x:338,y:871,o:0.625}).b(1).c(_d4,{x:391.2,y:872.5,o:0.7188}).b(1).c(_d4,{x:438.8,y:873.9,o:0.8047}).b(1).c(_d4,{x:480.8,y:875.1,o:0.8789}).b(1).c(_d4,{x:517.2,y:876.1,o:0.9453}).b(14).c(_d4,{x:548,y:877});
	s.a().b(4).b(1).c(_d5,{x:279,y:955.4,b:0.0326,o:0}).b(1).c(_d5,{x:279,y:837.2,b:0.2799,o:0.25}).b(1).c(_d5,{x:279,y:719,b:0.5272,o:0.5}).b(1).c(_d5,{x:279,y:600.85,b:0.7745,o:0.75}).b(1).c(_d5,{x:279,y:482.6,b:1.0218}).b(1).c(_d5,{x:279,y:486.1,b:1.0145}).b(1).c(_d5,{x:279,y:489.55,b:1.0072}).b(1).c(_d5,{x:279,y:493}).b(1).c(_d5,{x:279,y:490.6,b:1.005}).b(1).c(_d5,{x:279,y:488.2,b:1.01}).b(1).c(_d5,{x:279,y:490.6,b:1.005}).b(25).c(_d5,{x:279,y:493});
	s.a().b(15).b(1).c(_d6,{x:267,y:547,o:0}).b(1).c(_d6,{x:267,y:547,o:0.1992}).b(1).c(_d6,{x:267,y:547,o:0.3984}).b(1).c(_d6,{x:267,y:547,o:0.6016}).b(1).c(_d6,{x:267,y:547,o:0.8008}).b(20).c(_d6,{x:267,y:547});
	s.a().b(17).b(1).c(_d7,{x:491,y:499,o:0}).b(1).c(_d7,{x:491,y:499,o:0.1992}).b(1).c(_d7,{x:491,y:499,o:0.3984}).b(1).c(_d7,{x:491,y:499,o:0.6016}).b(1).c(_d7,{x:491,y:499,o:0.8008}).b(18).c(_d7,{x:491,y:499});
	s.a().b(18).b(1).c(_d8,{x:559,y:594,o:0}).b(1).c(_d8,{x:559,y:594,o:0.1992}).b(1).c(_d8,{x:559,y:594,o:0.3984}).b(1).c(_d8,{x:559,y:594,o:0.6016}).b(1).c(_d8,{x:559,y:594,o:0.8008}).b(17).c(_d8,{x:559,y:594});
	s.a().b(8).b(1).c(_d9,{x:391.8,y:602.8,a:0.1524,b:0.1524}).b(1).c(_d9,{x:528.35,y:545.65,a:0.3718,b:0.3718,r:90}).b(1).c(_d9,{x:585.5,y:796.5,a:0.5912,b:0.5912,r:180}).b(1).c(_d9,{x:220.35,y:853.65,a:0.8106,b:0.8106,r:-90}).b(1).c(_d9,{x:163.2,y:374.2,a:1.03,b:1.03}).b(1).c(_d9,{x:165.75,y:376.8,a:1.02,b:1.02}).b(1).c(_d9,{x:168.4,y:379.4,a:1.01,b:1.01}).b(25).c(_d9,{x:171,y:382});
	s.a().b(40).c(_d10);
	s.as(function(){this.stop();}.bind(this),39);
	//f2x_auto_created_init_end

}
