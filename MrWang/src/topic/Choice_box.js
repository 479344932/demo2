var topic=topic||{};
topic.Choice_box=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();

	s.addEventListener("onMouseUp",function(){
		s.gotoAndStop(2);
		if(globalVal.selectTopicDir == 8){
			globalVal.specialMusic.play(0,1);
		}
	});
	s.addFrameScript(1,function(){
		globalDispatcher.dispatchEvent(new Event("leaveTopicPage"));
	});

	globalDispatcher.addEventListener("getSelect",function(){
		s.mouseChildren = false;
		s.mouseEnable = false;
	});
	globalDispatcher.addEventListener("enableSelect",function(){
		s.mouseChildren = true;
		s.mouseEnable = true;
	})
};
F2xExtend(topic.Choice_box,F2xMovieClip);
topic.Choice_box.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.b("topic","F2xAuto_143");
	var _d1=new topic.F2xAuto_86();
	s.a().b(1).b(1).c(_d0,{x:-2,y:4});
	s.a().b(2).c(_d1,{y:-0.1});
	s.as(function(){this.stop();}.bind(this),0);
	//f2x_auto_created_init_end
	
};
