// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Checks if number in the array are the same.                                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 13, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const areTheyTheSame = (arrA = [], arrB = []) => {
	if (!arrA || !arrB) {
		return false;
	}
	try {
		arrA.forEach((val) => {
			if (!arrB.includes(Math.pow(val, 2))) {
				throw false
			}
		});
		arrB.forEach((val) => {
			if (!arrA.includes(Math.sqrt(val))) {
				throw false;
			}
		})
	} catch (error) {
		return false;
	}
	return true;
}

(function () {

	const a = [121, 144, 19, 161, 19, 144, 19, 11]
	const b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

	console.log(areTheyTheSame(a, b));


})();