// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Removes elements from the end of an array until the passed function returns     #
// #					 true. Returns the remaining elements in the array.								 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 03, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

const doProcessing = (data = [], func=f=>f) => {
	try {
		[...data].reverse().forEach((val, idx) => {
			if (func(val)) {
				throw idx;
			}
		})
	} catch (idx) {
		return data.slice(0, data.length - idx);
	}
};

(function () {

	console.log(doProcessing([1, 2, 3, 4],  (val) => val < 3));

})();