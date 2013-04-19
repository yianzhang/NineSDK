function mainMenu(container) {
	var props = {
		"bgcolor":"#00CCFF",
		"bgcolor:hover":"#FF66FF",
		"padding":"5px",
		"margin":"0 0 5px 0",
		"item_width":"100px",
		"item_height":"30px",
		"font_color":"yellow",
		"font0_size":"15px",
		"font0_family":"",
		"font0_weight":"bold",
		"font1_size":"10px",
		"font1_family":"",
		"font1_weight":"",
	};
	var menu = container.addMenu("menu",props);

	menu.addItem("File");
	menu.items["File"].addItem("Imp...");
	menu.items["File"].addItem("Exp...");
	
	menu.addItem("Edit");
	
	menu.addItem("Other");
	menu.items["Other"].addItem("1");
	menu.items["Other"].items["1"].addItem("2");
	menu.items["Other"].items["1"].items["2"].addItem("3");
}


