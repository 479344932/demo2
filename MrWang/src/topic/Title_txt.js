var topic=topic||{};
topic.Title_txt=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();

	s.gotoAndStop(globalVal.selectTopicDir);
};
F2xExtend(topic.Title_txt,F2xMovieClip);
topic.Title_txt.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.b("topic","F2xAuto_223");
	var _d1=new topic.F2xAuto_57();
	var _d2=new topic.F2xAuto_59();
	var _d3=new topic.F2xAuto_54();
	var _d4=Flash2x.b("topic","F2xAuto_171");
	var _d5=Flash2x.b("topic","F2xAuto_180");
	var _d6=Flash2x.b("topic","F2xAuto_165");
	var _d7=Flash2x.b("topic","F2xAuto_182");
	s.a().b(1).c(_d0,{y:1}).b(1).c(_d1,{y:1}).b(1).c(_d2).b(1).c(_d3,{y:1}).b(1).c(_d4,{y:1}).b(1).c(_d5).b(1).c(_d6).b(1).c(_d7,{x:-0.2,y:5.05});
	s.as(function(){this.stop();}.bind(this),7);
	s.as(function(){this.stop();}.bind(this),6);
	s.as(function(){this.stop();}.bind(this),5);
	s.as(function(){this.stop();}.bind(this),4);
	s.as(function(){this.stop();}.bind(this),3);
	s.as(function(){this.stop();}.bind(this),2);
	s.as(function(){this.stop();}.bind(this),1);
	s.as(function(){this.stop();}.bind(this),0);
	//f2x_auto_created_init_end
	
}
