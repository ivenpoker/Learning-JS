// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether the given argument is a native boolean element.					 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 13, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isNativeBoolean = (arg) => typeof arg === 'boolean';

(function () {

	console.log(isNativeBoolean([]));
	console.log(isNativeBoolean(""));
	console.log(isNativeBoolean(true));
	console.log(isNativeBoolean(false));
	console.log(isNativeBoolean(12));
	console.log(isNativeBoolean({}));
	console.log(isNativeBoolean(x => x));
	console.log(isNativeBoolean(null));
	console.log(isNativeBoolean(undefined));

})();