var loading=loading||{};
loading.Loading=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
}
F2xExtend(loading.Loading,F2xContainer);
loading.Loading.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new loading.Home();
	_d0.name="home";
	s.home=_d0;
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
}
