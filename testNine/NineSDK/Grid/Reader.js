Grid.Reader = {};

Grid.Reader.readSTL = function (reader) {
	var ps = new PointSet();
	
	var s;
	
	reader.seek(0);
	while (s = reader.getString()) {
		if (s == "vertex") {
			var x = reader.getString();
			var y = reader.getString();
			var z = reader.getString();
			x = parseFloat(x);
			y = parseFloat(y);
			z = parseFloat(z);
			
			if (ps.indexOfCoord(x, y, z) == -1) {
				ps.push(new Point(x, y, z));
			}
		}
	}
	
	var ts = new TriangleSet();
	
	var s;
	var v = undefined;
	var p0 = undefined;
	var p1 = undefined;
	var p2 = undefined;
	
	reader.seek(0);
	while (s = reader.getString()) {
		if (s == "normal") {
			var x = reader.getString();
			var y = reader.getString();
			var z = reader.getString();
			x = parseFloat(x);
			y = parseFloat(y);
			z = parseFloat(z);
			
			v = new Vector(x,y,z);
		} else if (s == "vertex") {
			var x = reader.getString();
			var y = reader.getString();
			var z = reader.getString();
			x = parseFloat(x);
			y = parseFloat(y);
			z = parseFloat(z);
			
			if (!p0) {
				p0 = ps[ps.indexOfCoord(x, y, z)];
			} else if (!p1) {
				p1 = ps[ps.indexOfCoord(x, y, z)];
			} else if (!p2) {
				p2 = ps[ps.indexOfCoord(x, y, z)];

				var t = new Triangle(p0,p1,p2,v);
				ts.push(t);
				
				v = p0 = p1 = p2 = undefined;
			}
		}
	}

	var fs = ts.faceSet();
	var bs = fs.bodySet();
	var ab = new AllBody(bs, ps);
	
	return ab;
};

Grid.Reader.readSolid = function(pset,iset) {
	var pfs = pset.trim().split(/\s+/).map(function (x) {return parseFloat(x);});
	var is = iset.trim().split(/\s+/).map(function (x) {return parseInt(x);});
	
	var ps = new PointSet();
	for (var i=0;i<pfs.length;) {
		ps.push(new Point(pfs[i],pfs[i+1],pfs[i+2]));
		i += 3;
	}
	
	var ts = new TriangleSet();
	for (var i=0;i<is.length;) {
		ts.push(new Triangle(ps[is[i]], ps[is[i+1]], ps[is[i+2]]));
		i += 3;
	}
	
	var s = new Solid(ts);
	var ss = new SolidSet();
	ss.push(s);
	var as = new AllSolid(ss,ps);
	
	return as;
};
