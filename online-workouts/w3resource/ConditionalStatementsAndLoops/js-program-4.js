// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Find the largest of five numbers using just 'if' statements.		 	         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const findLargestOfFive = (val1, val2, val3, val4, val5) => {
	let largest = val1;
	if (val2 > largest) {
		largest = val2;
	}
	if (val3 > largest) {
		largest = val3
	}
	if (val4 > largest) {
		largest = val4;
	}
	if (val5 > largest) {
		largest = val5;
	}
	return largest;
}

(function () {

	console.log(findLargestOfFive(1, 5, 3, 2, 4));
	console.log(findLargestOfFive(-1, 0, 5, 6, -8));
	console.log(findLargestOfFive(0, -4, -5, -3, 1));

})();