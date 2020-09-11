// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the nth element of a given array.      								     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: April 04, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const getNthElem = (arr, nth = 0) =>
	(nth >= arr.length) ? null : (nth >= 0 ? arr[nth] : [...arr].reverse()[Math.abs(nth)]);

(function () {

	const demoArr = [8, 32, "28", {a: 1, b: 2}, true, 4.3, () => console.log('function')];

	console.log(getNthElem(demoArr, 5));
	console.log(getNthElem(demoArr, demoArr.length));
	console.log(getNthElem(demoArr, 6));

	console.log(getNthElem(['a', 'b', 'c'], 1));
	console.log(getNthElem(['a', 'b', 'b'], -2));

})();