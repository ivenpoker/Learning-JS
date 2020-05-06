// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Returns 1 if the array is sorted in ascending order, -1 if it is sorted in      #
// #					 descending order or 0 if it is not sorted.										 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 06, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const sortASC = (arr) => Array.isArray(arr) ? arr.sort((a, b) => a - b) : null;
const sortDESC = (arr) => Array.isArray(arr) ?  arr.sort((a, b) => b - a) : null;
const arrEqual = (arrA, arrB) => {
	if (!Array.isArray(arrA) || !Array.isArray(arrB)) {
		return false;
	}
	if (arrA.length !== arrB.length) {
		return false;
	}
	try {
		arrA.forEach((val, idx) => {
			if (val !== arrB[idx]) {
				throw false;
			}
		})
	} catch (e) {
		return false;
	}
	return true;
};

const checkSortedState = (arr) => {
	if (arrEqual(sortASC([...arr]), [...arr])) {
		return 1;
	}
	if (arrEqual(sortDESC([...arr]), [...arr])) {
		return -1
	}
	return 0;
};

(function () {

	console.log(arrEqual(sortDESC([4, 3, 2]), [4, 3, 2]))

	console.log(checkSortedState([0, 1, 2, 2]));
	console.log(checkSortedState([4, 3, 2]));
	console.log(checkSortedState([4, 3, 5]));

})();