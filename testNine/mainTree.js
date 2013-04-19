function mainTree(container) {
	var props = {
		"bgcolor":"#00CCFF",
		"width":"200px",
		"padding":"5px",
		"margin":"0 5px 0 0",
		"font_color":"yellow",
		"font_size":"20px",
		"font_family":"",
		"font_weight":"normal",
	};
	
	var tree = container.addTree("tree",props);

	tree.addItem("amy");
	tree.addItem("buddy");
	tree.addItem("cherry");

	tree.items["amy"].addItem("albert");
	tree.items["amy"].addItem("alpha");
	tree.items["amy"].addItem("aptana");

	tree.items["buddy"].addItem("bolt");
	tree.items["buddy"].addItem("billy");
	tree.items["buddy"].addItem("billbert");

	tree.items["cherry"].addItem("cathrine");
	tree.items["cherry"].addItem("chesley");
	tree.items["cherry"].addItem("charley");

	tree.items["amy"].items["alpha"].addItem("Android");
	tree.items["amy"].items["alpha"].addItem("Apple");
	tree.items["amy"].items["alpha"].addItem("Aeronautics");
}
