// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Takes any non-negative integer as an argument and return it with its digits in #
// #					 descending order. Essentially, rearrange the digits to create the highest 		#
// #					 possible number.																#
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 10, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const descendingOrder = (someNum) => {
	const reversedNum = `${someNum}`.split("").map((val) => Number.parseInt(val))
			.sort((a, b) => a - b)
		.reduce((acc, val) => `${val}${acc}`, '');
	return Number.parseInt(reversedNum);
}

(function () {

	console.log(descendingOrder(42145));
	console.log(descendingOrder(145263));
	console.log(descendingOrder(123456789));

})();