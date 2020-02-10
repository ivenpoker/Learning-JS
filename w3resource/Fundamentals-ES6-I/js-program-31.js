// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds all elements in a given array except for the first one. Returns the whole #
// #                     if the array's length is 1.                                                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 10, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const getTail = (arr) => arr.length <= 1 ? arr : arr.slice(1);

const runTests = () => {
    console.log(getTail([1, 2, 3]));
    console.log(getTail([1]));
};

runTests();