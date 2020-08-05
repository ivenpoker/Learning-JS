// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Convert the values of RGB components to a color code.						  	 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 05, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

(function () {

	console.log(RGBToHex(255, 165, 1));
	console.log(RGBToHex(255, 255, 1));

})();