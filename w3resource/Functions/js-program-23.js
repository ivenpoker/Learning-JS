// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the first non-repeat character in an array of characters.                 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const findFirstNonRepeatChar = (mainStr, char) => {
	const chars = mainStr.split("");
	for (let i = 0; i < chars.length; i++) {
		let currChar = chars[i];
		let currCharCnt = chars.reduce((acc, val) => val === currChar ? acc + 1 : acc, 0);
		if (currCharCnt === 1) {
			return currChar;
		}
	}
	return null;
}

(function () {

	console.log(findFirstNonRepeatChar("abacddbec"));

}) ();