// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Parses an HTTP Cookie header string and return an object of all cookie          #
// #			         name-value pairs.															     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: April 04, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const parseCookie = (cookieStr ) =>
	cookieStr.trim()
		.split(";")
		.map((val) => val.split('='))
		.reduce((acc, pair) => ({
			...acc,
			[decodeURIComponent(pair[0])]: decodeURIComponent(pair[1])
		}), {});

(function () {

	const sampleCookie = "foo=bar; equation=E%3Dmc%5E2";
	console.log("Parsed data:", parseCookie(sampleCookie));

})();