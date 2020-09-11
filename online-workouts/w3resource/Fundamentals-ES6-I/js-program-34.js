// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets a random integer in the specified range.                                   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 10, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const runTests = () => {
    console.log(randomIntegerInRange(0, 5));
    console.log(randomIntegerInRange(2, 5));
    console.log(randomIntegerInRange(5, -5));
    console.log(randomIntegerInRange(-2, -7));
};

runTests();