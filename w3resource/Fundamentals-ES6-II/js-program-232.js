// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Takes a function as an argument, then makes the first argument the last. 		 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 26, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const flipArgs = (func) => (first, ...rest) => func(...rest, first);

(function () {

	let a = {name: "John Smith"};
	let b = {};

	const mergeFrom = flipArgs(Object.assign);
	let mergePerson = mergeFrom.bind(null, a);

	console.log(mergePerson(b));

	b = {};

	console.log(Object.assign(b, a));

})();