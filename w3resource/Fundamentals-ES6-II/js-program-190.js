// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets a boolean determining if the passed value is primitive or not.			 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 06, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isPrimitive = (val) => !['object', 'function'].includes(typeof val) || val === null;

(function () {

	console.log(isPrimitive(null));
	console.log(isPrimitive(50));
	console.log(isPrimitive("Hello!"));
	console.log(isPrimitive(false));
	console.log(isPrimitive(Symbol()));
	console.log(isPrimitive([]));

})();