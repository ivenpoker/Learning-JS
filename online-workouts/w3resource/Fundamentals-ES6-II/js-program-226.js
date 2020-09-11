// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Get N random elements at unique keys from array up to the size of array.		 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 10, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const sampleSize = ([...arr], n = 1) => {
	let m = arr.length;
	while (m) {
		const i = Math.floor(Math.random() * m--);
		[arr[m], arr[i]] = [arr[i], arr[m]];
	}
	return arr.slice(0, n);
}

(function () {

	console.log(sampleSize([1, 2, 3], 2));
	console.log(sampleSize([1, 2, 3], 4));

})();