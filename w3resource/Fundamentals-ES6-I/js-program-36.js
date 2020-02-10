// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates a function that invokes each provided function with the arguments it    #
// #                     receives and returns the results.                                               #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 10, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const over = (...fns) => (...args) => fns.map((fn) => fn.apply(null, args));

const runTests = () => {
    const minMax = over(Math.min, Math.max);
    console.log(minMax(1, 2, 3, 4, 5));
    console.log(minMax(1, 2, 5, 4, 3));
    console.log(minMax(1, 2, 5, -4, 3));
};

runTests();