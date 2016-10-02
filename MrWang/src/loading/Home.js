var loading=loading||{};
loading.Home=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
}
F2xExtend(loading.Home,F2xContainer);
loading.Home.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new loading.F2xAuto_7();
	Flash2x.d(_d0,{x:323,y:343});
	var _d1=new loading.F2xAuto_13();
	_d1.name="plan_bar";
	s.plan_bar=_d1;
	Flash2x.d(_d1,{x:200,y:540});
	var _d2=new loading.F2xAuto_6();
	Flash2x.d(_d2,{x:263,y:619});
	var _d3=new loading.F2xAuto_5();
	_d3.name="plan";
	s.plan=_d3;
	Flash2x.d(_d3,{x:384,y:676});
	s.addChild(_d3);
	s.addChild(_d2);
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
}
