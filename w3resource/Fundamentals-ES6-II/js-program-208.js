// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks if the provided value is of the specified type.							 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 21, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isOfSpecifiedType = (type, value) => ![null].includes(value) && value.constructor === type;

(function () {

	console.log(isOfSpecifiedType(Array, [1]));
	console.log(isOfSpecifiedType(ArrayBuffer, new ArrayBuffer()));
	console.log(isOfSpecifiedType(Map, new Map()));
	console.log(isOfSpecifiedType(RegExp, /./g));
	console.log(isOfSpecifiedType(Set, new Set()));
	console.log(isOfSpecifiedType(WeakMap, new WeakMap()));
	console.log(isOfSpecifiedType(WeakSet, new WeakSet()));
	console.log(isOfSpecifiedType(String, ''));
	console.log(isOfSpecifiedType(String, new String('')));
	console.log(isOfSpecifiedType(Number, 1));
	console.log(isOfSpecifiedType(Number, new Number(1)));
	console.log(isOfSpecifiedType(Boolean, true));
	console.log(isOfSpecifiedType(Boolean, new Boolean(true)));

})();