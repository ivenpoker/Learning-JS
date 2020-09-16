// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Determines if 'odds' and 'evens' between a range of numbers.		 	         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const checkAndDisplayA = (maxNum) =>
	Array(maxNum).fill(0).forEach((val, idx) => console.log(`${idx} is ${idx % 2 === 0 ? "even" : "odd"}`));

const checkAndDisplayB = (maxNum) => {
	for (let i = 0; i < maxNum; i++) {
		console.log(`${i} is ${i % 2 === 0 ? "even" : "odd"}`);
	}
}

(function () {

	checkAndDisplayA(12)
	checkAndDisplayB(12)

})();