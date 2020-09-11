// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Returns a passed string with letters in alphabetical order.                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 1, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const sortAllAlphaChars = (mainStr = "") =>
	mainStr.split("").sort().join('');

(function () {

	const mainStr = "webmaster";
	console.log(sortAllAlphaChars(mainStr));

})();