// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the first N fibonacci numbers using recursion. 		                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################


const getFirstNFibonacciNumbers = (nVal) => {
	if (nVal === 1) {
		return [0, 1];
	} else {
		let s = getFirstNFibonacciNumbers(nVal - 1);
		s.push(s[s.length - 1] + s[s.length - 2]);
		return s;
	}
}


(function () {

	console.log(getFirstNFibonacciNumbers(10));


})();


