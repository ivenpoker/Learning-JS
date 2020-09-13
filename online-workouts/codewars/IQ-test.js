// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Performs an IQ test on some set of numbers.	                                #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 13, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const iqTest = (numbers) => {

	const nums = numbers.split(" ").map((val) => Number.parseInt(val));

	const isEven = (val) => val % 2 === 0;
	const isOdd = (val) => !isEven(val);

	const numEvens = nums.filter((val) => val % 2 === 0).length;
	const numOdds = nums.length - numEvens;

	if (numEvens > numOdds) {
		for (let i = 0; i < nums.length; i++) {
			if (isOdd(nums[i])) {
				return i + 1;
			}
		}
	} else if (numEvens < numOdds) {
		for (let i = 0; i < nums.length; i++) {
			if (isEven(nums[i])) {
				return i + 1;
			}
		}
	}
}

(function () {

	console.log(iqTest("2 4 5 7 8 10"))

})();