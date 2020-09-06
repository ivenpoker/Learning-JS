// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds data in array using high speed binary search algorithm.	                 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 6, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const array_binarySearch = (narray, delement) => {
	let mposition = Math.floor(narray.length / 2);

	if (narray[mposition] === delement){
		return mposition;
	}
	else if (narray.length === 1)
	{
		return null;
	}
	else if (narray[mposition] < delement) {
		let arr = narray.slice(mposition + 1);
		let res = array_binarySearch(arr, delement);
		if (res === null)
		{
			return null;
		}
		else {
			return mposition + 1 + res;
		}
	}
	else {
		let arr1 = narray.slice(0, mposition);
		return array_binarySearch(arr1, delement);
	}
}


(function () {

	console.log(array_binarySearch([1, 2, 3, 4], 2));
	console.log(array_binarySearch([4, 5], 5));
	console.log(array_binarySearch([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 6))

})();

