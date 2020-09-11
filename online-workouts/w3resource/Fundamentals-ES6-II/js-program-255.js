// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Returns true if the provided predicate function returns true for at least one   #
// #					 element in a collection, false otherwise.										 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 05, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

const trueIfOnce = (collection = [], pred=f=>f) => collection.some(pred);

(function () {

	const collection = [1, 2, 5, 13, 7, 19, 17];
	console.log(trueIfOnce(collection, (val) => val % 2 === 0));

})();