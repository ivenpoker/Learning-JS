// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Computes the value of b to the power n.             			                 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 6, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const computeVal = (b, n) => {
	let result = b;
	for (let i = 1; i < n; i++) {
		result *= b;
	}
	return result;
}

(function () {

	console.log(computeVal(2, 3));
	console.log(computeVal(2, 4));

})();


