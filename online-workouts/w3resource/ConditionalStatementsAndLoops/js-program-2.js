// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Display the sign of three numbers using just 'if' statements.		 	         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const NEGATIVE_SIGN = "NEGATIVE_SIGN";
const POSITIVE_SIGN = "POSITIVE_SIGN";
const NO_SIGN = "NO_SIGN";

const findSignOfNumbers = (numA, numB, numC) => {
	const prod = numA * numB * numC;
	if (prod < 0) {
		return NEGATIVE_SIGN;
	} else if (prod > 0) {
		return POSITIVE_SIGN;
	} else {
		return NO_SIGN;
	}
}

(function () {

	console.log(findSignOfNumbers(1, -1, 2));
	console.log(findSignOfNumbers(1, 1, 0));
	console.log(findSignOfNumbers(1, 3, 4));

})();