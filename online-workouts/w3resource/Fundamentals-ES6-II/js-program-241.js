// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Removes elements in an array until the passed function returns true. Returns    #
// #					 the remaining elements in the array.										     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 03, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

const doProcessing = (data = [], func=f=>f) => {
	try {
		data.forEach((val, idx) => {
			if (func(val)) {
				throw idx;
			}
		});
	} catch (idx) {
		// console.log("idx:", idx)
		return data.slice(idx)
	}
}

(function () {

	const tempData = [1, 3, 19, 5, 7, 2, 17, 13, 23];
	const results = doProcessing(tempData, (val) => val % 2 === 0);
	console.log(results)

})();