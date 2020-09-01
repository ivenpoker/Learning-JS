// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Determines if a number is perfect or not.          			                 #
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
	return facts.sort((a, b) => a - b);
}

const isPerfect = (num) => {
	const numFacts = factors(num);
	const factsSum = numFacts.reduce((acc, fact) => fact !== num ? acc + fact : acc, 0);
	const sumAvg = (factsSum + num) / 2;

	return sumAvg === num && factsSum === num;
}

(function () {

	console.log(isPerfect(10));
	console.log(isPerfect(100));
	console.log(isPerfect(6))
	console.log(isPerfect(28))

})();