var topic=topic||{};
topic.Home=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
	globalDispatcher.addEventListener("leaveTopicPage",function(){
		s.play(false);
	});
	s.addFrameScript(0,function(){
		if(globalVal.isInAnswer){
			globalVal.isInAnswer = false;
			globalVal.stage.removeChildAt(1);
			globalDispatcher.dispatchEvent(new Event("startSelectPage"));
		}
	});
	s.addEventListener(annie.Event.END_FRAME,function(){
		globalVal.isInAnswer = true;
		globalDispatcher.dispatchEvent(new Event("enableSelect"));
	});
	globalVal.lLogo_mc.x=185;
	globalVal.lLogo_mc.y=42;
	globalVal.rLogo_mc.x=484;
	globalVal.rLogo_mc.y=32;
};
F2xExtend(topic.Home,F2xMovieClip);
topic.Home.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new topic.Topic_txt();
	var _d1=new topic.A();
	var _d2=new topic.B();
	var _d3=new topic.C();
	var _d4=new topic.D();
	var _d5=new topic.Photo();
	var _d6=new topic.Title_txt();
	var _d7=new topic.Title();
	var _d8=new topic.F2xAuto_81();
	var _d9=new topic.F2xAuto_65();
	var _d10=Flash2x.b("topic","F2xAuto_221");
	s.a().b(38).b(2).c(_d0,{x:292.1,y:865});
	s.a().b(21).b(1).c(_d1,{x:196.75,y:845.55}).b(1).c(_d1,{x:196.75,y:854.7}).b(1).c(_d1,{x:196.75,y:862.2}).b(1).c(_d1,{x:196.75,y:868.05}).b(1).c(_d1,{x:196.75,y:872.2}).b(1).c(_d1,{x:196.75,y:874.7}).b(1).c(_d1,{x:196.75,y:875.55}).b(1).c(_d1,{x:196.75,y:872.5}).b(1).c(_d1,{x:196.75,y:870}).b(1).c(_d1,{x:196.75,y:868.05}).b(1).c(_d1,{x:196.75,y:866.65}).b(1).c(_d1,{x:196.75,y:865.85}).b(7).c(_d1,{x:196.75,y:865.55});
	s.a().b(24).b(1).c(_d2,{x:197,y:897}).b(1).c(_d2,{x:197,y:906.15}).b(1).c(_d2,{x:197,y:913.65}).b(1).c(_d2,{x:197,y:919.5}).b(1).c(_d2,{x:197,y:923.65}).b(1).c(_d2,{x:197,y:926.15}).b(1).c(_d2,{x:197,y:927}).b(1).c(_d2,{x:197,y:923.95}).b(1).c(_d2,{x:197,y:921.45}).b(1).c(_d2,{x:197,y:919.5}).b(1).c(_d2,{x:197,y:918.1}).b(1).c(_d2,{x:197,y:917.3}).b(4).c(_d2,{x:197,y:917});
	s.a().b(26).b(1).c(_d3,{x:197,y:948.3}).b(1).c(_d3,{x:197,y:957.45}).b(1).c(_d3,{x:197,y:964.95}).b(1).c(_d3,{x:197,y:970.8}).b(1).c(_d3,{x:197,y:974.95}).b(1).c(_d3,{x:197,y:977.45}).b(1).c(_d3,{x:197,y:978.3}).b(1).c(_d3,{x:197,y:975.25}).b(1).c(_d3,{x:197,y:972.75}).b(1).c(_d3,{x:197,y:970.8}).b(1).c(_d3,{x:197,y:969.4}).b(1).c(_d3,{x:197,y:968.6}).b(2).c(_d3,{x:197,y:968.3});
	s.a().b(27).b(1).c(_d4,{x:197,y:999}).b(1).c(_d4,{x:197,y:1008.15}).b(1).c(_d4,{x:197,y:1015.65}).b(1).c(_d4,{x:197,y:1021.5}).b(1).c(_d4,{x:197,y:1025.65}).b(1).c(_d4,{x:197,y:1028.15}).b(1).c(_d4,{x:197,y:1029}).b(1).c(_d4,{x:197,y:1025.95}).b(1).c(_d4,{x:197,y:1023.45}).b(1).c(_d4,{x:197,y:1021.5}).b(1).c(_d4,{x:197,y:1020.1}).b(1).c(_d4,{x:197,y:1019.3}).b(1).c(_d4,{x:197,y:1019});
	s.a().b(16).b(1).c(_d5,{x:250,y:373,o:0}).b(1).c(_d5,{x:242.05,y:373,o:0.2656}).b(1).c(_d5,{x:235.3,y:373,o:0.4883}).b(1).c(_d5,{x:229.8,y:373,o:0.6719}).b(1).c(_d5,{x:225.5,y:373,o:0.8164}).b(1).c(_d5,{x:222.45,y:373,o:0.918}).b(1).c(_d5,{x:220.6,y:373,o:0.9805}).b(17).c(_d5,{x:220,y:373});
	s.a().b(12).b(1).c(_d6,{x:235,y:182,o:0}).b(1).c(_d6,{x:235,y:186.7,o:0.2344}).b(1).c(_d6,{x:235,y:190.75,o:0.4375}).b(1).c(_d6,{x:235,y:194.2,o:0.6094}).b(1).c(_d6,{x:235,y:197,o:0.75}).b(1).c(_d6,{x:235,y:199.2,o:0.8594}).b(1).c(_d6,{x:235,y:200.75,o:0.9375}).b(1).c(_d6,{x:235,y:201.7,o:0.9844}).b(20).c(_d6,{x:235,y:202});
	s.a().b(8).b(1).c(_d7,{x:433.5,y:143.5,a:0.01,b:0.01}).b(1).c(_d7,{x:399.8,y:126.65,a:0.3466,b:0.3466}).b(1).c(_d7,{x:366.1,y:109.85,a:0.6833,b:0.6833}).b(1).c(_d7,{x:332,y:93,a:1.02,b:1.02}).b(1).c(_d7,{x:332.3,y:93.8,a:1.0167,b:1.0167}).b(1).c(_d7,{x:332.7,y:94.65,a:1.0133,b:1.0133}).b(1).c(_d7,{x:333,y:95.5,a:1.01,b:1.01}).b(1).c(_d7,{x:333.5,y:94.8,a:1.005,b:1.005}).b(24).c(_d7,{x:334,y:94});
	s.a().b(4).b(1).c(_d8,{x:177.5,y:-404.9}).b(1).c(_d8,{x:177.5,y:-162.95,b:0.9852}).b(1).c(_d8,{x:177.5,y:9.85,b:0.9746}).b(1).c(_d8,{x:177.5,y:113.5,b:0.9682}).b(1).c(_d8,{x:177.5,y:148.1,b:0.9661}).b(1).c(_d8,{x:177.5,y:141.2,b:0.9841}).b(1).c(_d8,{x:177.5,y:134.3,b:1.002}).b(1).c(_d8,{x:177.5,y:127.45,b:1.02}).b(1).c(_d8,{x:177.5,y:131.25,b:1.01}).b(1).c(_d8,{x:177.5,y:135.1}).b(1).c(_d8,{x:177.5,y:138.95,b:0.99}).b(1).c(_d8,{x:177.5,y:137,b:0.995}).b(24).c(_d8,{x:177.5,y:135.1});
	s.a().b(1).c(_d9,{x:126,y:8,o:0}).b(1).c(_d9,{x:126,y:8,o:0.1992}).b(1).c(_d9,{x:126,y:8,o:0.3984}).b(1).c(_d9,{x:126,y:8,o:0.6016}).b(1).c(_d9,{x:126,y:8,o:0.8008}).b(35).c(_d9,{x:126,y:8});
	s.a().b(40).c(_d10);
	s.as(function(){this.stop();}.bind(this),39);
	//f2x_auto_created_init_end
	
}
