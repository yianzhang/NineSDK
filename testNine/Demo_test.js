function main() {
	view.init();
	
	var fileImp = model.newTextReader();
	$("#file").click(fileImp.trigger);
	
	var x;
	fileImp.read(function() {
		x = Reader.readSTL(fileImp);
	});
}
