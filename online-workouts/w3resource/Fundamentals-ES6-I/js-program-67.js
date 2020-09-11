// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Performs left-to-right function composition.                                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 14, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const composeRight = (...fns) =>
    fns.reduce((f, g) => (...args) => g(f(...args)));

const runTests = () => {
    const add = (x, y) => x + y;
    const square = (x) => x * x;
    const addAndSquare = composeRight(add, square);

    console.log(addAndSquare(1, 2));
    console.log(addAndSquare(3, 2));
};

runTests();