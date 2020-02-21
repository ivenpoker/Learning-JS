// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Converts a floating-point arithmetic to the Decimal mark form and It will make  #
// #                     a comma separated string from a number.                                         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 21, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const toDecimalMark = (num) => num.toLocaleString('en-US');

(() => {

    console.log(toDecimalMark(12305030388.9087));
    console.log(toDecimalMark(123.2264));
    console.log(toDecimalMark(-100.10));

})();