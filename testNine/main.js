function main() {
	view.init();
	
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
	menu.items["File"].addItem("Imp...");
	menu.items["File"].addItem("Exp...");
	
	menu.addItem("Edit");
	
	menu.addItem("Other");
	menu.items["Other"].addItem("1");
	menu.items["Other"].items["1"].addItem("2");
	menu.items["Other"].items["1"].items["2"].addItem("abcdefghijklmnopqrstuvwxyz");
	menu.items["Other"].addItem("ShowDialog");
	
	
	mainToolBar(view.container);
	view.container.addContainer("ctn1",{
		"box_orient":"horizontal",
		"margin":"0 0 5px 0",

		"box_flex":"1",
	});
	mainTree(view.container.items["ctn1"]);
	
	var callBoard = view.container.addCallBoard("callboard",{
		"bgcolor":"#00CCFF",
		"padding":"5px",
		"font_color":"white",
		"height":"100px",
	});
	
	callBoard.writeln("9233");
	callBoard.writeln("=");
	callBoard.writeln("7*1319");
	callBoard.writeln("7*1319");
	callBoard.writeln("7*1319");
	callBoard.writeln("7*1319");
	callBoard.writeln("7*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*13197*1319");
	callBoard.writeln("7*1319");
	callBoard.writeln("7*1319");
	callBoard.writeln("7*1319");
	callBoard.writeln("7*1319");
	callBoard.writeln("7*1319");
	callBoard.writeln("7*1319=9233");
	callBoard.update("9233=7*1319");

	dia = view.addDialog("92331319",{
		"head_bgcolor":"#00CCFF",
		"head_padding":"5px",
		"head_font_color":"white",
		"body_bgcolor":"pink",
		"body_width":"1000px",
		"body_height":"900px",
		"body_font_color":"white",
	});
	
	dia.addCheckbox(
		"Favor:","favor",
		{"value":"basketball","checked":true,"linefeed":false},
		{"value":"soccer","check":false,"linefeed":true}
	);
	
	dia.addRadio(
		"Sex:","sex",
		{"value":"Male","checked":true,"linefeed":false},
		{"value":"Female","checked":true,"linefeed":true}
	);
	
	dia.addText(
		"Name:","name",
		{"default_value":"Yian","placeholder":"Please type your name.","maxlength":9,"size":300}
	);
	
	dia.addPassword(
		"Password:","password",
		{"default_value":"Yian","placeholder":"Please type password.","maxlength":9,"size":300}
	);
	
	dia.addFile(
		"File:","file"
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
	
	menu.items["Other"].items["ShowDialog"].click(function(){dia.show();});
}
