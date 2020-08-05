// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Capitalizes the first letter in a string.										 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 05, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

const capitalizeFirstLetter = (str = "") => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

(function () {

	console.log(capitalizeFirstLetter("james"));
	console.log(capitalizeFirstLetter("peter"));
	console.log(capitalizeFirstLetter("king"));
	console.log(capitalizeFirstLetter("Happi"));

})();