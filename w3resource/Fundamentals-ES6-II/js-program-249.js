// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the current URL.													    	 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 05, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

const currentURL = () => window.location.href;

(function () {

	console.log("Current URL:", currentURL());

})();