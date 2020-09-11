// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Curries a function.                                                             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 12, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const curry = (fn, arity = fn.length, ...args) =>
    arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

const runTest = () => {
    console.log(curry(Math.pow)(2)(8))
    console.log(curry(Math.min, 3)(10)(50)(2))
};

runTest();