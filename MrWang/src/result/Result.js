var result=result||{};
result.Result=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	if(!globalVal.sharePage){
		globalVal.sharePage=new result.ShareTip();
		globalVal.stageTop.addChild(globalVal.sharePage);
		globalVal.sharePage.visible = false;
		globalVal.sharePage.addEventListener("onMouseUp",function(){
			globalVal.sharePage.visible = false;
			globalVal.sharePage.mouseEnable = false;
		});
	}
	globalDispatcher.addEventListener("tip",function(){
		globalVal.sharePage.visible = true;
		globalVal.sharePage.mouseEnable = true;
	});
};
F2xExtend(result.Result,F2xContainer);
result.Result.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new result.Home();
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
}
