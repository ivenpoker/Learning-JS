// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Square every single digit in the number.                                       #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 10, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const squareEveryDigit = (someNum) => {
	const processNum = `${someNum}`.split("")
		.map((char) => Math.pow(Number.parseInt(char), 2))
		.reduce((acc, val) => `${acc}${val}`, "");
	return Number.parseInt(processNum);
}

(function () {

	console.log(squareEveryDigit(9119));
	console.log(squareEveryDigit(12))

})();