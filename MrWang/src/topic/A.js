var topic=topic||{};
topic.A=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();

	globalVal.getSelect(s,"A");
	globalDispatcher.addEventListener("getSelect",function(){
		s.mouseChildren = false;
		s.mouseEnable = false;
	});
	globalDispatcher.addEventListener("enableSelect",function(){
		s.mouseChildren = true;
		s.mouseEnable = true;
	})
};
F2xExtend(topic.A,F2xMovieClip);
topic.A.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new topic.F2xAuto_115();
	var _d1=new topic.Choice_box();
	_d1.name="select";
	s.select=_d1;
	var _d2=Flash2x.b("topic","F2xAuto_141");
	s.a().b(1).c(_d0,{x:63.5,y:9.5}).b(1).c(_d0,{x:53.5,y:-110.5});
	s.a().b(1).c(_d1,{y:0.1}).b(1).c(_d1,{x:-10,y:-123.9});
	s.a().b(1).c(_d2,{x:53.25}).b(1).c(_d2,{x:42.05,y:-137.3,a:1.0521,b:1.961});
	s.as(function(){this.stop();}.bind(this),0);
	//f2x_auto_created_init_end
	
}
