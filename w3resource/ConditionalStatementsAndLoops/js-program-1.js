// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the larger between two numbers.								 	         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const findLarger = (valA, valB) => {
	if (valA > valB) {
		return valA;
	} else if (valB > valA) {
		return valB;
	}
}

(function () {

	console.log(findLarger(1, 2));
	console.log(findLarger(10, -1));
	console.log(findLarger(11, 11) === undefined ? "EQUAL" : {});

})();


