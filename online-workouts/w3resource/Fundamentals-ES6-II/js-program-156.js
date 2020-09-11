// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Applies a function against an accumulator and each element in the array (from   #
// #					 left to right), returning an array of successively reduced values.				 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 18, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const reduceSuccessive = (arr = [], func=f=>f, acc) =>
	arr.reduce((res, val, i, arr) => (res.push(func(res.slice(-1)[0], val, i, arr)), res), [acc]);

(function () {

	console.log(reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0));

})();

