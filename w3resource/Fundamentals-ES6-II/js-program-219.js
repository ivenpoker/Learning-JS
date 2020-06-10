// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks if the current process's arguments contain the specified flags.			 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 10, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const hammingDistance = (num1, num2) => ((num1 ^ num2).toString(2).match(/1/g) || '').length;

(function () {

	console.log(hammingDistance(2, 3));
	console.log(hammingDistance(5, 3));

})();

