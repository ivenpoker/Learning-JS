// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Find the difference between array contents.                                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 13, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const arrayDiff = (arrA = [], arrB = []) =>
	arrA.reduce((acc, val) => !arrB.includes(val) && !acc.includes(val) ? [...acc, val] : acc, []);

(function () {

	console.log(arrayDiff([1, 2], [1]));
	console.log(arrayDiff([1, 2, 2, 2, 3], [2]))

})();