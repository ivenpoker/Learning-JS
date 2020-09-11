// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates a function that invokes the provided function with its arguments        #
// #					 arranged according to the specified indexes.									 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 18, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const rearg = (func=f=>f, indexes = []) =>
	(...args) => func(...indexes.map(i => args[i]));

(function () {

	const rearged = rearg(
		(a, b, c) => [a, b, c],
		[2, 0, 1]
	);
	console.log(rearged('b', 'c', 'a'));

})();

