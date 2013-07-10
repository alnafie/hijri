

function getGreg(h) {
	for (var i = 0; i < x.length; i++) {
		if (x[i].h == h) 
			return x[i].g;
	};
}

function getHijri(g) {
	for (var i = 0; i < x.length; i++) {
		if (x[i].g == g) 
			return x[i].h;
	};
}


function list (arr) {
	var old = new Date();
	for (var i = 0; i < arr.length; i++) {
		var items = arr[i].g.split(".");
		var date = new Date(items[2],items[1]-1,items[0]);
		var diff = (date-old)/1000/60/60/24;
		//console.log(diff);
		old = date;
		console.log(date);
	};
}

function foo (list) {
	var date = stringToDate(list[0].g);

	for (var i = 0; i < 1000; i++) {
		console.log(date);
		date = tomorrow(date);
	};
}

function hasGregorian (arr, str) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].g == str) {
			return true;
		}
	};

	return false;
}

function stringToDate (str) {
	var items = str.split(".");
	return new Date(items[2],items[1]-1,items[0]);
}

function dateToString (date) {
	var year = date.getFullYear(),
		month = date.getMonth(),
		day = date.getDate();

	return [day, month+1, year].join(".");
}

function tomorrow (d) {
	var year = d.getFullYear(),
		month = d.getMonth(),
		day = d.getDate(),
		tom = new Date(year, month, day+1);

	return tom;
}

function Hijri (str) { // expects "dd.mm.yyyy"
	var items = str.split(".");
	this.year = items[2];
	this.month = items[1];
	this.day = items[0];
}



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

// get first y.g date, y.h date
// if y has g date, set as new start date
// else y.g date++, y.h date++

function bar (x) {
	var z = [];
	var g = x[0].g;
	var h = x[0].h;

	var y = recursive(g, h);

	return z;

	function recursive (g, h) {

		if (hasGregorian(x, g)) {
			h = getHijri(g);
		}

		var obj = {"h":h,"g":g};
		z.push(obj);

		if (lastItem(x, g)) {
			return 0;
		}

		g = dateToString(tomorrow(stringToDate(g))); // g = g + 1 day
		h = nextHijri(h); // h = h + 1 day
		return recursive(g, h);

	}

}

function lastItem (x, d) {
	var foo = x[x.length-1].g;
	if (foo == d) {
		return true;
	}
	return false;
}

function nextHijri (str) {
	var i = str.split("."),
		result = [+i[0]+1, +i[1], +i[2]];

	return result.join(".");
}

function replaceDots(str) {
	return str.split('.').reverse().join('-');
}

function replaceAllDots(arr) {
	for (var i = 0; i < arr.length; i++) {
		var obj = arr[i];
		for (k in obj) {
			if (obj.hasOwnProperty(k)) {
				obj[k] = replaceDots(obj[k]);
			}
		}
	}
}