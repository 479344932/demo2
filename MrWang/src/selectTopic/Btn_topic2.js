var selectTopic=selectTopic||{};
selectTopic.Btn_topic2=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();

	globalVal.clickEvent.clickTopicBtn(s,2);
}
F2xExtend(selectTopic.Btn_topic2,F2xMovieClip);
selectTopic.Btn_topic2.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.b("selectTopic","BB");
	var _d1=Flash2x.b("selectTopic","F2xAuto_108");
	var _d2=Flash2x.b("selectTopic","F2xAuto_96");
	s.a().b(2).c(_d0,{x:29.4,y:43.9});
	s.a().b(1).b(1).c(_d1,{x:14,y:17});
	s.a().b(2).c(_d2);
	s.as(function(){this.stop();}.bind(this),0);
	//f2x_auto_created_init_end
	
}
