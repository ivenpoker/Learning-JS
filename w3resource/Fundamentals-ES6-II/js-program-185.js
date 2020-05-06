// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Returns true if a specified value is undefined otherwise returns false.         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 06, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################


const isUndefined = (val) => val === undefined;

(function () {

	console.log(isUndefined(undefined));
	console.log(isUndefined(null));
	console.log(isUndefined({}));

})();
