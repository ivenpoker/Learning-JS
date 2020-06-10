// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Logs the name of a function.													 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 10, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const demoFunc = () => {}
const anotherFunc = () => {}

(function () {

	console.log("Name of function:", demoFunc.name);
	console.log("Name of function:", anotherFunc.name);

})();
