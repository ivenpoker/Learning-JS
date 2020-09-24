// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Finds the GCD of two numbers.								                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 24, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const findTheGCDOfTwoNumbers = (valA, valB) => {
	let gcd = -1;
	while (valA !== valB) {
		if (valA > valB) {
			valA = valA - valB;
		} else {
			valB = valB - valA;
		}
	}
	gcd = valA;
	return gcd;
}

(function () {

	console.log(findTheGCDOfTwoNumbers(2154, 458));

})();