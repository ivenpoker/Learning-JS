// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Joins all elements of an array into a string and returns this string.           #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 06, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const joinElems = (arr = [], sep = ",", end = sep) =>
	Array.isArray(arr) && arr.reduce((acc, val, idx) =>
		idx === arr.length-2 ? acc + val + end
			: idx === arr.length-1 ? acc + val : acc + val + sep,
		""
	);

(function () {

	console.log(joinElems(['pen', 'pineapple', 'apple', 'pen'], ',', '&'));
	console.log(joinElems(['pen', 'pineapple', 'apple', 'pen'], ','));
	console.log(joinElems(['pen', 'pineapple', 'apple', 'pen']));

})();