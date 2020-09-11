// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Converts an integer to a suffix string, adding am or pm based on its value.     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 12, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const convertIntegerToSuffixString = (intVal = 0) =>
    intVal === 0 || intVal === 24
        ? 12  + ' am'
        : intVal === 12
            ? 12 + ' pm'
        : intVal < 12
            ? (intVal % 12) + ' am'
            : (intVal % 12) + ' pm';

const runTest = () => {
    console.log(convertIntegerToSuffixString(0));
    console.log(convertIntegerToSuffixString(11));
    console.log(convertIntegerToSuffixString(13));
    console.log(convertIntegerToSuffixString(25));
};

runTest();