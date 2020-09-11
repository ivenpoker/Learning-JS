// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Find the GCD of two positive numbers using recursion. 		                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const findGCD = (numA, numB) => {
	if (!numB) {
		return numA;
	}
	return findGCD(numB, numA % numB);
}

(function () {

	console.log(findGCD(2154, 458));

})();