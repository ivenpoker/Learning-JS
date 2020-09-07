// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the longest palindrome in a given string.     		                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const findLongestPalindromeInGivenString = (mainStr) => {
	const mainStrChars = mainStr.split("");
	let longestPalindromeStr = "";

	for (let i = 0; i < mainStrChars.length; i++) {
		for (let j = i+1; j < mainStrChars.length; j++) {
			let tmpStr = mainStr.split("").slice(i, j+1).join("").trim();
			if (tmpStr.split('').reverse().join('') === tmpStr) {
				if (tmpStr.length > longestPalindromeStr.length) {
					longestPalindromeStr = tmpStr;
				}
			}
		}
	}
	return longestPalindromeStr;
}

(function () {

	console.log(findLongestPalindromeInGivenString("abracadabra"));
	console.log(findLongestPalindromeInGivenString("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));

})();