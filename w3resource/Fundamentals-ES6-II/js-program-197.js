// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether a string is lowercase or not.					     			 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 11, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isStringLowercase = (someStr) => someStr && (someStr.length > 0) && someStr.toLowerCase() === someStr;

(function () {

	console.log(isStringLowercase("Not lowercase"));
	console.log(isStringLowercase("string is lowercase"));
	console.log(isStringLowercase("UPPER CASE STRING"));
	console.log(isStringLowercase(""));

})();