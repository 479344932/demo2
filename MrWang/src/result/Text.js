var result=result||{};
result.Text=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();

	globalVal.resultPage(s);
}
F2xExtend(result.Text,F2xMovieClip);
result.Text.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new result.F2xAuto_16();
	var _d1=Flash2x.b("result","F2xAuto_45");
	var _d2=Flash2x.b("result","F2xAuto_49");
	var _d3=Flash2x.b("result","F2xAuto_38");
	s.a().b(1).c(_d0,{x:-1.5,y:-67.45}).b(1).c(_d1,{y:-24}).b(1).c(_d2,{y:-24}).b(1).c(_d3,{x:-0.5,y:-26.95});
	s.as(function(){this.stop();}.bind(this),3);
	s.as(function(){this.stop();}.bind(this),2);
	s.as(function(){this.stop();}.bind(this),1);
	s.as(function(){this.stop();}.bind(this),0);
	//f2x_auto_created_init_end
	
}
