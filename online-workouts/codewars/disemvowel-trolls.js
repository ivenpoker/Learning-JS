// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Removes all vowels in a string.                                                #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 10, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const dismemberVowel = (mainStr = "") => {
	const vowels = "aeiou".split("");
	return mainStr.split("").filter((char) => !vowels.includes(char)).join("");
}

(function () {

	console.log(dismemberVowel("This website is for losers LOL!"))

})();