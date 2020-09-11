// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the minimum value of an array, after mapping each element to a value using #
// #				     the provided function.															 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 06, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const findMinimum = (arr = [], func=f=>f) =>
	Array.isArray(arr) && arr.map(func).reduce((acc, val) => val < acc ? val : acc, Number.MAX_VALUE);

const minBy = (arr, fn) => Math.min(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));

(function () {

	// 1 is the smallest after applying function
	console.log(findMinimum([-5, 3, 5, -10, 1, 3], (val) => Math.abs(val)));

	// -10 is the smallest after applying function
	console.log(findMinimum([10, 2, 2, 4, 5, 8], (val) => - Number(val)));

	// ==========[ YET ANOTHER TEST FROM DIFFERENT FUNCTION CALL ]=============

	console.log(minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n));
	console.log(minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'));

})();