// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Check whether the provided value is an object created by the Object constructor #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 11, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isCreatedByObjectConstructor = (someObj = {}) =>
	someObj && typeof someObj === "object" && someObj.constructor === Object;

(function () {

	console.log(isCreatedByObjectConstructor({a:1}));
	console.log(isCreatedByObjectConstructor(new Map()));

})();