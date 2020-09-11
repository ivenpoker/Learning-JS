// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the factors of a positive integer.	         			                 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 6, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const findFactors =  (num) => {
	const facts = [1, num];
	for (let i = 2; i <= num / 2; i++) {
		if (num % i === 0) {
			facts.push(i);
		}
	}
	return facts.sort((a, b) => a < b ? -1 : b > a ? 1 : 0);
}

(function () {

	console.log(findFactors(12));
	console.log(findFactors(11));
	console.log(findFactors(60));
	console.log(findFactors(25));

})();