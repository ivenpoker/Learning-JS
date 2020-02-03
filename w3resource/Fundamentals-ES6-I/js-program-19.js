// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Removes specified elements from the right of a given array of elements.         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 03, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const removeFromRight = (arr = [], n = -1) => {
    return arr.slice(n)
};

const runTests = () => {
    console.log(removeFromRight([1, 2, 3]));
    console.log(removeFromRight([1, 2, 3], -1));
    console.log(removeFromRight([1, 2, 3], -2));
    console.log(removeFromRight([1, 2, 3], -4));
};

runTests();