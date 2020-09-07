// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Get the integers in range (x, y).			        		                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const getIntsInRange = (lower, upper) => {
	if (lower === upper-1) {
		return [];
	}
	return [lower + 1, ...getIntsInRange(lower + 1, upper)];
}

(function () {

	console.log(getIntsInRange(1, 10));

})();