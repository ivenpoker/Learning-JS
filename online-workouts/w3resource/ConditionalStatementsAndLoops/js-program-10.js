// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Prints a specific pattern to the console.				                        #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 24, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const printPattern = (maxRows) => {
	let mainStr = "";
	for (let i = 1; i <= maxRows; i++) {
		for (let j = 0; j < i; j++) {
			mainStr += "*";
		}
		mainStr += "\n";
	}
	console.log(mainStr);
}

(function () {

	printPattern(5);

})();