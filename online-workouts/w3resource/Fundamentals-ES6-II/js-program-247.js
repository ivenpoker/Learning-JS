// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Assigns default values for all properties in an object that are undefined.  	 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 05, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

const processObj = (obj = {}, defaultValue) =>
	Object.keys(obj).reduce((acc, key) => ({
		...acc,
		[key]: obj[key] === undefined ? defaultValue : obj[key]
	}), []) ;

(function () {

	const person = {
		firstName: "Craig",
		lastName: "Peterson",
		age: undefined,
		work: undefined,
		married: true,
		haveKids: true
	}

	const processedObj = processObj(person, "[unknown]");
	console.log(processedObj);

})();