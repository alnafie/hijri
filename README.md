Umm Alqura Hijri Calendar Converter (1420-1450 A.H.)
====================================================

Usage:
-------
Include it in your page:
`<script src="hijri.js"></script>`

Then in your own scripts:
```javascript
H('2013-4-6')			//=> '1434-05-25'
H('2013-04-06')			//=> '1434-05-25'
H(2013,4,6)				//=> '1434-05-25'
H([2013,4,6])			//=> '1434-05-25'
H(['2013','4','6'])		//=> '1434-05-25'
H(1365195600000)		//=> '1434-05-25'
H(new Date(2013,3,6))	//=> '1434-05-25'
H()						//=>  equivalent to H(new Date())



H('2013-04-06', {type:'string'}) 	//=> '1434-05-25'	// DEFAULT
H('2013-04-06', {type:'array'}) 	//=> [1434, 5, 25]
H('2013-04-06', {type:'object'}) 	//=> {y:1434, m:5, d:25}
H('2013-04-06', {type:'json'}) 		//=> {"y":"1434", "m":"5", "d":"25"}

// requires Hijri Class --Under Development
H('2013-04-06', {type:'date'}) 		//=> new Hijri(1434,4,25)

===========================================================================

G('1434-5-25')			//=> '2013-04-06'
G('1434-05-25')			//=> '2013-04-06'
G(1434,5,25)			//=> '2013-04-06'
G([1434,5,25])			//=> '2013-04-06'
G(['1434','5','25'])	//=> '2013-04-06'
G(1365195600000)		//=> '2013-04-06'
G()						//=>  equivalent to G((new Date()).getTime())

// requires Hijri Class --Under Development
G(new Hijri(1434,4,25))	//=> '2013-04-06'



G('1434-05-25', {type:'string'}) 	//=> '2013-04-06'	// DEFAULT
G('1434-05-25', {type:'array'}) 	//=> [2013, 4, 6]
G('1434-05-25', {type:'object'}) 	//=> {y:2013, m:4, d:6}
G('1434-05-25', {type:'json'}) 		//=> '{"y":2013, "m":4, "d":6}'
G('1434-05-25', {type:'date'}) 		//=> new Date(2013,3,6)
```

In development:
----------------
Hijri() Class that mirrors javascript's native Date() Class as specified in the ECMAScript Specification (http://www.ecma-international.org/ecma-262/5.1/#sec-15.9).
