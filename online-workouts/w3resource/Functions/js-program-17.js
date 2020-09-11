// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the number of occurrences of each letter in specified string.             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 6, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const findCharacterMap = (mainStr = "", ignoreChars = []) =>
	mainStr.split("").reduce((acc, curr) => {
		if (Object.keys(acc).indexOf(curr) < 0 && !ignoreChars.find((val) => val === curr)) {
			let cnt = 0;
			mainStr.split("").forEach((tmpVal) => {
				if (tmpVal === curr) {
					cnt += 1;
				}
			});
			return {...acc, [curr]: cnt};
		}
		return acc;
	}, {});

(function () {

	console.log(findCharacterMap("The quick brown fox jumps over the lazy dog", [" "]));

})();

