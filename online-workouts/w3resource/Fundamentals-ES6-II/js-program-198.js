// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether the given argument is a function.		      	     			 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 11, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isFunction = (arg) => typeof arg === "function";

(function () {

	console.log(isFunction("x"));
	console.log(isFunction(x => x));
	console.log(isFunction(() => {

		console.log("Just testing function")

	}));
	console.log(isFunction(function () {

		console.log("Another form of functions");

	}))

})();