function main() {
	var ct = view.container;
	
	//add a menu
	var menu;
	var menuFile, menuView, menuGrid;
	var menuOpen, menuSave, menuClose;
	var menuSTL, menuWeb;
	var menuDisp, menuRotate, menuTrans, menuZoom, menuGlobe;
	var menuPara;
	
	initMenu();
	
	//add a toobar
	var tool;
	var toolDisp, toolRotate, toolTrans, toolZoom, toolGlobe;
	var toolTest;
	var toolStyle;
	var toolFill, toolWire, toolEdge;
	var toolDraw;	
	
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
		$(canvas.node).attr("width",($(ctn1.node).width()-2-$(tree.node).outerWidth(true))+"px");
		$(canvas.node).attr("height",($(ctn1.node).height()-2)+"px");
		$("#fps").css({
			"left" : canvas.node.offsetLeft+"px",
			"top" : canvas.node.offsetTop+"px",
		});
//		draw();
	});
	
	//add a dialog
	var dlgParaBody, dlgParaFace, dlgParaLoop, dlgParaPolyline;
	var dlgGridPara;
	var dlgRotate, dlgTrans, dlgZoom;
	
	initDialogParaBody();
	initDialogParaFace();
	initDialogParaLoop();
	initDialogParaPolyline();
	initDialogGridPara();
	initDialogRotate();
	initDialogTrans();
	initDialogZoom();

	//GL
	initGL();
		
	//add a textreader
	var fileOpen = model.newTextReader();
	var fileWeb = model.newFileUploader("Demo_01.html", "post", "FileUp");
	
	//add a textwriter
	var fileSave = model.newTextWriter();
	
	var ab;
	var as;
	var pa;
	
	//add listener to menu
	menuSTL.click(fileOpen.trigger);
	menuWeb.click(fileWeb.trigger);
	menuSave.click(fileSave.trigger);
	menuRotate.click(rotate);
	menuTrans.click(trans);
	menuZoom.click(zoom);
	menuDisp.click(displaySetting);

	listenToMenuClose();
	listenToMenuPara();
	
	//add listener to toobar
	toolDisp.click(displaySetting);
	toolRotate.click(rotate);
	toolTrans.click(trans);
	toolZoom.click(zoom);
	toolTest.click(test);
	toolDraw.click(draw);
	toolStyle.click(draw);
	
	//add listener to tree
	tree.change(draw);
	
	//confirm or close Dialog
	oxDialogParaBody();
	oxDialogParaFace();
	oxDialogParaLoop();
	oxDialogParaPolyline();
	oxDialogRotate();
	oxDialogTrans();
	oxDialogZoom();
	
	//read textreader
	readFileOpen();
	
	//write textwriter
	writeFileSave();
	
	if (pset && iset) {
		as = Grid.Reader.readSolid(pset,iset);//cb.writeln(as);
		pa = as.pointSetToFloatArray();
		tree.genFromAllSolid(as);

		draw();
	}
	
	function initMenu() {
		menu = ct.addMenuBar("menu",{
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
		menuOpen = menuFile.addItem("open","打开文件");
		menuSave = menuFile.addItem("save","另存为...");
		menuClose = menuFile.addItem("close","关闭");
		
		menuSTL = menuOpen.addItem("stl","打开STL文件...");
		menuWeb = menuOpen.addItem("web","上传STL文件...");
		
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
		toolTest = tool.addItem("test", "NineSDK/icons/test00_white_64x64.png", "测试");
		
		toolStyle = tool.addGroup("style");
		toolFill = toolStyle.addItem("fill", "NineSDK/icons/fill00_white_64x64.png", "表面填充");
		toolWire = toolStyle.addItem("wire", "NineSDK/icons/wire00_white_64x64.png", "线框");
		toolEdge = toolStyle.addItem("edge", "NineSDK/icons/edge00_white_64x64.png", "边框");
		$(toolFill.node).click();
		
		toolDraw = tool.addItem("draw", "NineSDK/icons/brush00_white_64x64.png", "重绘");
	}
	
	function initContainer() {
		ctn1 = ct.addContainer("ctn1", "horizontal", {
			"margin":"0 0 5px 0",
			"box_flex":"1",
		});
	}
	
	function initCall() {
		cb = ct.addCallBoard("callboard",{
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
		$("#fps").css({
			"background-color":"#00ccff",
			"color" : "white",
			"left":canvas.node.offsetLeft+"px",
			"top":canvas.node.offsetTop+"px",
		});
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
			"color", "颜色:",  
			{value:"#ffffff"}
		);
		dlgParaBody.addRange(
			"alpha", "透明度:", 
			{min:0,max:1,step:0.01,value:1,width:"100px"}
		);
		dlgParaBody.addSelect(
			"display","显示类型:", 
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
			"color", "颜色:",  
			{value:"#ffffff"}
		);
		dlgParaFace.addRange(
			"alpha", "透明度:",
			{min:0,max:1,step:0.01,value:1,width:"100px"}
		);
		dlgParaFace.addSelect(
			"display", "显示类型:", 
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
			"color",  "颜色:", 
			{value:"#ffffff"}
		);
		dlgParaLoop.addSelect(
			"display", "显示类型:", 
			{value:"normal", title:"正常显示", selected:true},
			{value:"stereo", title:"立体显示", selected:false}
		);
		dlgParaLoop.addRange(
			"size", "点元大小:",
			{min:0,max:10,step:0.01,value:0,width:"100px"}
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
			"color", "颜色:", 
			{value:"#ffffff"}
		);
		dlgParaPolyline.addSelect(
			"display", "显示类型:", 
			{value:"normal", title:"正常显示", selected:true},
			{value:"stereo", title:"立体显示", selected:false}
		);
		dlgParaPolyline.addRange(
			"size", "点元大小:", 
			{min:0,max:10,step:0.01,value:0,width:"100px"}
		);
	}
	
	function initDialogGridPara() {
		dlgGridPara = new view.addDialog("paraGrid", "网格生成参数设置", {
			"head_bgcolor":"#00CCFF",
			"head_padding":"5px",
			"head_font_color":"white",
			"body_bgcolor":"white",
		});
		
		dlgGridPara.addHeadline("体网格生成参数");
		dlgGridPara.addRadio(
			"bodyfactor", "质量优化因子:",
			{value:"yes",title:"使用",checked:false},
			{value:"no",title:"不使用",checked:true}
		);
		dlgGridPara.addText(
			"bodypara", "质量优化因子参数:",
			{value:"1",placeholder:"输入质量优化因子",maxlength:3,width:"30px"}
		);
		dlgGridPara.addHeadline("面网格生成参数");
		dlgGridPara.addRadio(
			"facefactor", "质量优化因子:",
			{value:"yes",title:"使用",checked:false},
			{value:"no",title:"不使用",checked:true}
		);
		dlgGridPara.addText(
			"facepara", "质量优化因子参数:",
			{value:"1",placeholder:"输入质量优化因子",maxlength:3,width:"30px"}
		);
	}
	
	function initDialogRotate() {
		dlgRotate = new view.addDialog("rotate", "旋转", {
			"head_bgcolor":"#00CCFF",
			"head_padding":"5px",
			"head_font_color":"white",
			"body_bgcolor":"white",
		});
		
		dlgRotate.addText(
			"rotateX", "旋转法向量X值：", 
			{value:0, width:"100px"}
		);
		
		dlgRotate.addText(
			"rotateY", "旋转法向量Y值：", 
			{value:0, width:"100px"}
		);
		
		dlgRotate.addText(
			"rotateZ", "旋转法向量Z值：", 
			{value:0, width:"100px"}
		);
		
		dlgRotate.addText(
			"rotateA", "旋转角速度：", 
			{value:0, width:"100px"}
		);
	}
	
	function initDialogTrans() {
		dlgTrans = new view.addDialog("trans", "平移", {
			"head_bgcolor":"#00CCFF",
			"head_padding":"5px",
			"head_font_color":"white",
			"body_bgcolor":"white",
		});
		
		dlgTrans.addText(
			"transX", "X轴平移量：", 
			{value:0, width:"100px"}
		);
		
		dlgTrans.addText(
			"transY", "Y轴平移量：", 
			{value:0, width:"100px"}
		);
		
		dlgTrans.addText(
			"transZ", "Z轴平移量：", 
			{value:0, width:"100px"}
		);
	}
	
	function initDialogZoom() {
		dlgZoom = new view.addDialog("zoom", "缩放", {
			"head_bgcolor":"#00CCFF",
			"head_padding":"5px",
			"head_font_color":"white",
			"body_bgcolor":"white",
		});
		
		dlgZoom.addText(
			"zoomX", "X轴缩放比例：", 
			{value:1, width:"100px"}
		);
		
		dlgZoom.addText(
			"zoomY", "Y轴缩放比例：", 
			{value:1, width:"100px"}
		);
		
		dlgZoom.addText(
			"zoomZ", "Z轴缩放比例：", 
			{value:1, width:"100px"}
		);
	}
	
	function listenToMenuClose() {
		menuClose.click(function() {
			tree.empty();
			cb.clear();
			GL.cleanModelsToDraw();
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
			
			draw();
		});
	}
	
	function oxDialogParaFace() {
		dlgParaFace.confirm(function () {
			var slt = tree.selectedItem;
			if (!slt) return;
			
			slt.data["color"] = dlgParaFace.result["color"];
			slt.data["alpha"] = dlgParaFace.result["alpha"];
			slt.data["display"] = dlgParaFace.result["display"];
			
			draw();
		});
	}
	
	function oxDialogParaLoop() {
		dlgParaLoop.confirm(function () {
			var slt = tree.selectedItem;
			if (!slt) return;
			
			slt.data["color"] = dlgParaLoop.result["color"];
			slt.data["display"] = dlgParaLoop.result["display"];
			slt.data["size"] = dlgParaLoop.result["size"];
			
			draw();
		});
	}
	
	function oxDialogParaPolyline() {
		dlgParaPolyline.confirm(function () {
			var slt = tree.selectedItem;
			if (!slt) return;
			
			slt.data["color"] = dlgParaPolyline.result["color"];
			slt.data["display"] = dlgParaPolyline.result["display"];
			slt.data["size"] = dlgParaLoop.result["size"];
			
			draw();
		});
	}
	
	function oxDialogRotate() {
		dlgRotate.confirm(function () {
			var rotateX = parseFloat(dlgRotate.result["rotateX"]);
			var rotateY = parseFloat(dlgRotate.result["rotateY"]);
			var rotateZ = parseFloat(dlgRotate.result["rotateZ"]);
			var rotateA = parseFloat(dlgRotate.result["rotateA"]);
			//	
			GL.rotate(rotateA, [rotateX, rotateY, rotateZ]);
		});
	}
	
	function oxDialogTrans() {
		dlgTrans.confirm(function () {
			var transX = parseFloat(dlgTrans.result["transX"]);
			var transY = parseFloat(dlgTrans.result["transY"]);
			var transZ = parseFloat(dlgTrans.result["transZ"]);
			//
			GL.translate([transX, transY, transZ]);
		});
	}
	
	function oxDialogZoom() {
		dlgZoom.confirm(function () {
			var zoomX = parseFloat(dlgZoom.result["zoomX"]);
			var zoomY = parseFloat(dlgZoom.result["zoomY"]);
			var zoomZ = parseFloat(dlgZoom.result["zoomZ"]);
			//
			GL.scale([zoomX, zoomY, zoomZ]);
		});
	}
	
	function readFileOpen() {
		fileOpen.reading(function() {
			ab = Grid.Reader.readSTL(fileOpen);
			pa = ab.pointSetToFloatArray();
			tree.genFromAllBody(ab);

			draw();
		});
	}
	
	function writeFileSave() {
		fileSave.writing(function() {
			if (tree.data) {
				fileSave.write(tree.data);
			} else {
				alert("树形控件没有数据！");
				return -1;
			}
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
				"color":slt.data["color"] || "#ffffff",
				"alpha":slt.data["alpha"] || 1,
				"display":slt.data["display"] || "color",
			});
			dlgParaBody.show();
			
		} else if (slt.data instanceof Face) {
			dlgParaFace.setValue({
				"color":slt.data["color"] || "#ffffff",
				"alpha":slt.data["alpha"] || 1,
				"display":slt.data["display"] || "color",
			});
			dlgParaFace.show();
			
		} else if (slt.data instanceof Loop) {
			dlgParaLoop.setValue({
				"color":slt.data["color"] || "#ffffff",
				"display":slt.data["display"] || "normal",
				"size":slt.data["size"] || 0,
			});
			dlgParaLoop.show();
			
		} else if (slt.data instanceof Polyline) {
			dlgParaPolyline.setValue({
				"color":slt.data["color"] || "#ffffff",
				"display":slt.data["display"] || "normal",
				"size":slt.data["size"] || 0,
			});
			dlgParaPolyline.show();
		} else {
			alert("此类型不可配置！");
		}
	}
	
	function rotate() {
		dlgRotate.setValue({
			"rotateX" : 0,
			"rotateY" : 0,
			"rotateZ" : 0,
			"rotateA" : 0,
		});
		
		dlgRotate.show();
	}
	
	function trans() {
		dlgTrans.setValue({
			"transX" : 0,
			"transY" : 0,
			"transZ" : 0,
		});
		
		dlgTrans.show();
	}
	
	function zoom() {
		dlgZoom.setValue({
			"zoomX" : 1,
			"zoomY" : 1,
			"zoomZ" : 1,
		});
		
		dlgZoom.show();
	}
	
	function test() {
		var tmp = tree.filterCheckedItems();
		tmp = tmp.map(function (x) {return x.name;});
		cb.writeln(tmp.join(", ")); 
	}
	
	function draw() {
		GL.cleanModelsToDraw();
		
		if (tree && tree.data instanceof AllBody)
			drawAllBody();
		else 
		if (tree && tree.data instanceof AllSolid)
			drawAllSolid();
		
		GL.setScene();
	}

	function drawAllBody() {
		var tmp = tree.filterCheckedItems().map(function (x) {return x.data;});
		switch (toolStyle.status) {
			case undefined :
			case "fill" :
				for (var i=0;i<tmp.length;++i) {
					if (tmp[i] instanceof Body) {
						var bcolor = tmp[i]["color"] || "#ffffff";
						var balpha = tmp[i]["alpha"] || 1;
						var bdisplay = tmp[i]["display"] || "color";
					} else 
					if (tmp[i] instanceof Face) {
						drawFillFace(tmp[i], bcolor, balpha, bdisplay);
					}
				}
				break;
			case "wire" :
				for (var i=0;i<tmp.length;++i) {
					if (tmp[i] instanceof Body) {
						var bcolor = tmp[i]["color"] || "#ffffff";
						var balpha = tmp[i]["alpha"] || 1;
						var bdisplay = tmp[i]["display"] || "color";
					} else 
					if (tmp[i] instanceof Face) {
						var fcolor = tmp[i]["color"] || bcolor;
						var falpha = tmp[i]["alpha"] || balpha;
						var fdisplay = tmp[i]["display"] || bdisplay;
						drawWireFace(tmp[i], fcolor, falpha, fdisplay);
//						drawEdgeFace(tmp[i]);
					} else 
					if (tmp[i] instanceof Loop) {
						var lcolor = tmp[i]["color"] || fcolor;
						var ldisplay = tmp[i]["display"] || "normal";
						var lsize = tmp[i]["size"] || 0;
					} else 
					if (tmp[i] instanceof Polyline) {
						drawEdgePolyline(tmp[i], lcolor, falpha, ldisplay, lsize);
					}
				}
				break;
			case "edge" :
				for (var i=0;i<tmp.length;++i) {
					if (tmp[i] instanceof Body) {
						var bcolor = tmp[i]["color"] || "#ffffff";
						var balpha = tmp[i]["alpha"] || 1;
						var bdisplay = tmp[i]["display"] || "color";
					} else 
					if (tmp[i] instanceof Face) {
						var fcolor = tmp[i]["color"] || bcolor;
						var falpha = tmp[i]["alpha"] || balpha;
						var fdisplay = tmp[i]["display"] || bdisplay;
					} else 
					if (tmp[i] instanceof Loop) {
						var lcolor = tmp[i]["color"] || fcolor;
						var ldisplay = tmp[i]["display"] || "normal";
						var lsize = tmp[i]["size"] || 0;
					} else 
					if (tmp[i] instanceof Polyline) {
						drawEdgePolyline(tmp[i], lcolor, falpha, ldisplay, lsize);
					}
				}
				break;
		}		
	}	
	
	function drawAllSolid() {
		var tmp = tree.filterCheckedItems().map(function (x) {return x.data;});
		switch (toolStyle.status) {
			case undefined :
			case "fill" :
				for (var i=0;i<tmp.length;++i) {
					if (tmp[i] instanceof Solid) {
						var scolor = tmp[i]["color"] || "#ffffff";
						var salpha = tmp[i]["alpha"] || 1;
						var sdisplay = tmp[i]["display"] || "color";
						
						drawFillSolid(tmp[i], scolor, salpha, sdisplay);
					}
				}
				break;
			case "wire" :
			case "edge" :
				for (var i=0;i<tmp.length;++i) {
					if (tmp[i] instanceof Solid) {
						var scolor = tmp[i]["color"] || "#ffffff";
						var salpha = tmp[i]["alpha"] || 1;
						var sdisplay = tmp[i]["display"] || "color";
						
						drawWireSolid(tmp[i], scolor, salpha, sdisplay);
					}
				}
				break;
		}
	}
	
	function drawFillSolid(obj, color, alpha, display) {
		color = obj["color"] || color || "#ffffff";
		alpha = obj["alpha"] || alpha || 1;
		display = obj["display"] || display || "color";
		
		var ia = as.indexArrayOfTri([obj]);
		//
		
		var fillFace = new GLModel(rOfColor(color), gOfColor(color), bOfColor(color), alpha, true, "TRIANGLES");
		fillFace.setVertexBuffer(pa);
		fillFace.setIndexBuffer(ia);
				
		GL.addModel(fillFace);
	}
	
	function drawFillBody(obj) {
		for (var i=0;i<obj.faceLength;++i) {
			drawFillFace(obj.faceAt(i), obj["color"], obj["alpha"], obj["display"]);
		}
	}
	
	function drawFillFace(obj, color, alpha, display) {
		color = obj["color"] || color || "#ffffff";
		alpha = obj["alpha"] || alpha || 1;
		display = obj["display"] || display || "color";
		
		var ia = ab.indexArrayOfTri([obj]);
		//
		
		var fillFace = new GLModel(rOfColor(color), gOfColor(color), bOfColor(color), alpha, true, "TRIANGLES");
		fillFace.setVertexBuffer(pa);
		fillFace.setIndexBuffer(ia);
				
		GL.addModel(fillFace);
	}
	
	function drawWireSolid(obj, color, alpha, display) {
		color = obj["color"] || color || "#ffffff";
		alpha = obj["alpha"] || alpha || 1;
		display = obj["display"] || display || "color";
		
		var ia = as.indexArrayOfLine([obj]);
		//
		
		var wireFace = new GLModel(rOfColor(color), gOfColor(color), bOfColor(color), alpha, true, "LINES");
		wireFace.setVertexBuffer(pa);
		wireFace.setIndexBuffer(ia);
				
		GL.addModel(wireFace);
	}
	
	function drawWireBody(obj) {
		for (var i=0;i<obj.faceLength;++i) {
			drawWireFace(obj.faceAt(i), obj["color"], obj["alpha"], obj["display"]);
		}
	}
	
	function drawWireFace(obj, color, alpha, display) {
		color = obj["color"] || color || "#ffffff";
		alpha = obj["alpha"] || alpha || 1;
		display = obj["display"] || display || "color";
		
		var ia = ab.indexArrayOfLine([obj]);
		//
		
		var wireFace = new GLModel(rOfColor(color), gOfColor(color), bOfColor(color), alpha, true, "LINES");
		wireFace.setVertexBuffer(pa);
		wireFace.setIndexBuffer(ia);
				
		GL.addModel(wireFace);
	}
	
	function drawEdgeBody(obj) {
		for (var i=0;i<obj.faceLength;++i) {
			drawEdgeFace(obj.faceAt(i), obj["color"], obj["alpha"], obj["display"]);
		}
	}
	
	function drawEdgeFace(obj, color, alpha, display) {
		color = obj["color"] || color || "#ffffff";
		alpha = obj["alpha"] || alpha || 1;
		display = obj["display"] || display || "color";
		
		for (var i=0;i<obj.loopLength;++i) {
			drawEdgeLoop(obj.loopAt(i), color, alpha, display);
		}
	}
	
	function drawEdgeLoop(obj, color, alpha, display) {
		color = obj["color"] || color || "#ffffff";
		
		for (var i=0;i<obj.polylineLength;++i) {
			drawEdgePolyline(obj.polylineAt(i), color, alpha, obj["display"], obj["size"]);
		}
	}
	
	function drawEdgePolyline(obj, color, alpha, display, size) {
		color = obj["color"] || color || "#ffffff";
		display = obj["display"] || display || "normal";
		size = obj["size"] || size || 0;
		
		var ia = ab.indexArrayOfLine([obj]);
		//
		
		var polyLine = new GLModel(rOfColor(color), gOfColor(color), bOfColor(color), 1.0, true, "LINES");
		polyLine.setVertexBuffer(pa);
		polyLine.setIndexBuffer(ia);
			
		GL.addModel(polyLine);
	}
	
	function rOfColor(color) {
		if (!color) return -1;
		if (color.length!=7) return -1;
		if (!/#[0-9a-f]{6}/.test(color)) return -1;
		
		return parseInt(color.slice(1,3),16)/255;
	}
	
	function gOfColor(color) {
		if (!color) return -1;
		if (color.length!=7) return -1;
		if (!/#[0-9a-f]{6}/.test(color)) return -1;
		
		return parseInt(color.slice(3,5),16)/255;
	}
	
	function bOfColor(color) {
		if (!color) return -1;
		if (color.length!=7) return -1;
		if (!/#[0-9a-f]{6}/.test(color)) return -1;
		
		return parseInt(color.slice(5,7),16)/255;
	}
	
	function initGL() {
		GL = new GLContext();
		
		GL.initialize("mycanvas");
				
		GL.setClearColor(0.1, 0.1, 0.1, 1.0);
				
		GL.setLookAt([20.0, 15.0, 7.0], [0.0, 0.0, 0.0], [0.0, 1.0, 0.0])
				
		GL.translate([0.0, 0.0, 0.0]);
				
		GL.scale([0.1, 0.1, 0.1]);
				
		GL.rotate(1.0, [0.0, 1.0, 0.0]);
				
		//GL.lightEnable([0.13, 0.05, 0.0]);
				
		//GL.pointLightEnable([0.0, 0.15, 0.0]);
				
		//GL.spotLightEnable([0.0, 0.2, 0.0], [0.0, -1.0, 0.0]);
	}
}
