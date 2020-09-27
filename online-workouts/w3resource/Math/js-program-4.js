
// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Program that generates a random number.				                        #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 24, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const generateARandomInteger = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

(function () {

	Array(10).fill(0).forEach((_, idx) => {
		console.log(`Random #${idx+1}:`, generateARandomInteger(1, 10));
	})

})();