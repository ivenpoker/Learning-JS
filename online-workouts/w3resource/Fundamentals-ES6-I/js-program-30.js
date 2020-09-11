// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Filters out the element(s) of a given array, that have one of the specified     #
// #                     values.                                                                         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 10, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const doFiltering = (data, ...args) => data.filter((val) => !args.includes(val));

const runTests = () => {
    console.log(doFiltering([2, 1, 2, 3], 1, 2));
    console.log(doFiltering([2, 1, 2, 3], 3));
};

runTests();