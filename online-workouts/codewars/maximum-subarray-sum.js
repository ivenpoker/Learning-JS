// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Find maximum sum of possible sub arrays.                                       #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 16, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const findMaxSubArraySum = (someArr = []) => {
	let sum = 0;
	if (someArr.every((val) => val < 0)) {
		return 0;
	}
	for (let i = 0; i < someArr.length; i++) {
		for (let j = i+1; j < someArr.length; j++) {
			let tmpSum = someArr.slice(i, j+1).reduce((acc, val) => acc + val, 0);
			if (tmpSum > sum) {
				sum = tmpSum;
			}
		}
	}
	return sum;
}

(function () {

	console.log(findMaxSubArraySum([]));
	console.log(findMaxSubArraySum([-1, -2, -3, -4]))
	console.log(findMaxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

})();