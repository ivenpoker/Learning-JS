// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets an array of 'n' random integers in the specified range.                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 10, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomArray = (low = 0, high = 15, size = 10) =>
        Array(size).fill(0).map((val) => randomIntegerInRange(low, high));

const runTests = () => {
    console.log(getRandomArray(0, 10, 5));
    console.log(getRandomArray(5, 15, 4));
    console.log(getRandomArray(-5, 5, 5));
};

runTests();