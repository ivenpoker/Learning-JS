
// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Reverses a number.											                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 14, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const reverseANumber = (someNum) => Number.parseInt(`${someNum}`.split('').reverse().join(""));

(function () {

	const testA = 123;
	const testB = 345;
	const testC = 678;
	const testD = 90112;

	console.log(`Reverse of ${testA}:`, reverseANumber(testA));
	console.log(`Reverse of ${testB}:`, reverseANumber(testB));
	console.log(`Reverse of ${testC}:`, reverseANumber(testC));
	console.log(`Reverse of ${testD}:`, reverseANumber(testD));

})();