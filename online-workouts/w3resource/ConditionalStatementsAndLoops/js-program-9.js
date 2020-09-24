// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Finds the first N armstrong numbers.	               				            #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 24, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const obtainDigits = (someNum) => `${someNum}`.split('').map((val) => Number(val));

const findNArmstrongNumbers = (maxToFind) => {
	let start = 100;			// first 3 digit number
	const foundNums = []; 		// Armstrong numbers found

	while  (foundNums.length < maxToFind) {
		const digits = obtainDigits(start);
		const digitsCube = digits.map((digit) => Math.pow(digit, 3));
		const digitsCubeSum = digitsCube.reduce((acc, val) => acc + val, 0);

		if (digitsCubeSum === start) {
			foundNums.push(start);
			console.log("Update:", foundNums);
		}
		start += 1;
	}
	return foundNums;
}

(function () {

	console.log("All found armstrong numbers:", findNArmstrongNumbers(10));

})();