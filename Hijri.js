(function(window, undefined) {
	
	function Hijri () {

		var args = Array.prototype.slice.call(arguments, 0);
		// var h = new Hijri(); // no args gives same as new Date(); // the current datetime
		// var h = new Hijri("1420-5-3"); // hijri date string
		// var h = new Hijri(1420, 5, 3); // hijri year, month, day
		// var h = new Hijri(254585000); // gregorian m.seconds since epoch
		// var h = new Hijri(dateObj); // gregorian date obj
		if (args.length == 0) { console.log('1'); this.g = new Date() } else
		if (args.length == 1 && typeof args[0] == 'string') { console.log('2'); this.g = new Date(G(args[0])) } else
		if (args.length == 3) { console.log('3'); args[1]--; this.g = new Date(G(args.join('-'))) } else
		if (args.length == 1 && typeof args[0] == 'number') { console.log('4'); this.g = new Date(args[0]) } else
		if (args.length == 1 && args[0] instanceof Date) { console.log('5'); this.g = args[0] }

		this.h = this._h();
		this.year = +this.h.split('-')[0];
		this.month = +this.h.split('-')[1];
		this.day = +this.h.split('-')[2];

		return this;
	}

	Hijri.prototype = {

		MILLISECONDS_PER_DAY: 86400000,
		SECONDS_PER_DAY: 86400,
		MINUTES_PER_DAY: 1440,
		HOURS_PER_DAY: 24,

		// GETTERS
		getDate: function() { return this.day },
		getMonth: function() { return this.month },
		getFullYear: function() { return this.year },
		getDay: function() { return this.g.getDay() },
		getHours: function() { return this.g.getHours() },
		getMilliseconds: function() { return this.g.getMilliseconds() },
		getMinutes: function() { return this.g.getMinutes() },
		getSeconds: function() { return this.g.getSeconds() },
		getTime: function() { return this.g.getTime() },
		getTimezoneOffset: function() { return this.g.getTimezoneOffset() },
		
		// UTC GETTERS
		getUTCDate: function(){},
		getUTCFullYear: function(){},
		getUTCHours: function(){},
		getUTCMilliseconds: function(){},
		getUTCMinutes: function(){},
		getUTCMonth: function(){},
		getUTCSeconds: function(){},
		
		// SETTERS
		setMilliseconds: function(num) {

			// ms = num % 1000
			// s = ((num - ms) / 1000) % 60

			// this.g.setMilliseconds(ms);
			// setSeconds( newMs - ms / 1000 )

			
			// d = H(""+this.g.getFullYear()+"-"+this.g.getMonth()+"-"+this.g.getDate()+""); // H("1999-3-4")
			// this.year = d.getFullYear();
			// this.month = d.getMonth();
			// this.day = d.getDate();
			// return this.getTime();

			//return this.g.setMilliseconds(newMs);



		},
		setSeconds: function() {},
		setMinutes: function() {},
		setHours: function() {},
		// dayValue: An integer from 1 to 30, representing the HIJRI day of the month.
		// Date Docs: If the parameter you specify is outside of the expected range, 
		// setDate attempts to update the date information in the Date object 
		// accordingly. For example, if you use 0 for dayValue, the date will 
		// be set to the last day of the previous month.
		// Talal: dayValue = -1 will return last day of previous month -1.
		// returns: epoch milliseconds
		setDate: function(dayValue) {
			var self = this;
			// case dayValue not an int
			if (!isInt(dayValue)) {console.log("value must be int."); return false;}
			// case dayValue {<0}
			// case dayValue {0}
			// case dayValue {1:29}
			// case dayValue {30}
			// case dayValue {>30}



			return self.getTime();
		},
		setMonth: function() {},
		// yearValue: An integer specifying the numeric value of the HIJRI year, for example, 1432.
		// monthValue: An integer between 0 and 11 representing the months Muharram through DhulHijja.
		// dayValue: An integer between 1 and 30 representing the day of the month. If you specify 
		// the dayValue parameter, you must also specify the monthValue.
		//
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
		valueOf: function() {},

		// HELPERS
		_h: function() {
			return H( [ this.g.getFullYear(), this.g.getMonth()+1, this.g.getDate() ].join('-') );
		}

	}

	// helpers
	function isInt(n) {
	   return typeof n === 'number' && n % 1 == 0;
	}

	

	window.Hijri = Hijri;

})(window);

/*
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

*/