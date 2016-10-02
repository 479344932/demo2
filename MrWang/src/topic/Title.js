var topic=topic||{};
topic.Title=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();

	s.gotoAndStop(globalVal.answerNum);
};
F2xExtend(topic.Title,F2xMovieClip);
topic.Title.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.b("topic","Q1");
	var _d1=Flash2x.b("topic","Q2");
	var _d2=Flash2x.b("topic","Q3");
	var _d3=Flash2x.b("topic","Q4");
	var _d4=Flash2x.b("topic","Q5");
	var _d5=Flash2x.b("topic","Q6");
	var _d6=Flash2x.b("topic","F2xAuto_155");
	var _d7=Flash2x.b("topic","Q8");
	var _d8=Flash2x.b("topic","F2xAuto_156");
	s.a().b(1).c(_d0,{x:74.5,y:34}).b(1).c(_d1,{x:70.5,y:34}).b(1).c(_d2,{x:70.5,y:34}).b(1).c(_d3,{x:70.5,y:34}).b(1).c(_d4,{x:70.5,y:34}).b(1).c(_d5,{x:70.5,y:34}).b(1).c(_d6,{x:70,y:34}).b(1).c(_d7,{x:69.55,y:34.25});
	s.a().b(8).c(_d8);
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
