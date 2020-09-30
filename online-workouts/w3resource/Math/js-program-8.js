// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Finds the greatest common divisor (GCD) of two integers.                       #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 30, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const findGCD = (valA, valB) => {
	if ((typeof valA !== 'number') || (typeof valB !== 'number'))
		return false;
	valA = Math.abs(valA);
	valB = Math.abs(valB);
	while(valB) {
		let t = valB;
		valB = valA % valB;
		valA = t;
	}
	return valA;
}

(function () {

	console.log("GCD:", findGCD(12, 13));
	console.log("GCD:", findGCD(9, 3));

})();