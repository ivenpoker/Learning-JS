// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Returns true if the given value is a number, false otherwise.                   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 20, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const isNumber = (x) => !isNaN(Number.parseFloat(x)) && Number.isFinite(x) && Number(x) == x;

(() => {

    console.log(isNumber(12));
    console.log(isNumber(NaN));
    console.log(isNumber(-1289));
    console.log(isNumber('james'));
    console.log(isNumber('4.12'));
    console.log(isNumber(4.12));

})();