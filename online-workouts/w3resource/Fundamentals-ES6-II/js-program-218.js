
// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the number of times a function executed per second. 						 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 05, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const hz = (func, iterations = 100) => {
	const before = performance.now();
	for (let i = 0; i < iterations; i++) {
		func();
	}
	return (1000 * iterations) / (performance.now() - before);
};

const numbers = Array(1000).fill(0).map((_, idx) => idx);
const sumReduce = () => numbers.reduce((acc, n) => acc + n, 0);
const sumForLoop = () => {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
};

(function () {

	console.log(Math.round(hz(sumReduce)));
	console.log(Math.round(hz(sumForLoop)));

})();