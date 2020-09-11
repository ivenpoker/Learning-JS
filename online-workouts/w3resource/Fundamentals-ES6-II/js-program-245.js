// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Invokes function after awaited number of milliseconds.							 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 05, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

const executeAfterMills = (func=f=>f, millsecs = 0, ...args) => setTimeout(func, millsecs, ...args);

(function () {

	const mills = 2000;

	executeAfterMills((...params) => {
		console.log(`Executed after ${mills} milliseconds:`, params);
	}, mills, "arg1", "arg2", 23, true, null, undefined);

})();



