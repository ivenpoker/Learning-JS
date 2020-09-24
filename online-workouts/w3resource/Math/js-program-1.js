// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Function converts a number from one base to another.	                        #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 24, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const baseConvert = (number, initialBase, changeBase) => {
	if ((initialBase && changeBase) < 2 || (initialBase && changeBase) > 36) {
		return "Base between 2 and 36";
	}
	return Number.parseInt(`${number}`, initialBase).toString(changeBase);
}

(function () {

	console.log(baseConvert("E164", 16, 8));
	console.log(baseConvert(1000, 2, 8));


})();
