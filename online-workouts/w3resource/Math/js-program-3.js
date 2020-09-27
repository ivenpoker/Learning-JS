// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Converts a decimal number to binary, hexadecimal or octal number.              #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 27, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const convertDecimalToBinary = (decNum) => Number.parseInt(`${decNum}`, 10).toString(2);
const convertDecimalToHexadecimal = (decNum) => Number.parseInt(`${decNum}`, 10).toString(8);
const convertDecimalToOctal = (decNum) => Number.parseInt(`${decNum}`, 10).toString(6);

(function () {

	const numA = 12;
	const numB = 191;
	const numC = 87;

	console.log("DEC:", numA, "BIN:", convertDecimalToBinary(numA), "HEX:",
					convertDecimalToHexadecimal(numA), "OCT:", convertDecimalToOctal(numA));
	console.log("DEC:", numB, "BIN:", convertDecimalToBinary(numB), "HEX:",
					convertDecimalToHexadecimal(numB), "OCT:", convertDecimalToOctal(numB));
	console.log("DEC:", numC, "BIN:", convertDecimalToBinary(numC), "HEX:",
					convertDecimalToHexadecimal(numC), "OCT:", convertDecimalToOctal(numC));

})();