// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates an N-dimensional array with given value.								 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 21, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const createNDimension = (nVal) => Array(nVal).fill(0);
const initializeNDArray = (val, ...args) =>
	args.length === 0
		? val
		: Array.from({length: args[0]}).map(() => initializeNDArray(val, ...args.slice(1)));

(function () {

	console.log(initializeNDArray(1, 3));
	console.log(initializeNDArray(5, 2, 2, 2));

})();