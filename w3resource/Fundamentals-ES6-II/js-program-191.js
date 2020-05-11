// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether the provided integer is a prime number or not.      			 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 11, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const getFactors = (someNum) => {
	let factsCnt = 0;
	for (let i = 1; i <= someNum / 2; i++) {
		if (someNum % i === 0) {
			factsCnt += 1;
		}
	}
	return factsCnt + 1;
}

const isPrime = (someNum) => getFactors(someNum) === 2;

(function () {

	console.log(isPrime(11));
	console.log(isPrime(17));
	console.log(isPrime(8));

})();