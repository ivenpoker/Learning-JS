// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Compares two objects to determine if the first one contains equivalent property #
// #					 values to the second one, based on a provided function.						 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 06, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const matchesWith = (obj = {}, source = {}, func=f=>f) =>
	Object.keys(source).every(
		(key) => obj.hasOwnProperty(key) &&
			func ? func(obj[key], source[key], key, obj, source)
				 : obj[key] == source[key]
	);

const isGreeting = (val) => /^h(?:i|ello)$/.test(val);

(function () {

	console.log(matchesWith(
		{greeting: 'hello'},
		{greeting: 'hi'},
		(oV, sV) => isGreeting(oV) && isGreeting(sV)
	));

})();