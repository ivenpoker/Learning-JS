// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Calculates the greatest common divisor between two or more numbers/arrays.		 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 10, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const gcd = (...arr) => {
	const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
	return [...arr].reduce((a, b) => _gcd(a, b));
};

(function () {

	console.log(gcd(8, 36));
	console.log(gcd(...[12, 8, 32]))

})();