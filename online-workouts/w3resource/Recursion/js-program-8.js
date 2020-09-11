// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Find element in an array using binary search algorithm.	                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const binarySearch = (dataSource = [], key) => {
	if (dataSource.length === 1 && dataSource[0] !== key) {
		return -1;
	}

	const mid = Math.floor(dataSource.length / 2);
	if (key === dataSource[mid]) {
		return mid;
	} else if (key < dataSource[mid]) {
		return binarySearch(dataSource.slice(0, mid),key);
	} else {
		return mid + binarySearch(dataSource.slice(mid), key);
	}
}

(function () {

	console.log(binarySearch( [0,1,2,3,4,5,6], 5));

})();