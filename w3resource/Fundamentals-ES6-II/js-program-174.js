// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Converts a NodeList to an array.		     								     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: April 04, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const nodeListToArray = (nodeList) => Array.prototype.slice.call(nodeList);

(function () {

	console.log(nodeListToArray(document.childNodes));

})();