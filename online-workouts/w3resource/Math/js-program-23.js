// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Rounds a number to a specified number of digits and strip zeroes (if any).     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: November 2, 2020.                                                              #
// #                                                                                                    #
// ######################################################################################################

const roundNumAndStripZeroes = (someNum, places) => Number(someNum).toFixed(places);

(function () {

    console.log(roundNumAndStripZeroes(-4.555555, 4));
    console.log(roundNumAndStripZeroes(5.00010000, 4));

})();