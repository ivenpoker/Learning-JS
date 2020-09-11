// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Get a list of elements that exists in both arrays. 							 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 21, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const intersection = (a, b) => {
	const s = new Set(b);
	return a.filter((x) => s.has(x));
}

const findElementsInBoth = (arrA, arrB) => arrA.filter((val) => arrB.includes(val));

(function () {

	console.log("FindElementsInBoth:", findElementsInBoth([1, 2, 3],[4, 3, 2]));
	console.log("Intersection:", intersection([1, 2, 3], [4, 3, 2]));

})();