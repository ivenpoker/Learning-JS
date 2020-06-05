
// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Get all indices of 'val' in an array. If 'val' never occurs, returns [].		 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 05, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const getAllIndices = (val, arr = []) =>
	Array.isArray(arr) && !Number.isNaN(val) ? arr.reduce((acc, currVal, idx) => {
		if (currVal === val) {
			acc = [...acc, idx];
		}
		return acc;
	}, []) : [];

(function () {

	console.log(getAllIndices(1, [0, 1, 2, -3, -5, 23, 1, 3, 4, 1]));
	console.log(getAllIndices(4, [1, 2, 3]));
	console.log(getAllIndices(1, [1, 2, 3, 1, 2, 3]));

})()