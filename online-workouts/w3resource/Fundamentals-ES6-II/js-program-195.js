// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks if a given argument is a number.					         			 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 11, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isNumber = (number) => number !== null && typeof number === 'number';

(function () {

	console.log(isNumber('1'));
	console.log(isNumber(1));
	console.log(isNumber([]));
	console.log(isNumber([1, 2, 2]));
	console.log(isNumber(undefined));
	console.log(isNumber(null));

})();