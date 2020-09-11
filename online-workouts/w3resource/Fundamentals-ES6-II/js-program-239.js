// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Escapes a string to use in a regular expression.						    	 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 26, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

(function () {

	console.log(escapeRegExp("(test)"));

})();

