// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether an argument (number) is even or not.			     			 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 11, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isEven = (val) => val !== null && val % 2 === 0;

(function() {

	console.log(isEven(12));
	console.log(isEven(null));
	console.log(isEven(undefined));
	console.log(isEven(21));
	console.log(isEven({}));
	console.log(isEven([]));

})();