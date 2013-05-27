function main() {
	var ct = view.container;
	
	//add a menu
	var menu;
	var menuFile, menuView, menuGrid;
	var menuOpen, menuSave, menuClose;
	var menuDisp, menuRotate, menuTrans, menuZoom, menuGlobe;
	var menuPara;
	
	initMenu();
	
	
	//add a toobar
	var tool;
	var toolDisp, toolRotate, toolTrans, toolZoom, toolGlobe;	
	
	initTool();
	
	//add a sub-container
	var ctn1;
	
	initContainer();
	
	//add a callboard
//	var cb;

	initCall();
	
	//add a tree
	var tree;
	
	initTree();
	
	//add a canvas
	var canvas;
	
	initCanvas();
	
	view.resize(function () {
		$(tree.node).height(($(ctn1.node).height()-10)+"px");
		$(canvas.node).width(($(ctn1.node).width()-2-$(tree.node).outerWidth(true))+"px");
		$(canvas.node).height(($(ctn1.node).height()-2)+"px");
	});
	
	//add a dialog
	var dlgParaBody, dlgParaFace, dlgParaLoop, dlgParaPolyline;
	var dlgGridPara;
	
	initDialogParaBody();
	initDialogParaFace();
	initDialogParaLoop();
	initDialogParaPolyline();
	initDialogGridPara();
	
	//add a textreader
	var fileOpen = model.newTextReader();
	
	//add listener to menu
	menuOpen.click(fileOpen.trigger);
	menuDisp.click(displaySetting);
	
	listenToMenuClose();
	listenToMenuPara();
	
	//add listener to toobar
	toolDisp.click(displaySetting);
	
	//confirm or close Dialog
	oxDialogParaBody();
	oxDialogParaFace();
	oxDialogParaLoop();
	oxDialogParaPolyline();
	
	//read textreader
	readFileOpen();
	
	function initMenu() {
		menu = ct.addMenu("menu",{
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
		
		menuFile = menu.addItem("file","文件");
		menuOpen = menuFile.addItem("open","打开...");
		menuSave = menuFile.addItem("save","另存为...");
		menuClose = menuFile.addItem("close","关闭");
		
		menuView = menu.addItem("view", "视图");
		menuDisp = menuView.addItem("display", "显示属性设置...");
		menuRotate = menuView.addItem("rotate", "旋转...");
		menuTrans = menuView.addItem("trans", "平移...");
		menuZoom = menuView.addItem("zoom", "缩放...");
		menuGlobe = menuView.addItem("globe", "全局显示");
		
		menuGrid = menu.addItem("grid", "网格生成");
		menuPara = menuGrid.addItem("para", "参数...");
	}
	
	function initTool() {
		var tool = ct.addToolBar("toolbar",{
			"bgcolor":"#00CCFF",
			"bgcolor:hover":"#FF66FF",
			"bgcolor:selected":"#FF66FF",
			"padding":"3px",
			"margin":"0 0 5px 0",
			"item_width":"20px",
		});
		
		toolDisp = tool.addItem("display", "NineSDK/icons/setting00_white_128x128.png", "显示属性设置...");
		toolRotate = tool.addItem("rotate", "NineSDK/icons/rotate00_white_96x96.png", "旋转...");
		toolTrans = tool.addItem("trans", "NineSDK/icons/pan00_white_96x96.png", "平移...");
		toolZoom = tool.addItem("zoom", "NineSDK/icons/zoom01_white_64x64.png", "缩放...");
		toolGlobe = tool.addItem("globe", "NineSDK/icons/globe00_white_64x64.png", "全局显示");
	}
	
	function initContainer() {
		ctn1 = view.container.addContainer("ctn1",{
			"box_orient":"horizontal",
			"margin":"0 0 5px 0",
			"box_flex":"1",
		});
	}
	
	function initCall() {
		cb = view.container.addCallBoard("callboard",{
			"bgcolor":"#00CCFF",
			"padding":"5px",
			"font_color":"white",
			"height":"100px",
		});
	}
	
	function initTree() {
		tree = ctn1.addTree("tree",{
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
	}
	
	function initCanvas() {
		canvas = ctn1.addCanvas("canvas", {
			"border" : "1px #00CCFF solid",
			"width" : ($(ctn1.node).width()-2-$(tree.node).outerWidth(true))+"px",
			"height" : ($(ctn1.node).height()-2)+"px",
		});
		
		$(canvas.node).attr("id", "mycanvas");
	}
	
	function initDialogParaBody () {
		dlgParaBody = view.addDialog("paraBody", "体网格显示属性", {
			"head_bgcolor":"#00CCFF",
			"head_padding":"5px",
			"head_font_color":"white",
			"body_bgcolor":"white",
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
	}
	
	function initDialogParaFace () {
		dlgParaFace = view.addDialog("paraBody", "面网格显示属性", {
			"head_bgcolor":"#00CCFF",
			"head_padding":"5px",
			"head_font_color":"white",
			"body_bgcolor":"white",
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
	}
	
	function initDialogParaLoop () {
		dlgParaLoop = view.addDialog("paraBody", "环网格显示属性", {
			"head_bgcolor":"#00CCFF",
			"head_padding":"5px",
			"head_font_color":"white",
			"body_bgcolor":"white",
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
	}
	
	function initDialogParaPolyline () {
		dlgParaPolyline = view.addDialog("paraBody", "折线网格显示属性", {
			"head_bgcolor":"#00CCFF",
			"head_padding":"5px",
			"head_font_color":"white",
			"body_bgcolor":"white",
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
	}
	
	function initDialogGridPara() {
		dlgGridPara = new view.addDialog("paraGrid", "Grid Parameter Setting", {
			"head_bgcolor":"#00CCFF",
			"head_padding":"5px",
			"head_font_color":"white",
			"body_bgcolor":"white",
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
	}
	
	function listenToMenuClose() {
		menuClose.click(function() {
			tree.empty();
			cb.clear();
			//
		});
	}
	
	function listenToMenuPara() {
		menuPara.click(function () {
			dlgGridPara.show();
		});
	}
	
	function oxDialogParaBody() {
		dlgParaBody.confirm(function () {
			var slt = tree.selectedItem;
			if (!slt) return;
			
			slt.data["color"] = dlgParaBody.result["color"];
			slt.data["alpha"] = dlgParaBody.result["alpha"];
			slt.data["display"] = dlgParaBody.result["display"];
		});
	}
	
	function oxDialogParaFace() {
		dlgParaFace.confirm(function () {
			var slt = tree.selectedItem;
			if (!slt) return;
			
			slt.data["color"] = dlgParaFace.result["color"];
			slt.data["alpha"] = dlgParaFace.result["alpha"];
			slt.data["display"] = dlgParaFace.result["display"];
		});
	}
	
	function oxDialogParaLoop() {
		dlgParaLoop.confirm(function () {
			var slt = tree.selectedItem;
			if (!slt) return;
			
			slt.data["color"] = dlgParaLoop.result["color"];
			slt.data["display"] = dlgParaLoop.result["display"];
			slt.data["size"] = dlgParaLoop.result["size"];
		});
	}
	
	function oxDialogParaPolyline() {
		dlgParaPolyline.confirm(function () {
			var slt = tree.selectedItem;
			if (!slt) return;
			
			slt.data["color"] = dlgParaPolyline.result["color"];
			slt.data["display"] = dlgParaPolyline.result["display"];
			slt.data["size"] = dlgParaLoop.result["size"];
		});
	}
	
	function readFileOpen() {
		fileOpen.read(function() {
			var x = Grid.Reader.readSTL(fileOpen);
			tree.genFromGrid(x);
			
			//
		});
	}
	
	function displaySetting() {
		var slt = tree.selectedItem;
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
	}
}
