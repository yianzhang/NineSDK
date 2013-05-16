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
	var menuFile = menu.addItem("File");
	var menuImp = menuFile.addItem("Imp...");
	
	 cb = ct.addCallBoard("cb",{
		"bgcolor":"#00CCFF",
		"padding":"5px",
		"font_color":"white",
		"height":"100px",
		"box_flex" : "1",
	});
	
	var fileImp = model.newTextReader();
	menuImp.click(fileImp.trigger);
	
	var ab;
	fileImp.read(function() {
		ab = Reader.readSTL(fileImp);
		ls = ab.bodyAt(0).faceAt(0).edge;
		//cb.writeln(ab);
	});
	
	//try
	
}
