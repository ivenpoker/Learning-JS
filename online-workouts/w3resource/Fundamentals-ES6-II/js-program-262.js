// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates a base-64 encoded ASCII string from a String object in which each		 #
// #					 character in the string is treated as a byte of binary data.				     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 05, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

const btoa = (str) => new Buffer(str, "binary").toString("base64");

(function () {

	console.log(btoa("foobar"));

})();

