// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Mutate	the original array to filter out the values specified.                   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 18, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const mutateAndFilterOut = (mainArr = [], values = []) =>
	mainArr.reduce((acc, val) =>
		values.includes(val) ? ([
			...acc,
			val
		]) : acc,
		[]
	);

(function () {

	const arrayA = [1, 2, 3, 4, 5, 6];
	const arrayB = ['james', 'king', 'peter'];

	console.log("Original data:", arrayA,
				"Mutate results:", mutateAndFilterOut(arrayA, [2, 3, 4]),
				"Original data:", arrayA);

	console.log("Original data:", arrayB,
				"Mutate results:", mutateAndFilterOut(arrayB, ['james', 'peter']),
				"Original data:", arrayB);

})();