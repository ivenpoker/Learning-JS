// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Finds the first 5 happy numbers from a given start.	                        #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 24, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const obtainDigits = (someNum) => `${someNum}`.split('').map((strDigit) => Number(strDigit));

const findFirst5HappyNums = (start, maxToFind) => {
	const foundHappy = [];
	console.log("Start:", foundHappy);

	for (let i = start, found = 0; found < maxToFind;) {
		let digits = obtainDigits(i);
		let newNum = digits.map((val) => Math.pow(val, 2))
				.reduce((acc, val) => acc + val, 0);
		while (newNum !== 1) {
			digits = obtainDigits(newNum);
			newNum = digits.map((val) => Math.pow(val, 2))
				.reduce((acc, val) => acc + val, 0);
		}
		found += 1;
		foundHappy.push(Number(digits.join('')));
		i += 1;

		console.log("Update:", foundHappy);
	}
	return foundHappy;
}

(function () {

	console.log("Happy found:", findFirst5HappyNums(10, 5));

})();