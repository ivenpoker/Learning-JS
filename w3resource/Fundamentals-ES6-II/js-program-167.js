// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Calculates how many numbers in the given array are less or equal to the given   #
// #					 value using the percentile formula.											 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 22, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const percentile = (arr, val) =>
	(100 * arr.reduce((acc, v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0), 0)) / arr.length;

(function () {

	console.log(percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6))

})();