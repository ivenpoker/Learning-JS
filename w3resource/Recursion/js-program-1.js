// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Computes the factorial of a number using recursion.				 	         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const computeFactorial = (someNum) => {
	if (someNum < 0) {
		throw new Error(`Invalid number ${someNum}. Must be >= 0`);
	} else if (someNum >= 0 && someNum <= 1) {
		return 1;
	} else {
		return someNum * computeFactorial(someNum-1);
	}
}


(function () {

	console.log(computeFactorial(5));
	console.log(computeFactorial(15));

})();



