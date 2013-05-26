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
	
	var menuFile = menu.addItem("file","File");
	var menuOpen = menuFile.addItem("open","Open...");
	var menuSave = menuFile.addItem("save","SaveAs...");
	var menuClose = menuFile.addItem("close","Close");
	
	var menuView = menu.addItem("view", "View");
	var menuDisp = menuView.addItem("display", "Display Attribute Setting");
	var menuRotate = menuView.addItem("rotate", "Rotate");
	var menuTrans = menuView.addItem("trans", "Translate");
	var menuZoom = menuView.addItem("zoom", "Zoom");
	
	var menuGrid = menu.addItem("grid", "Grid");
	var menuPara = menuGrid.addItem("para", "Parameter");
	
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
	var dlgParaBody = view.addDialog("paraBody", "Parameters of Body", {
		"head_bgcolor":"#00CCFF",
		"head_padding":"5px",
		"head_font_color":"white",
		"body_bgcolor":"white",
//		"body_font_color":"white",
	});
	
	dlgParaBody.addHeadline("Display Attribute");
	dlgParaBody.addColor(
		"Color:", "color", 
		{value:"#000000"}
	);
	dlgParaBody.addRange(
		"Alpha:", "alpha", 
		{min:0,max:1,step:0.01,value:0,size:"100px"}
	);
	dlgParaBody.addSelect(
		"Display Style:", "display",
		{value:"color", title:"Colored Surface", selected:true},
		{value:"alpha", title:"Translucence", selected:false},
		{value:"wire", title:"Wireframe", selected:false},
		{value:"stereo", title:"Stereo Display", selected:false}
	);
	
	var dlgParaFace = view.addDialog("paraBody", "Parameters of Face", {
		"head_bgcolor":"#00CCFF",
		"head_padding":"5px",
		"head_font_color":"white",
		"body_bgcolor":"white",
//		"body_font_color":"white",
	});
	
	dlgParaFace.addHeadline("Display Attribute");
	dlgParaFace.addColor(
		"Color:", "color", 
		{value:"#000000"}
	);
	dlgParaFace.addRange(
		"Alpha:", "alpha", 
		{min:0,max:1,step:0.01,value:0,size:"100px"}
	);
	dlgParaFace.addSelect(
		"Display Style:", "display",
		{value:"color", title:"Colored Surface", selected:true},
		{value:"alpha", title:"Translucence", selected:false},
		{value:"wire", title:"Wireframe", selected:false},
		{value:"stereo", title:"Stereo Display", selected:false}
	);
	
	var dlgParaLoop = view.addDialog("paraBody", "Parameters of Loop", {
		"head_bgcolor":"#00CCFF",
		"head_padding":"5px",
		"head_font_color":"white",
		"body_bgcolor":"white",
//		"body_font_color":"white",
	});
	
	dlgParaLoop.addHeadline("Display Attribute");
	dlgParaLoop.addColor(
		"Color:", "color", 
		{value:"#000000"}
	);
	dlgParaLoop.addRange(
		"Alpha:", "alpha", 
		{min:0,max:1,step:0.01,value:0,size:"100px"}
	);
	dlgParaLoop.addSelect(
		"Display Style:", "display",
		{value:"color", title:"Colored Surface", selected:true},
		{value:"alpha", title:"Translucence", selected:false},
		{value:"wire", title:"Wireframe", selected:false},
		{value:"stereo", title:"Stereo Display", selected:false}
	);
	
	var dlgParaPolyline = view.addDialog("paraBody", "Parameters of Polyline", {
		"head_bgcolor":"#00CCFF",
		"head_padding":"5px",
		"head_font_color":"white",
		"body_bgcolor":"white",
//		"body_font_color":"white",
	});
	
	dlgParaPolyline.addHeadline("Display Attribute");
	dlgParaPolyline.addColor(
		"Color:", "color", 
		{value:"#000000"}
	);
	dlgParaPolyline.addRange(
		"Alpha:", "alpha", 
		{min:0,max:1,step:0.01,value:0,size:"100px"}
	);
	dlgParaPolyline.addSelect(
		"Display Style:", "display",
		{value:"color", title:"Colored Surface", selected:true},
		{value:"alpha", title:"Translucence", selected:false},
		{value:"wire", title:"Wireframe", selected:false},
		{value:"stereo", title:"Stereo Display", selected:false}
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
				"alpha":slt.data["alpha"] || 0,
				"display":slt.data["display"] || "color",
			});
			dlgParaLoop.show();
			
		} else if (slt.data instanceof Polyline) {
			dlgParaPolyline.setValue({
				"color":slt.data["color"] || "#000000",
				"alpha":slt.data["alpha"] || 0,
				"display":slt.data["display"] || "color",
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
		slt.data["alpha"] = dlgParaLoop.result["alpha"];
		slt.data["display"] = dlgParaLoop.result["display"];
	});
	
	dlgParaPolyline.confirm(function () {
		slt.data["color"] = dlgParaPolyline.result["color"];
		slt.data["alpha"] = dlgParaPolyline.result["alpha"];
		slt.data["display"] = dlgParaPolyline.result["display"];
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
