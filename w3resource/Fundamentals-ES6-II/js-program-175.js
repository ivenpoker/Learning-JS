// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the index of the function in an array of functions which executed the      #
// #					 fastest.						             								     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: April 28, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const findIndexOfFastestFunc = (funcs = []) => {
	let timeDiffs = funcs.map((func, idx) => {
		let tempStart = (new Date()).getTime();
		func(`Running function #${idx} ...`);
		let tempStop = (new Date()).getTime();
		return (tempStop - tempStart);
	});
	return timeDiffs.indexOf(Math.min(...timeDiffs), 0);
};

(function () {

	const funcsArray = [
		(mes) => {
			console.log(mes);
			for (let i = 0; i < 1000000; i++) {}
		}
		,
		(mes) => {
			console.log(mes);
			for (let i = 0; i < 10000; i++) {}
		},
		(mes) => {
			console.log(mes);
			for (let i = 0; i < 199999999; i++) {}
		},
		(mes) => {
			console.log(mes);
			for (let i = 0; i < 128918921; i++) {}
		}
	];

	console.log("Fastest running function: #" + findIndexOfFastestFunc(funcsArray));

})();