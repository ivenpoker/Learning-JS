// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates an N-dimensional array with given value.								 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 21, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const createNDimension = (nVal) => Array(nVal).fill(0);

(function () {

	console.log("Array of 5:", createNDimension(5));
	console.log("Array of 2:", createNDimension(2));
	console.log("Array of 10:", createNDimension(10));

})();