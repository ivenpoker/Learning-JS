// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates a function that accepts up to n arguments, ignoring any additional 	 #
// #					 arguments.																		 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 05, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

const processArg = (func=f=>f, n) => (...args) => func(...args.slice(0, n));
(function () {

	const firstTwoMax = processArg(Math.max, 2);

	console.log([[2, 6, 'a'], [8, 4, 6], [10]].map((x) => firstTwoMax(...x)));

})();