// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Converts a value to safe integer.                                               #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 21, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const toSafeInteger = (num) =>
    Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER)));

(() => {

    console.log(toSafeInteger('3.2'));
    console.log(toSafeInteger(Infinity));

})();