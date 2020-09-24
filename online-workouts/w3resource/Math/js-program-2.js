// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Converts a binary number to decimal.					                        #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 24, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const convertBinaryToDecimal = (binaryNum) => Number.parseInt(`${binaryNum}`, 2);

(function () {

	console.log(convertBinaryToDecimal("110011"));
	console.log(convertBinaryToDecimal("100"));

})();