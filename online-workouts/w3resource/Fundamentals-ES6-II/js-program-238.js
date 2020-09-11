// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Computes the factorial of a number.											 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 26, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const fact = (num) => num < 0 ? (() => {

	throw new TypeError("Negative numbers are not allowed!")

})() :  num <= 1 ? 1 : num * fact(num-1);

(function () {

	console.log("Factorial (4):", fact(4));
	console.log("Factorial (1):", fact(1));
	console.log("Factorial (0):", fact(0));
	console.log("Factorial (9):", fact(9));

	try {
		console.log("Factorial (-5):", fact(-5));
	} catch (e) {
		console.log("[ERROR]:", e.message);
	}

})();