function main () {
	var ct = view.container;
	
	//menubar
	var menu = ct.addMenuBar("menu",{
		"bgcolor":"#00CCFF",
		"bgcolor:hover":"#FF66FF",
		"padding":"5px",
		"margin":"0 0 5px 0",
		"item_width":"100px",
		"item_height":"30px",
		"font_color":"white",
		"font0_size":"15px",
		"font0_family":"",
		"font0_weight":"bold",
		"font1_size":"10px",
		"font1_family":"",
		"font1_weight":"",
	});
	
	menu.addItem("i0","菜单项0");
	menu.addItem("i1","菜单项1");
	menu.addItem("i2","菜单项2");
	menu.addItem("i3","菜单项3");
	menu.addItem("i4","菜单项4");
	menu.itemAt("i2").addItem("i2_0","菜单项2_0");
	menu.itemAt("i2").addItem("i2_1","菜单项2_1");
	menu.itemAt("i2").addItem("i2_2","菜单项2_2");
	menu.itemAt("i2").addItem("i2_3","菜单项2_3");
	menu.itemAt("i2").addItem("i2_4","菜单项2_4");
	menu.itemAt("i2").itemAt("i2_2").addItem("i2_2_0","菜单项2_2_0");
	menu.itemAt("i2").itemAt("i2_2").addItem("i2_2_1","菜单项2_2_1");
	menu.itemAt("i2").itemAt("i2_2").addItem("i2_2_2","菜单项2_2_2");
	menu.itemAt("i2").itemAt("i2_2").addItem("i2_2_3","菜单项2_2_3");
	menu.itemAt("i2").itemAt("i2_2").addItem("i2_2_4","菜单项2_2_4");
	
	var tool = ct.addToolBar("toolbar",{
		"bgcolor":"#00CCFF",
		"bgcolor:hover":"#FF66FF",
		"bgcolor:selected":"#FF66FF",
		"padding":"3px",
		"margin":"0 0 5px 0",
		"item_width":"20px",
	});
	
	var toolDisp = tool.addItem("display", "NineSDK/icons/setting00_white_128x128.png", "点击按键0");
	var toolRotate = tool.addItem("rotate", "NineSDK/icons/rotate00_white_96x96.png", "点击按键1");
	var toolTrans = tool.addItem("trans", "NineSDK/icons/pan00_white_96x96.png", "点击按键2");
	var toolZoom = tool.addItem("zoom", "NineSDK/icons/zoom01_white_64x64.png", "点击按键3");
	var toolGlobe = tool.addItem("globe", "NineSDK/icons/globe00_white_64x64.png", "点击按键4");
	var toolTest = tool.addItem("test", "NineSDK/icons/test00_white_64x64.png", "点击按键5");
	
	var toolStyle = tool.addGroup("style","状态组0");
	var toolFill = toolStyle.addItem("fill", "NineSDK/icons/fill00_white_64x64.png", "状态按键0");
	var toolWire = toolStyle.addItem("wire", "NineSDK/icons/wire00_white_64x64.png", "状态按键1");
	var toolEdge = toolStyle.addItem("edge", "NineSDK/icons/edge00_white_64x64.png", "状态按键2");
	$(toolFill.node).click();
	
	var toolDraw = tool.addItem("draw", "NineSDK/icons/brush00_white_64x64.png", "点击按键6");

	var ctn1 = ct.addContainer("ctn1","horizontal", {
		"margin":"0 0 5px 0",
		"box_flex":"1",
	});
		
	var tree = ctn1.addTree("tree",{
		"bgcolor":"#00CCFF",
		"bgcolor:selected":"#FF66FF",
		"width":"200px",
		"height": ($(ctn1.node).height()-10)+"px",
		"padding":"5px",
		"margin":"0 5px 0 0",
		"font_color":"white",
		"font_color:selected" : "white",
		"font_size":"20px",
		"font_weight":"normal",
	});
	
	tree.addItem("i0","Item0");
	tree.addItem("i1","Item1");
	tree.addItem("i2","Item2");
	tree.addItem("i3","Item3");
	tree.addItem("i4","Item4");
	tree.addItem("i5","Item5");
	tree.addItem("i6","Item6");
	tree.addItem("i7","Item7");
	tree.addItem("i8","Item8");
	tree.addItem("i9","Item9");
	tree.itemAt("i3").addItem("i3_0","Item3_0");
	tree.itemAt("i3").addItem("i3_1","Item3_1");
	tree.itemAt("i3").addItem("i3_2","Item3_2");
	tree.itemAt("i3").addItem("i3_3","Item3_3");
	tree.itemAt("i3").addItem("i3_4","Item3_4");
	tree.itemAt("i3").addItem("i3_5","Item3_5");
	tree.itemAt("i4").addItem("i4_0","Item4_0");
	tree.itemAt("i4").addItem("i4_1","Item4_1");
	tree.itemAt("i4").addItem("i4_2","Item4_2");
	tree.itemAt("i4").addItem("i4_3","Item4_3");
	tree.itemAt("i4").addItem("i4_4","Item4_4");
	tree.itemAt("i4").addItem("i4_5","Item4_5");
	
}

