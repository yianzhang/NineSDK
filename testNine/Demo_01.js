function main() {
	view.init();
	
	var ct = view.container;
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
	var menuImp = menuFile.addItem("imp","Imp...");
	
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
		"font_color":"yellow",
		"font_size":"20px",
		"font_weight":"normal",
	});
	
	var canvas = ctn1.addCanvas("canvas", {
		"border" : "1px #00CCFF solid",
		"width" : ($(ctn1.node).width()-2-$(tree.node).outerWidth(true))+"px",
		"height" : ($(ctn1.node).height()-2)+"px",
//		"box_flex" : 1,
	});
	
	view.resize(function () {
		$(tree.node).height(($(ctn1.node).height()-10)+"px");
		$(canvas.node).width(($(ctn1.node).width()-2-$(tree.node).outerWidth(true))+"px");
		$(canvas.node).height(($(ctn1.node).height()-2)+"px");
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
	
	var fileImp = model.newTextReader();
	menuImp.click(fileImp.trigger);
	
	fileImp.read(function() {
		var x = Grid.Reader.readSTL(fileImp);
		tree.genFromGrid(x);
		
		//
	});
	
	//try
}
