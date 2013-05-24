function main() {
	//initialize view
	view.init();

	//add a menu	
	var menu = view.container.addMenu("menu",{
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
	});

	menu.addItem("File");
	menu.itemAt("File").addItem("Imp...");
	menu.itemAt("File").addItem("Exp...");
	
	menu.addItem("Edit");
	
	menu.addItem("Other");
	menu.itemAt("Other").addItem("1");
	menu.itemAt("Other").itemAt("1").addItem("2");
	menu.itemAt("Other").itemAt("1").itemAt("2").addItem("abcdefghijklmnopqrstuvwxyz");
	menu.itemAt("Other").addItem("ShowDialog");

	//add a toobar
	var toolBar = view.container.addToolBar("toolbar",{
		"bgcolor":"#00CCFF",
		"bgcolor:hover":"#FF66FF",
		"padding":"3px",
		"margin":"0 0 5px 0",
		"item_width":"20px",
	});
	
	toolBar.addItem("refresh0","NineSDK/img/refresh.png");
	toolBar.addItem("refresh1","NineSDK/img/refresh.png");
	toolBar.addItem("refresh2","NineSDK/img/refresh.png");
	toolBar.addItem("refresh3","NineSDK/img/refresh.png");
	toolBar.addItem("refresh4","NineSDK/img/refresh.png");
	toolBar.addItem("refresh5","NineSDK/img/refresh.png");
	toolBar.addItem("refresh6","NineSDK/img/refresh.png");
	toolBar.addItem("refresh7","NineSDK/img/refresh.png");
	
	//add a sub-container
	var ctn1 = view.container.addContainer("ctn1",{
		"box_orient":"horizontal",
		"margin":"0 0 5px 0",

		"box_flex":"1",
	});
	
	//add a tree
	var tree = ctn1.addTree("tree",{
		"bgcolor":"#00CCFF",
		"selected_color":"#FF66FF",
		"width":"200px",
		"padding":"5px",
		"margin":"0 5px 0 0",
		"font_color":"yellow",
		"font_size":"20px",
		"font_family":"",
		"font_weight":"normal",
	});

	tree.addItem("amy");
	tree.addItem("buddy");
	tree.addItem("cherry");

	tree.itemAt("amy").addItem("albert");
	tree.itemAt("amy").addItem("alpha");
	tree.itemAt("amy").addItem("aptana");

	tree.itemAt("buddy").addItem("bolt");
	tree.itemAt("buddy").addItem("billy");
	tree.itemAt("buddy").addItem("billbert");

	tree.itemAt("cherry").addItem("cathrine");
	tree.itemAt("cherry").addItem("chesley");
	tree.itemAt("cherry").addItem("charley");

	tree.itemAt("amy").itemAt("alpha").addItem("Android");
	tree.itemAt("amy").itemAt("alpha").addItem("Apple");
	tree.itemAt("amy").itemAt("alpha").addItem("Aeronautics");
	
	//add a callboard
	cb = view.container.addCallBoard("callboard",{
		"bgcolor":"#00CCFF",
		"padding":"5px",
		"font_color":"white",
		"height":"100px",
	});

	//new a dialog
	var dia = view.addDialog("92331319",{
		"head_bgcolor":"#00CCFF",
		"head_padding":"5px",
		"head_font_color":"white",
		"body_bgcolor":"#FF66FF",
		"body_font_color":"white",
	});
	
	dia.addCheckbox(
		"Favor:","favor",
		{"value":"basketball","title":"BASKETBALL","checked":true,"linefeed":false},
		{"value":"soccer","title":"SOCCER","check":false,"linefeed":true}
	);
	
	dia.addRadio(
		"Sex:","sex",
		{"value":"Male","title":"MALE","checked":true,"linefeed":false},
		{"value":"Female","title":"FEMALE","checked":true,"linefeed":true}
	);
	
	dia.addText(
		"Name:","name",
		{"value":"Susie","placeholder":"Please type your name.","maxlength":9,"width":300}
	);
	
	dia.addPassword(
		"Password:","password",
		{"value":"Susie","placeholder":"Please type password.","maxlength":9,"width":300}
	);
	
	dia.addRange(
		"Length:","length",
		{min:0,max:100,step:0.1,default_value:33,size:"100px"}
	);
	
	dia.addColor(
		"Color:","color",
		{default_value:"#00ccff"}
	);
	
	dia.addSelect(
		"EDU:","edu",
		{value:"Primary school",selected:false},
		{value:"Junior high school",selected:false},
		{value:"Senior high school",selected:false},
		{value:"College",selected:false},
		{value:"University",selected:true}
	);
	
	dia.addTextarea(
		"Intro:","intro",
		{"default_value":"9233","size_width":"300px","size_height":"100px"}
	);
	
	//add a textreader
	var fimp = model.newTextReader();
	
	//add a textwriter
	var fexp = model.newTextWriter();
	
	//add a listener to menuItem
	menu.itemAt("File").itemAt("Imp...").click(fimp.trigger);
	menu.itemAt("File").itemAt("Exp...").click(fexp.trigger);
	menu.itemAt("Other").itemAt("ShowDialog").click(function(){dia.show();});
	
	//add a listener to toolItem
	toolBar.itemAt("refresh0").click(function() {
		cb.writeln(tree.filterCheckedItems().map(function(x){return x.title;}).join(", "));
	});
	toolBar.itemAt("refresh1").click(function() {
		cb.writeln(tree.filterCheckedItems().map(function(x){return x.title;}).join(", "));
		tree.deleteCheckedItems();
		cb.writeln("Deletion Over!");
	});
	toolBar.itemAt("refresh2").click(function() {
		var item = tree.selectedItem;
		if (item)
			cb.writeln(item.title);
		else
			cb.writeln("null");
	});
	
	//add a listener to tree
//	tree.change(function(){alert($(this).children("span").eq(1).text());});

	//add a listener to textreader
	fimp.read(function(){
		cb.writeln(this.content);
		var c;
		while((c = this.getString())!=undefined) {
			cb.writeln(c);
		}
		
		this.seek(0);
		cb.writeln(this.content);
		while((c = this.getString())!=undefined) {
			cb.writeln(c);
		}
	});
/*	
	model.localStorage.clear();
	model.localStorage.setItem("9233","7*1319");
	model.localStorage.setObjectItem("i",{"9233":"=7*1319"});
	model.localStorage.setNumericItem("9","1319");
	model.localStorage.setArrayItem("1319",[0,1,2,3,4])
	toolBar.itemAt("refresh3").click(function() {
		cb.writeln(model.localStorage.getItem("9233"));
		cb.writeln(JSON.stringify(model.localStorage.getObjectItem("i")));
		cb.writeln(model.localStorage.getNumericItem("9")+66);
		cb.writeln(model.localStorage.getArrayItem("1319")[0]+66);
	});
	
*/	
	fexp.write(9233);
	fexp.writeln("=7*1319");
}
