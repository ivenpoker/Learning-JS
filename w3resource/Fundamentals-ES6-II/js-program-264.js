// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Capitalizes every word in string.												 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 05, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

const capitalizeEveryWord = (str = "") =>
	str.split(" ").reduce((acc, word) => `${acc} ${word.trim().charAt(0).toUpperCase()}${word.trim().slice(1)}`, "").trim();

(function () {

	const mainStr = "this is a freaking long sentence.";
	console.log(capitalizeEveryWord(mainStr));

})();