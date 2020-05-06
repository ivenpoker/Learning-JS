// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks if a given string is uppercase or not.					                 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 06, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isUpper = (str) => str ? str.toUpperCase() === str : null;

(function () {

	console.log(isUpper("JAMES"));
	console.log(isUpper("KiNG"));
	console.log(isUpper(null));
	console.log(isUpper(undefined));

})();