// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets an array of lines from the specified file.			     		         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 18, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const fs = require('fs');

const readFileLines = (filename) =>
	fs.readFileSync(filename)
		.toString('UTF8')
		.split('\n');

(function () {

	const arr = readFileLines('./js-program-159.js');
	console.log('Data:\n', arr);

})();