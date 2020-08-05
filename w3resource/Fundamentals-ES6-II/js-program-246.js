// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Converts degrees to Radians.													 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 05, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

const convertFromDegToRads = (deg = 0.0) => (deg * Math.PI) / 180.0;

(function () {

	console.log(convertFromDegToRads(90.0));
	console.log(convertFromDegToRads(30.0));

})();