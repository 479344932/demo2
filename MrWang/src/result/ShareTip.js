var result=result||{};
result.ShareTip=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(result.ShareTip,F2xContainer);
result.ShareTip.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new result.F2xAuto_27();
	Flash2x.d(_d0,{x:173,y:228});
	var _d1=new result.F2xAuto_28();
	Flash2x.d(_d1,{x:294,y:249});
	var _d2=new result.F2xAuto_29();
	Flash2x.d(_d2,{x:573,y:50});
	var _d3=new result.F2xAuto_17();
	Flash2x.d(_d3,{o:0.8008});
	s.addChild(_d3);
	s.addChild(_d2);
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
