// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Decodes a string of data which has been encoded using base-64 encoding.		 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 05, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################


const atob = (str) => new Buffer(str, "base64").toString("binary");

(function () {

	console.log(atob("Zm9vYmFy"));

})();

