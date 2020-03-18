// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Reverses the characters in a string.                                            #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 18, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const reverseChars = (someStr = '') =>
	someStr.trim().split('').reverse().join('');

(function () {

	console.log(reverseChars("James is King"));
	console.log(reverseChars("This is working really well"));
	console.log(reverseChars("Just testing state of application"));

})();