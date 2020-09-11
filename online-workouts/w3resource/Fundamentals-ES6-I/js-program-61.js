// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Casts the provided value as an array if it's not one.                           #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 13, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const castArray = (val) => Array.isArray(val) ? val : [val];

const runTests = () => {
    console.log(castArray('batman'));
    console.log(castArray([100]));
};

runTests();