// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Returns true if the provided predicate function returns true for all elements   #
// #                     in a collection, false otherwise.                                               #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 10, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const all = (arr, func = Boolean) => arr.every(func);

const runTests = () => {
    console.log(all([4, 2, 3], x => x > 1));
    console.log(all([4, 2, 3], x => x < 1));
    console.log(all([1, 2, 3]));
};

// Run test program
runTests();