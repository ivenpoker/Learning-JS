// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Chunk an array into smaller arrays of specified size.							 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 05, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

const chunkArray = (arr, size) =>
	Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
		arr.slice(i * size, i * size + size)
	);

(function () {

	console.log(chunkArray([1, 2, 3, 4, 5], 2));

})();