function main1 () {
	var ct = view.container;
	
	//menubar
	var menu = ct.addMenuBar("menu",{
		"bgcolor":"#00CCFF",
		"bgcolor:hover":"#FF66FF",
		"padding":"5px",
		"margin":"0 0 5px 0",
		"item_width":"100px",
		"item_height":"30px",
		"font_color":"white",
		"font0_size":"15px",
		"font0_family":"",
		"font0_weight":"bold",
		"font1_size":"10px",
		"font1_family":"",
		"font1_weight":"",
	});
	
	menu.addItem("i0","菜单项0");
	menu.addItem("i1","菜单项1");
	menu.addItem("i2","菜单项2");
	menu.addItem("i3","菜单项3");
	menu.addItem("i4","菜单项4");
	menu.itemAt("i2").addItem("i2_0","菜单项2_0");
	menu.itemAt("i2").addItem("i2_1","菜单项2_1");
	menu.itemAt("i2").addItem("i2_2","菜单项2_2");
	menu.itemAt("i2").addItem("i2_3","菜单项2_3");
	menu.itemAt("i2").addItem("i2_4","菜单项2_4");
	menu.itemAt("i2").itemAt("i2_2").addItem("i2_2_0","菜单项2_2_0");
	menu.itemAt("i2").itemAt("i2_2").addItem("i2_2_1","菜单项2_2_1");
	menu.itemAt("i2").itemAt("i2_2").addItem("i2_2_2","菜单项2_2_2");
	menu.itemAt("i2").itemAt("i2_2").addItem("i2_2_3","菜单项2_2_3");
	menu.itemAt("i2").itemAt("i2_2").addItem("i2_2_4","菜单项2_2_4");
	
	var menuFile = menu.addItem("file","文件");
	var menuOpen = menuFile.addItem("open","打开文件");
	var menuSave = menuFile.addItem("save","另存为...");
	var menuClose = menuFile.addItem("close","关闭");
	
	var menuSTL = menuOpen.addItem("stl","打开STL文件...");
	
	var menuView = menu.addItem("view", "视图");
	var menuDisp = menuView.addItem("display", "显示属性设置...");
	var menuRotate = menuView.addItem("rotate", "旋转...");
	var menuTrans = menuView.addItem("trans", "平移...");
	var menuZoom = menuView.addItem("zoom", "缩放...");
	var menuGlobe = menuView.addItem("globe", "全局显示");
	
	var menuGrid = menu.addItem("grid", "网格生成");
	var menuPara = menuGrid.addItem("para", "参数...");

	var tool = ct.addToolBar("toolbar",{
		"bgcolor":"#00CCFF",
		"bgcolor:hover":"#FF66FF",
		"bgcolor:selected":"#FF66FF",
		"padding":"3px",
		"margin":"0 0 5px 0",
		"item_width":"20px",
	});
	
	var toolDisp = tool.addItem("display", "NineSDK/icons/setting00_white_128x128.png", "显示属性设置...");
	var toolRotate = tool.addItem("rotate", "NineSDK/icons/rotate00_white_96x96.png", "旋转...");
	var toolTrans = tool.addItem("trans", "NineSDK/icons/pan00_white_96x96.png", "平移...");
	var toolZoom = tool.addItem("zoom", "NineSDK/icons/zoom01_white_64x64.png", "缩放...");
	var toolGlobe = tool.addItem("globe", "NineSDK/icons/globe00_white_64x64.png", "全局显示");
	var toolTest = tool.addItem("test", "NineSDK/icons/test00_white_64x64.png", "测试");
	
	var toolStyle = tool.addGroup("style");
	var toolFill = toolStyle.addItem("fill", "NineSDK/icons/fill00_white_64x64.png", "表面填充");
	var toolWire = toolStyle.addItem("wire", "NineSDK/icons/wire00_white_64x64.png", "线框");
	var toolEdge = toolStyle.addItem("edge", "NineSDK/icons/edge00_white_64x64.png", "边框");
	$(toolFill.node).click();
	
	var toolDraw = tool.addItem("draw", "NineSDK/icons/brush00_white_64x64.png", "重绘");
	
	var ctn1 = ct.addContainer("ctn1","horizontal", {
		"margin":"0 0 5px 0",
		"box_flex":"1",
	});
/*	
	var cb = ct.addCallBoard("callboard",{
		"bgcolor":"#00CCFF",
		"padding":"5px",
		"font_color":"white",
		"height":"100px",
	});
	
	cb.writeln("39061317");
	cb.writeln("章永春");
	cb.writeln("9233=7*1319");
	cb.writeln("妈妈，我爱你");
*/		
	var tree = ctn1.addTree("tree",{
		"bgcolor":"#00CCFF",
		"bgcolor:selected":"#FF66FF",
		"width":"200px",
		"height": ($(ctn1.node).height()-10)+"px",
		"padding":"5px",
		"margin":"0 5px 0 0",
		"font_color":"white",
		"font_color:selected" : "white",
		"font_size":"20px",
		"font_weight":"normal",
	});
	
	var fileOpen = model.newTextReader();
	var ab,pa;
	menuSTL.click(fileOpen.trigger);
	fileOpen.reading(function() {
		ab = Grid.Reader.readSTL(fileOpen);
		pa = ab.pointSetToFloatArray();
		tree.genFromGrid(ab);
	});
/*	
	var canvas = ctn1.addCanvas("canvas", {
		"border" : "1px #00CCFF solid",
		"width" : ($(ctn1.node).width()-2-$(tree.node).outerWidth(true))+"px",
		"height" : ($(ctn1.node).height()-2)+"px",
	});
*/	
	var dia = view.addDialog("92331319","Dialog",{
		"head_bgcolor":"#00CCFF",
		"head_padding":"5px",
		"head_font_color":"white",
		"body_bgcolor":"white",
		"body_font_color":"black",
	});
	
//	dia.addHeadline("9233");
	
	dia.addCheckbox(
		"favor", "Favor:",
		{"value":"basketball","title":"BASKETBALL","checked":true,"linefeed":false},
		{"value":"soccer","title":"SOCCER","check":false,"linefeed":true}
	);
	
	dia.addRadio(
		"sex", "Sex:",
		{"value":"Male","title":"MALE","checked":true,"linefeed":false},
		{"value":"Female","title":"FEMALE","checked":true,"linefeed":true}
	);
	
	dia.addText(
		"name", "Name:",
		{"value":"Susie","placeholder":"Please type your name.","maxlength":9,"width":300}
	);
	
	dia.addPassword(
		"password", "Password:",
		{"value":"Susie","placeholder":"Please type password.","maxlength":9,"width":300}
	);
	
//	dia.addHeadline("7*1319");
	
	dia.addRange(
		"length", "Length:",
		{min:0,max:100,step:0.1,value:33,width:"100px"}
	);
	
	dia.addColor(
		"color", "Color:",
		{value:"#00ccff"}
	);
	
	dia.addSelect(
		"edu", "EDU:",
		{value:"p",title:"Primary school",selected:false},
		{value:"j",title:"Junior high school",selected:false},
		{value:"s",title:"Senior high school",selected:true},
		{value:"c",title:"College",selected:false},
		{value:"u",title:"University",selected:false}
	);
	
	dia.addTextarea(
		"intro", "Intro:",
		{"value":"9233","placeholder":"type something","width":"300px","height":"100px"}
	);
	
	toolDisp.click(dia.show);
}
