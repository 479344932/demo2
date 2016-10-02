var star=star||{};
star.Round=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();

	s.currentStar = 0;
	s.last = {};
	//监听星座点击
	for(var c = 1;c <= 12; c++){
		s["star"+c].mouseChildren=false;
		s["star"+c].value=c;
		s["star"+c].addEventListener("onMouseUp", s.clickStarEvent.bind(s));
	}

	s.round_bg.mouseEnable = false;
	s.tip.mouseEnable=false;
};
F2xExtend(star.Round,F2xContainer);
star.Round.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new star.F2xAuto_35();
	_d0.name="tip";
	s.tip=_d0;
	Flash2x.d(_d0,{x:480.9,y:235.6,a:0.7,b:0.7});
	var _d12=new star.F2xAuto_29();
	_d12.name="star1";
	s.star1=_d12;
	Flash2x.d(_d12,{x:162.55,y:158.65,r:-44.6897});
	var _d11=new star.F2xAuto_29();
	_d11.name="star12";
	s.star12=_d11;
	Flash2x.d(_d11,{x:276.75,y:94.95,r:-14.6906});
	var _d10=new star.F2xAuto_29();
	_d10.name="star2";
	s.star2=_d10;
	Flash2x.d(_d10,{x:97.35,y:271.45,a:0.9999,b:0.9999,r:-75.2678});
	var _d9=new star.F2xAuto_29();
	_d9.name="star3";
	s.star3=_d9;
	Flash2x.d(_d9,{x:95.45,y:400.15,r:-104.4917});
	var _d8=new star.F2xAuto_29();
	_d8.name="star4";
	s.star4=_d8;
	Flash2x.d(_d8,{x:159.75,y:514.05,a:0.9999,b:0.9999,r:-135.0408});
	var _d7=new star.F2xAuto_29();
	_d7.name="star5";
	s.star5=_d7;
	Flash2x.d(_d7,{x:271.75,y:580.9,a:0.9999,b:0.9999,r:-165.0981});
	var _d6=new star.F2xAuto_29();
	_d6.name="star6";
	s.star6=_d6;
	Flash2x.d(_d6,{x:402.45,y:581.45,r:164.9022});
	var _d5=new star.F2xAuto_29();
	_d5.name="star7";
	s.star7=_d5;
	Flash2x.d(_d5,{x:515.05,y:516.95,a:0.9999,b:0.9999,r:134.7317});
	var _d4=new star.F2xAuto_29();
	_d4.name="star8";
	s.star8=_d4;
	Flash2x.d(_d4,{x:581.05,y:404.85,a:0.9999,b:0.9999,r:104.7322});
	var _d3=new star.F2xAuto_29();
	_d3.name="star9";
	s.star9=_d3;
	Flash2x.d(_d3,{x:582.7,y:274.8,r:74.7414});
	var _d2=new star.F2xAuto_29();
	_d2.name="star10";
	s.star10=_d2;
	Flash2x.d(_d2,{x:518.55,y:161.55,r:44.7428});
	var _d1=new star.F2xAuto_29();
	_d1.name="star11";
	s.star11=_d1;
	Flash2x.d(_d1,{x:406.65,y:96.05,r:15});
	var _d13=new star.F2xAuto_36();
	_d13.name="round_bg";
	s.round_bg=_d13;
	s.addChild(_d13);
	s.addChild(_d1);
	s.addChild(_d2);
	s.addChild(_d3);
	s.addChild(_d4);
	s.addChild(_d5);
	s.addChild(_d6);
	s.addChild(_d7);
	s.addChild(_d8);
	s.addChild(_d9);
	s.addChild(_d10);
	s.addChild(_d11);
	s.addChild(_d12);
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};

star.Round.prototype.clickStarEvent = function(e){
	Flash2x.getMediaByName("star","SelectSound").play(0,1);
	var s = this;
	s.tip.visible=false;
	s.parent.parent.isSelectStar = true;
	if(s.parent.parent.isSelectStar && s.parent.parent.isSelectBlood){
		s.parent.parent.nextPage.gotoAndStop(2);
	}
	s.mouseEnable = false;
	e.target.mouseEnable = false;
	if(s.last.value != e.target.value){
		s.last.mouseEnable = true;
	}
	var time = Math.abs(s.currentStar - e.target.value) * 0.1;
	if(s.currentStar != 0){
		s["star" + s.currentStar].gotoAndStop(1);
	}

	annie.Tween.to(s,time,{rotation: 30*(e.target.value - 1) - 15,onComplete:function(){
		e.target.gotoAndStop(2);
		s.mouseEnable = true;
		s.last = e.target;
	}});
	s.currentStar = e.target.value;
};
