// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Determines if a given string is an absolute URL, false otherwise.				 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 21, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isAbsoluteURL = (str) => /^[a-z][a-z0-9+.-]*:/.test(str);

(function () {

	console.log(isAbsoluteURL("https://google.com/"));
	console.log(isAbsoluteURL("ftp://www.myserver.net"));
	console.log(isAbsoluteURL("/foo/bar"));

})();

