// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the first key that satisfies the provided testing function, otherwise  	 #
// #					 returns undefined.														   		 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 26, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const findFirstKey = (obj = {}, func=f=>f) =>
	Object.keys(obj).reduce((acc, key) => func(key) ? [...acc, key] : acc, [])[0];

(function () {

	let data = {
		barney: {age: 36, active: true},
		fred: {age: 40, active: false},
		pebbles: {age: 1, active: true}
	};

	console.log(findFirstKey(data, (key) => data[key]["active"]));

})();