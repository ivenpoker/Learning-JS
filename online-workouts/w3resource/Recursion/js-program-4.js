// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the sum of an array of integers.						                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const computeSumOfArray = (arr = []) =>
	arr.length === 1 ? arr[0] : arr[0] + computeSumOfArray(arr.slice(1));

(function () {

	console.log(computeSumOfArray([1, 2, 3, 4, 5, 6]));

})();