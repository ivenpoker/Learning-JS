// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Accepts a string as parameter and converts the first letter of each word of the #
// #					 string to upper case.								                             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 1, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const capitalizeFirstWordInSentence = (sentence = "") =>
	sentence.split(" ").map((word) => word.trim())
		.map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(" ");

(function () {

	const test = "the quick brown fox";
	console.log(capitalizeFirstWordInSentence(test));

})();
