// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Performs left-to-right function composition for asynchronous functions.         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 22, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const pipeAsyncFunctions = (...fns) =>
	(arg) => fns.reduce((p, f) => p.then(f), Promise.resolve(arg));

(function () {

	const sum = pipeAsyncFunctions(
		(x) => x + 1,
		(x) => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
		(x) => x + 3,
		async x => (await  x) + 4
	);

	(async () => {
		console.log(await sum(5));
	})();

	// some code here...

})();