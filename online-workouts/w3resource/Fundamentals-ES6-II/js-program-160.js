// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Mutates the original array to filter out the values specified, based on a given #
// #					 iterator function. 														     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 18, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const pullBy = (arr = [], ...args) => {
	const length = args.length;
	let func = length > 1 ? args[length-1] : undefined;
	func = typeof(func) === 'function' ? (args.pop(), func) : undefined;
	let argState = (Array.isArray(args[0]) ? args[0] : args).map((val) => func(val));
	let pulled = arr.filter((v, i) => !argState.includes(func(v)));
	arr.length = 0;
	pulled.forEach((v) => arr.push(v));
};

(function () {

	const myArray = [{x:1}, {x:2}, {x:3}, {x:1}];
	pullBy(myArray, [{x: 1}, {x: 3}], o => o.x);

	console.log(myArray);

})();