// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds and extract unique characters from a string.    			                 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 6, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const findUniqueChars = (mainStr = "") =>
	mainStr.split("").reduce((acc, val) =>
		acc.indexOf(val) < 0 ? `${acc}${val}` : acc, "");


(function () {

	console.log(findUniqueChars("thequickbrownfoxjumpsoverthelazydog"));

})();

