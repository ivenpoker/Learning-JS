// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks if the browser tab of the page is focused.								 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 13, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isBrowserTabFocused = () => !document.hidden;

(function () {

	console.log("Is browser tab focused:", isBrowserTabFocused());

})();