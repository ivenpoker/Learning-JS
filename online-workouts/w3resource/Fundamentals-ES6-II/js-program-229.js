// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Converts a string from camelcase.												 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 10, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const fromCamelCaseA = (mainStr, separator = "_") => {
	let newStr = "";
	mainStr.split("").forEach((char, idx) => {
		if (char.toUpperCase() === char) {
			newStr += separator + char.toLowerCase()
		} else {
			newStr += char;
		}
	});
	return newStr;
}

const fromCamelCaseB = (str, separator = "_") =>
	str.replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
		.replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
		.toLowerCase();

(function () {

	console.log(fromCamelCaseA("someDatabaseFieldName", " "));
	console.log(fromCamelCaseA("someLabelThatNeedsToBeCamelized", "-"));
	console.log(fromCamelCaseA("someJavascriptProperty", "_"));

	console.log();

	console.log(fromCamelCaseB("someDatabaseFieldName", " "));
	console.log(fromCamelCaseB("someLabelThatNeedsToBeCamelized", "-"));
	console.log(fromCamelCaseB("someJavascriptProperty", "_"));

})();