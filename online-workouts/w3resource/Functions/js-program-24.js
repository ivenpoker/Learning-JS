// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Apply bubble sort algorithms to an array data set.			                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const bubble_Sort = (a) => {
	let swapp;
	let n = a.length-1;
	let x=a;
	do {
		swapp = false;
		for (let i=0; i < n; i++)
		{
			if (x[i] < x[i+1])
			{
				let temp = x[i];
				x[i] = x[i+1];
				x[i+1] = temp;
				swapp = true;
			}
		}
		n--;
	} while (swapp);
	return x;
}

(function () {

	console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))

})();