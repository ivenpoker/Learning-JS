// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates a function that invokes another function with partials appended to the  #
// #					 arguments it receives.															 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: April 04, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const createFunc = (...args) => (func=f=>f) => args.map((arg) => func(arg));
const partialRight = (funcA=f=>f, ...partials) => (...args) => funcA(...args, ...partials);

(function () {

	const names = "James Bright";
	const capitalize = createFunc(names);
	const justLogData = createFunc(names);


	console.log(capitalize((val) => String(val).toUpperCase()));
	console.log(justLogData((val) => console.log(val)));

	const greet = (greeting, name) => `${greeting} ${name}!!`;
	const greetJohn = partialRight(greet, 'John');

	console.log(greetJohn('Hello'));

})();