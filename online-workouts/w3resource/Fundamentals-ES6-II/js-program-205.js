// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether the given argument to a function is array-like.					 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 13, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isArrayLike = (val) => {
	try {
		return [...val], true
	} catch (e) {
		return false;
	}
};

(function () {

	console.log(isArrayLike("abc"));
	console.log(isArrayLike(null));

})();