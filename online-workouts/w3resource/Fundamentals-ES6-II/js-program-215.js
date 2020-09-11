
// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Get all the elements of an array except the last one.						     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 05, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const getAllExceptLast = (arr = []) =>
	Array.isArray(arr) && arr.length > 0 ? arr.slice(0, arr.length-1) : [];

(function () {

	console.log(getAllExceptLast([1, 2, 3, 4]));
	console.log(getAllExceptLast([1, 2, 3]))
	console.log(getAllExceptLast([0, -1, 2]));

})();