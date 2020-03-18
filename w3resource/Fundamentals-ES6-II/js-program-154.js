// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates an object composed of the properties the given function returns falsy   #
// #					 for.																		     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 18, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const doProcessing = (mainObj = {}, func=f=>f) =>
	Object.keys(mainObj).reduce((acc, key) =>
		func(mainObj[key]) ?
			({
				...acc,
				[key]: mainObj[key]
			}) :
			acc, {});

(function () {

	const someObj = {
		a: 1,
		b: 'test',
		c: true,
		d: null,
		e: 10
	};
	const customFunc = (value) => typeof(value) === 'number';
	const results = doProcessing(someObj, customFunc);

	console.log("New Object:", results);
})();