// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Deep flattens an array.													 	 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 05, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

const flattenArray = (arr = []) =>
	arr.reduce((acc, val) => Array.isArray(val) ? [...acc, ...flattenArray(val)] : [...acc, val], []);

(function () {

	console.log(flattenArray([1, [2], [[3], 4], 5, [[[4]]]]));

})();