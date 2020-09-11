// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks if the first numeric argument is divisible by the second one			 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 13, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isDivisible = (...args) => {
	let fstVal = null;
	let sndVal = null;

	try {
		args.forEach((val) => {
			if (typeof val === 'number') {
				if (fstVal) {
					if (sndVal) {
						throw true;
					} else {
						sndVal = val;
						throw true;
					}
				} else {
					fstVal = val;
				}
			}
		})
	} catch (e) {
		// nothing done here ...
		// This just means we've found the first and second number in
		// the argument list.
	}
	return fstVal % sndVal === 0;
};

(function () {

	console.log(isDivisible(6, 3));
	console.log(isDivisible(5, 3));
	console.log(isDivisible(100, 10));
	console.log(isDivisible(0, 3));

	console.log("Another test set ...");
	// Now let's test multiple arguments
	console.log(isDivisible(null, undefined, 10, "just testing", 2, []));
	console.log(isDivisible([], false, 13, undefined, 2));

})();




