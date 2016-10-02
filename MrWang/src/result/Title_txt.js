var result=result||{};
result.Title_txt=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();

	globalVal.resultPage(s);
}
F2xExtend(result.Title_txt,F2xMovieClip);
result.Title_txt.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.b("result","F2xAuto_41");
	var _d1=Flash2x.b("result","F2xAuto_47");
	var _d2=new result.F2xAuto_13();
	var _d3=Flash2x.b("result","F2xAuto_44");
	var _d4=new result.F2xAuto_11();
	s.a().b(1).c(_d0,{x:24.3,y:15.5}).b(1).c(_d1,{x:45.3,y:28.5}).b(1).c(_d2,{x:68,y:25.75}).b(1).c(_d3,{x:81.3,y:25.5});
	s.a().b(1).c(_d4,{y:17.65,b:0.5789}).b(3).c(_d4,{y:37.75});
	s.as(function(){this.stop();}.bind(this),3);
	s.as(function(){this.stop();}.bind(this),2);
	s.as(function(){this.stop();}.bind(this),1);
	s.as(function(){this.stop();}.bind(this),0);
	//f2x_auto_created_init_end
	
}
