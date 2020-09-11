// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Sorts and array of data values using the merge sort algorithm.                  #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

Array.prototype.merge_Sort = function () {
	if (this.length <= 1) {
		return this;
	}
	let half = parseInt(this.length / 2);
	let left = this.slice(0, half).merge_Sort();
	let right = this.slice(half,     this.length).merge_Sort();
	let merge = function (left, right)
	{
		let arry = [];
		while (left.length > 0 && right.length > 0)
		{
			arry.push((left[0] <= right[0]) ? left.shift() : right.shift());
		}
		return arry.concat(left).concat(right);
	};

	return merge(left, right);
};


(function () {

	console.log([34,7,23,32,5,62].merge_Sort())


})();

