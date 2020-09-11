// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets every nth element in a given array.                                        #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 03, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const getAllNthElements = (arr = [], n = 1) => {
    return arr.filter((val, i) => i % n === n-1);
};

const runTests = () => {
    console.log(getAllNthElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
    console.log(getAllNthElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
    console.log(getAllNthElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
    console.log(getAllNthElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
};

runTests();