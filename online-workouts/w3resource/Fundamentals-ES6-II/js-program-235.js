// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the last key that satisfies the provided testing function, otherwise 		 #
// #					 returns undefined.														   		 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 26, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const findLastKey = (obj = {}, func=f=>f) =>
	Object.keys(obj).reduce((acc, key) => func(key) ? [...acc, key] : acc, []).reverse()[0];

(function () {

	let data = {
		barney: {age: 36, active: true},
		fred: {age: 40, active: false},
		pebbles: {age: 1, active: true}
	};

	console.log(findLastKey(data, (key) => data[key]["active"]));			// pebbles
	console.log(findLastKey(data, (key) => data[key]["invalid"])); 		// undefined


})();