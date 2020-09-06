// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Generates a string ID (specified length) of random characters.                  #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 6, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const makeID = (mainStr, len) => {
	let newID = "";
	for (let i = 0; i < len; i++) {
		newID += mainStr.charAt(Math.floor(Math.random() * mainStr.length));
	}
	return newID;
}

(function () {

	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	console.log(makeID(alphabet, 20));
	console.log(makeID(alphabet, 10));
	console.log(makeID(alphabet, 100));

})();