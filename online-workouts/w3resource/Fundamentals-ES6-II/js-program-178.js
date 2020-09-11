// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Create a new object from the combination of two or more objects.			     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 06, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const combineObjs = (...objs) =>
	[...objs].reduce(
		(acc, obj) =>
			Object.keys(obj).reduce((a, k) => {
				acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
				return acc;
		}, {}),
		{}
	);

(function () {

	const object = {
		a: [{x:2}, {y:4}],
		b: 1
	};

	const other = {
		a: {z: 3},
		b: [2, 3],
		c: 'foo'
	};

	console.log(combineObjs(object, other))

})();