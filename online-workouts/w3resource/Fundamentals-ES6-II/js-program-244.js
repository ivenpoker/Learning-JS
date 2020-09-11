// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the difference between two given arrays.									 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 05, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

const findDiff = (arr1 = [], arr2 = []) => arr1.filter((data) => !arr2.includes(data));
const findCombinedDff = (arr1 = [], arr2 = []) => [...findDiff(arr1, arr2), ...findDiff(arr2, arr1)];


(function () {

	console.log(findDiff([1, 2, 3], [1, 2, 4]));
	console.log(findDiff([1, 2, 4], [1, 2, 3]));

	console.log(findCombinedDff([1, 2, 3], [1, 2, 4]));

})();