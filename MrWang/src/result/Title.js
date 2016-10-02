var result=result||{};
result.Title=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();

	globalVal.resultPage(s);
}
F2xExtend(result.Title,F2xMovieClip);
result.Title.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.b("result","A");
	var _d1=Flash2x.b("result","B");
	var _d2=Flash2x.b("result","C");
	var _d3=Flash2x.b("result","D");
	var _d4=new result.F2xAuto_14();
	var _d5=new result.F2xAuto_12();
	var _d6=new result.F2xAuto_12();
	s.a().b(1).c(_d0,{x:136.3,y:37.65}).b(1).c(_d1,{x:140.3,y:38.65}).b(1).c(_d2,{x:140.5,y:39.5}).b(1).c(_d3,{x:142.3,y:38.65});
	s.a().b(4).c(_d4,{x:106});
	s.a().b(4).c(_d5,{x:349,y:23,d:180});
	s.a().b(4).c(_d6,{y:23});
	s.as(function(){this.stop();}.bind(this),3);
	s.as(function(){this.stop();}.bind(this),2);
	s.as(function(){this.stop();}.bind(this),1);
	s.as(function(){this.stop();}.bind(this),0);
	//f2x_auto_created_init_end
	
}
