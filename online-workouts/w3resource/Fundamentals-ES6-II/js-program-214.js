
// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Initializes an array containing the numbers in the specified range (in          #
// #					 reverse) where start and end are inclusive with their common difference step.   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 05, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const initializeArray = (start = 0, end = 0, step = 1) =>
	Array(Math.abs((end+1) - start)).fill(0).map((currVal, idx) => {
		if (idx === 0) {
			return start;
		}
		let tmp = start + step;
		start = tmp
		return tmp;
	}).filter((val) => val <= end).reverse();

(function () {

	console.log(initializeArray(0, 5));
	console.log(initializeArray(3, 7));
	console.log(initializeArray(0, 9, 2));
	console.log(initializeArray(1, 10, 5));

})();