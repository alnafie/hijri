(function(window) {

var data = [{"h":"1420-1-1","g":"1999-4-17"},{"h":"1420-2-1","g":"1999-5-16"},{"h":"1420-3-1","g":"1999-6-15"},{"h":"1420-4-1","g":"1999-7-14"},{"h":"1420-5-1","g":"1999-8-12"},{"h":"1420-6-1","g":"1999-9-11"},{"h":"1420-7-1","g":"1999-10-10"},{"h":"1420-8-1","g":"1999-11-9"},{"h":"1420-9-1","g":"1999-12-9"},{"h":"1420-10-1","g":"2000-1-8"},{"h":"1420-11-1","g":"2000-2-7"},{"h":"1420-12-1","g":"2000-3-7"},{"h":"1421-1-1","g":"2000-4-6"},{"h":"1421-2-1","g":"2000-5-5"},{"h":"1421-3-1","g":"2000-6-3"},{"h":"1421-4-1","g":"2000-7-3"},{"h":"1421-5-1","g":"2000-8-1"},{"h":"1421-6-1","g":"2000-8-30"},{"h":"1421-7-1","g":"2000-9-28"},{"h":"1421-8-1","g":"2000-10-28"},{"h":"1421-9-1","g":"2000-11-27"},{"h":"1421-10-1","g":"2000-12-27"},{"h":"1421-11-1","g":"2001-1-26"},{"h":"1421-12-1","g":"2001-2-24"},{"h":"1422-1-1","g":"2001-3-26"},{"h":"1422-2-1","g":"2001-4-25"},{"h":"1422-3-1","g":"2001-5-24"},{"h":"1422-4-1","g":"2001-6-22"},{"h":"1422-5-1","g":"2001-7-22"},{"h":"1422-6-1","g":"2001-8-20"},{"h":"1422-7-1","g":"2001-9-18"},{"h":"1422-8-1","g":"2001-10-17"},{"h":"1422-9-1","g":"2001-11-16"},{"h":"1422-10-1","g":"2001-12-16"},{"h":"1422-11-1","g":"2002-1-15"},{"h":"1422-12-1","g":"2002-2-13"},{"h":"1423-1-1","g":"2002-3-15"},{"h":"1423-2-1","g":"2002-4-14"},{"h":"1423-3-1","g":"2002-5-13"},{"h":"1423-4-1","g":"2002-6-12"},{"h":"1423-5-1","g":"2002-7-11"},{"h":"1423-6-1","g":"2002-8-10"},{"h":"1423-7-1","g":"2002-9-8"},{"h":"1423-8-1","g":"2002-10-7"},{"h":"1423-9-1","g":"2002-11-6"},{"h":"1423-10-1","g":"2002-12-5"},{"h":"1423-11-1","g":"2003-1-4"},{"h":"1423-12-1","g":"2003-2-2"},{"h":"1424-1-1","g":"2003-3-4"},{"h":"1424-2-1","g":"2003-4-3"},{"h":"1424-3-1","g":"2003-5-2"},{"h":"1424-4-1","g":"2003-6-1"},{"h":"1424-5-1","g":"2003-7-1"},{"h":"1424-6-1","g":"2003-7-30"},{"h":"1424-7-1","g":"2003-8-29"},{"h":"1424-8-1","g":"2003-9-27"},{"h":"1424-9-1","g":"2003-10-26"},{"h":"1424-10-1","g":"2003-11-25"},{"h":"1424-11-1","g":"2003-12-24"},{"h":"1424-12-1","g":"2004-1-23"},{"h":"1425-1-1","g":"2004-2-21"},{"h":"1425-2-1","g":"2004-3-22"},{"h":"1425-3-1","g":"2004-4-20"},{"h":"1425-4-1","g":"2004-5-20"},{"h":"1425-5-1","g":"2004-6-19"},{"h":"1425-6-1","g":"2004-7-18"},{"h":"1425-7-1","g":"2004-8-17"},{"h":"1425-8-1","g":"2004-9-15"},{"h":"1425-9-1","g":"2004-10-15"},{"h":"1425-10-1","g":"2004-11-14"},{"h":"1425-11-1","g":"2004-12-13"},{"h":"1425-12-1","g":"2005-1-12"},{"h":"1426-1-1","g":"2005-2-10"},{"h":"1426-2-1","g":"2005-3-11"},{"h":"1426-3-1","g":"2005-4-10"},{"h":"1426-4-1","g":"2005-5-9"},{"h":"1426-5-1","g":"2005-6-8"},{"h":"1426-6-1","g":"2005-7-7"},{"h":"1426-7-1","g":"2005-8-6"},{"h":"1426-8-1","g":"2005-9-5"},{"h":"1426-9-1","g":"2005-10-4"},{"h":"1426-10-1","g":"2005-11-3"},{"h":"1426-11-1","g":"2005-12-3"},{"h":"1426-12-1","g":"2006-1-1"},{"h":"1427-1-1","g":"2006-1-31"},{"h":"1427-2-1","g":"2006-3-1"},{"h":"1427-3-1","g":"2006-3-30"},{"h":"1427-4-1","g":"2006-4-29"},{"h":"1427-5-1","g":"2006-5-28"},{"h":"1427-6-1","g":"2006-6-27"},{"h":"1427-7-1","g":"2006-7-26"},{"h":"1427-8-1","g":"2006-8-25"},{"h":"1427-9-1","g":"2006-9-24"},{"h":"1427-10-1","g":"2006-10-23"},{"h":"1427-11-1","g":"2006-11-22"},{"h":"1427-12-1","g":"2006-12-22"},{"h":"1428-1-1","g":"2007-1-20"},{"h":"1428-2-1","g":"2007-2-19"},{"h":"1428-3-1","g":"2007-3-20"},{"h":"1428-4-1","g":"2007-4-18"},{"h":"1428-5-1","g":"2007-5-18"},{"h":"1428-6-1","g":"2007-6-16"},{"h":"1428-7-1","g":"2007-7-15"},{"h":"1428-8-1","g":"2007-8-14"},{"h":"1428-9-1","g":"2007-9-13"},{"h":"1428-10-1","g":"2007-10-13"},{"h":"1428-11-1","g":"2007-11-11"},{"h":"1428-12-1","g":"2007-12-11"},{"h":"1429-1-1","g":"2008-1-10"},{"h":"1429-2-1","g":"2008-2-8"},{"h":"1429-3-1","g":"2008-3-9"},{"h":"1429-4-1","g":"2008-4-7"},{"h":"1429-5-1","g":"2008-5-6"},{"h":"1429-6-1","g":"2008-6-5"},{"h":"1429-7-1","g":"2008-7-4"},{"h":"1429-8-1","g":"2008-8-2"},{"h":"1429-9-1","g":"2008-9-1"},{"h":"1429-10-1","g":"2008-10-1"},{"h":"1429-11-1","g":"2008-10-30"},{"h":"1429-12-1","g":"2008-11-29"},{"h":"1430-1-1","g":"2008-12-29"},{"h":"1430-2-1","g":"2009-1-27"},{"h":"1430-3-1","g":"2009-2-26"},{"h":"1430-4-1","g":"2009-3-28"},{"h":"1430-5-1","g":"2009-4-26"},{"h":"1430-6-1","g":"2009-5-25"},{"h":"1430-7-1","g":"2009-6-24"},{"h":"1430-8-1","g":"2009-7-23"},{"h":"1430-9-1","g":"2009-8-22"},{"h":"1430-10-1","g":"2009-9-20"},{"h":"1430-11-1","g":"2009-10-20"},{"h":"1430-12-1","g":"2009-11-18"},{"h":"1431-1-1","g":"2009-12-18"},{"h":"1431-2-1","g":"2010-1-16"},{"h":"1431-3-1","g":"2010-2-15"},{"h":"1431-4-1","g":"2010-3-17"},{"h":"1431-5-1","g":"2010-4-15"},{"h":"1431-6-1","g":"2010-5-15"},{"h":"1431-7-1","g":"2010-6-13"},{"h":"1431-8-1","g":"2010-7-13"},{"h":"1431-9-1","g":"2010-8-11"},{"h":"1431-10-1","g":"2010-9-10"},{"h":"1431-11-1","g":"2010-10-9"},{"h":"1431-12-1","g":"2010-11-7"},{"h":"1432-1-1","g":"2010-12-7"},{"h":"1432-2-1","g":"2011-1-5"},{"h":"1432-3-1","g":"2011-2-4"},{"h":"1432-4-1","g":"2011-3-6"},{"h":"1432-5-1","g":"2011-4-5"},{"h":"1432-6-1","g":"2011-5-4"},{"h":"1432-7-1","g":"2011-6-3"},{"h":"1432-8-1","g":"2011-7-2"},{"h":"1432-9-1","g":"2011-8-1"},{"h":"1432-10-1","g":"2011-8-30"},{"h":"1432-11-1","g":"2011-9-29"},{"h":"1432-12-1","g":"2011-10-28"},{"h":"1433-1-1","g":"2011-11-26"},{"h":"1433-2-1","g":"2011-12-26"},{"h":"1433-3-1","g":"2012-1-24"},{"h":"1433-4-1","g":"2012-2-23"},{"h":"1433-5-1","g":"2012-3-24"},{"h":"1433-6-1","g":"2012-4-22"},{"h":"1433-7-1","g":"2012-5-22"},{"h":"1433-8-1","g":"2012-6-21"},{"h":"1433-9-1","g":"2012-7-20"},{"h":"1433-10-1","g":"2012-8-19"},{"h":"1433-11-1","g":"2012-9-17"},{"h":"1433-12-1","g":"2012-10-17"},{"h":"1434-1-1","g":"2012-11-15"},{"h":"1434-2-1","g":"2012-12-14"},{"h":"1434-3-1","g":"2013-1-13"},{"h":"1434-4-1","g":"2013-2-11"},{"h":"1434-5-1","g":"2013-3-13"},{"h":"1434-6-1","g":"2013-4-11"},{"h":"1434-7-1","g":"2013-5-11"},{"h":"1434-8-1","g":"2013-6-10"},{"h":"1434-9-1","g":"2013-7-9"},{"h":"1434-10-1","g":"2013-8-8"},{"h":"1434-11-1","g":"2013-9-7"},{"h":"1434-12-1","g":"2013-10-6"},{"h":"1435-1-1","g":"2013-11-4"},{"h":"1435-2-1","g":"2013-12-4"},{"h":"1435-3-1","g":"2014-1-2"},{"h":"1435-4-1","g":"2014-2-1"},{"h":"1435-5-1","g":"2014-3-2"},{"h":"1435-6-1","g":"2014-4-1"},{"h":"1435-7-1","g":"2014-4-30"},{"h":"1435-8-1","g":"2014-5-30"},{"h":"1435-9-1","g":"2014-6-28"},{"h":"1435-10-1","g":"2014-7-28"},{"h":"1435-11-1","g":"2014-8-27"},{"h":"1435-12-1","g":"2014-9-25"},{"h":"1436-1-1","g":"2014-10-25"},{"h":"1436-2-1","g":"2014-11-23"},{"h":"1436-3-1","g":"2014-12-23"},{"h":"1436-4-1","g":"2015-1-21"},{"h":"1436-5-1","g":"2015-2-20"},{"h":"1436-6-1","g":"2015-3-21"},{"h":"1436-7-1","g":"2015-4-20"},{"h":"1436-8-1","g":"2015-5-19"},{"h":"1436-9-1","g":"2015-6-18"},{"h":"1436-10-1","g":"2015-7-17"},{"h":"1436-11-1","g":"2015-8-16"},{"h":"1436-12-1","g":"2015-9-14"},{"h":"1437-1-1","g":"2015-10-14"},{"h":"1437-2-1","g":"2015-11-13"},{"h":"1437-3-1","g":"2015-12-12"},{"h":"1437-4-1","g":"2016-1-11"},{"h":"1437-5-1","g":"2016-2-10"},{"h":"1437-6-1","g":"2016-3-10"},{"h":"1437-7-1","g":"2016-4-8"},{"h":"1437-8-1","g":"2016-5-8"},{"h":"1437-9-1","g":"2016-6-6"},{"h":"1437-10-1","g":"2016-7-6"},{"h":"1437-11-1","g":"2016-8-4"},{"h":"1437-12-1","g":"2016-9-2"},{"h":"1438-1-1","g":"2016-10-2"},{"h":"1438-2-1","g":"2016-11-1"},{"h":"1438-3-1","g":"2016-11-30"},{"h":"1438-4-1","g":"2016-12-30"},{"h":"1438-5-1","g":"2017-1-29"},{"h":"1438-6-1","g":"2017-2-28"},{"h":"1438-7-1","g":"2017-3-29"},{"h":"1438-8-1","g":"2017-4-27"},{"h":"1438-9-1","g":"2017-5-27"},{"h":"1438-10-1","g":"2017-6-25"},{"h":"1438-11-1","g":"2017-7-24"},{"h":"1438-12-1","g":"2017-8-23"},{"h":"1439-1-1","g":"2017-9-21"},{"h":"1439-2-1","g":"2017-10-21"},{"h":"1439-3-1","g":"2017-11-19"},{"h":"1439-4-1","g":"2017-12-19"},{"h":"1439-5-1","g":"2018-1-18"},{"h":"1439-6-1","g":"2018-2-17"},{"h":"1439-7-1","g":"2018-3-18"},{"h":"1439-8-1","g":"2018-4-17"},{"h":"1439-9-1","g":"2018-5-16"},{"h":"1439-10-1","g":"2018-6-15"},{"h":"1439-11-1","g":"2018-7-14"},{"h":"1439-12-1","g":"2018-8-12"},{"h":"1440-1-1","g":"2018-9-11"},{"h":"1440-2-1","g":"2018-10-10"},{"h":"1440-3-1","g":"2018-11-9"},{"h":"1440-4-1","g":"2018-12-8"},{"h":"1440-5-1","g":"2019-1-7"},{"h":"1440-6-1","g":"2019-2-6"},{"h":"1440-7-1","g":"2019-3-8"},{"h":"1440-8-1","g":"2019-4-6"},{"h":"1440-9-1","g":"2019-5-6"},{"h":"1440-10-1","g":"2019-6-4"},{"h":"1440-11-1","g":"2019-7-4"},{"h":"1440-12-1","g":"2019-8-2"},{"h":"1441-1-1","g":"2019-8-31"},{"h":"1441-2-1","g":"2019-9-30"},{"h":"1441-3-1","g":"2019-10-29"},{"h":"1441-4-1","g":"2019-11-28"},{"h":"1441-5-1","g":"2019-12-27"},{"h":"1441-6-1","g":"2020-1-26"},{"h":"1441-7-1","g":"2020-2-25"},{"h":"1441-8-1","g":"2020-3-25"},{"h":"1441-9-1","g":"2020-4-24"},{"h":"1441-10-1","g":"2020-5-24"},{"h":"1441-11-1","g":"2020-6-22"},{"h":"1441-12-1","g":"2020-7-22"},{"h":"1442-1-1","g":"2020-8-20"},{"h":"1442-2-1","g":"2020-9-18"},{"h":"1442-3-1","g":"2020-10-18"},{"h":"1442-4-1","g":"2020-11-16"},{"h":"1442-5-1","g":"2020-12-16"},{"h":"1442-6-1","g":"2021-1-14"},{"h":"1442-7-1","g":"2021-2-13"},{"h":"1442-8-1","g":"2021-3-14"},{"h":"1442-9-1","g":"2021-4-13"},{"h":"1442-10-1","g":"2021-5-13"},{"h":"1442-11-1","g":"2021-6-11"},{"h":"1442-12-1","g":"2021-7-11"},{"h":"1443-1-1","g":"2021-8-9"},{"h":"1443-2-1","g":"2021-9-8"},{"h":"1443-3-1","g":"2021-10-7"},{"h":"1443-4-1","g":"2021-11-6"},{"h":"1443-5-1","g":"2021-12-5"},{"h":"1443-6-1","g":"2022-1-4"},{"h":"1443-7-1","g":"2022-2-2"},{"h":"1443-8-1","g":"2022-3-4"},{"h":"1443-9-1","g":"2022-4-2"},{"h":"1443-10-1","g":"2022-5-2"},{"h":"1443-11-1","g":"2022-5-31"},{"h":"1443-12-1","g":"2022-6-30"},{"h":"1444-1-1","g":"2022-7-30"},{"h":"1444-2-1","g":"2022-8-28"},{"h":"1444-3-1","g":"2022-9-27"},{"h":"1444-4-1","g":"2022-10-26"},{"h":"1444-5-1","g":"2022-11-25"},{"h":"1444-6-1","g":"2022-12-25"},{"h":"1444-7-1","g":"2023-1-23"},{"h":"1444-8-1","g":"2023-2-21"},{"h":"1444-9-1","g":"2023-3-23"},{"h":"1444-10-1","g":"2023-4-21"},{"h":"1444-11-1","g":"2023-5-21"},{"h":"1444-12-1","g":"2023-6-19"},{"h":"1445-1-1","g":"2023-7-19"},{"h":"1445-2-1","g":"2023-8-17"},{"h":"1445-3-1","g":"2023-9-16"},{"h":"1445-4-1","g":"2023-10-16"},{"h":"1445-5-1","g":"2023-11-15"},{"h":"1445-6-1","g":"2023-12-14"},{"h":"1445-7-1","g":"2024-1-13"},{"h":"1445-8-1","g":"2024-2-11"},{"h":"1445-9-1","g":"2024-3-11"},{"h":"1445-10-1","g":"2024-4-10"},{"h":"1445-11-1","g":"2024-5-9"},{"h":"1445-12-1","g":"2024-6-7"},{"h":"1446-1-1","g":"2024-7-7"},{"h":"1446-2-1","g":"2024-8-5"},{"h":"1446-3-1","g":"2024-9-4"},{"h":"1446-4-1","g":"2024-10-4"},{"h":"1446-5-1","g":"2024-11-3"},{"h":"1446-6-1","g":"2024-12-2"},{"h":"1446-7-1","g":"2025-1-1"},{"h":"1446-8-1","g":"2025-1-31"},{"h":"1446-9-1","g":"2025-3-1"},{"h":"1446-10-1","g":"2025-3-30"},{"h":"1446-11-1","g":"2025-4-29"},{"h":"1446-12-1","g":"2025-5-28"},{"h":"1447-1-1","g":"2025-6-26"},{"h":"1447-2-1","g":"2025-7-26"},{"h":"1447-3-1","g":"2025-8-24"},{"h":"1447-4-1","g":"2025-9-23"},{"h":"1447-5-1","g":"2025-10-23"},{"h":"1447-6-1","g":"2025-11-22"},{"h":"1447-7-1","g":"2025-12-21"},{"h":"1447-8-1","g":"2026-1-20"},{"h":"1447-9-1","g":"2026-2-18"},{"h":"1447-10-1","g":"2026-3-20"},{"h":"1447-11-1","g":"2026-4-18"},{"h":"1447-12-1","g":"2026-5-18"},{"h":"1448-1-1","g":"2026-6-16"},{"h":"1448-2-1","g":"2026-7-15"},{"h":"1448-3-1","g":"2026-8-14"},{"h":"1448-4-1","g":"2026-9-12"},{"h":"1448-5-1","g":"2026-10-12"},{"h":"1448-6-1","g":"2026-11-11"},{"h":"1448-7-1","g":"2026-12-10"},{"h":"1448-8-1","g":"2027-1-9"},{"h":"1448-9-1","g":"2027-2-8"},{"h":"1448-10-1","g":"2027-3-9"},{"h":"1448-11-1","g":"2027-4-8"},{"h":"1448-12-1","g":"2027-5-7"},{"h":"1449-1-1","g":"2027-6-6"},{"h":"1449-2-1","g":"2027-7-5"},{"h":"1449-3-1","g":"2027-8-3"},{"h":"1449-4-1","g":"2027-9-2"},{"h":"1449-5-1","g":"2027-10-1"},{"h":"1449-6-1","g":"2027-10-31"},{"h":"1449-7-1","g":"2027-11-29"},{"h":"1449-8-1","g":"2027-12-29"},{"h":"1449-9-1","g":"2028-1-28"},{"h":"1449-10-1","g":"2028-2-26"},{"h":"1449-11-1","g":"2028-3-27"},{"h":"1449-12-1","g":"2028-4-26"},{"h":"1450-1-1","g":"2028-5-25"},{"h":"1450-2-1","g":"2028-6-24"},{"h":"1450-3-1","g":"2028-7-23"},{"h":"1450-4-1","g":"2028-8-22"},{"h":"1450-5-1","g":"2028-9-20"},{"h":"1450-6-1","g":"2028-10-19"},{"h":"1450-7-1","g":"2028-11-18"},{"h":"1450-8-1","g":"2028-12-17"},{"h":"1450-9-1","g":"2029-1-16"},{"h":"1450-10-1","g":"2029-2-14"},{"h":"1450-11-1","g":"2029-3-16"},{"h":"1450-12-1","g":"2029-4-15"}];

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
	return [ dateObj.getFullYear(), dateObj.getMonth()+1, dateObj.getDate() ].join('-');
}

function tomorrow(d) {
	var year = d.getFullYear(),
		month = d.getMonth(),
		day = d.getDate(),
		tom = new Date(year, month, day+1);

	return tom;
}

function nextHijriDay(str) {
	var arr = str.split('-');
	arr[2] = +arr[2]+1;
	return arr.join('-');
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

// G('1420-1-16')
function G(h) {
	return data['g'][h];
}

// H('2013-4-5')
function H(g) {
	return data['h'][g];
}

data = fillGaps(data);
index(data);

window.G = G,
window.H = H;

})(window);