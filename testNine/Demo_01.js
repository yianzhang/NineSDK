function main() {
	var ct = view.container;
	
	//menu
	var menu = ct.addMenu("menu",{
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
	
	var menuFile = menu.addItem("file","文件");
	var menuOpen = menuFile.addItem("open","打开...");
	var menuSave = menuFile.addItem("save","另存为...");
	var menuClose = menuFile.addItem("close","关闭");
	
	var menuView = menu.addItem("view", "视图");
	var menuDisp = menuView.addItem("display", "显示属性设置");
	var menuRotate = menuView.addItem("rotate", "旋转");
	var menuTrans = menuView.addItem("trans", "平移");
	var menuZoom = menuView.addItem("zoom", "缩放");
	
	var menuGrid = menu.addItem("grid", "网格生成");
	var menuPara = menuGrid.addItem("para", "参数");
	
	//add a toobar
	var toolBar = ct.addToolBar("toolbar",{
		"bgcolor":"#00CCFF",
		"bgcolor:hover":"#FF66FF",
		"bgcolor:selected":"#FF66FF",
		"padding":"3px",
		"margin":"0 0 5px 0",
		"item_width":"20px",
	});
	
	toolBar.addItem("refresh0","NineSDK/img/refresh.png","i0");
	toolBar.addItem("refresh1","NineSDK/img/refresh.png","i1");
	toolBar.addItem("refresh2","NineSDK/img/refresh.png","i2");
	
	var group0 = toolBar.addGroup("g0","g0");
	group0.addItem("refresh3","NineSDK/img/refresh.png","i3");
	group0.addItem("refresh4","NineSDK/img/refresh.png","i4");
	group0.addItem("refresh5","NineSDK/img/refresh.png","i5");
	
	var group1 = toolBar.addGroup("g1","g1");
	group1.addItem("refresh6","NineSDK/img/refresh.png","i6");
	group1.addItem("refresh7","NineSDK/img/refresh.png","i7");
	
	//add a sub-container
	var ctn1 = view.container.addContainer("ctn1",{
		"box_orient":"horizontal",
		"margin":"0 0 5px 0",
		"box_flex":"1",
	});
	
	//add a callboard
	cb = view.container.addCallBoard("callboard",{
		"bgcolor":"#00CCFF",
		"padding":"5px",
		"font_color":"white",
		"height":"100px",
	});
	
	//add a tree
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
	
	//add a canvas
	var canvas = ctn1.addCanvas("canvas", {
		"border" : "1px #00CCFF solid",
		"width" : ($(ctn1.node).width()-2-$(tree.node).outerWidth(true))+"px",
		"height" : ($(ctn1.node).height()-2)+"px",
	});
	
	view.resize(function () {
		$(tree.node).height(($(ctn1.node).height()-10)+"px");
		$(canvas.node).width(($(ctn1.node).width()-2-$(tree.node).outerWidth(true))+"px");
		$(canvas.node).height(($(ctn1.node).height()-2)+"px");
	});
	
	//add a dialog
	var dlgParaBody = view.addDialog("paraBody", "体网格显示属性", {
		"head_bgcolor":"#00CCFF",
		"head_padding":"5px",
		"head_font_color":"white",
		"body_bgcolor":"white",
//		"body_font_color":"white",
	});
	
	dlgParaBody.addHeadline("显示属性");
	dlgParaBody.addColor(
		"颜色:", "color", 
		{value:"#000000"}
	);
	dlgParaBody.addRange(
		"透明度:", "alpha", 
		{min:0,max:1,step:0.01,value:0,width:"100px"}
	);
	dlgParaBody.addSelect(
		"显示类型:", "display",
		{value:"color", title:"着色面", selected:true},
		{value:"alpha", title:"半透明", selected:false},
		{value:"wire", title:"线框", selected:false},
		{value:"stereo", title:"立体显示", selected:false}
	);
	
	var dlgParaFace = view.addDialog("paraBody", "面网格显示属性", {
		"head_bgcolor":"#00CCFF",
		"head_padding":"5px",
		"head_font_color":"white",
		"body_bgcolor":"white",
//		"body_font_color":"white",
	});
	
	dlgParaFace.addHeadline("显示属性");
	dlgParaFace.addColor(
		"颜色:", "color", 
		{value:"#000000"}
	);
	dlgParaFace.addRange(
		"透明度:", "alpha", 
		{min:0,max:1,step:0.01,value:0,width:"100px"}
	);
	dlgParaFace.addSelect(
		"显示类型:", "display",
		{value:"color", title:"着色面", selected:true},
		{value:"alpha", title:"半透明", selected:false},
		{value:"wire", title:"线框", selected:false},
		{value:"stereo", title:"立体显示", selected:false}
	);
	
	var dlgParaLoop = view.addDialog("paraBody", "环网格显示属性", {
		"head_bgcolor":"#00CCFF",
		"head_padding":"5px",
		"head_font_color":"white",
		"body_bgcolor":"white",
//		"body_font_color":"white",
	});
	
	dlgParaLoop.addHeadline("显示属性");
	dlgParaLoop.addColor(
		"颜色:", "color", 
		{value:"#000000"}
	);
	dlgParaLoop.addSelect(
		"显示类型:", "display",
		{value:"normal", title:"正常显示", selected:true},
		{value:"stereo", title:"立体显示", selected:false}
	);
	dlgParaLoop.addRange(
		"点元大小:","size",
		{min:0,max:10,step:0.01,value:1,width:"100px"}
	);
	
	var dlgParaPolyline = view.addDialog("paraBody", "折线网格显示属性", {
		"head_bgcolor":"#00CCFF",
		"head_padding":"5px",
		"head_font_color":"white",
		"body_bgcolor":"white",
//		"body_font_color":"white",
	});
	
	dlgParaPolyline.addHeadline("显示属性");
	dlgParaPolyline.addColor(
		"颜色:", "color", 
		{value:"#000000"}
	);
	dlgParaPolyline.addSelect(
		"显示类型:", "display",
		{value:"normal", title:"正常显示", selected:true},
		{value:"stereo", title:"立体显示", selected:false}
	);
	dlgParaPolyline.addRange(
		"点元大小:", "size", 
		{min:0,max:10,step:0.01,value:0,width:"100px"}
	);
	
	//add listeners to menu
	var fileOpen = model.newTextReader();
	menuOpen.click(fileOpen.trigger);
	
	menuClose.click(function() {
		tree.empty();
		cb.clear();
		//
	});
	
	var slt = {};slt.data = {};
	menuDisp.click(function () {
		slt = tree.selectedItem;
		if (!slt) {
			alert("Not Select Item!");
			return;
		}
		
		if (slt.data instanceof Body) {
			dlgParaBody.setValue({
				"color":slt.data["color"] || "#000000",
				"alpha":slt.data["alpha"] || 0,
				"display":slt.data["display"] || "color",
			});
			dlgParaBody.show();
			
		} else if (slt.data instanceof Face) {
			dlgParaFace.setValue({
				"color":slt.data["color"] || "#000000",
				"alpha":slt.data["alpha"] || 0,
				"display":slt.data["display"] || "color",
			});
			dlgParaFace.show();
			
		} else if (slt.data instanceof Loop) {
			dlgParaLoop.setValue({
				"color":slt.data["color"] || "#000000",
				"display":slt.data["display"] || "normal",
				"size":slt.data["size"] || 0,
			});
			dlgParaLoop.show();
			
		} else if (slt.data instanceof Polyline) {
			dlgParaPolyline.setValue({
				"color":slt.data["color"] || "#000000",
				"display":slt.data["display"] || "normal",
				"size":slt.data["size"] || 0,
			});
			dlgParaPolyline.show();
		}
	});
	
	dlgParaBody.confirm(function () {
		slt.data["color"] = dlgParaBody.result["color"];
		slt.data["alpha"] = dlgParaBody.result["alpha"];
		slt.data["display"] = dlgParaBody.result["display"];
	});
	
	dlgParaFace.confirm(function () {
		slt.data["color"] = dlgParaFace.result["color"];
		slt.data["alpha"] = dlgParaFace.result["alpha"];
		slt.data["display"] = dlgParaFace.result["display"];
	});
	
	dlgParaLoop.confirm(function () {
		slt.data["color"] = dlgParaLoop.result["color"];
		slt.data["display"] = dlgParaLoop.result["display"];
		slt.data["size"] = dlgParaLoop.result["size"];
	});
	
	dlgParaPolyline.confirm(function () {
		slt.data["color"] = dlgParaPolyline.result["color"];
		slt.data["display"] = dlgParaPolyline.result["display"];
		slt.data["size"] = dlgParaLoop.result["size"];
	});
	
	var dlgGridPara = new view.addDialog("paraGrid", "Grid Parameter Setting", {
		"head_bgcolor":"#00CCFF",
		"head_padding":"5px",
		"head_font_color":"white",
		"body_bgcolor":"white",
//		"body_font_color":"white",
	});
	
	dlgGridPara.addHeadline("体网格生成参数");
	dlgGridPara.addRadio(
		"质量优化因子:","bodyfactor",
		{value:"yes",title:"使用",checked:false},
		{value:"no",title:"不使用",checked:true}
	);
	dlgGridPara.addText(
		"质量优化因子参数:","bodypara",
		{value:"1",placeholder:"输入质量优化因子",maxlength:3,width:"30px"}
	);
	dlgGridPara.addHeadline("面网格生成参数");
	dlgGridPara.addRadio(
		"质量优化因子:","facefactor",
		{value:"yes",title:"使用",checked:false},
		{value:"no",title:"不使用",checked:true}
	);
	dlgGridPara.addText(
		"质量优化因子参数:","facepara",
		{value:"1",placeholder:"输入质量优化因子",maxlength:3,width:"30px"}
	);
	
	menuPara.click(function () {
		dlgGridPara.show();
	});
	
	//add a listener to toolItem
	toolBar.itemAt("refresh0").click(function() {
		cb.writeln(tree.filterCheckedItems(true).map(function(x){return x.name;}).join(", "));
		cb.writeln(tree.filterCheckedItems().map(function(x){return x.name;}).join(", "));
	});
	toolBar.itemAt("refresh1").click(function() {
		cb.writeln(tree.filterCheckedItems(true).map(function(x){return x.name;}).join(", "));
		tree.deleteCheckedItems();
		cb.writeln("Deletion Over!");
	});
	toolBar.itemAt("refresh2").click(function() {
		var item = tree.selectedItem;
		if (item)
			cb.writeln(item.name);
		else
			cb.writeln("undefined");
	});
	
	fileOpen.read(function() {
		var x = Grid.Reader.readSTL(fileOpen);
		tree.genFromGrid(x);
		
		//
	});
}
