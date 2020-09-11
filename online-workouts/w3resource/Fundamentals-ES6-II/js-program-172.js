// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates a function that invokes the provided function with its arguments        #
// #					 transformed.																	 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: April 04, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const overArgs = (funcA=f=>f, transform) =>
	(...args) => funcA(...args.map((val, i) => transform[i](val)));

(function () {

	const square = (n) => Math.pow(n, 2);
	const double = (n) => Math.pow(n, 2);
	const someFunc = overArgs((x, y) => [x, y], [square, double]);

	console.log(someFunc(9, 3));
	console.log(someFunc(5, 2));

})();