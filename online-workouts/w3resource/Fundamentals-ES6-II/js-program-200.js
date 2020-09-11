// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Returns true if a value is an empty object, collection, map or set, has no      #
// #					 enumerable properties or is any type that is considered a collection.			 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 11, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isEmpty = (arg) => arg === null || !(Object.keys(arg) || arg).length;

(function () {

	console.log(isEmpty(new Map()));
	console.log(isEmpty(new Set()));
	console.log(isEmpty([]));
	console.log(isEmpty({}));
	console.log(isEmpty(""));
	console.log(isEmpty([1, 2]));
	console.log(isEmpty({a: 1, b: 2}));
	console.log(isEmpty("text"));
	console.log(isEmpty(123));
	console.log(isEmpty(true))

})();