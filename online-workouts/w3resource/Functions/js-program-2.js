// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks if a string is a palindrome or not.			                             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 18, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const isPalindrome = (someStr) => {
	if (someStr.length % 2 === 0) {
		return `${someStr}`.split('').reverse().join('') === someStr;
	} else {
		 const fstHalf = someStr.substr(0, someStr.length / 2);
		 const sndHalf = someStr.substr((someStr.length / 2) + 1, someStr.length);

		 return `${fstHalf}${sndHalf}`.split('').reverse().join('') === `${fstHalf}${sndHalf}`;
	}
};

(function () {

	console.log(isPalindrome("12321"));
	console.log(isPalindrome("lskksl"));
	console.log(isPalindrome("jamesking"));
	console.log(isPalindrome("reset"));
	console.log(isPalindrome("nursesrun"));
	console.log(isPalindrome("fox"));

})();