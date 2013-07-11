(function(window, undefined) {
	
	// SOURCE DATA
	var data = [{"h":"1420-01-01","g":"1999-04-17"},{"h":"1420-02-01","g":"1999-05-16"},{"h":"1420-03-01","g":"1999-06-15"},{"h":"1420-04-01","g":"1999-07-14"},{"h":"1420-05-01","g":"1999-08-12"},{"h":"1420-06-01","g":"1999-09-11"},{"h":"1420-07-01","g":"1999-10-10"},{"h":"1420-08-01","g":"1999-11-09"},{"h":"1420-09-01","g":"1999-12-09"},{"h":"1420-10-01","g":"2000-01-08"},{"h":"1420-11-01","g":"2000-02-07"},{"h":"1420-12-01","g":"2000-03-07"},{"h":"1421-01-01","g":"2000-04-06"},{"h":"1421-02-01","g":"2000-05-05"},{"h":"1421-03-01","g":"2000-06-03"},{"h":"1421-04-01","g":"2000-07-03"},{"h":"1421-05-01","g":"2000-08-01"},{"h":"1421-06-01","g":"2000-08-30"},{"h":"1421-07-01","g":"2000-09-28"},{"h":"1421-08-01","g":"2000-10-28"},{"h":"1421-09-01","g":"2000-11-27"},{"h":"1421-10-01","g":"2000-12-27"},{"h":"1421-11-01","g":"2001-01-26"},{"h":"1421-12-01","g":"2001-02-24"},{"h":"1422-01-01","g":"2001-03-26"},{"h":"1422-02-01","g":"2001-04-25"},{"h":"1422-03-01","g":"2001-05-24"},{"h":"1422-04-01","g":"2001-06-22"},{"h":"1422-05-01","g":"2001-07-22"},{"h":"1422-06-01","g":"2001-08-20"},{"h":"1422-07-01","g":"2001-09-18"},{"h":"1422-08-01","g":"2001-10-17"},{"h":"1422-09-01","g":"2001-11-16"},{"h":"1422-10-01","g":"2001-12-16"},{"h":"1422-11-01","g":"2002-01-15"},{"h":"1422-12-01","g":"2002-02-13"},{"h":"1423-01-01","g":"2002-03-15"},{"h":"1423-02-01","g":"2002-04-14"},{"h":"1423-03-01","g":"2002-05-13"},{"h":"1423-04-01","g":"2002-06-12"},{"h":"1423-05-01","g":"2002-07-11"},{"h":"1423-06-01","g":"2002-08-10"},{"h":"1423-07-01","g":"2002-09-08"},{"h":"1423-08-01","g":"2002-10-07"},{"h":"1423-09-01","g":"2002-11-06"},{"h":"1423-10-01","g":"2002-12-05"},{"h":"1423-11-01","g":"2003-01-04"},{"h":"1423-12-01","g":"2003-02-02"},{"h":"1424-01-01","g":"2003-03-04"},{"h":"1424-02-01","g":"2003-04-03"},{"h":"1424-03-01","g":"2003-05-02"},{"h":"1424-04-01","g":"2003-06-01"},{"h":"1424-05-01","g":"2003-07-01"},{"h":"1424-06-01","g":"2003-07-30"},{"h":"1424-07-01","g":"2003-08-29"},{"h":"1424-08-01","g":"2003-09-27"},{"h":"1424-09-01","g":"2003-10-26"},{"h":"1424-10-01","g":"2003-11-25"},{"h":"1424-11-01","g":"2003-12-24"},{"h":"1424-12-01","g":"2004-01-23"},{"h":"1425-01-01","g":"2004-02-21"},{"h":"1425-02-01","g":"2004-03-22"},{"h":"1425-03-01","g":"2004-04-20"},{"h":"1425-04-01","g":"2004-05-20"},{"h":"1425-05-01","g":"2004-06-19"},{"h":"1425-06-01","g":"2004-07-18"},{"h":"1425-07-01","g":"2004-08-17"},{"h":"1425-08-01","g":"2004-09-15"},{"h":"1425-09-01","g":"2004-10-15"},{"h":"1425-10-01","g":"2004-11-14"},{"h":"1425-11-01","g":"2004-12-13"},{"h":"1425-12-01","g":"2005-01-12"},{"h":"1426-01-01","g":"2005-02-10"},{"h":"1426-02-01","g":"2005-03-11"},{"h":"1426-03-01","g":"2005-04-10"},{"h":"1426-04-01","g":"2005-05-09"},{"h":"1426-05-01","g":"2005-06-08"},{"h":"1426-06-01","g":"2005-07-07"},{"h":"1426-07-01","g":"2005-08-06"},{"h":"1426-08-01","g":"2005-09-05"},{"h":"1426-09-01","g":"2005-10-04"},{"h":"1426-10-01","g":"2005-11-03"},{"h":"1426-11-01","g":"2005-12-03"},{"h":"1426-12-01","g":"2006-01-01"},{"h":"1427-01-01","g":"2006-01-31"},{"h":"1427-02-01","g":"2006-03-01"},{"h":"1427-03-01","g":"2006-03-30"},{"h":"1427-04-01","g":"2006-04-29"},{"h":"1427-05-01","g":"2006-05-28"},{"h":"1427-06-01","g":"2006-06-27"},{"h":"1427-07-01","g":"2006-07-26"},{"h":"1427-08-01","g":"2006-08-25"},{"h":"1427-09-01","g":"2006-09-24"},{"h":"1427-10-01","g":"2006-10-23"},{"h":"1427-11-01","g":"2006-11-22"},{"h":"1427-12-01","g":"2006-12-22"},{"h":"1428-01-01","g":"2007-01-20"},{"h":"1428-02-01","g":"2007-02-19"},{"h":"1428-03-01","g":"2007-03-20"},{"h":"1428-04-01","g":"2007-04-18"},{"h":"1428-05-01","g":"2007-05-18"},{"h":"1428-06-01","g":"2007-06-16"},{"h":"1428-07-01","g":"2007-07-15"},{"h":"1428-08-01","g":"2007-08-14"},{"h":"1428-09-01","g":"2007-09-13"},{"h":"1428-10-01","g":"2007-10-13"},{"h":"1428-11-01","g":"2007-11-11"},{"h":"1428-12-01","g":"2007-12-11"},{"h":"1429-01-01","g":"2008-01-10"},{"h":"1429-02-01","g":"2008-02-08"},{"h":"1429-03-01","g":"2008-03-09"},{"h":"1429-04-01","g":"2008-04-07"},{"h":"1429-05-01","g":"2008-05-06"},{"h":"1429-06-01","g":"2008-06-05"},{"h":"1429-07-01","g":"2008-07-04"},{"h":"1429-08-01","g":"2008-08-02"},{"h":"1429-09-01","g":"2008-09-01"},{"h":"1429-10-01","g":"2008-10-01"},{"h":"1429-11-01","g":"2008-10-30"},{"h":"1429-12-01","g":"2008-11-29"},{"h":"1430-01-01","g":"2008-12-29"},{"h":"1430-02-01","g":"2009-01-27"},{"h":"1430-03-01","g":"2009-02-26"},{"h":"1430-04-01","g":"2009-03-28"},{"h":"1430-05-01","g":"2009-04-26"},{"h":"1430-06-01","g":"2009-05-25"},{"h":"1430-07-01","g":"2009-06-24"},{"h":"1430-08-01","g":"2009-07-23"},{"h":"1430-09-01","g":"2009-08-22"},{"h":"1430-10-01","g":"2009-09-20"},{"h":"1430-11-01","g":"2009-10-20"},{"h":"1430-12-01","g":"2009-11-18"},{"h":"1431-01-01","g":"2009-12-18"},{"h":"1431-02-01","g":"2010-01-16"},{"h":"1431-03-01","g":"2010-02-15"},{"h":"1431-04-01","g":"2010-03-17"},{"h":"1431-05-01","g":"2010-04-15"},{"h":"1431-06-01","g":"2010-05-15"},{"h":"1431-07-01","g":"2010-06-13"},{"h":"1431-08-01","g":"2010-07-13"},{"h":"1431-09-01","g":"2010-08-11"},{"h":"1431-10-01","g":"2010-09-10"},{"h":"1431-11-01","g":"2010-10-09"},{"h":"1431-12-01","g":"2010-11-07"},{"h":"1432-01-01","g":"2010-12-07"},{"h":"1432-02-01","g":"2011-01-05"},{"h":"1432-03-01","g":"2011-02-04"},{"h":"1432-04-01","g":"2011-03-06"},{"h":"1432-05-01","g":"2011-04-05"},{"h":"1432-06-01","g":"2011-05-04"},{"h":"1432-07-01","g":"2011-06-03"},{"h":"1432-08-01","g":"2011-07-02"},{"h":"1432-09-01","g":"2011-08-01"},{"h":"1432-10-01","g":"2011-08-30"},{"h":"1432-11-01","g":"2011-09-29"},{"h":"1432-12-01","g":"2011-10-28"},{"h":"1433-01-01","g":"2011-11-26"},{"h":"1433-02-01","g":"2011-12-26"},{"h":"1433-03-01","g":"2012-01-24"},{"h":"1433-04-01","g":"2012-02-23"},{"h":"1433-05-01","g":"2012-03-24"},{"h":"1433-06-01","g":"2012-04-22"},{"h":"1433-07-01","g":"2012-05-22"},{"h":"1433-08-01","g":"2012-06-21"},{"h":"1433-09-01","g":"2012-07-20"},{"h":"1433-10-01","g":"2012-08-19"},{"h":"1433-11-01","g":"2012-09-17"},{"h":"1433-12-01","g":"2012-10-17"},{"h":"1434-01-01","g":"2012-11-15"},{"h":"1434-02-01","g":"2012-12-14"},{"h":"1434-03-01","g":"2013-01-13"},{"h":"1434-04-01","g":"2013-02-11"},{"h":"1434-05-01","g":"2013-03-13"},{"h":"1434-06-01","g":"2013-04-11"},{"h":"1434-07-01","g":"2013-05-11"},{"h":"1434-08-01","g":"2013-06-10"},{"h":"1434-09-01","g":"2013-07-09"},{"h":"1434-10-01","g":"2013-08-08"},{"h":"1434-11-01","g":"2013-09-07"},{"h":"1434-12-01","g":"2013-10-06"},{"h":"1435-01-01","g":"2013-11-04"},{"h":"1435-02-01","g":"2013-12-04"},{"h":"1435-03-01","g":"2014-01-02"},{"h":"1435-04-01","g":"2014-02-01"},{"h":"1435-05-01","g":"2014-03-02"},{"h":"1435-06-01","g":"2014-04-01"},{"h":"1435-07-01","g":"2014-04-30"},{"h":"1435-08-01","g":"2014-05-30"},{"h":"1435-09-01","g":"2014-06-28"},{"h":"1435-10-01","g":"2014-07-28"},{"h":"1435-11-01","g":"2014-08-27"},{"h":"1435-12-01","g":"2014-09-25"},{"h":"1436-01-01","g":"2014-10-25"},{"h":"1436-02-01","g":"2014-11-23"},{"h":"1436-03-01","g":"2014-12-23"},{"h":"1436-04-01","g":"2015-01-21"},{"h":"1436-05-01","g":"2015-02-20"},{"h":"1436-06-01","g":"2015-03-21"},{"h":"1436-07-01","g":"2015-04-20"},{"h":"1436-08-01","g":"2015-05-19"},{"h":"1436-09-01","g":"2015-06-18"},{"h":"1436-10-01","g":"2015-07-17"},{"h":"1436-11-01","g":"2015-08-16"},{"h":"1436-12-01","g":"2015-09-14"},{"h":"1437-01-01","g":"2015-10-14"},{"h":"1437-02-01","g":"2015-11-13"},{"h":"1437-03-01","g":"2015-12-12"},{"h":"1437-04-01","g":"2016-01-11"},{"h":"1437-05-01","g":"2016-02-10"},{"h":"1437-06-01","g":"2016-03-10"},{"h":"1437-07-01","g":"2016-04-08"},{"h":"1437-08-01","g":"2016-05-08"},{"h":"1437-09-01","g":"2016-06-06"},{"h":"1437-10-01","g":"2016-07-06"},{"h":"1437-11-01","g":"2016-08-04"},{"h":"1437-12-01","g":"2016-09-02"},{"h":"1438-01-01","g":"2016-10-02"},{"h":"1438-02-01","g":"2016-11-01"},{"h":"1438-03-01","g":"2016-11-30"},{"h":"1438-04-01","g":"2016-12-30"},{"h":"1438-05-01","g":"2017-01-29"},{"h":"1438-06-01","g":"2017-02-28"},{"h":"1438-07-01","g":"2017-03-29"},{"h":"1438-08-01","g":"2017-04-27"},{"h":"1438-09-01","g":"2017-05-27"},{"h":"1438-10-01","g":"2017-06-25"},{"h":"1438-11-01","g":"2017-07-24"},{"h":"1438-12-01","g":"2017-08-23"},{"h":"1439-01-01","g":"2017-09-21"},{"h":"1439-02-01","g":"2017-10-21"},{"h":"1439-03-01","g":"2017-11-19"},{"h":"1439-04-01","g":"2017-12-19"},{"h":"1439-05-01","g":"2018-01-18"},{"h":"1439-06-01","g":"2018-02-17"},{"h":"1439-07-01","g":"2018-03-18"},{"h":"1439-08-01","g":"2018-04-17"},{"h":"1439-09-01","g":"2018-05-16"},{"h":"1439-10-01","g":"2018-06-15"},{"h":"1439-11-01","g":"2018-07-14"},{"h":"1439-12-01","g":"2018-08-12"},{"h":"1440-01-01","g":"2018-09-11"},{"h":"1440-02-01","g":"2018-10-10"},{"h":"1440-03-01","g":"2018-11-09"},{"h":"1440-04-01","g":"2018-12-08"},{"h":"1440-05-01","g":"2019-01-07"},{"h":"1440-06-01","g":"2019-02-06"},{"h":"1440-07-01","g":"2019-03-08"},{"h":"1440-08-01","g":"2019-04-06"},{"h":"1440-09-01","g":"2019-05-06"},{"h":"1440-10-01","g":"2019-06-04"},{"h":"1440-11-01","g":"2019-07-04"},{"h":"1440-12-01","g":"2019-08-02"},{"h":"1441-01-01","g":"2019-08-31"},{"h":"1441-02-01","g":"2019-09-30"},{"h":"1441-03-01","g":"2019-10-29"},{"h":"1441-04-01","g":"2019-11-28"},{"h":"1441-05-01","g":"2019-12-27"},{"h":"1441-06-01","g":"2020-01-26"},{"h":"1441-07-01","g":"2020-02-25"},{"h":"1441-08-01","g":"2020-03-25"},{"h":"1441-09-01","g":"2020-04-24"},{"h":"1441-10-01","g":"2020-05-24"},{"h":"1441-11-01","g":"2020-06-22"},{"h":"1441-12-01","g":"2020-07-22"},{"h":"1442-01-01","g":"2020-08-20"},{"h":"1442-02-01","g":"2020-09-18"},{"h":"1442-03-01","g":"2020-10-18"},{"h":"1442-04-01","g":"2020-11-16"},{"h":"1442-05-01","g":"2020-12-16"},{"h":"1442-06-01","g":"2021-01-14"},{"h":"1442-07-01","g":"2021-02-13"},{"h":"1442-08-01","g":"2021-03-14"},{"h":"1442-09-01","g":"2021-04-13"},{"h":"1442-10-01","g":"2021-05-13"},{"h":"1442-11-01","g":"2021-06-11"},{"h":"1442-12-01","g":"2021-07-11"},{"h":"1443-01-01","g":"2021-08-09"},{"h":"1443-02-01","g":"2021-09-08"},{"h":"1443-03-01","g":"2021-10-07"},{"h":"1443-04-01","g":"2021-11-06"},{"h":"1443-05-01","g":"2021-12-05"},{"h":"1443-06-01","g":"2022-01-04"},{"h":"1443-07-01","g":"2022-02-02"},{"h":"1443-08-01","g":"2022-03-04"},{"h":"1443-09-01","g":"2022-04-02"},{"h":"1443-10-01","g":"2022-05-02"},{"h":"1443-11-01","g":"2022-05-31"},{"h":"1443-12-01","g":"2022-06-30"},{"h":"1444-01-01","g":"2022-07-30"},{"h":"1444-02-01","g":"2022-08-28"},{"h":"1444-03-01","g":"2022-09-27"},{"h":"1444-04-01","g":"2022-10-26"},{"h":"1444-05-01","g":"2022-11-25"},{"h":"1444-06-01","g":"2022-12-25"},{"h":"1444-07-01","g":"2023-01-23"},{"h":"1444-08-01","g":"2023-02-21"},{"h":"1444-09-01","g":"2023-03-23"},{"h":"1444-10-01","g":"2023-04-21"},{"h":"1444-11-01","g":"2023-05-21"},{"h":"1444-12-01","g":"2023-06-19"},{"h":"1445-01-01","g":"2023-07-19"},{"h":"1445-02-01","g":"2023-08-17"},{"h":"1445-03-01","g":"2023-09-16"},{"h":"1445-04-01","g":"2023-10-16"},{"h":"1445-05-01","g":"2023-11-15"},{"h":"1445-06-01","g":"2023-12-14"},{"h":"1445-07-01","g":"2024-01-13"},{"h":"1445-08-01","g":"2024-02-11"},{"h":"1445-09-01","g":"2024-03-11"},{"h":"1445-10-01","g":"2024-04-10"},{"h":"1445-11-01","g":"2024-05-09"},{"h":"1445-12-01","g":"2024-06-07"},{"h":"1446-01-01","g":"2024-07-07"},{"h":"1446-02-01","g":"2024-08-05"},{"h":"1446-03-01","g":"2024-09-04"},{"h":"1446-04-01","g":"2024-10-04"},{"h":"1446-05-01","g":"2024-11-03"},{"h":"1446-06-01","g":"2024-12-02"},{"h":"1446-07-01","g":"2025-01-01"},{"h":"1446-08-01","g":"2025-01-31"},{"h":"1446-09-01","g":"2025-03-01"},{"h":"1446-10-01","g":"2025-03-30"},{"h":"1446-11-01","g":"2025-04-29"},{"h":"1446-12-01","g":"2025-05-28"},{"h":"1447-01-01","g":"2025-06-26"},{"h":"1447-02-01","g":"2025-07-26"},{"h":"1447-03-01","g":"2025-08-24"},{"h":"1447-04-01","g":"2025-09-23"},{"h":"1447-05-01","g":"2025-10-23"},{"h":"1447-06-01","g":"2025-11-22"},{"h":"1447-07-01","g":"2025-12-21"},{"h":"1447-08-01","g":"2026-01-20"},{"h":"1447-09-01","g":"2026-02-18"},{"h":"1447-10-01","g":"2026-03-20"},{"h":"1447-11-01","g":"2026-04-18"},{"h":"1447-12-01","g":"2026-05-18"},{"h":"1448-01-01","g":"2026-06-16"},{"h":"1448-02-01","g":"2026-07-15"},{"h":"1448-03-01","g":"2026-08-14"},{"h":"1448-04-01","g":"2026-09-12"},{"h":"1448-05-01","g":"2026-10-12"},{"h":"1448-06-01","g":"2026-11-11"},{"h":"1448-07-01","g":"2026-12-10"},{"h":"1448-08-01","g":"2027-01-09"},{"h":"1448-09-01","g":"2027-02-08"},{"h":"1448-10-01","g":"2027-03-09"},{"h":"1448-11-01","g":"2027-04-08"},{"h":"1448-12-01","g":"2027-05-07"},{"h":"1449-01-01","g":"2027-06-06"},{"h":"1449-02-01","g":"2027-07-05"},{"h":"1449-03-01","g":"2027-08-03"},{"h":"1449-04-01","g":"2027-09-02"},{"h":"1449-05-01","g":"2027-10-01"},{"h":"1449-06-01","g":"2027-10-31"},{"h":"1449-07-01","g":"2027-11-29"},{"h":"1449-08-01","g":"2027-12-29"},{"h":"1449-09-01","g":"2028-01-28"},{"h":"1449-10-01","g":"2028-02-26"},{"h":"1449-11-01","g":"2028-03-27"},{"h":"1449-12-01","g":"2028-04-26"},{"h":"1450-01-01","g":"2028-05-25"},{"h":"1450-02-01","g":"2028-06-24"},{"h":"1450-03-01","g":"2028-07-23"},{"h":"1450-04-01","g":"2028-08-22"},{"h":"1450-05-01","g":"2028-09-20"},{"h":"1450-06-01","g":"2028-10-19"},{"h":"1450-07-01","g":"2028-11-18"},{"h":"1450-08-01","g":"2028-12-17"},{"h":"1450-09-01","g":"2029-01-16"},{"h":"1450-10-01","g":"2029-02-14"},{"h":"1450-11-01","g":"2029-03-16"},{"h":"1450-12-01","g":"2029-04-15"}];
		data = fillGaps(data);
		index(data);

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


	// ============================= FROM HIJRI-CONVERTER.JS ========================

	function fillGaps(arr) {
		var result = [];

		for (var i = 0; i < arr.length-1; i++) {

			var thisItem = arr[i],
				nextItem = arr[i+1],
				thisG = new Date(thisItem.g),
				nextG = new Date(nextItem.g),
				h = thisItem.h,
				g = thisItem.g;

			while (nextG > thisG) {
				var obj = {"h":h,"g":g};
				result.push(obj);
				h = nextHijriDay(h);
				g = stringFromDate(tomorrow(thisG));
				thisG = tomorrow(thisG);
			}

		};

		var lastItem = arr[arr.length-1];
		result.push(lastItem);

		return result;
	}

	function stringFromDate(dateObj) {
		var str = [ dateObj.getFullYear(), dateObj.getMonth()+1, dateObj.getDate() ].join('-');
		return addZeros(str);
	}

	function tomorrow(dateObj) {
		return new Date(dateObj.getTime() + 86400000);
	}

	// str = '1434-6-7'  =>  '1434-06-06'
	function addZeros(str) {
		var arr = str.split('-');
		arr[1] = arr[1].length < 2 ? '0'+arr[1] : arr[1];
		arr[2] = arr[2].length < 2 ? '0'+arr[2] : arr[2];
		return arr.join('-');
	}

	function nextHijriDay(str) {
		var arr = str.split('-');
		arr[2] = +arr[2]+1;
		return addZeros( arr.join('-') );
	}

	function index(arr) {

		arr['g'] = {};
		arr['h'] = {};

		for (var i = 0; i < arr.length; i++) {
			var obj = arr[i];
			arr['g'][obj['h']] = obj['g'];
			arr['h'][obj['g']] = obj['h'];
		};

		return arr;
	}

	function G() {

		var h, options = {},
			args = Array.prototype.slice.call(arguments, 0);

		// split off the options hash if it is provided
		var lastArgument = args[args.length-1];
		if (typeof lastArgument == typeof {} && !(lastArgument instanceof Date || lastArgument instanceof Array)) {
			options = lastArgument;
			args.pop();
		}

		// G()
		if (args.length == 0) { 
			var g = new Date(),
				h = H(g, {type:'array'});
		} else

		// G('1434-5-25') or G('1434-05-25')
		if (args.length == 1 && typeof args[0] == 'string') { 
			var str = args[0].split('-'),
				  y = +str[0], m = +str[1], d = +str[2];
				  h = [y, m, d];
		} else

		// G(1365195600000)
		if (args.length == 1 && typeof args[0] == 'number') { 
			var g = new Date(args[0]),
				h = H(g, {type:'array'});
		} else

		// G([1434,5,25]) or G(['1434',5,'25'])
		if (args.length == 1 && args[0] instanceof Array) {
			var arr = args[0],
				  y = +arr[0], m = +arr[1], d = +arr[2];
				  h = [y, m, d];
		} else
		
		// G(1434,5,25) or G('1434','5',25)
		if (args.length == 3) { 
			var y = +args[0], m = +args[1], d = +args[2];
			h = [y, m, d];
		}

		var h_str = addZeros( [+h[0], +h[1], +h[2]].join('-') ),
			g_str = data['g'][h_str],
			g_arr = g_str.split('-').map(function(i){return +i}),
			g_obj = {y:+g_arr[0], m:+g_arr[1], d:+g_arr[2]},
			g_json = JSON.stringify(g_obj),
			g_date = new Date(+g_arr[0], +g_arr[1]-1, +g_arr[2]);

		switch (options.type) {
			case 'array': 	return g_arr; break;
			case 'object': 	return g_obj; break;
			case 'json': 	return g_json; break;
			case 'date': 	return g_date; break;
			default: 		return g_str; break;
		}

	}

	function H() {

		var g, options = {},
			args = Array.prototype.slice.call(arguments, 0);

		// split off the options hash if it is provided
		var lastArgument = args[args.length-1];
		if (typeof lastArgument == typeof {} && !(lastArgument instanceof Date || lastArgument instanceof Array)) {
			options = lastArgument;
			args.pop();
		}
		
		// H()
		if (args.length == 0) { 
			g = new Date() 
		} else

		// H('2013-4-6') or H('2013-04-06')
		if (args.length == 1 && typeof args[0] == 'string') { 
			var str = args[0].split('-'),
				  y = +str[0], m = +str[1]-1, d = +str[2];
			g = new Date(y, m, d);
		} else

		// H(1365195600000)
		if (args.length == 1 && typeof args[0] == 'number') {
			g = new Date(args[0])
		} else
		
		// H(new Date(2013,3,6))
		if (args.length == 1 && args[0] instanceof Date) { 
			g = args[0]
		} else

		// H([2013,4,6]) or H(['2013',4,'06'])
		if (args.length == 1 && args[0] instanceof Array) {
			var arr = args[0],
				  y = +arr[0], m = +arr[1]-1, d = +arr[2];
			g = new Date(y, m, d);
		} else
		
		// H(2013,4,6) or H('2013','04','6')
		if (args.length == 3) { 
			var y = +args[0], m = +args[1]-1, d = +args[2];
			g = new Date(y, m, d);
		}

		var g_str = addZeros( [g.getFullYear(), g.getMonth()+1, g.getDate()].join('-') ),
			h_str = data['h'][g_str],
			h_arr = h_str.split('-').map(function(i){return +i}),
			h_obj = {y:+h_arr[0], m:+h_arr[1], d:+h_arr[2]},
			h_json = JSON.stringify(h_obj);

		switch (options.type) {
			case 'array': 	return h_arr; break;
			case 'object': 	return h_obj; break;
			case 'json': 	return h_json; break;
			default: 		return h_str; break;
		}

	}

	window.G = G,
	window.H = H,
	window.hijriData = data,
	window.Hijri = Hijri;

})(window);