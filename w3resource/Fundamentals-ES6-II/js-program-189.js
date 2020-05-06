// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks if an object looks like a Promise or not.								 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 06, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isPromiseLike = (obj) =>
	obj !== null && (typeof obj === 'object' || typeof obj === 'function') &&
	typeof obj.then === 'function';

(function () {

	console.log(isPromiseLike({
		then: function () {
			return '';
		}
	}));

	console.log(isPromiseLike(null));
	console.log(isPromiseLike({}));

})();

