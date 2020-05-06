// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks if a given argument is a string or not.					                 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 06, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isString = (arg) => typeof arg === "string";

(function () {

	console.log(isString("James"));
	console.log(isString({}));
	console.log(isString(null));
	console.log(isString(''));
	console.log(isString(1));
	console.log(isString(undefined));

})();