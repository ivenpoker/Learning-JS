// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks if two given numbers are approximately equal to each other. 			 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 05, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

(function () {

	console.log(approximatelyEqual(Math.PI / 2.0, 1.5708));

})();