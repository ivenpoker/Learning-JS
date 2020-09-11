// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Combines the numbers of a given array into an array containing all combinations #          #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 04, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const powerset = (arr) => {
    return arr.reduce((acc, val) => arr.concat(arr.map(r => [val].concat(r))), [[]]);
};

const runTests = () => {
    console.log(powerset([1, 2]));
    console.log(powerset([1, 2, 3]));
    console.log(powerset([1, 2, 3, 4]));
};

// Run test program
runTests();
