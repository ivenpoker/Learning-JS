// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether the provided argument to a function is a valid JSON.             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 06, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isValidJSON = (obj = {}) => {
	try {
		JSON.parse(obj);
		return true;
	} catch (e) {
		return false;
	}
}

(function () {

	console.log(isValidJSON('{"name":"Adam","age":20}'));
	console.log(isValidJSON('{"name":"Adam",age:"20"}'));
	console.log(isValidJSON(null));

})();