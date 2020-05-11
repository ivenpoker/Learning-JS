// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets a boolean if the passed value is an object or not.		      			 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 11, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isObject = (obj) => obj !== null && typeof obj === "object";

(function () {

	console.log(isObject([1, 2, 3, 4]));
	console.log(isObject([]));
	console.log(isObject(["Hello!"]));
	console.log(isObject({a: 1}));
	console.log(isObject({}));
	console.log(isObject(true));
	console.log(isObject(null));
	console.log(isObject(undefined));

})();