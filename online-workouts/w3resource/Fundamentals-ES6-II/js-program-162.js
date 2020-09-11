// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Converts an asynchronous function to return a promise.                          #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 22, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const promisify = (func = f=>f) => (...args) =>
	new Promise((resolve, reject) =>
		func(...args, (err, result) => (err ? reject(err) : resolve(result)))
	);

(function () {

	const delay = promisify((d, cb) => setTimeout(cb, d));
	delay(2000).then(() => console.log('Hi!'));

})();