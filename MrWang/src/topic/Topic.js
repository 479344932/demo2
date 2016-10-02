var topic=topic||{};
topic.Topic=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
}
F2xExtend(topic.Topic,F2xContainer);
topic.Topic.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new topic.Home();
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
}
