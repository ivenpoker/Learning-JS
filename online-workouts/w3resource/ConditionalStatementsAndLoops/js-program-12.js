// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Sum the multiples of 3 and 5 under 1000.                                       #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 24, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const sumMultiplesOf3and5 = (maxToConsider) => {
	let sum = 0;
	for (let i = 1; i < maxToConsider; i++) {
		if (i % 3 && i % 5) {
			sum += i;
		}
	}
	return sum;
}

(function () {

	console.log("Multiples:", sumMultiplesOf3and5(1000));

})();





