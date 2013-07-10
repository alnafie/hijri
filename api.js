<!DOCTYPE html>
<html>
<head>
<script>
var y = [
	{
		"h": "1.1.1420",
		"g": "17.4.1999"
	},
	{
		"h": "1.2.1420",
		"g": "16.5.1999"
	}
];


function fillGaps (y) {
	var g = y[0].g,
		h = y[0].h,
		r = [];

	recursive(g, h);

	

	
	function recursive (g, h) {
		
		if (getH(g)) {
			h = getH(g);
		}

		var obj = {"g":g, "h":h};
		r.push(obj);

		if lastItem(g)
			return;

		g = tomorrow(g);
		h = next(h);

		recursive(g, h);

	}

	return r;

}



// is this g the last item in the array?
function lastItem (g) {
	if (y[y.length-1].g == g) 
		return true;
	else 
		return false;
}


// given h, get g
function getG (h) {
	for (var i = 0; i < y.length; i++) {
		if (y[i].h == h) { return y[i].g; }
	};
	return false;
}


// given g, get h
function getH (g) {
	for (var i = 0; i < y.length; i++) {
		if (y[i].g == g) { return y[i].h; }
	};
	return false;
}


// given "1.1.1420" get "2.1.1420"
function next (str) {
	var s = str.split('.');
	return [+s[0]+1, +s[1], +s[2]].join('.');
}

// given "1.1.1999" get "2.1.1999"
function tomorrow (g) {
	var s = g.split('.');
	var d = new Date(+s[2], +s[1]-1, +s[0]+1);
	return d.getDate()+"."+(d.getMonth()+1)+"."+d.getFullYear();
}

// given "1.1.1999" get Date(1999, 1, 1)

</script>
</head>
<body>
</body>
</html>