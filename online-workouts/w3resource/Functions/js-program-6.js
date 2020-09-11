// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Accepts a string as parameter and finds the longest word in the string.         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 1, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const findLongestWordInSentence = (sentence = "") =>
	sentence.split(" ").map((word) => word.trim())
			.reduce((acc, word) => word.length > acc.len ? {len: word.length, word} :
				acc, {len: 0, word: ""}).word;

(function () {

	const test = "Web Development Tutorial";
	console.log(findLongestWordInSentence(test));

})();