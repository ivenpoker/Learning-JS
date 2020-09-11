// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Determines whether the current runtime environment is a browser.				 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 13, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isBrowser = () => ![typeof window, typeof document].includes('undefined');

(function () {

	console.log(" Is browser:", isBrowser());	// true if run in browser, else false
	console.log("Is node env:", !isBrowser());	// false if run in browser, else true

})();