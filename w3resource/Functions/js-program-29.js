// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Obtains the name of a function.				     		                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const whatIsMyNameA = () => whatIsMyNameA.name;

function whatIsMyNameB() {
	return arguments.callee.name;
}

(function () {

	console.log("[A] Function name:", whatIsMyNameA());
	console.log("[B] Function name:", whatIsMyNameB());

})();