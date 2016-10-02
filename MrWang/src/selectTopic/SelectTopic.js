var selectTopic=selectTopic||{};
selectTopic.SelectTopic=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
}
F2xExtend(selectTopic.SelectTopic,F2xContainer);
selectTopic.SelectTopic.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new selectTopic.Home();
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
}
