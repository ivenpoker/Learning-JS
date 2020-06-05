
// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks if a given number falls within a certain range.						     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 05, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const inRange = (lower, val, upper) => lower <= val && val <= upper;

(function () {

	console.log(inRange(3, 2, 5));
	console.log(inRange(3, 4));
	console.log(inRange(2, 3, 5));
	console.log(inRange(3, 2));

})();