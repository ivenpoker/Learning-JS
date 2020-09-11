// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Returns true if the parent element contains the child element, false otherwise. #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 26, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const elementContains = (parent, child) => parent !== child && parent.contains(child);

(function () {

	// NB: Run this code but in the browser.

	console.log(elementContains(document.querySelector('head'), document.querySelector('title')));
	console.log(elementContains(document.querySelector('body'), document.querySelector('body')));

})();