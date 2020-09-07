// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Passes a 'Javascript function' as parameter to another function call.           #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const funcParamTest = (val, predicateFunc=f=>f, trueFunc=f=>f, falseFunc=f=>f) =>
	predicateFunc(val) ? trueFunc(val) : falseFunc(val);

(function () {

	funcParamTest(12, (val) => val % 2 === 0, (val) => {
		console.log(`${val} is even`);
	}, (val) => {
		console.log(`${val} is odd`);
	});

})();