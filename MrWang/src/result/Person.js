var result=result||{};
result.Person=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();

	globalVal.resultPage(s);
}
F2xExtend(result.Person,F2xMovieClip);
result.Person.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.b("result","guan");
	var _d1=Flash2x.b("result","qu");
	var _d2=Flash2x.b("result","F2xAuto_36");
	var _d3=Flash2x.b("result","yan");
	s.a().b(1).c(_d0,{x:10.5,y:-26.5}).b(1).c(_d1,{x:25.5,y:-14.5}).b(1).c(_d2,{x:20,y:-24}).b(1).c(_d3,{x:22.5,y:-61.5});
	s.as(function(){this.stop();}.bind(this),3);
	s.as(function(){this.stop();}.bind(this),2);
	s.as(function(){this.stop();}.bind(this),1);
	s.as(function(){this.stop();}.bind(this),0);
	//f2x_auto_created_init_end
	
}
