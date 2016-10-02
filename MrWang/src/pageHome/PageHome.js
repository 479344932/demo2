var pageHome=pageHome||{};
pageHome.PageHome=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(pageHome.PageHome,F2xContainer);
pageHome.PageHome.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new pageHome.Home();
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
