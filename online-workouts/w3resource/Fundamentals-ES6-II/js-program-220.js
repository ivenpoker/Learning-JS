// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the native type of a value. Returns the lowercased constructor name of a   #
// #					 value, "undefined" or "null" if value is undefined or null.				     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 10, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const getNativeType = (value) => value === undefined ? "undefined"
		: value === null ? "null" : value.constructor.name.toLowerCase();

(function () {

	console.log(getNativeType([]))
	console.log(getNativeType({}));
	console.log(getNativeType(true));
	console.log(getNativeType(1));
	console.log(getNativeType(3.4));
	console.log(getNativeType(null));
	console.log(getNativeType(undefined));

})();