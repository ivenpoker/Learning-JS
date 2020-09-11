// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Initialize and fill an array with the specified values.						 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 21, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const initializeArrayWithValues = (size, fillVal = 0) => Array(size).fill(fillVal);

(function () {

	console.log(initializeArrayWithValues(5, 2));
	console.log(initializeArrayWithValues(4, 0));

})();

