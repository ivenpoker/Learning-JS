// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Performs right-to-left function composition.                                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 14, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

const runTests = () => {
    const add5 = (x) => x + 5;
    const multiply = (x, y) => x * y;
    const multiplyAndAdd5 = compose(add5, multiply);
    console.log(multiplyAndAdd5(5, 2));
};

runTests();