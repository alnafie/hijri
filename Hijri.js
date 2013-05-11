
[
	{"1.1.1420":"17.4.1999"},
	{"1.2.1420":"16.5.1999"}
]

[
	{"h":"1.3.1420","g":"15.6.1999"},
	{"h":"1.4.1420","g":"14.7.1999"}
]

H["1999-7-4"]

H = {
	"1999-06-15":"1420-03-01",
	"1999-07-14":"1420-04-01"
}

G["1.4.1420"]

G = {
	"1.3.1420":"15.6.1999",
	"1.4.1420":"14.7.1999"
}


(function() {
	
	function Hijri (year, month, day) { // ex. 1420, 5, 3
		this.year = year;
		this.month = month;
		this.day = day;
		this.g = new Date(G["1420-5-3"]); // 1999-6-12
	}

	Hijri.prototype = {

		MILLISECONDS_PER_DAY: 86400000,
		SECONDS_PER_DAY: 86400,
		MINUTES_PER_DAY: 1440,
		HOURS_PER_DAY: 24,

		getDate: function() { return this.day; },
		getDay: function() { return this.g.getDay(); },
		getFullYear: function() { return this.year; },
		getHours: function() { return this.g.getHours(); },
		getMilliseconds: function() { return this.g.getMilliseconds(); },
		getMinutes: function() { return this.g.getMinutes(); },
		getMonth: function() { return this.month; },
		getSeconds: function() { return this.g.getSeconds(); },
		getTime: function() { return this.g.getTime(); },
		getTimezoneOffset: function() { return this.g.getTimezoneOffset(); },
		getUTCDate: function(){},
		getUTCFullYear: function(){},
		getUTCHours: function(){},
		getUTCMilliseconds: function(){},
		getUTCMinutes: function(){},
		getUTCMonth: function(){},
		getUTCSeconds: function(){},

		// dayValue: An integer from 1 to 30, representing the HIJRI day of the month.
		// Date Docs: If the parameter you specify is outside of the expected range, 
		// setDate attempts to update the date information in the Date object 
		// accordingly. For example, if you use 0 for dayValue, the date will 
		// be set to the last day of the previous month.
		// Talal: dayValue = -1 will return last day of previous month -1.
		// returns: epoch milliseconds
		setDate: function(dayValue) {
			// case dayValue not an int
			if (!isInt(dayValue)) {console.log("value must be int."); return false;}
			// case dayValue {<0}
			// case dayValue {0}
			// case dayValue {1:29}
			// case dayValue {30}
			// case dayValue {>30}
		},

		// yearValue: An integer specifying the numeric value of the HIJRI year, for example, 1432.
		// monthValue: An integer between 0 and 11 representing the months Muharram through DhulHijja.
		// dayValue: An integer between 1 and 30 representing the day of the month. If you specify 
		// the dayValue parameter, you must also specify the monthValue.

		// If you do not specify the monthValue and dayValue parameters, the values 
		// returned from the getMonth and getDate methods are used.
		// If a parameter you specify is outside of the expected range, setFullYear 
		// attempts to update the other parameters and the date information in the Date 
		// object accordingly. For example, if you specify 15 for monthValue, the year is 
		// incremented by 1 (year + 1), and 3 is used for the month.
		setFullYear: function(yearValue, monthValue, dayValue) {
			var monthValue = monthValue || this.getMonth();
			var dayValue = dayValue || this.getDate();
		},

		// the following are similar to the above
		setHours: function() {},
		setMilliseconds: function() {

			// new milliseconds = value % 1000
			// setSeconds( value / 1000 (round down) )

			// this.g.setMilliseconds(value);
			// d = H(""+this.g.getFullYear()+"-"+this.g.getMonth()+"-"+this.g.getDate()+""); // H("1999-3-4")
			// this.year = d.getFullYear();
			// this.month = d.getMonth();
			// this.day = d.getDate();
			// return this.getTime();


		},
		setMinutes: function() {},
		setMonth: function() {},
		setSeconds: function() {},

		setTime: function(timeValue) { return this.g.setTime(timeValue); },

		setUTCDate: function() {},
		setUTCFullYear: function() {},
		setUTCHours: function() {},
		setUTCMilliseconds: function() {},
		setUTCMinutes: function() {},
		setUTCMonth: function() {},
		setUTCSeconds: function() {},

		// ie: "Mon May 6 12:11:04 UTC+0300 2013"
		// chrome: "Mon May 06 2013 12:11:04 GMT+0300 (Arab Standard Time)"
		// ideally: should mimic toString in its environment using HIJRI dates.
		// for now: mimic chrome.
		toString: function() {
			//return [dayOfWeek, month, day, fullYear, [hours, minutes, seconds].join(':'), timeZone, timeZoneName].join(' ');
		},

		toLocaleString: function() {},

		// chrome: "Mon May 06 2013"
		toDateString: function() {
			//return [dayOfWeek, month, day, fullYear].join(' ');
		},

		// 0_0   .. this one's a doozy
		toLocaleDateString: function() {

		},

		toTimeString: function() {},

		toLocaleTimeString: function() {},

		// YYYY-MM-DDTHH:mm:ss.sssZ
		// 1432-05-16T16:26:04.930Z
		toISOString: function() {

		},

		toUTCString: function() {},

		// chrome: "2013-05-06T09:38:29.570Z"
		toJSONDate: function() {

		},
		
		toSource: function() {},
		valueOf: function() {}

	}

	// helpers
	function isInt(n) {
	   return typeof n === 'number' && n % 1 == 0;
	}


})();


