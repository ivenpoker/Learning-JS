// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Obtains the last element from a given array.									 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 06, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const getLast = (arr = []) => arr && arr.length > 0 ? arr[arr.length-1] : null;

(function () {

	console.log(getLast([1, 2, 3, -5]));
	console.log(getLast([]));
	console.log(getLast([1]));

})();