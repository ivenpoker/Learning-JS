// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Iterates the integers from 1 to 100. But for multiples of three print "Fizz"    #
// #					 instead of the number and for the multiples of five print "Buzz". For numbers   #
// #					 which are multiples of both three and five print "FizzBuzz".				     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 16, 2020.                                                             #
// #                                                                                                     #
// #######################################################################################################

const performPrinting = (arraySize = 0) =>
	Array(arraySize).fill(0).forEach((val, idx) => {
		if (idx % 3 === 0 && idx % 5 === 0 && idx !== 0) {
			console.log(`${idx} FizzBuzz`)
		} else if (idx % 3 === 0 && idx !== 0) {
			console.log(`${idx} Fizz`);
		} else if (idx % 5 === 0 && idx !== 0) {
			console.log(`${idx} Buzz`)
		} else {
			console.log(`${idx} `);
		}
	});

(function () {

	performPrinting(100);

})();