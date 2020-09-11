// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Find the longest string in an array of strings.			                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const findLongestCountryName = (countryNames = []) =>
	countryNames.reduce((acc, country) => acc.length < country.length ? country : acc, "");


(function () {

	console.log(findLongestCountryName(["Australia", "Germany", "United States of America"]));

})();