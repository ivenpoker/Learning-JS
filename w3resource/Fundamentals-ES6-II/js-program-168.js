// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Groups elements into two arrays, depending on the provided function's           #
// #					 truthiness for each element.												     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 22, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const groupElements = (data = [], func=f=>f) =>
	[...data].reduce((acc, val) =>
		func(val) ?
			({
				...acc,
				groupA: [
					...acc.groupA,
					val
				]
			}) :
			({
				...acc,
				groupB: [
					...acc.groupB,
					val
				]
			})
		, {groupA: [], groupB: []}
	);

(function () {

	const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const results = groupElements(data, (val) => val % 2 === 0);
	console.log('Results:', results);

})();