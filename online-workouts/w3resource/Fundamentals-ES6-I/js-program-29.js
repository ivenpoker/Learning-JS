// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Converts a value to a safe integer.                                             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 10, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const toSafeInteger = (num) => Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));

const runTests = () => {
    console.log(toSafeInteger('5.2'));
    console.log(toSafeInteger('5.52'));
    console.log(toSafeInteger(Infinity));
};

runTests();