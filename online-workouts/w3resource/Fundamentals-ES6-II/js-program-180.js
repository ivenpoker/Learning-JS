// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates a new object from the specified object, where all the keys are in       #
// #					 lowercase.																		 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 06, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const createNewObjLowercaseKeys = (obj = {}) =>
	obj && Object.keys(obj).reduce((acc, key) => ({
		...acc,
		[key.toLowerCase()]: obj[key]
	}), {});

(function () {

	const myObj = {Name: 'Adam', sUrnAME: 'Smith', lAstNaMe: 'books'};
	const newObj = createNewObjLowercaseKeys(myObj);

	console.log(newObj);

})();
