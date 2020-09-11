// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Performs left-to-right function composition.			                         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 22, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const pipeFunctions = (...fns) =>
	fns.reduce((f, g) => (...args) => g(f(...args)));

(function () {

	const add5 = (x) => x + 5;
	const multiply = (x, y) => x * y;
	const multiplyAndAdd5 = pipeFunctions(multiply, add5);

	console.log(multiplyAndAdd5(5, 2));
	console.log(multiplyAndAdd5(16, 2));

})();