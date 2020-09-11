// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets a list of elements that exist in both arrays, using a provided comparator  #
// #					 function.																		 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 21, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const findList = (arrA, arrB, comp) => {
	let inBoth = [];
	arrA.forEach((val, idx) => {
		if (Array.isArray(arrB) && (idx < arrB.length)) {
			if (comp(val, arrB[idx])) {
				inBoth.push(val);
			}
		}
	});
	return inBoth;
}

(function () {

	let dataA = [1, 1.2, 1.5, 3, 0];
	let dataB = [1.9, 3, 0, 3.9];

	let results = findList(dataA, dataB, (a, b) => {
		let _a = Math.floor(a);
		let _b = Math.floor(b);
		console.log("[", a, ",", b, "]", _a, "and", _b, ":", _a === _b)
		return Math.floor(a) === Math.floor(b)
	});

	console.log("Results:", results);


})();