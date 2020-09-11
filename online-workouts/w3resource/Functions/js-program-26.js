// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the longest substring in a given string without repeating characters.     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const findsLongestUniqueSubString = (mainStr) => {
	const mainStrChars = mainStr.split("");
	let maxSoFar = 0;
	let longestString = "";
	for (let i = 0; i < mainStrChars.length; i++) {
		let currUniques = [mainStrChars[i]];
		for (let j = i+1; j < mainStrChars.length; j++) {
			if (!currUniques.includes(mainStrChars[j])) {
				currUniques.push(mainStrChars[j]);
			} else {
				break;
			}
		}
		if (currUniques.length > maxSoFar) {
			longestString = currUniques.join('');
			maxSoFar = longestString.length;
		}
	}
	return longestString;
}


(function () {

	console.log(findsLongestUniqueSubString("google.com"));
	console.log(findsLongestUniqueSubString("example.com"));

})();