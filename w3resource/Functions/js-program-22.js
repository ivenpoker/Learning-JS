// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Accepts two arguments, a string and a letter and the function will count the    #
// #					 number of occurrences of the specified letter within the string.				 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################


const countCharInStr = (mainStr, char) =>
	mainStr.split("").reduce((acc, currChar) => currChar === char ? acc + 1 : acc, 0);

(function () {

	console.log(countCharInStr("w3resource.com", 'o'));

})();

