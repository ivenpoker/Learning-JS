// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Formats a number up to specified decimal places.		                        #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 30, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const formatDigits = (num, decPlaces = 0) => {
	if (!(typeof(num) === 'number') || !(typeof(decPlaces) === 'number')) {
		return false;
	}
	num = Number.parseFloat(num) || 0;
	return num.toFixed(decPlaces);
}

(function () {

	console.log(formatDigits(2.1000212,2));
	console.log(formatDigits(2.1000212, 3));
	console.log(formatDigits(2100, 2));

})();



