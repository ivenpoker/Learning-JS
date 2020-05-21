// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets a list of elements that exits in both arrays, after applying the provided  #
// #					 function to each array element of both.										 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 21, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const getCommon = (arrA, arrB, func) => {
	let newA = arrA.map(func);
	let newB = arrB.map(func);
	return newA.filter((val) => newB.includes(val));
}

(function () {

	console.log(getCommon([2.1, 1.2], [2.3, 3.4], Math.floor));

})();