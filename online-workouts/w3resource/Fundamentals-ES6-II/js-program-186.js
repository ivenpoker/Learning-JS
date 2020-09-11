// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether the given argument is a symbol.						             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 06, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isSymbol = (val) => typeof val === 'symbol';

(function () {

	console.log(isSymbol(Symbol('x')));
	console.log(isSymbol(Symbol(1)));
	console.log(isSymbol(Symbol(')')));

})();