// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Initializes an array containing the numbers in the specified range.			 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 10, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const geometricProgression = (end, start = 1, step = 2) =>
	Array.from({ length: Math.floor(Math.log(end / start) / Math.log(step)) + 1 }).map(
		(v, i) => start * step ** i
	);

(function () {

	console.log(geometricProgression(256));
	console.log(geometricProgression(256, 3));
	console.log(geometricProgression(256, 1, 4))



})();