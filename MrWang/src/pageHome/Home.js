var pageHome=pageHome||{};
pageHome.Home=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
	s.btn_start.addEventListener("onMouseUp",function(){
		s.gotoAndPlay(40,false);
		s.addFrameScript(0,function(){
			document.getElementsByTagName("body")[0].style.backgroundColor = "#FEDC85";
			Flash2x.getMediaByName("loading","ChangePageSound").play(0,1);
			globalVal.stage.removeAllChildren();
			globalVal.stage.addChild(new star.Star());
		});
	});
};
F2xExtend(pageHome.Home,F2xMovieClip);
pageHome.Home.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new pageHome.F2xAuto_24();
	_d0.name="btn_start";
	s.btn_start=_d0;
	var _d1=new pageHome.F2xAuto_44();
	var _d2=new pageHome.F2xAuto_45();
	var _d3=new pageHome.F2xAuto_46();
	var _d4=new pageHome.F2xAuto_47();
	var _d5=new pageHome.F2xAuto_48();
	var _d6=new pageHome.F2xAuto_49();
	var _d7=new pageHome.F2xAuto_50();
	var _d8=new pageHome.F2xAuto_35();
	var _d9=new pageHome.F2xAuto_39();
	var _d10=new pageHome.F2xAuto_19();
	var _d11=new pageHome.F2xAuto_51();
	var _d12=new pageHome.F2xAuto_52();
	var _d13=new pageHome.F2xAuto_53();
	var _d14=new pageHome.bg();
	s.a().b(52).b(1).c(_d0,{x:423.2,y:1124,a:0.009995,b:0.009995}).b(1).c(_d0,{x:417.4,y:1115,a:0.0524,b:0.0524}).b(1).c(_d0,{x:400.25,y:1087.8,a:0.1796,b:0.1796}).b(1).c(_d0,{x:371.6,y:1042.6,a:0.3916,b:0.3916}).b(1).c(_d0,{x:331.5,y:979.3,a:0.6884,b:0.6884}).b(1).c(_d0,{x:281.7,y:901.2,a:1.07,b:1.07}).b(1).c(_d0,{x:285.8,y:930.2,a:1.0394,b:1.0055}).b(1).c(_d0,{x:288.7,y:950.95,a:1.0175,b:0.9595}).b(1).c(_d0,{x:290.4,y:963.35,a:1.0044,b:0.9319}).b(1).c(_d0,{x:291,y:967.5,b:0.9227}).b(1).c(_d0,{x:291,y:964.35,b:0.9484}).b(1).c(_d0,{x:291,y:961.1,b:0.9742}).b(1).c(_d0,{x:291,y:958}).b(1).c(_d0,{x:291,y:959,b:0.99}).b(1).c(_d0,{x:291,y:959.95,b:0.98}).b(12).c(_d0,{x:291,y:958});
	s.a().b(38).b(1).c(_d1,{x:508.35,y:296.95,a:0.0059,b:0.0058}).b(1).c(_d1,{x:497.3,y:285.7,a:0.2669,b:0.2669}).b(1).c(_d1,{x:486.2,y:274.5,a:0.5279,b:0.5279}).b(1).c(_d1,{x:475.15,y:263.3,a:0.789,b:0.7889}).b(1).c(_d1,{x:464,y:252.05,a:1.05,b:1.05}).b(1).c(_d1,{x:465,y:253.05,a:1.0267,b:1.0267}).b(1).c(_d1,{x:466,y:254.05,a:1.0033,b:1.0033}).b(1).c(_d1,{x:466.95,y:255.05,a:0.98,b:0.98}).b(1).c(_d1,{x:466.1,y:254.2}).b(1).c(_d1,{x:465.25,y:253.35,a:1.02,b:1.02}).b(31).c(_d1,{x:466.1,y:254.2});
	s.a().b(39).b(1).c(_d2,{x:604.15,y:293.95,a:0.0037,b:0.0035}).b(1).c(_d2,{x:586.3,y:275.1,a:0.2652,b:0.2651}).b(1).c(_d2,{x:568.4,y:256.15,a:0.5268,b:0.5267}).b(1).c(_d2,{x:550.6,y:237.3,a:0.7884,b:0.7884}).b(1).c(_d2,{x:532.8,y:218.55,a:1.05,b:1.05}).b(1).c(_d2,{x:534.35,y:220.25,a:1.0267,b:1.0267}).b(1).c(_d2,{x:536,y:221.9,a:1.0033,b:1.0033}).b(1).c(_d2,{x:537.55,y:223.6,a:0.98,b:0.98}).b(1).c(_d2,{x:536.15,y:222.15}).b(1).c(_d2,{x:534.8,y:220.7,a:1.02,b:1.02}).b(30).c(_d2,{x:536.2,y:222.15});
	s.a().b(31).b(1).c(_d3,{x:252.5,y:183,a:0.0025,b:0.0046}).b(1).c(_d3,{x:226.8,y:168.85,a:0.2644,b:0.266}).b(1).c(_d3,{x:201.1,y:154.7,a:0.5263,b:0.5273}).b(1).c(_d3,{x:175.4,y:140.55,a:0.7881,b:0.7887}).b(1).c(_d3,{x:149.75,y:126.35,a:1.05,b:1.05}).b(1).c(_d3,{x:152.05,y:127.6,a:1.0267,b:1.0267}).b(1).c(_d3,{x:154.35,y:128.85,a:1.0033,b:1.0033}).b(1).c(_d3,{x:156.6,y:130.1,a:0.98,b:0.98}).b(1).c(_d3,{x:154.65,y:129}).b(1).c(_d3,{x:152.7,y:128,a:1.02,b:1.02}).b(38).c(_d3,{x:154.65,y:129.05});
	s.a().b(33).b(1).c(_d4,{x:487.9,y:159.3,a:0.0017,b:0.0034}).b(1).c(_d4,{x:449.95,y:139.8,a:0.2638,b:0.265}).b(1).c(_d4,{x:411.9,y:120.3,a:0.5259,b:0.5267}).b(1).c(_d4,{x:373.95,y:100.85,a:0.7879,b:0.7883}).b(1).c(_d4,{x:335.4,y:81.25,a:1.05,b:1.05}).b(1).c(_d4,{x:338.8,y:83,a:1.0267,b:1.0267}).b(1).c(_d4,{x:342.2,y:84.75,a:1.0033,b:1.0033}).b(1).c(_d4,{x:345.55,y:86.5,a:0.98,b:0.98}).b(1).c(_d4,{x:342.65,y:85}).b(1).c(_d4,{x:339.75,y:83.5,a:1.02,b:1.02}).b(36).c(_d4,{x:342.65,y:85});
	s.a().b(36).b(1).c(_d5,{x:312.35,y:292.1,a:0.0014,b:0.0032}).b(1).c(_d5,{x:266.65,y:271.45,a:0.2636,b:0.2649}).b(1).c(_d5,{x:220.95,y:250.85,a:0.5257,b:0.5266}).b(1).c(_d5,{x:175.25,y:230.25,a:0.7879,b:0.7883}).b(1).c(_d5,{x:133.45,y:211.25,a:1.05,b:1.05}).b(1).c(_d5,{x:137.45,y:213.05,a:1.0267,b:1.0267}).b(1).c(_d5,{x:141.4,y:214.8,a:1.0033,b:1.0033}).b(1).c(_d5,{x:145.4,y:216.65,a:0.98,b:0.98}).b(1).c(_d5,{x:141.95,y:215.1}).b(1).c(_d5,{x:138.6,y:213.55,a:1.02,b:1.02}).b(33).c(_d5,{x:142,y:215.1});
	s.a().b(39).b(1).c(_d6,{x:694.2,y:331.9,a:0.0081,b:0.0058}).b(1).c(_d6,{x:686.1,y:320.55,a:0.2686,b:0.2668}).b(1).c(_d6,{x:678.05,y:309.25,a:0.529,b:0.5279}).b(1).c(_d6,{x:670,y:297.9,a:0.7895,b:0.7889}).b(1).c(_d6,{x:661.9,y:286.5,a:1.05,b:1.05}).b(1).c(_d6,{x:662.6,y:287.5,a:1.0267,b:1.0267}).b(1).c(_d6,{x:663.35,y:288.5,a:1.0033,b:1.0033}).b(1).c(_d6,{x:664.1,y:289.5,a:0.98,b:0.98}).b(1).c(_d6,{x:663.45,y:288.6}).b(1).c(_d6,{x:662.8,y:287.75,a:1.02,b:1.02}).b(30).c(_d6,{x:663.45,y:288.65});
	s.a().b(8).b(1).c(_d7,{x:635.65,y:502.65,a:0.1456,b:0.1456,o:0}).b(1).c(_d7,{x:614.15,y:491.85,a:0.3692,b:0.3692,o:0.25}).b(1).c(_d7,{x:592.6,y:481,a:0.5928,b:0.5928,o:0.5}).b(1).c(_d7,{x:571.1,y:470.2,a:0.8164,b:0.8164,o:0.75}).b(1).c(_d7,{x:549.6,y:459.25,a:1.04,b:1.04}).b(1).c(_d7,{x:550.65,y:460.2,a:1.02,b:1.02}).b(4).c(_d7,{x:551.65,y:461.2}).b(1).c(_d7,{x:551.65,y:461.2}).b(1).c(_d7,{x:550.65,y:460.25,a:1.02,b:1.02}).b(1).c(_d7,{x:549.6,y:459.25,a:1.04,b:1.04}).b(1).c(_d7,{x:571.1,y:470.05,a:0.8164,b:0.8164,o:0.75}).b(1).c(_d7,{x:592.65,y:480.95,a:0.5928,b:0.5928,o:0.5}).b(1).c(_d7,{x:524.55,y:443.55,a:0.6437,b:0.6437,o:0.5625}).b(1).c(_d7,{x:456.35,y:406.15,a:0.6946,b:0.6946,o:0.625}).b(1).c(_d7,{x:388.25,y:368.7,a:0.7455,b:0.7455,o:0.6875}).b(1).c(_d7,{x:320.1,y:331.25,a:0.7964,b:0.7964,o:0.75}).b(1).c(_d7,{x:251.95,y:293.8,a:0.8473,b:0.8473,o:0.8125}).b(1).c(_d7,{x:183.85,y:256.4,a:0.8982,b:0.8982,o:0.875}).b(1).c(_d7,{x:115.65,y:218.95,a:0.9491,b:0.9491,o:0.9375}).b(1).c(_d7,{x:59.5,y:183.5}).b(1).c(_d7,{x:59.5,y:183.5}).b(1).c(_d7,{x:204.55,y:170.4}).b(1).c(_d7,{x:349.6,y:157.3}).b(1).c(_d7,{x:494.65,y:144.2}).b(1).c(_d7,{x:627.7,y:129.1}).b(1).c(_d7,{x:630.7,y:129.1}).b(1).c(_d7,{x:633.7,y:129.1}).b(1).c(_d7,{x:631.7,y:129.1}).b(1).c(_d7,{x:629.7,y:129.1}).b(1).c(_d7,{x:627.7,y:129.1}).b(1).c(_d7,{x:629.2,y:129.1}).b(1).c(_d7,{x:630.7,y:129.1}).b(36).c(_d7,{x:627.7,y:129.1});
	s.a().b(5).b(1).c(_d8,{x:758.05,y:1137.05}).b(1).c(_d8,{x:706.45,y:1076.65,r:-0.7948}).b(1).c(_d8,{x:654.05,y:1016.8,a:0.9999,b:0.9999,r:-1.7778}).b(1).c(_d8,{x:601.65,y:956.95,a:0.9998,b:0.9998,r:-2.7598}).b(1).c(_d8,{x:549.45,y:897.15,r:-3.7182}).b(1).c(_d8,{x:558.1,y:891.2,a:0.9999,b:0.9999,r:-1.7787}).b(1).c(_d8,{x:566,y:886}).b(1).c(_d8,{x:564,y:887.3,r:-0.4468}).b(66).c(_d8,{x:566,y:886});
	s.a().b(6).b(1).c(_d9,{x:46,y:1146}).b(1).c(_d9,{x:73.65,y:1092.55,r:0.5001}).b(1).c(_d9,{x:101.25,y:1039.2,r:1.0003}).b(1).c(_d9,{x:128.95,y:985.8,a:0.9999,b:0.9999,r:1.5005}).b(1).c(_d9,{x:156.5,y:932.45,r:2.0016}).b(1).c(_d9,{x:152.75,y:932.7,r:1.0003}).b(1).c(_d9,{x:149,y:933}).b(1).c(_d9,{x:150.7,y:932.85,r:0.4468}).b(65).c(_d9,{x:149,y:933});
	s.a().b(1).c(_d10,{x:168,y:1152.6,b:0.0113}).b(1).c(_d10,{x:168,y:967.2,b:0.2684}).b(1).c(_d10,{x:168,y:781.8,b:0.5254}).b(1).c(_d10,{x:168,y:596.45,b:0.7825}).b(1).c(_d10,{x:168,y:411,b:1.0396}).b(1).c(_d10,{x:168,y:421.95,b:1.024}).b(1).c(_d10,{x:168,y:432.95,b:1.0085}).b(1).c(_d10,{x:168,y:444,b:0.9929}).b(1).c(_d10,{x:168,y:440.5,b:0.9979}).b(1).c(_d10,{x:168,y:437,b:1.0028}).b(1).c(_d10,{x:168,y:438,b:1.0014}).b(68).c(_d10,{x:168,y:439});
	s.a().b(11).b(1).c(_d11,{x:221,y:296,o:0}).b(1).c(_d11,{x:221,y:301,o:0.168}).b(1).c(_d11,{x:221,y:306,o:0.332}).b(1).c(_d11,{x:221,y:311,o:0.5}).b(1).c(_d11,{x:221,y:316,o:0.668}).b(1).c(_d11,{x:221,y:321,o:0.832}).b(62).c(_d11,{x:221,y:326});
	s.a().b(16).b(1).c(_d12,{x:343.5,y:358.6,o:0}).b(1).c(_d12,{x:343.5,y:360.05,o:0.1445}).b(1).c(_d12,{x:343.5,y:361.45,o:0.2852}).b(1).c(_d12,{x:343.5,y:362.9,o:0.4297}).b(1).c(_d12,{x:343.5,y:364.3,o:0.5703}).b(1).c(_d12,{x:343.5,y:365.75,o:0.7148}).b(1).c(_d12,{x:343.5,y:367.15,o:0.8555}).b(56).c(_d12,{x:343.5,y:368.6});
	s.a().b(22).b(1).c(_d13,{x:142,y:406,o:0}).b(1).c(_d13,{x:142,y:406,o:0.125}).b(1).c(_d13,{x:142,y:406,o:0.25}).b(1).c(_d13,{x:142,y:406,o:0.375}).b(1).c(_d13,{x:142,y:406,o:0.5}).b(1).c(_d13,{x:142,y:406,o:0.625}).b(1).c(_d13,{x:142,y:406,o:0.75}).b(1).c(_d13,{x:142,y:406,o:0.875}).b(49).c(_d13,{x:142,y:406});
	s.a().b(79).c(_d14);
	s.as(function(){this.stop();}.bind(this),78);
	//f2x_auto_created_init_end
	
}
