var pageHome=pageHome||{};
pageHome.LOGO=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
}
F2xExtend(pageHome.LOGO,F2xContainer);
pageHome.LOGO.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d1=Flash2x.b("pageHome","F2xAuto_114");
	_d1.name="_d1";
	Flash2x.d(_d1,{x:199.5,y:41});
	var _d0=Flash2x.b("pageHome","F2xAuto_110");
	_d0.name="_d0";
	Flash2x.d(_d0,{x:483.5,y:32});
	s.addChild(_d0);
	s.addChild(_d1);
	//f2x_auto_created_init_end
	
}
