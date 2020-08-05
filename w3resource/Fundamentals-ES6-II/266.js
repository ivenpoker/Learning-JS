// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Clamp number within the inclusive range specified by the given boundary values  #
// #					 a and b													     				 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 05, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

(function () {
	console.log(clampNumber(2, 3, 5));
	console.log(clampNumber(1, -1, -5));
})();