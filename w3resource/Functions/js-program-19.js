// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds all items in an array that are larger than target.    	                 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 6, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const findLargerThan = (dataSource = [], key) =>
	[...dataSource].reduce((acc, val) => val > key ? [...acc, val] : acc, []);

(function () {

	console.log(findLargerThan([4, 1, -1, -3, 2, 4], 0));
	console.log(findLargerThan([5, 2, -1, 1, 10, 4, 23, 11, 8, 6, 19], 4));

})();
