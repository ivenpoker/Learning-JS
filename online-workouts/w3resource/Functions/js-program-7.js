// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Accepts a string as a parameter and counts the number of vowels within the      #
// #					 string.											                             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 1, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const countVowelsInString = (mainStr = "") =>
	mainStr.split("")
		.reduce((acc, char) => "aeiou".includes(char) ? acc + 1 : acc, 0);

(function () {

	const testStr = "The quick brown fox";
	console.log(countVowelsInString(testStr));

})();
