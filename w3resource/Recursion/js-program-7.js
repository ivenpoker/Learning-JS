// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks if a number is even or not.							                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const isEven = (val) => {
	if (val < 0) {
		val = Math.abs(val);
	} else if (val === 0) {
		return true;
	} else if (val === 1) {
		return false;
	}  else {
		val = val - 2;
		return isEven(val);
	}
}

(function () {

	console.log(isEven(12));
	console.log(isEven(11));
	console.log(isEven(101));

})();


