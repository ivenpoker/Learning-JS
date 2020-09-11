// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Converts a 2D-array to a comma-separated values (CSV) string.		 			 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 05, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

const arrayToCSV = (arr = [], delimiter = ",") =>
	arr.map((v) => v.map((x) => `"${x}"`).join(delimiter)).join("\n");

(function () {

	console.log(arrayToCSV([['a', 'b'], ['c', 'd']]));
	console.log(arrayToCSV([['a', 'b'], ['c', 'd']], ';'));

})();