// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Generates an array, containing the Fibonacci sequence, up until the nth term.	 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 26, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const generateFibTillNth = (nth = 1) => Array(nth).fill(0).reduce((acc) =>
	acc.length >= 2 ? [...acc, acc[acc.length-1] + acc[acc.length-2]] : [...acc, 1], []);


(function () {

	console.log("Fib size (2):", generateFibTillNth(2));
	console.log("Fib size (5):", generateFibTillNth(5));
	console.log("Fib size (0):", generateFibTillNth(0));
	console.log("Fib size (15):", generateFibTillNth(15));


})();