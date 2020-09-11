// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Redirects to a specified URL.   										         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 18, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################


const redirect = (url, asLink = true) =>
	asLink ? (window.location.href = url) : window.location.replace(url);

(function () {

	redirect("https://google.com");

})();