// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets a random number in a specified range.                                      #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 10, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

const runTests = () => {
    console.log(randomNumberInRange(2, 10));
    console.log(randomNumberInRange(1, 5));
    console.log(randomNumberInRange(-5, -2));
    console.log(randomNumberInRange(0, 1));
};

runTests();