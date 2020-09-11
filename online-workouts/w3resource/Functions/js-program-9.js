// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Accepts an argument and returns the type.			                             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 1, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const getTypeA = (arg) => typeof(arg);

const getTypeB = (arg) => {
	const dTypes = [Function, RegExp, Number, String, Boolean, Object];
	if (typeof arg === "object" || typeof arg === "function") {
		for (let x = 0, len = dTypes.length; x < len; x++) {
			if (arg instanceof dTypes[x]) {
				return dTypes[x];
			}
		}
	}
	return typeof arg;
}

(function () {

	console.log(getTypeA(1));
	console.log(getTypeA("james"));
	console.log(getTypeA(true));
	console.log(getTypeA({}));
	console.log(getTypeA([]));
	console.log(getTypeA(null));
	console.log(getTypeA(undefined));
	console.log(getTypeA(() => {}));

})();