// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether a value is object-like. Checks whether the provided value is not #
// #					 null and its typeof is equal to 'object'.									     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 11, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isObjectLike = (someValue = {}) => someValue !== null && typeof someValue === "object";

(function () {

	console.log(isObjectLike({}));
	console.log(isObjectLike([1, 2, 3]));
	console.log(isObjectLike(x => x));
	console.log(isObjectLike(null));

})();