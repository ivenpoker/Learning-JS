// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Rounds a number to a specified amount of digits.                                #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 18, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const round = (n, decimals = 0) =>
	Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

(function () {

	console.log(round(1.005, 2));
	console.log(round(1.05, 2));
	console.log(round(1.0005, 2));

})();