// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the n minimum elements from the provided array. If n is greater than or    #
// #					 equal to the provided array's length, then return the original array (sorted in #
// #					 ascending order).																 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: April 28, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

(function () {

	console.log(minN([1, 2, 3]));
	console.log(minN([1, 2, 3], 2));

})();