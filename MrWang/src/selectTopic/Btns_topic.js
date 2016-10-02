var selectTopic=selectTopic||{};
selectTopic.Btns_topic=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();

	globalDispatcher.addEventListener("clickSelectBtn",function(){
		s.mouseChildren = false;
		s.mouseEnable = false;
	});
	globalDispatcher.addEventListener("changeBtns",function(){
		s.gotoAndStop(2);
		for(var num = 0;num<4;num++){
			var a;
			if(num < 3){
				a = s.inter["btn_topic" + globalVal.alreadySelect[num]];
			}else{
				a = s.inter["btn_topic" + globalVal.fourTopic];
			}
			a.gotoAndStop(2);
			a.mouseChildren = false;
			a.mouseEnable = false;
		}
	});

};
F2xExtend(selectTopic.Btns_topic,F2xMovieClip);
selectTopic.Btns_topic.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new selectTopic.F2xAuto_22();
	var _d1=new selectTopic.F2xAuto_23();
	_d1.name="inter";
	s.inter=_d1;
	s.a().b(1).c(_d0,{x:-2,y:2.5}).b(1).c(_d1,{x:-11.05,y:-6.5});
	s.as(function(){this.stop();}.bind(this),1);
	s.as(function(){this.stop();}.bind(this),0);
	//f2x_auto_created_init_end
	
};
