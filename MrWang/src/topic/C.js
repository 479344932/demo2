var topic=topic||{};
topic.C=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();

	globalVal.getSelect(s,"C");
	globalDispatcher.addEventListener("getSelect",function(){
		s.mouseChildren = false;
		s.mouseEnable = false;
	});
	globalDispatcher.addEventListener("enableSelect",function(){
		s.mouseChildren = true;
		s.mouseEnable = true;
	})
}
F2xExtend(topic.C,F2xMovieClip);
topic.C.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new topic.Choice_box();
	_d0.name="select";
	s.select=_d0;
	var _d1=new topic.F2xAuto_118();
	var _d2=Flash2x.b("topic","F2xAuto_141");
	s.a().b(1).c(_d0,{y:0.15}).b(1).c(_d0,{x:-10,y:-46.85});
	s.a().b(1).c(_d1,{x:67,y:8.5}).b(1).c(_d1,{x:57,y:-35.5});
	s.a().b(1).c(_d2,{x:53}).b(1).c(_d2,{x:41,y:-61.8,a:1.0521,b:1.961});
	s.as(function(){this.stop();}.bind(this),0);
	//f2x_auto_created_init_end
	
}
