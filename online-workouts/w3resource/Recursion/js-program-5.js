// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Computes the exponent of a number using recursion.  		                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const computeExponentOfNumber =
	(num, exp) =>  exp === 0 ? 1 : num * computeExponentOfNumber(num, exp-1);

(function () {

	console.log(computeExponentOfNumber(8, 2));

})();