var x = new Date("2012-4-3");

var y = new Hijri(); // no args gives same as new Date(); // the current date/time
var y = new Hijri("1420-5-3"); // hijri date string
var y = new Hijri(1420, 5, 3); // hijri year, month, day
var y = new Hijri(254585000); // gregorian m.seconds since epoch
var y = new Hijri(x); // gregorian date obj




getDate();
getDay();
getFullYear();
getHours();
getMilliseconds();
getMinutes();
getMonth();
getSeconds();
getTime();
getTimezoneOffset();
getUTCDate();
getUTCFullYear();
getUTCHours();
getUTCMilliseconds();
getUTCMinutes();
getUTCMonth();
getUTCSeconds();
//getYear(); deprecated
setDate();
setFullYear();
setHours();
setMilliseconds();
setMinutes();
setMonth();
setSeconds();
setTime();
setUTCDate();
setUTCFullYear();
setUTCHours();
setUTCMilliseconds();
setUTCMinutes();
setUTCMonth();
setUTCSeconds();
//setYear(); deprecated
toDateString();
toISOString();
toJSON();
//toGMTString(); deprecated
toLocaleDateString();
//toLocaleFormat(); non-standard
toLocaleString();
toLocaleTimeString();
toSource();
toString();
toTimeString();
toUTCString();
valueOf();

// ====================================

// different
getDate();
getDay();
getFullYear();
getMonth();
getUTCDate();
getUTCFullYear();
getUTCHours();
getUTCMilliseconds();
getUTCMinutes();
getUTCMonth();
getUTCSeconds();
//getYear(); // deprecated
setDate();
setFullYear();
setHours();
setMilliseconds();
setMinutes();
setMonth();
setSeconds();
setTime();
setUTCDate();
setUTCFullYear();
setUTCHours();
setUTCMilliseconds();
setUTCMinutes();
setUTCMonth();
setUTCSeconds();
toDateString();
toISOString();
toJSON();
toGMTString();
toLocaleDateString();
toLocaleFormat();
toLocaleString();
toLocaleTimeString();
toSource();
toString();
toTimeString();
toUTCString();
valueOf();

// same
getHours();
getMilliseconds();
getMinutes();
getSeconds();
getTimezoneOffset();
getTime();
