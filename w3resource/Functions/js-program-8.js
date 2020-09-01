// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Accepts a number and determines if the number is prime or not.                  #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 1, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const factors = (num) => {
	const facts = [1, num];
	for (let i = 2; i <= (num / 2); i++) {
		if (num % i === 0) {
			facts.push(i);
		}
	}
	return facts.sort();
}

const isPrime = (num) => {
	if (num <= 1) {
		return false;
	} else {
		const facts = factors(num);
		return facts.length === 2 && (facts[0] === 1 && facts[1] === num)
	}
}

(function () {

	console.log(isPrime(2)); 		// true
	console.log(isPrime(5)); 		// true
	console.log(isPrime(10)); 		// false
	console.log(isPrime(9)); 		// false
	console.log(isPrime(13)); 		// true
	console.log(isPrime(37)); 		// false

})();