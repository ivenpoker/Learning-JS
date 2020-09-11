// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Removes elements from an array for which the given function return false.		 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 10, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const removeAll = (someArr = [], func =f=>f) => someArr.filter((val) => !func(val));

(function () {

	const nums = [1, 2, 3, 4, 5, 6, 7, 8, 10];

	console.log(removeAll(nums, (val) => val % 2 === 0)); // remove all even numbers
	console.log(removeAll(nums, (val) => val % 2 !== 0)); // remove all odd numbers

})();