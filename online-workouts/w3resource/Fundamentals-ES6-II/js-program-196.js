// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks if a provided argument is null or not.						   			 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 11, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isNull = (someVal) => someVal === null;

(function () {

	console.log(isNull(null));
	console.log(isNull(123));
	console.log(isNull(x => x));

})() ;