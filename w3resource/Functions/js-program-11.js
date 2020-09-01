// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the second largest and second smallest in an array of numbers.            #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 1, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const findSecondLargestAndSmallest = (arr = []) => ({
	secondLargest: [...arr].sort()[arr.length-2],
	secondSmallest: [...arr].sort()[1]
});

(function () {

	console.log(findSecondLargestAndSmallest([1, 2, 3, 4, 5]));

})();