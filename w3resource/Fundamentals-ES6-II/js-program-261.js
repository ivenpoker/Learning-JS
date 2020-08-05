// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Return true if the bottom of the page is visible, false otherwise.  			 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 05, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

const bottomVisible = () =>
	document.documentElement.clientHeight + window.scrollY >=
	(document.documentElement.scrollHeight || document.documentElement.clientHeight);

(function () {

	console.log(bottomVisible());

})();