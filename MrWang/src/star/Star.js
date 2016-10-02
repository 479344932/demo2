var star=star||{};
star.Star=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
}
F2xExtend(star.Star,F2xContainer);
star.Star.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new star.Home();
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
}
