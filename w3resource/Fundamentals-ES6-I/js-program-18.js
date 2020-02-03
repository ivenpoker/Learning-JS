// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Remove specified elements from the left of a given array of elements.           #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 03, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const removeFromLeft = (arr = [], n = 1) => {
    return arr.slice(n);
};

const runTests = () => {
    console.log(removeFromLeft([1, 2, 3]));
    console.log(removeFromLeft([1, 2, 3], 1));
    console.log(removeFromLeft([1, 2, 3], 2));
    console.log(removeFromLeft([1, 2, 3], 4));
};

runTests();