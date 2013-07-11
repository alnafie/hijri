(function(window, undefined) {
	
	// CONSTANTS
	var MILLISECONDS_PER_SECOND = 1000,
		MILLISECONDS_PER_MINUTE = 60000,
		MILLISECONDS_PER_HOUR = 3600000,
		MILLISECONDS_PER_DAY = 86400000,

		SECONDS_PER_MINUTE = 60,
		SECONDS_PER_HOUR = 3600,
		SECONDS_PER_DAY = 86400,

		MINUTES_PER_HOUR = 60,
		MINUTES_PER_DAY = 1440,

		HOURS_PER_DAY = 24;


	function Hijri () {

		var args = Array.prototype.slice.call(arguments, 0);
		
		// new Hijri(); // no args gives same as new Date(); // the current datetime
		if (args.length == 0) { this.g = new Date() } else
		// new Hijri("1420-5-3"); // hijri date string
		if (args.length == 1 && typeof args[0] == 'string') { this.g = new Date(G(args[0])) } else
		// new Hijri(254585000); // gregorian milliseconds since epoch
		if (args.length == 1 && typeof args[0] == 'number') { this.g = new Date(args[0]) } else
		// new Hijri(dateObj); // gregorian date obj
		if (args.length == 1 && args[0] instanceof Date) { this.g = args[0] } else 
		// new Hijri(1420, 5, [3, 15, 45, 36, 89]); // hijri year, month, day
		if (args.length >= 2) { 

			var y_h = +args[0] ,
				m_h = +args[1] ,
				date_h = +args[2] || 1 ,
				hours = +args[3] || 0 ,
				minutes = +args[4] || 0 ,
				seconds = +args[5] || 0 ,
				ms = +args[6] || 0 ,
				g_date_string = G( [y_h, m_h+1, date_h].join('-') );

			this.g = new Date(g_date_string);
			this.g.setHours(hours);
			this.g.setMinutes(minutes);
			this.g.setSeconds(seconds);
			this.g.setMilliseconds(ms);
		}
		
		this.h = _h(this.g);
		var arr = this.h.split('-');
		this.year = +arr[0];
		this.month = +arr[1];
		this.date = +arr[2];

		return this;
	}

	Hijri.prototype = {

		// GETTERS
		getDate: function() { return this.date },
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
		setMilliseconds: function(ms) {

			var newMs = t % MILLISECONDS_PER_SECOND,
				s = Math.floor(t / MILLISECONDS_PER_SECOND);

			this.g.setMilliseconds(newMs);
			this.setSeconds(s);

			// Let t be the result of LocalTime(this time value).
			// Let time be MakeTime(HourFromTime(t), MinFromTime(t), SecFromTime(t), ToNumber(ms)).
			// Let u be TimeClip(UTC(MakeDate(Day(t), time))).
			// Set the [[PrimitiveValue]] internal property of this Date object to u.
			// Return u.

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

			// case dayValue {<0}
			// case dayValue {0}
			// case dayValue {1:29}
			// case dayValue {30}
			// case dayValue {>30}

			switch (dayValue) {
				case (dayValue < 0):
				case (dayValue == 0):

			}

			
		},
		setMonth: function() {},

		// yearValue: An integer specifying the numeric value of the HIJRI year, for example, 1432.
		// monthValue: An integer between 0 and 11 representing the months Muharram through DhulHijja.
		// dayValue: An integer between 1 and 30 representing the day of the month. If you specify 
		// the dayValue parameter, you must also specify the monthValue. --Docs
		setFullYear: function(year, month, date) {
			// If you do not specify the monthValue and dayValue parameters, 
			// the values returned from the getMonth and getDate methods are used. --Docs
			var monthValue = monthValue || this.getMonth();
			var dayValue = dayValue || this.getDate();

			// If a parameter you specify is outside of the expected range, setFullYear 
			// attempts to update the other parameters and the date information in the Date 
			// object accordingly. For example, if you specify 15 for monthValue, the year is 
			// incremented by 1 (year + 1), and 3 is used for the month. --Docs


			// Let t be the result of LocalTime(this time value); but if this time value is NaN, let t be +0.
			var t = this.g.getTime();
			// Let y be ToNumber(year).
			var y = +year;
			// If month is not specified, then let m be MonthFromTime(t); otherwise, let m be ToNumber(month).
			var m = +month || this.getMonth();
			// If date is not specified, then let dt be DateFromTime(t); otherwise, let dt be ToNumber(date).
			var dt = +date || this.getDate();
			// Let newDate be MakeDate(MakeDay(y, m, dt), TimeWithinDay(t)).
			var newDate = 5;
			// Let u be TimeClip(UTC(newDate)).
			// Set the [[PrimitiveValue]] internal property of this Date object to u.
			// Return u.
		},
		

		setTime: function(timeValue) { return this.g.setTime(timeValue) },

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

	// HELPERS
	function _isInt(n) {
	   return typeof n === 'number' && n % 1 == 0;
	}

	function _h(dateObj) {
		var str = [ dateObj.getFullYear(), dateObj.getMonth()+1, dateObj.getDate() ].join('-');
		return H( _addZeros(str) );
	}

	function _millisecondsFromTime(t) {
		return t % MILLISECONDS_PER_SECOND;
	}

	function _secondsFromTime(t) {
		return Math.floor(t / MILLISECONDS_PER_SECOND) % SECONDS_PER_MINUTE;
	}

	function _minutesFromTime(t) {
		return Math.floor(t / MILLISECONDS_PER_MINUTE) % MINUTES_PER_HOUR;
	}

	function _hoursFromTime(t) {
		return Math.floor(t / MILLISECONDS_PER_HOUR) % HOURS_PER_DAY;
	}

	function _dayFromTime(t) {

	}

	function _nextHijriDay() {
		
	}

	function _nextHijriMonth() {

	}

	function _nextHijriYear(h) {
		var arr = h.split('-');
		arr[0]++;
		return arr.join('-');
	}

	// str = '1434-6-7'  =>  '1434-06-06'
	function _addZeros(str) {
		var arr = str.split('-');
		arr[1] = arr[1].length < 2 ? '0'+arr[1] : arr[1];
		arr[2] = arr[2].length < 2 ? '0'+arr[2] : arr[2];
		return arr.join('-');
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